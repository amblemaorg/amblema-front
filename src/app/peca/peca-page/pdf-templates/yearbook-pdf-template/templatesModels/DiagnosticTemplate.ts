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
    private diagnosticGoalTableData,
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

  /**
   * Diag = Diagnostic
   * Purpose: Using just items of same grade, return average summing each columns on array index position passed by arg
   *
   * */
  private avgColumnValuesBySection(
    grade: string,
    tableData: string[][],
    columnIdxToSum: number,
    toFixedCount = 1,
  ) {
    // td[0] === grade column
    let columnTableData: any[] = tableData.filter((td) => td[0] === grade);

    columnTableData = columnTableData.map((columnTbData) => {
      return parseFloat(columnTbData[columnIdxToSum]);
    });

    const sum = columnTableData.reduce((prev, current) => {
      return prev + current;
    });

    const result = columnTableData.length > 0 ? sum / columnTableData.length : 0.0;

    return result.toFixed(toFixedCount).toString();
  }

  private getDiagGoalTableData(grade: string) {
    // Maybe future instability if exist way to modify grade's name
    const gradeRespKeyMappedWithGradeDiag = {
      '1er Grado': 'grade1',
      '2do Grado': 'grade2',
      '3er Grado': 'grade3',
      '4to Grado': 'grade4',
      '5to Grado': 'grade5',
      '6to Grado': 'grade6',
    };

    // const diagGoalKey = Object.keys(this.diagnosticGoalTableData).find((key) =>
    //   key.includes(grade),
    // );

    // const gradeKey = gradeRespKeyMappedWithGradeDiag[]

    const diagGoal = this.diagnosticGoalTableData[gradeRespKeyMappedWithGradeDiag[grade]];

    if (!diagGoal)
      return {
        diagnosticReading: '0.0',
        diagnosticMath: '0.0',
        diagnosticLogic: '0.0',
      };

    // console.log(diagGoal[gradeIdx]);

    // if (!diagGoal[gradeIdx]) return '0.0';

    return {
      diagnosticReading: diagGoal.wordsPerMin,
      diagnosticMath: diagGoal.multiplicationsPerMin,
      diagnosticLogic: diagGoal.operationsPerMin,
    };
  }

  private getTable(
    tableData: string[][],
    lapseIdx: number,
    diagIdx: number,
    diagKey: string,
    tablesByLapses: string[][][] = [],
  ) {
    const isFirstLapse = lapseIdx === 0;
    const isSecondLapse = lapseIdx === 1;
    const isThirdLapse = lapseIdx === 2;

    let header = [
      ['Resultados por grado'],
      // ['grado', 'sección', 'D. Inicial', 'Meta', 'Índice P. Final'],
    ];

    if (isFirstLapse) {
      header.push(['grado', 'D. Inicial', 'Meta', 'Índice P. Inicial']);
    }

    if (isSecondLapse) {
      header.push(['grado', 'D. Inicial', 'D. Revisión', 'Meta', 'Índice P. Revisión']);
    }

    if (isThirdLapse) {
      header.push(['grado', 'D. Inicial', 'D. Final', 'Meta', 'Índice P. Final']);
    }

    // Removed default headers got from DataBase
    tableData = tableData.slice(1, tableData.length);

    // reordered and format values
    tableData = tableData.map((td) => {
      /**
       * [0]: grade
       * [1]: section
       * [2]: D. initial -> result
       * [3]: promedio
       */
      const metaSettings = this.getDiagGoalTableData(td[0]);
      // console.log('getDiagGoalTableData', metaSettings);
      const tdFormatted = [
        td[0].replace(/grado/gi, ''), // grade
        td[1], // section
        this.avgColumnValuesBySection(td[0], tableData, 2), // D. initial -> result
        metaSettings[diagKey], // Meta
        this.avgColumnValuesBySection(td[0], tableData, 3, 3), // promedio
      ];

      // Delete section column value
      if (isFirstLapse) {
        return [
          tdFormatted[0], // grade
          tdFormatted[2], // D. Inicial
          tdFormatted[3], // Meta
          tdFormatted[4], // Índice P. Final
        ];
      }

      if (isSecondLapse || isThirdLapse) {
        let valueRevision: any = tablesByLapses[0][diagIdx].slice(2, tableData.length);
        valueRevision = valueRevision.find(
          (valueRevByGrade) => valueRevByGrade[0] === tdFormatted[0],
        );

        return [
          tdFormatted[0], // grade
          valueRevision ? valueRevision[1] : '---', // D. Inicial
          tdFormatted[2], // D. Revisión
          tdFormatted[3], // Meta
          tdFormatted[4], // Índice P. Final
        ];
      }

      return tdFormatted;
    });

    let filteredTableData = [];
    // Get just one grade and not grade by each section
    tableData = tableData.filter((td) => {
      const wasTdFiltered = filteredTableData.find((tdF) => tdF[0] === td[0]);
      if (wasTdFiltered) {
        return false;
      }

      filteredTableData.push(td);
      return true;
    });

    return [...header, ...tableData];
  }

  buildDataPages() {
    const pages: DiagnosticPageData[] = [];
    let tablesByLapses = [];
    const diagnosticKeys = ['diagnosticReading', 'diagnosticMath', 'diagnosticLogic'];

    this.lapses.map((lapse, lapseIdx) => {
      const { lapseId, lapseName } = lapse;
      const isThirdLapse = lapseIdx === 2;

      let tables = [];

      const page = diagnosticKeys.map((diagKey, diagIdx) => {
        const { diagnosticText, diagnosticAnalysis, diagnosticTable } = lapse[diagKey];
        const chart = this.getChart(lapseId, lapseName, diagKey, isThirdLapse);
        const table = this.getTable(diagnosticTable, lapseIdx, diagIdx, diagKey, tablesByLapses);

        tables.push(table);

        return {
          diagnosticText,
          diagnosticAnalysis,
          chart,
          table,
          lapseName: diagIdx > 0 ? undefined : lapseName,
        };
      });

      tablesByLapses.push(tables);
      pages.push(...page);
    });

    // console.log('tablesByLapses', tablesByLapses[0]);

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
