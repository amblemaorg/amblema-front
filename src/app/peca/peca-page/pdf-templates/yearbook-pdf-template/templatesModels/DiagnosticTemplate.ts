import { Template, TemplateOptions } from './Template';

export class DiagnosticTemplate extends Template {
  isImgChart = false;
  chart;

  constructor(
    public title: string,
    public description: string,
    chart: chartValues,
    chartId: string,
    public subtitle?: string,
    templateOptions?: TemplateOptions,
  ) {
    super('diagnosticTemplate', templateOptions);

    this.buildChart(chart, chartId);
  }

  buildChart(chartValues: chartValues, chartId) {
    const { labels, values: items } = chartValues;

    // console.log('buildChart', chartValues);

    this.chart = {
      fitContainer: true,
      hideChart: false,
      chartId,
      sendGraphicToPdf: this.title,
      lapseN: 1321,
      //legendName: yearBookData.school.name,
      legendName: this.title,
      labels,
      items,
      // datasets: {

      // }
    };
  }
}

interface chartValues {
  labels: string;
  values: number;
}
