import { ComponentFactoryResolver, ComponentFactory, ViewContainerRef, ComponentRef } from "@angular/core";
import { ChartComponent, LineChartComponent, PieChartComponent } from './chart-components';
import { ChartJSLineChart } from './chartjs-adapters';

export class ChartComponentFactory {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public createNewChartFactory(chartOptions: any): ComponentFactory<ChartComponent> {
    switch (chartOptions.type) {
      case 'line':
        return this.componentFactoryResolver.resolveComponentFactory(ChartJSLineChart);
      case 'pie':
        return this.componentFactoryResolver.resolveComponentFactory(ChartJSLineChart);
      default:
        return this.componentFactoryResolver.resolveComponentFactory(ChartJSLineChart);
    }
  }

  public createChartComponent(
    containerRef: ViewContainerRef,
    chartOptions: ChartComponent
  ): ChartComponent {
    containerRef.clear();
    const concreteChartFactory = this.createNewChartFactory(chartOptions);
    const chartComponent = containerRef.createComponent(concreteChartFactory);
    switch (chartOptions.type) {
      case 'line':
        const lineChartComponent = this.setLineChartComponentAttributes(chartComponent, chartOptions);
        return lineChartComponent.instance;
      case 'pie':
        return (<PieChartComponent>chartComponent.instance);
      default:
        return (<ChartComponent>chartComponent.instance);
    }
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
    chartComponentInstance.grid = chartOptions.grid
    chartComponentInstance.configChart();
    chartComponentInstance.configMarkers();
    chartComponentInstance.configXAxis();
    chartComponentInstance.configYAxis();
    chartComponentInstance.configGrid();
    return chartComponentRef;
  }

  public setLineChartComponentAttributes(
    chartComponentRef: ComponentRef<ChartComponent>,
    chartOptions: ChartComponent
  ): ComponentRef<LineChartComponent> {
    const lineChartComponentRef = <ComponentRef<LineChartComponent>>this.setChartComponentAttributes(chartComponentRef, chartOptions);
    const lineChartOptions = <LineChartComponent>chartOptions;
    const lineChartComponentInstance = lineChartComponentRef.instance;
    lineChartComponentInstance.asymptotes = lineChartOptions.asymptotes;
    lineChartComponentInstance.configAsymptotes();
    return lineChartComponentRef;
  }
}
