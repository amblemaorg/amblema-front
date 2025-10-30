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
  storeId: string;
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
    public storeId: string,
    public title: string,
    public description: string,
    chart: Chart,
    table: string[][] = [],
    public subtitle?: string,
    public characterLimit = 0,
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
    var dataset = []
    for(var i=0; i<chart.datasets[0].data.length; i++){
      if(typeof chart.datasets[0].data[i] == "string"){
        dataset.push(parseFloat(chart.datasets[0].data[i].toString()))
      }else{
        dataset.push(chart.datasets[0].data[i]);
      }
    }
    var max = Math.max(...dataset)
    if(max > 100 && max <= 120){
      max = 120
    }else if(max > 120 && max <= 140){
      max = 140
    }else if(max > 140 && max <= 160){
      max = 160
    }
    
    var maxValue = max > 100 ? max : 100
    
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
              max: maxValue
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
    diagValues = diagValues.filter(
      (diagValue) => diagValue.label == this.schoolYear,
    );

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
    let chartTitle = 'Índice Promedio de la Escuela';

    const chartId = `${lapseName}-${diagKey}-graphic`;

    const { diagnostics } = this.diagnosticGraphicData;
    
    const lapseGraphic = graphics[lapseId];
    
    // const lapseGraphic = null;

    if (
      !lapseGraphic ||
      !lapseGraphic[diagKey] ||
      !lapseGraphic[diagKey].values ||
      lapseGraphic[diagKey].values.length === 0
    ) {
      const labels = [];
      const values = [];

      return this.chartDefault(
        chartId,
        labels,
        values,
        chartTitle,
        isThirdLapse,
      );
    }

    let labels = lapseGraphic[diagKey].labels;
    let values = lapseGraphic[diagKey].values;
  
    // ↓↓↓ SOLO APLICAR AGRUPACIÓN PARA LAPSE1 ↓↓↓
    if (lapseId === 'lapse1') {
      const groupedData = this.groupByGradeAndAverage(labels, values);
      labels = groupedData.labels;
      values = groupedData.values;
    }

    if (isThirdLapse) {
      // const chartTitles = {
      //   diagnosticReading: 'Indice promedio de lectura general',
      //   diagnosticMath: 'Indice promedio de multiplicación general',
      //   diagnosticLogic: 'Indice promedio de lógica matemática general',
      // };

      // chartTitle = chartTitles[diagKey];
      labels = ['Inicial', 'Revisión', 'Final'];

      const {
        operationsPerMinIndex,
        multiplicationsPerMinIndex,
        wordsPerMinIndex,
      } = diagnostics;
      lapseGraphic.diagnosticReading = this.formatFilterDiagnosticValueByYear(
        wordsPerMinIndex,
      );
      lapseGraphic.diagnosticMath = this.formatFilterDiagnosticValueByYear(
        multiplicationsPerMinIndex,
      );
      lapseGraphic.diagnosticLogic = this.formatFilterDiagnosticValueByYear(
        operationsPerMinIndex,
      );
    }

    return this.chartDefault(
      chartId,
      labels,
      values,
      chartTitle,
      isThirdLapse,
    );
  }

  private groupByGradeAndAverage(labels: string[], values: string[]): { labels: string[], values: number[] } {
    const gradeMap = new Map<string, { sum: number, count: number }>();
  
    // Agrupar valores por grado
    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      const value = parseFloat(values[i]) || 0;
      
      // Extraer el nombre del grado (eliminar la sección A, B, C, etc.)
      const gradeName = this.extractGradeName(label);
      
      if (!gradeMap.has(gradeName)) {
        gradeMap.set(gradeName, { sum: 0, count: 0 });
      }
      
      const gradeData = gradeMap.get(gradeName);
      gradeData.sum += value;
      gradeData.count++;
    }
  
    // Calcular promedios y preparar arrays finales
    const resultLabels: string[] = [];
    const resultValues: number[] = [];
  
    gradeMap.forEach((data, gradeName) => {
      resultLabels.push(gradeName);
      resultValues.push(parseFloat((data.sum / data.count).toFixed(2)));
    });
  
    return {
      labels: resultLabels,
      values: resultValues
    };
  }
  
  private extractGradeName(fullLabel: string): string {
    // Elimina las letras de sección (A, B, C, etc.) al final
    // Convierte "1er Grado A" → "1er Grado"
    // Convierte "2do Grado B" → "2do Grado"
    return fullLabel.replace(/\s+[A-Z]$/, '');
  }

  // Used to set a provisional data table for show table when
  // results of grades has 0 but from backend error
  // average (Index) has value > 0
  // To show table with just index this method is used
  getDiagIndexFromGraphicsForProvDataTb(
    lapseId: string,
    diagKey: string,
    graphics,
  ) {
    const lapseGraphic = graphics[lapseId];
    const diagnostic = lapseGraphic[diagKey];

    const labels = [];
    const values = [];

    for (let idx = 0; idx < diagnostic.labels.length; idx++) {
      const label = diagnostic.labels[idx];
      const value = diagnostic.values[idx];

      let grade: string = label.match(/[1-6]/);

      // validations
      if (!grade) continue; // if grade doesn't have expected format
      if (value == 0) continue;

      const gradeFormat = {
        '1': '1ero',
        '2': '2do',
        '3': '3er',
        '4': '4to',
        '5': '5to',
        '6': '6to',
      };

      labels.push(gradeFormat[grade]);
      values.push(value);
    }

    return {
      labels,
      values,
    };
  }

  getProvisionalDataTable(
    lapseId: string,
    diagKey: string,
    isFirstLapse: boolean,
    isSecondLapse: boolean,
    isThirdLapse: boolean,
  ) {
    const graphics = this.graphics;
    const graphicDiagnosticData = this.getDiagIndexFromGraphicsForProvDataTb(
      lapseId,
      diagKey,
      graphics,
    );

    const tableData = graphicDiagnosticData.labels.map((label, idx) => {
      const value = graphicDiagnosticData.values[idx];
      const metaSettings = this.getDiagGoalTableData(label, true);

      // console.log({ metaSettings });

      if (isFirstLapse) {
        // ['grado', 'D. Inicial', 'Meta', 'Índice D. Inicial']

        return [label, '0', metaSettings[diagKey], value];
      }

      if (isSecondLapse) {
        // ['grado',  'D. Inicial',  'D. Revisión',  'Meta',  'Índice D. Revisión']

        return [label, '0', '0', metaSettings[diagKey], value];
      }

      if (isThirdLapse) {
        // ['grado', 'D. Inicial', 'D. Final', 'Meta', 'Índice D. Final']
        return [label, '0', '0', metaSettings[diagKey], value];
      }
    });

    return tableData;
  }

  /**
   * Diag = Diagnostic
   * Purpose: Using just items of same grade, return average summing each columns on array index position passed by arg
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

    const result =
      columnTableData.length > 0 ? sum / columnTableData.length : 0.0;
    return result.toFixed(1).toString();
  }

  private getDiagGoalTableData(grade: string, isProvisionalTable = false) {
    // Maybe future instability if exist way to modify grade's name
    let gradeRespKeyMappedWithGradeDiag: any = {
      '1er Grado': 'grade1',
      '2do Grado': 'grade2',
      '3er Grado': 'grade3',
      '4to Grado': 'grade4',
      '5to Grado': 'grade5',
      '6to Grado': 'grade6',
    };

    if (isProvisionalTable) {
      gradeRespKeyMappedWithGradeDiag = {
        '1er': 'grade1',
        '2do': 'grade2',
        '3er': 'grade3',
        '4to': 'grade4',
        '5to': 'grade5',
        '6to': 'grade6',
      };
    }

    const diagGoal = this.diagnosticGoalTableData[
      gradeRespKeyMappedWithGradeDiag[grade]
    ];
    // console.log(grade);

    // console.log({ diagnosticGoalTableData: this.diagnosticGoalTableData });

    if (!diagGoal) {
      return {
        diagnosticReading: '0.0',
        diagnosticMath: '0.0',
        diagnosticLogic: '0.0',
      };
    }

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
    // tableData = null;
    const isFirstLapse = lapseIdx === 0;
    const isSecondLapse = lapseIdx === 1;
    const isThirdLapse = lapseIdx === 2;

    const diagHeading = {
      diagnosticReading: '(PPM: Palabras Leídas Por Minuto)',
      diagnosticMath: '(M2M: Multiplicaciones en 2 minutos)',
      diagnosticLogic: '(60LM: Lógica-Matemática en 60 minutos)',
    };
    let typeDiagText = ""
    if(diagKey=="diagnosticReading"){
      typeDiagText="Lectura"
    }else if(diagKey=="diagnosticMath"){
      typeDiagText="Multiplicación"
    }else if(diagKey=="diagnosticLogic"){
      typeDiagText="Lógica - Matemática"
    } 

    let header = [];

    if (isFirstLapse) {
      header.push([`<strong>Diagnóstico Inicial de ${typeDiagText}</strong><br />${diagHeading[diagKey]}`])
      header.push(['<strong>Grado</strong>', '<strong>PPM</strong><br/>(Promedio por grado)', '<strong>Meta</strong>', '<strong>Índice Inicial</strong><br/>(% respecto a la meta)']);
    }

    if (isSecondLapse) {
      header.push([`<strong>Diagnóstico de Revisión de ${typeDiagText}</strong><br />${diagHeading[diagKey]}`])
      header.push([
        'grado',
        'D. Inicial',
        'D. Revisión',
        'Meta',
        'Índice D. Revisión',
      ]);
    }

    if (isThirdLapse) {
      header.push([`<strong>Diagnóstico Final de ${typeDiagText}</strong><br />${diagHeading[diagKey]}`])
      header.push([
        'grado',
        'D. Inicial',
        'D. Final',
        'Meta',
        'Índice D. Final',
      ]);
    }

    if (!tableData) {
      // provisional while backend keep diagnostic 0 integer instead 0 decimal show on index's
      const provisionalTableData = this.getProvisionalDataTable(
        `lapse${lapseIdx + 1}`,
        diagKey,
        isFirstLapse,
        isSecondLapse,
        isThirdLapse,
      );

      // console.log({ provisionalTableData });

      if (provisionalTableData.length > 0) {
        return [...header, ...provisionalTableData];
      }
      // end provisional

      return [...header];
      // return [];
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
        let valueRevision: any = false;

        if (tablesByLapses.length > 0 && tablesByLapses[0][diagIdx]) {
          valueRevision = tablesByLapses[0][diagIdx].slice(
            2,
            tablesByLapses[0][diagIdx].length,
          );

          valueRevision = valueRevision.find(
            (valueRevByGrade) => valueRevByGrade[0] == tdFormatted[0],
          );
        }

        return [
          tdFormatted[0], // grade
          valueRevision ? valueRevision[1] : '0.0', // D. Inicial
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

    let finalTable = [...header, ...tableData];

    if (isFirstLapse && tableData.length > 0) {
      // Calcular promedio de la columna "Índice Inicial" (columna 3 en el array, índice 3)
      const indicesIniciales = tableData.map(row => parseFloat(row[3]) || 0);
      const promedioIndiceInicial = indicesIniciales.reduce((sum, value) => sum + value, 0) / indicesIniciales.length;
      
      const filaPromedio = [
        'AVERAGE_ROW_MARKER',           // Marcador especial para identificar esta fila
        'Promedio de la escuela',         // Columna 2 (PPM - texto que ocupará 2 columnas)
        promedioIndiceInicial.toFixed(2)  // Columna 4 (Índice Inicial - valor del promedio)
      ];
      
      finalTable.push(filaPromedio);
    }
  
    return finalTable;
  }

  buildDataPages() {
    const pages: DiagnosticPageData[] = [];
    let tablesByLapses = [];
    const diagnosticKeys = [
      'diagnosticReading',
      'diagnosticMath',
      'diagnosticLogic',
    ];
    console.log(this.lapses)
    this.lapses.forEach((lapse, lapseIdx) => {
      const { lapseId, lapseName } = lapse;
      const isThirdLapse = lapseIdx === 2;

      let tables = [];

      let diagKeys = diagnosticKeys.filter((diagKey, diagIdx) => {
        return lapse[diagKey];
      });

      if (diagKeys.length === 0) return;

      let page = diagKeys.map((diagKey, diagIdx) => {
        const { diagnosticText, diagnosticAnalysis, diagnosticTable } = lapse[
          diagKey
        ];
        // console.log({ lapseName, diagnosticTable });

        const chart = this.getChart(lapseId, lapseName, diagKey, isThirdLapse);
        const table = this.getTable(
          diagnosticTable,
          lapseIdx,
          diagIdx,
          diagKey,
          tablesByLapses,
        );

        tables.push(table);

        return {
          storeId: `${lapseId}__diagnostic--${diagKey}-section`,
          diagnosticText,
          diagnosticAnalysis,
          chart,
          table,
          lapseName,
        };
      });

      tablesByLapses.push(tables);

      // Remove diagnostic pages without table data
      page = page.filter((diag) => diag.table.length > 0);

      pages.push(...page);
    });

    // console.log('tablesByLapses', tablesByLapses[0]);

    this.pages = pages;
  }

  getPages(): DiagnosticPageData[] {
    return this.pages;
  }

  getPagesWithDiagnosticTemplate(lapseName?: string, characterLimit = 0) {
    const pages = lapseName
      ? this.pages.filter((pg) => pg.lapseName === lapseName)
      : this.pages;

    return pages.map((page, pgIdx) => {
      const {
        diagnosticText,
        diagnosticAnalysis,
        chart,
        table,
        storeId,
      } = page;
      const lapseName = pgIdx === 0 ? page.lapseName : undefined;
      return new DiagnosticTemplate(
        storeId,
        diagnosticText,
        diagnosticAnalysis,
        chart,
        table,
        lapseName,
        characterLimit,
      );
    });
  }
}
