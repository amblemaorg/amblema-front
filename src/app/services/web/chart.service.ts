import { Injectable } from "@angular/core";

const chartDefaultProps = {
  props: {
    colors: ["#81B03E", "#FFF", "#163b47"],
  },
  markers: {
    show: true,
    color: "#81B03E",
  },
  xaxis: {},
  yaxis: {
    labels: false,
  },
  grid: {},
  asymptoteDefaultProps: {
    axis: "y",
    color: "#FFF",
  },
};

@Injectable({
  providedIn: "root",
})
export class ChartService {
  constructor() {}

  formatChartDataToDrawComponent(chartData) {
    return chartData.map((chart) => {
      const asymptoteProps = chartDefaultProps.asymptoteDefaultProps;
      const asymptotes = chart.goals.map((goal) => {
        return { ...asymptoteProps, value: goal.value, title: goal.label };
      });
      return { ...chart, ...chartDefaultProps, asymptotes };
    });
  }
}
