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
  table: string[][];
  lapseName: string;
}

// Template Model
export class DiagnosticTemplate extends Template {
  isImgChart = false;
  chart;
  table: string[][] = [];

  constructor(
    public title: string,
    public description: string,
    chart: Chart,
    table: string[][] = [],
    public subtitle?: string,
    templateOptions?: TemplateOptions,
  ) {
    super('diagnosticTemplate', templateOptions);

    this.buildChart(chart);
    this.buildTable(table);
  }

  buildTable(table: string[][]) {
    this.table = table;
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

  // Diag = Diagnostic
  private avgInitialDiagBySection(grade: string, tableData: string[][]) {
    let sectionTableData: any[] = tableData.filter((td) => td[0] === grade);
    sectionTableData = sectionTableData.map((sectionTbData) => parseFloat(sectionTbData[2]));
    // console.log('avgInitialDiagBySection', { tableData });
    const sum = sectionTableData.reduce((prev, current) => {
      // console.log(prev);

      return prev + current;
    });

    const result = sectionTableData.length > 0 ? sum / sectionTableData.length : 0.0;

    // console.log('avgInitialDiagBySection', { sectionTableData });
    // console.log('avgInitialDiagBySection', { sum });

    return result.toString();
  }

  private getTable(tableData: string[][] = []) {
    const header = [
      ['Resultados por grado'],
      // ['grado', 'D. Inicial (PPM)', 'D. Final (PPM)', 'Meta', 'Índice P. Final'],
      ['grado', 'sección', 'D. Inicial (PPM)', 'Meta', 'Índice P. Final'],
    ];

    tableData = tableData.slice(1, tableData.length);
    tableData = tableData.map((td) => {
      /**
       * [0]: grade
       * [1]: section
       * [2]: D. initial -> result
       * [3]: Meta
       * [4]: Final average
       */
      td[2] = this.avgInitialDiagBySection(td[0], tableData);
      td[0] = td[0].replace(/grado/gi, '');
      td[4] = td[3]; // Average
      td[3] = '0.000'; // Meta
      return td;
    });
    // console.log('getTable', tableData);

    return [...header, ...tableData];
  }

  buildDataPages() {
    const pages: DiagnosticPageData[] = [];
    this.lapses.map((lapse, lapseIdx) => {
      const { lapseId, lapseName } = lapse;
      const isThirdLapse = lapseIdx === 2;
      const diagnosticKeys = ['diagnosticReading', 'diagnosticMath', 'diagnosticLogic'];

      const page = diagnosticKeys.map((diagKey, diagIdx) => {
        const { diagnosticText, diagnosticAnalysis, diagnosticTable } = lapse[diagKey];
        const chart = this.getChart(lapseId, lapseName, diagKey, isThirdLapse);
        const table = this.getTable(diagnosticTable);

        return {
          diagnosticText,
          diagnosticAnalysis,
          chart,
          table,
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
      const { diagnosticText, diagnosticAnalysis, lapseName, chart, table } = page;
      return new DiagnosticTemplate(diagnosticText, diagnosticAnalysis, chart, table, lapseName);
    });
  }
}
