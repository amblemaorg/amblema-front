import { Component } from "@angular/core";
import { LineChartComponent } from "../chart-components";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Label, Color } from "ng2-charts";
import * as pluginAnnotations from "chartjs-plugin-annotation";

@Component({
  selector: "line-chart",
  template: `
    <canvas
      baseChart
      [datasets]="lineChartData"
      [labels]="lineChartLabels"
      [options]="lineChartOptions"
      [colors]="lineChartColors"
      [legend]="lineChartLegend"
      [chartType]="lineChartType"
      [plugins]="lineChartPlugins"
    >
    </canvas>
  `,
  styleUrls: ["./chartjs-theme.scss"],
})
export class ChartJSLineChart extends LineChartComponent {
  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];
  lineChartOptions: ChartOptions & { annotation?: any };
  lineChartColors: Color[];
  lineChartLegend = true;
  lineChartType: string;
  lineChartPlugins = [pluginAnnotations];

  configChart(): void {
    this.lineChartType = "line";
    this.lineChartData = [
      {
        label: this.title,
        data: this.data.map((element) => <number>element.value),
      },
    ];
    this.lineChartLabels = this.data.map((element) => <string>element.label);
    this.lineChartOptions = {
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
    this.lineChartColors = this.props.colors.map((color) => {
      return {
        backgroundColor: color || "#FFF",
        borderColor: color || "#FFF",
      };
    });
  }

  configMarkers(): void {
    this.lineChartOptions.elements.point = {
      radius: this.markers.show ? 5 : 0,
    };
    this.lineChartColors = this.lineChartColors.map((chartColors) => {
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
    this.lineChartOptions.scales.xAxes = [
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
    this.lineChartOptions.scales.yAxes = [
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
          ...this.calculateNumericAxisRange("y", this.yaxis.edgeSpace),
          fontColor: this.yaxis.color || "#FFF",
          padding: 20,
        },
      },
    ];
  }

  configGrid(): void {
    // console.log("Method not implemented");
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
    this.lineChartOptions.annotation = { annotations };
    this.lineChartOptions.scales.yAxes = this.lineChartOptions.scales.yAxes.map(
      (yaxis) => {
        return {
          ...yaxis,
          ticks: {
            ...yaxis.ticks,
            ...this.calculateNumericAxisRange("y", this.yaxis.edgeSpace),
          },
        };
      }
    );
  }
}
