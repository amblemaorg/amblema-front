import {
  ComponentFactoryResolver,
  ComponentFactory,
  ViewContainerRef,
  ComponentRef,
} from "@angular/core";
import {
  ChartComponent,
  LineChartComponent,
  PieChartComponent,
  BarChartComponent,
} from "./chart-components";
import { ChartJSLineChart as LineChart } from "./chartjs-adapters/chartjs-line-chart";
import { ChartJSBarChart as BarChart } from "./chartjs-adapters/chartjs-bar-chart";

export class ChartComponentFactory {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public createNewChartFactory(
    chartOptions: any
  ): ComponentFactory<ChartComponent> {
    switch (chartOptions.type) {
      case "line":
        return this.componentFactoryResolver.resolveComponentFactory(LineChart);
      case "bar":
        return this.componentFactoryResolver.resolveComponentFactory(BarChart);
      default:
        return this.componentFactoryResolver.resolveComponentFactory(LineChart);
    }
  }

  public createChartComponent(
    containerRef: ViewContainerRef,
    chartOptions: ChartComponent
  ): ChartComponent {
    if (containerRef && chartOptions && chartOptions.type) {
      containerRef.clear();
      const concreteChartFactory = this.createNewChartFactory(chartOptions);
      const chartComponent = containerRef.createComponent(concreteChartFactory);
      this.setChartComponentAttributes(chartComponent, chartOptions);

      switch (chartOptions.type) {
        case "line":
          const lineChartInstance = <LineChartComponent>chartComponent.instance;
          const lineChartOptions = <LineChartComponent>chartOptions;
          lineChartInstance.asymptotes = lineChartOptions.asymptotes;
          lineChartInstance.configAsymptotes();
          return lineChartInstance;
        case "bar":
          const barChartInstance = <BarChartComponent>chartComponent.instance;
          const barChartOptions = <BarChartComponent>chartOptions;
          barChartInstance.asymptotes = barChartOptions.asymptotes;
          barChartInstance.configAsymptotes();
          return barChartInstance;
        default:
          return <ChartComponent>chartComponent.instance;
      }
    }
    return null;
  }

  public setChartComponentAttributes(
    chartComponentRef: ComponentRef<ChartComponent>,
    chartOptions: ChartComponent
  ): ComponentRef<ChartComponent> {
    const chartComponentInstance = <ChartComponent>chartComponentRef.instance;
    chartComponentInstance.title = chartOptions.title;
    chartComponentInstance.data = chartOptions.data;
    chartComponentInstance.props = chartOptions.props;
    chartComponentInstance.markers = chartOptions.markers;
    chartComponentInstance.xaxis = chartOptions.xaxis;
    chartComponentInstance.yaxis = chartOptions.yaxis;
    chartComponentInstance.grid = chartOptions.grid;
    chartComponentInstance.configChart();
    chartComponentInstance.configMarkers();
    chartComponentInstance.configXAxis();
    chartComponentInstance.configYAxis();
    chartComponentInstance.configGrid();
    return chartComponentRef;
  }
}
