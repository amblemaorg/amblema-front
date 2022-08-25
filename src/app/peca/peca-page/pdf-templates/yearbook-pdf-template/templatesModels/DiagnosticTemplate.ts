import { Template, TemplateOptions } from './Template';

export class DiagnosticTemplate extends Template {
  isImgChart = false;
  chart: string | any;

  constructor(
    public title: string,
    public description: string,
    chart: string | chartValue[],
    public subtitle?: string,
    templateOptions?: TemplateOptions,
  ) {
    super('diagnosticTemplate', templateOptions);

    this.buildChart(chart);
  }

  buildChart(chartValues: string | chartValue[]) {
    if (typeof chartValues === 'string') {
      this.isImgChart = true;
      this.chart = chartValues;
      return;
    }

    const labels = chartValues.map((chartValue) => {
      return `${chartValue.serie} - ${chartValue.label}`;
    });

    const items = chartValues.map((chartValue) => {
      return chartValue.value;
    });

    this.chart = {
      fitContainer: true,
      hideChart: false,
      chartId: `${this.title}-graphic`,
      sendGraphicToPdf: this.title,
      lapseN: 1321,
      //legendName: yearBookData.school.name,
      legendName: this.title,
      labels,
      items,
    };
  }
}

interface chartValue {
  createdAt: string;
  label: string;
  serie: string;
  value: number;
}
