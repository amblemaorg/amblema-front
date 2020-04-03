import {
  ApexChart,
  ApexAnnotations,
  ApexDataLabels,
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  ApexStroke,
  ApexLegend,
  ApexFill,
  ApexTooltip,
  ApexPlotOptions,
  ApexResponsive,
  ApexYAxis,
  ApexGrid,
  ApexStates,
  ApexTitleSubtitle,
  ApexTheme,
  ApexMarkers,
  ApexNoData
} from 'ng-apexcharts';
import { ChartComponent, LineChartComponent } from "./chart-components";
import { Component } from '@angular/core';

interface ApexXAxis {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
      show?: boolean;
      rotate?: number;
      rotateAlways?: boolean;
      hideOverlappingLabels?: boolean;
      showDuplicates?: boolean;
      trim?: boolean;
      minHeight?: number;
      maxHeight?: number;
      style?: {
          colors?: string | string[];
          fontSize?: string;
          fontWeight?: string | number;
          fontFamily?: string;
          cssClass?: string;
      };
      offsetX?: number;
      offsetY?: number;
      format?: string;
      datetimeUTC?: boolean;
      datetimeFormatter?: {
          year?: string;
          month?: string;
          day?: string;
          hour?: string;
          minute?: string;
      };
      formatter?(value: string, timestamp?: number): string | string[];
  };
  axisBorder?: {
      show?: boolean;
      color?: string;
      height?: number;
      offsetX?: number;
      offsetY?: number;
      strokeWidth?: number;
  };
  axisTicks?: {
      show?: boolean;
      borderType?: string;
      color?: string;
      height?: number;
      offsetX?: number;
      offsetY?: number;
  };
  tickPlacement?: string;
  tickAmount?: number | "dataPoints";
  min?: number;
  max?: number;
  range?: number;
  floating?: boolean;
  position?: string;
  title?: {
      text?: string;
      offsetX?: number;
      offsetY?: number;
      style?: {
          color?: string;
          fontFamily?: string;
          fontWeight?: string | number;
          fontSize?: string;
          cssClass?: string;
      };
  };
  crosshairs?: {
      show?: boolean;
      width?: number | string;
      position?: string;
      opacity?: number;
      stroke?: {
          color?: string;
          width?: number;
          dashArray?: number;
      };
      fill?: {
          type?: string;
          color?: string;
          gradient?: {
              colorFrom?: string;
              colorTo?: string;
              stops?: number[];
              opacityFrom?: number;
              opacityTo?: number;
          };
      };
  };
  tooltip?: {
      enabled?: boolean;
      offsetY?: number;
      style?: {
          fontSize?: string;
          fontFamily?: string;
      };
      formatter?(value: string, opts?: object): string;
  };
}

export interface ApexChartComponent {
  annotations?: ApexAnnotations;
  chart: ApexChart;
  colors?: string[];
  dataLabels?: ApexDataLabels;
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  stroke?: ApexStroke;
  labels?: string[];
  legend?: ApexLegend;
  fill?: ApexFill;
  tooltip?: ApexTooltip;
  plotOptions?: ApexPlotOptions;
  responsive?: ApexResponsive[];
  apexMarkers?: ApexMarkers;
  noData?: ApexNoData;
  apexXAxis?: ApexXAxis;
  apexYAxis?: ApexYAxis | ApexYAxis[];
  apexGrid?: ApexGrid;
  states?: ApexStates;
  apexTitle?: ApexTitleSubtitle;
  subtitle?: ApexTitleSubtitle;
  theme?: ApexTheme;
}

@Component({
  selector: 'line-chart',
  template: `
    <apx-chart
      [annotations]="annotations"
      [chart]="chart"
      [colors]="colors"
      [dataLabels]="dataLabels"
      [series]="series"
      [stroke]="stroke"
      [labels]="labels"
      [legend]="legend"
      [fill]="fill"
      [tooltip]="tooltip"
      [plotOptions]="plotOptions"
      [responsive]="responsive"
      [markers]="apexMarkers"
      [noData]="noData"
      [xaxis]="apexXAxis"
      [yaxis]="apexYAxis"
      [grid]="apexGrid"
      [states]="states"
      [title]="apexTitle"
      [subtitle]="subtitle"
      [theme]="theme"
    >
    </apx-chart>
  `,
})
export class ApexLineChart extends LineChartComponent implements ApexChartComponent {
  annotations: ApexAnnotations;
  chart: ApexChart;
  colors: string[];
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  stroke: ApexStroke;
  responsive: ApexResponsive[];
  apexMarkers: ApexMarkers;
  noData: ApexNoData;
  apexXAxis: ApexXAxis;
  apexYAxis: ApexYAxis | ApexYAxis[];
  apexGrid: ApexGrid;
  dataLabels?: ApexDataLabels;
  labels?: string[];
  legend?: ApexLegend;
  fill?: ApexFill;
  tooltip?: ApexTooltip;
  plotOptions?: ApexPlotOptions;
  states?: ApexStates;
  apexTitle?: ApexTitleSubtitle;
  subtitle?: ApexTitleSubtitle;
  theme?: ApexTheme;

