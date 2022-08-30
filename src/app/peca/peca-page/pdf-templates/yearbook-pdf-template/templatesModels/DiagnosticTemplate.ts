import { Template, TemplateOptions } from './Template';

interface Chart {
  chartId: string;
  title: string;
  labels: string[];
  datasets: ChartDataset[];
}

interface ChartDataset {
  backgroundColor: string | string[];
  data: string[] | number[];
}

//

interface DiagnosticPageData {
  diagnosticText: string;
  diagnosticAnalysis: string;
  chart: Chart;
  lapseName: string;
}

// Template Model
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

// Page Data Model
export class DiagnosticPageDataGroup {
  private pages: DiagnosticPageData[] = [];

  constructor(
    private graphics,
    private lapses: any[],
    private schoolYear: string,
    private diagnosticGraphicData,
  ) {
    this.buildDataPages();
  }

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
  ): Chart {
    const chart: Chart = {
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
    let labels = lapseGraphic[diagKey].labels;
    let chartTitle = '';

    // lapseIdx === 2
    if (isThirdLapse) {
      const chartTitles = {
        diagnosticReading: 'Indice promedio de lectura general',
        diagnosticMath: 'Indice promedio de multiplicación general',
        diagnosticLogic: 'Indice promedio de lógica matemática general',
      };

      chartTitle = chartTitles[diagKey];
      labels = ['D. Inicial (PPM)', 'D. Revisión (PPM)', 'D. Final (PPM)'];

      const { operationsPerMinIndex, multiplicationsPerMinIndex, wordsPerMinIndex } = diagnostics;
      lapseGraphic.diagnosticReading = this.formatFilterDiagnosticValueByYear(wordsPerMinIndex);
      lapseGraphic.diagnosticMath = this.formatFilterDiagnosticValueByYear(
        multiplicationsPerMinIndex,
      );
      lapseGraphic.diagnosticLogic = this.formatFilterDiagnosticValueByYear(operationsPerMinIndex);
    }

    const chartId = `${lapseName}-${diagKey}-graphic`;

    return this.chartDefault(
      chartId,
      labels,
      lapseGraphic[diagKey].values,
      chartTitle,
      isThirdLapse,
    );
  }

  buildDataPages() {
    const pages: DiagnosticPageData[] = [];
    this.lapses.map((lapse, lapseIdx) => {
      const { lapseId, lapseName } = lapse;
      const isThirdLapse = lapseIdx === 2;
      const diagnosticKeys = ['diagnosticReading', 'diagnosticMath', 'diagnosticLogic'];

      const page = diagnosticKeys.map((diagKey, diagIdx) => {
        const { diagnosticText, diagnosticAnalysis } = lapse[diagKey];
        const chart = this.getChart(lapseId, lapseName, diagKey, isThirdLapse);

        return {
          diagnosticText,
          diagnosticAnalysis,
          chart,
          lapseName: diagIdx > 0 ? undefined : lapseName,
        };
      });

      pages.push(...page);
    });

    this.pages = pages;
  }

  getPages(): DiagnosticPageData[] {
    return this.pages;
  }

  getPagesWithDiagnosticTemplate() {
    return this.pages.map((page) => {
      const { diagnosticText, diagnosticAnalysis, lapseName, chart } = page;
      return new DiagnosticTemplate(diagnosticText, diagnosticAnalysis, chart, lapseName);
    });
  }
}
