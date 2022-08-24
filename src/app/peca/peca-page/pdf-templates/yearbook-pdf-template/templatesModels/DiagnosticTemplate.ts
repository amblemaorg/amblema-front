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

  buildChart(chartValue) {
    if (typeof chartValue === 'string') {
      this.isImgChart = true;
      this.chart = chartValue;
      return;
    }

    // console.log(chartValue);

    const charts = [
      {
        title: this.title,
        id: '',
        type: 'bar',
        legend: {
          labels: {
            fontColor: '#000000',
          },
        },
        data: chartValue,
        goals: [
          {
            label: 'Valor esperado',
            value: 1,
          },
        ],
        props: {
          colors: ['#81B03E', '#00a9c4', '#163b47'],
        },
        markers: {
          show: true,
          color: '#81B03E',
        },
        xaxis: {
          color: '#000000',
        },
        yaxis: {
          labels: true,
          edgeSpace: 0,
          color: '#000000',
          beginAtZero: true,
        },
        grid: {},
        asymptoteDefaultProps: {
          axis: 'y',
          color: '#000000',
        },
        asymptotes: [
          {
            axis: 'y',
            color: '#000000',
            value: 1,
            title: 'Valor esperado',
          },
        ],
      },
    ];

    console.log('buildChart', charts);

    this.chart = {
      direction: 'column',
      charts,
    };
  }
}

interface chartValue {
  createdAt: string;
  label: string;
  serie: string;
  value: number;
}