  constructor() {
    super();
  }

  configChart() {
    this.chart = {
      ...this.chart,
      type: "line",
      zoom: {
        enabled: false
      }
    };
    this.responsive = [
      {
        breakpoint: 415,
        options: {
          chart: {
            height: 300,
          }
        }
      },
      {
        breakpoint: 767,
        options: {
          chart: {
            height: 350,
          }
        }
      },
      {
        breakpoint: 900,
        options: {
          chart: {
            height: 300,
          }
        }
      }
    ]
    this.colors = this.props.colors || ['#FFF'];
    this.stroke = {
      ...this.stroke,
      show: true,
      curve: <"smooth" | "straight" | "stepline">this.props.stroke || 'smooth'
    };
    const yAxisValues = this.data.map(element => <number>element.value);
    this.series = [
      {
        name: this.title,
        data: yAxisValues
      }
    ];
    const xAxisCategories = this.data.map(element => <string>element.label);
    this.apexXAxis = {
      ...this.apexXAxis,
      type: 'category',
      categories: xAxisCategories,
      labels: {
        rotateAlways: true,
        //maxHeight: 50,
      }
    };
  }

  configMarkers(): void {
    this.apexMarkers = {
      ...this.apexMarkers,
      size: this.markers.show ? 5 : 0,
      colors: [this.markers.color || '#FFF'],
      strokeColors: this.markers.color || '#FFF'
    };
  }

  configGrid(): void {
    this.apexGrid = {
      ...this.apexGrid,
      show: this.grid.show || false,
      borderColor: this.grid.color || '#FFF'
    };
  }

  configXAxis() {
    this.apexXAxis = {
      ...this.apexXAxis,
      min: 0,
      axisBorder: {
        show: this.xaxis.show || true,
        color: this.xaxis.color || '#FFF',
        height: 3,
        offsetX: -30
      },
      axisTicks: {
        show: this.xaxis.ticks || false
      },
      labels: {
        show: true,
        rotate: -45,
        style: {
          colors: this.xaxis.color || '#FFF',
          fontFamily: 'Montserrat'
        }
      }
    }
  }

  configYAxis() {
    this.apexYAxis = {
      ...this.apexYAxis,
      ...this.calculateYAxisRange(),
      show: this.yaxis.show || true,
      showAlways: this.yaxis.show || true,
      axisBorder: {
        show: this.yaxis.show || true,
        color: this.yaxis.color || '#FFF',
        width: 3,
        offsetY: 30
      },
      axisTicks: {
        show: this.yaxis.ticks || false
      },
      labels: {
        show: this.yaxis.labels || false,
        style: {
          colors: this.yaxis.color || '#FFF',
          fontFamily: 'Montserrat'
        }
      }
    }
  }

  calculateYAxisRange(): { min: number, max: number } {
    const yAsymtotes = this.asymptotes.filter(asymtote => asymtote.axis == 'y');
    const yAxisValues = [...this.data, ...yAsymtotes].map(element => <number>element.value);
    const minAndMax = this.findMinMaxInArray(yAxisValues);
    return { min: minAndMax[0] - 15, max: minAndMax[1] + 15 };
  }

  findMinMaxInArray(numericArray: number[]): number[] {
    let max = undefined;
    let min = undefined;
    numericArray.map(number => {
      if ( typeof max === 'undefined' && typeof min === 'undefined' ) {
        max = min = number;
      }
      else {
        max = number > max ? number : max;
        min = number < min ? number : min;
      }
    });
    return [min, max];
  }

  configAsymptotes(): void {
    this.asymptotes.map(asymptote => {
      const { axis, value, color, title } = asymptote;
      this.annotations = {
        position: 'front',
        [axis + 'axis']: [{
          [axis]: value,
          strokeDashArray: 10,
          borderColor: color || '#FFF',
          label: {
            text: title || '',
            borderWidth: 0,
            style: {
              color: color || '#FFF',
              //fontSize: '1vw'
            }
          }
        }]
      }
    })
    this.apexYAxis = {
      ...this.apexYAxis,
      ...this.calculateYAxisRange()
    }
  }
}

@Component({
  selector: 'pie-chart',
  template: `
    <apx-chart></apx-chart>
  `,
})
export class ApexPieChart extends ChartComponent {
  constructor() {
    super();
    this.type = 'Pie Chart';
  }

  configChart(): void {
    console.log('Pie chart configChart')
  };

  configMarkers(): void {
    console.log('Pie chart configMarkers')
  };

  configXAxis(): void {
    console.log('Pie chart configXAxis')
  };

  configYAxis(): void {
    console.log('Pie chart configYAxis')
  };

  configGrid(): void {
    console.log('Pie chart configGrid')
  };
}
