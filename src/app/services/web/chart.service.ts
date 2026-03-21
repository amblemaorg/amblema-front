import { Injectable } from "@angular/core";

const chartDefaultProps = {
  props: {
    colors: ["#81B03E", "#FFF", "#163b47", "#f39c12", "#e74c3c", "#3498db"],
  },
  markers: {
    show: true,
    color: "#81B03E",
  },
  xaxis: {},
  yaxis: {
    labels: false,
    edgeSpace: 0,
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
      const goals = chart.goals ? chart.goals : [];
      const asymptotes = goals.map((goal) => {
        return { ...asymptoteProps, value: goal.value, title: goal.label };
      });
      return { ...chartDefaultProps, ...chart, asymptotes };
    });
  }
}
