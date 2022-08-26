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
    // console.log('buildChart - ' + this.title, chart);
    this.chart = {
      fitContainer: true,
      hideChart: false,
      lapseN: 1321,

      sendGraphicToPdf: this.title,
      chartId: chart.chartId,
      labels: chart.labels,
      datasets: chart.datasets,
    };
    console.log(this.title);

    console.log('this.chart', this.chart);
  }
}

interface Chart {
  chartId: string;
  labels: string[];
  datasets: any[];
}

interface ChartDataset {
  label: string; // legend name
  data: number[]; // value items
  backgroundColor: string[]; // same count of colors of graphic figure
  fill: boolean; // fill or not graphic figure
}
