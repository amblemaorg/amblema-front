import { Template, TemplateOptions } from './Template';

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

export class DiagnosticsPageData {
  constructor(
    private graphics,
    private lapses: any[],
    private schoolYear: string,
    private diagnosticGraphicData,
  ) {}

  private formatFilterDiagnosticValueByYear(diagValues: any[]) {
    diagValues = diagValues.filter((diagValue) => diagValue.label == this.schoolYear);

    if (!diagValues) {
      return {
        labels: [],
        values: [],
      };
    }

    return {
      labels: diagValues.map((diagValue) => diagValue.serie),
      values: diagValues.map((diagValue) => diagValue.value),
    };
  }

  private chartDefault(
    chartId: string,
    labels: string[],
    data: number[],
    legend = '',
    withBgColorArray = false,
  ) {
    const chart: any = {
      chartId,
      title: legend,
      labels: labels,
      datasets: [
        {
          backgroundColor: '#81B03E',
          data: data,
        },
      ],
    };

    if (withBgColorArray) {
      chart.datasets[0].backgroundColor = ['#4472c4', '#ed7d31', '#a5a5a5'];
    }

    return chart;
  }

  private getChart(
    lapseId: string,
    lapseName: string,
    diagKey: string,
    isThirdLapse = false,
    graphics = this.graphics,
  ) {
    const { diagnostics } = this.diagnosticGraphicData;

    const lapseGraphic = graphics[lapseId];

    // lapseIdx === 2
    if (isThirdLapse) {
      const { operationsPerMinIndex, multiplicationsPerMinIndex, wordsPerMinIndex } = diagnostics;
      lapseGraphic.diagnosticReading = this.formatFilterDiagnosticValueByYear(wordsPerMinIndex);
      lapseGraphic.diagnosticMath = this.formatFilterDiagnosticValueByYear(
        multiplicationsPerMinIndex,
      );
      lapseGraphic.diagnosticLogic = this.formatFilterDiagnosticValueByYear(operationsPerMinIndex);
    }

    const labels = ['D. Inicial (PPM)', 'D. Revisión (PPM)', 'D. Final (PPM)'];

    const chartTitles = {
      diagnosticReading: 'Indice promedio de lectura general',
      diagnosticMath: 'Indice promedio de multiplicación general',
      diagnosticLogic: 'Indice promedio de lógica matemática general',
    };

    const chartTitle = isThirdLapse ? chartTitles[diagKey] : '';

    const chartId = `${lapseName}-${chartTitles}-graphic`;

    return this.chartDefault(
      chartId,
      labels,
      lapseGraphic[diagKey].values,
      chartTitle,
      isThirdLapse,
    );
  }

  getPageData() {
    const pages = [];

    this.lapses.forEach((lapse, lapseIdx) => {
      const { lapseId, lapseName } = lapse;
      const isThirdLapse = lapseIdx === 2;
      const diagnosticKeys = ['diagnosticReading', 'diagnosticMath', 'diagnosticLogic'];

      pages = diagnosticKeys.map((diagKey, diagIdx) => {
        const { diagnosticText, diagnosticAnalysis } = lapse[diagKey];
        const chart = this.getChart(lapseId, lapseName, diagKey, isThirdLapse);

        return {
          diagnosticText,
          diagnosticAnalysis,
          chart,
          lapseName: diagIdx > 0 ? undefined : lapseName,
        };
      });
    });
  }
  getPages() {
    const pages: any[] = this.getPageData();

    pages;
  }
}
