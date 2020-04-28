import { Component } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Label, Color } from "ng2-charts";
import * as pluginAnnotations from "chartjs-plugin-annotation";
import { BarChartComponent } from "../chart-components";

@Component({
  selector: "bar-chart",
  template: `
    <canvas
      baseChart
      [datasets]="barChartData"
      [labels]="barChartLabels"
      [options]="barChartOptions"
      [colors]="barChartColors"
      [legend]="barChartLegend"
      [chartType]="barChartType"
      [plugins]="barChartPlugins"
    >
    </canvas>
  `,
  styleUrls: ["./chartjs-theme.scss"],
})
export class ChartJSBarChart extends BarChartComponent {
  barChartData: ChartDataSets[];
  barChartLabels: Label[];
  barChartOptions: ChartOptions & { annotation?: any };
  barChartColors: Color[];
  barChartLegend = true;
  barChartType: string;
  barChartPlugins = [pluginAnnotations];

  configChart(): void {
    this.barChartType = "bar";
    const seriesArray = this.data.map((element) => <string>element.serie);
    const seriesSet = new Set(seriesArray); // To remove duplicated values
    const series = [...seriesSet];

    this.barChartData = series.map((serie) => {
      const dataSerie = this.data.filter((element) =>
        element.serie == serie ? true : false
      );
      const data = dataSerie.map((element) => <number>element.value);

      return {
        data: data,
        label: serie,
      };
    });
    const labelsArray = this.data.map((element) => <string>element.label);
    const labelsSet = new Set(labelsArray); // This remove duplicates labels
    this.barChartLabels = [...labelsSet];
    this.barChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        line: {
          borderWidth: 4,
          fill: false,
        },
        point: {},
      },
      scales: {
        type: "category",
        display: true,
      },
      legend: {
        labels: {
          fontColor: "#FFF",
        },
      },
    };
    this.barChartColors = this.props.colors.map((color) => {
      return {
        backgroundColor: color || "#FFF",
        borderColor: color || "#FFF",
      };
    });
  }

  configMarkers(): void {
    this.barChartOptions.elements.point = {
      radius: this.markers.show ? 5 : 0,
    };
    this.barChartColors = this.barChartColors.map((chartColors) => {
      return {
        ...chartColors,
        pointBackgroundColor: this.markers.color,
        pointBorderColor: this.markers.color,
        pointHoverBackgroundColor: this.markers.color,
        pointHoverBorderColor: this.markers.color,
      };
    });
  }

  configXAxis(): void {
    this.barChartOptions.scales.xAxes = [
      {
        display: true,
        offset: true,
        gridLines: {
          display: true,
          drawOnChartArea: this.grid.show,
          drawTicks: this.xaxis.ticks,
          color: this.xaxis.color || "#FFF",
          lineWidth: 3,
        },
        ticks: {
          fontColor: this.xaxis.color || "#FFF",
          padding: 10,
        },
      },
    ];
  }

  configYAxis(): void {
    this.barChartOptions.scales.yAxes = [
      {
        position: "left",
        offset: true,
        gridLines: {
          display: true,
          drawOnChartArea: this.grid.show || false,
          drawTicks: this.yaxis.ticks || false,
          color: this.yaxis.color || "#FFF",
          lineWidth: 3,
        },
        ticks: {
          display: this.yaxis.ticks || false,
          min: 0,
          ...this.calculateNumericAxisRange("y", 5),
          fontColor: this.yaxis.color || "#FFF",
          padding: 20,
        },
      },
    ];
  }

  configGrid(): void {
    console.log("Method not implemented");
  }

  configAsymptotes(): void {
    const annotations = this.asymptotes.map((asymtote) => {
      const { axis, value, color, title } = asymtote;
      return {
        type: "line",
        mode: axis == "y" ? "horizontal" : "vertical",
        scaleID: "y-axis-0",
        value: value,
        borderColor: color || "#FFF",
        borderWidth: 2,
        borderDash: [12, 12],
        borderDashOffset: 12,
        label: {
          backgroundColor: "rgba(0,0,0,0)",
          content: title || "",
          enabled: title !== "",
          fontColor: color || "#FFF",
          position: "right",
          yAdjust: -10,
        },
      };
    });
    this.barChartOptions.annotation = { annotations };
    this.barChartOptions.scales.yAxes = this.barChartOptions.scales.yAxes.map(
      (yaxis) => {
        return {
          ...yaxis,
          ticks: {
            ...yaxis.ticks,
            ...this.calculateNumericAxisRange("y", 5),
          },
        };
      }
    );
  }
}
