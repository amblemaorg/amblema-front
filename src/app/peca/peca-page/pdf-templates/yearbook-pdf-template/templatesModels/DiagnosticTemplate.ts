import { Template, TemplateOptions } from './Template';

export class DiagnosticTemplate extends Template {
  isImgChart = false;
  chart;

  constructor(
    public title: string,
    public description: string,
    chart: Chart,
    public subtitle?: string,
    templateOptions?: TemplateOptions,
  ) {
    super('diagnosticTemplate', templateOptions);

    this.buildChart(chart);
  }

  buildChart(chart: Chart) {
    const fontColor = '#111';
    const options = {
      maintainAspectRatio: false,
      title: {
        text: chart.title,
        display: true,
        fontSize: 13,
        fontStyle: 'bold',
        fontColor: '#111111',
      },
      scales: {
        yAxes: [
          {
            ticks: {
              fontColor,
              beginAtZero: true,
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              fontColor,
              beginAtZero: true,
            },
          },
        ],
      },
      legend: {
        display: false,
      },
      plugins: {
        datalabels: {
          color: '#ffffff',
          font: {
            weight: 'bold',
          },
        },
      },
    };
    this.chart = {
      fitContainer: true,
      hideChart: false,
      lapseN: 1321,

      sendGraphicToPdf: this.title,
      chartId: chart.chartId,
      labels: chart.labels,
      datasets: chart.datasets,
      options,
    };
  }
}

interface Chart {
  chartId: string;
  title: string;
  labels: string[];
  datasets: any[];
}

interface ChartDataset {
  label?: string; // legend name
  data: number[]; // value items
  backgroundColor: string[]; // same count of colors of graphic figure
  fill: boolean; // fill or not graphic figure
}
