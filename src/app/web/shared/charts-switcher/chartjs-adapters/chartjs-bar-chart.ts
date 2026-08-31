import { Component } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { BarChartComponent } from '../chart-components';

@Component({
  selector: 'bar-chart',
  template: `
    <canvas
      baseChart
      [datasets]="barChartData"
      [labels]="barChartLabels"
      [options]="barChartOptions"
      [colors]="barChartColors"
      [legend]="barChartLegend"
      [chartType]="barChartType"
      [plugins]="barChartPlugins"
      (chartClick)="onChartClick($event)"
    >
    </canvas>
  `,
  styleUrls: ['./chartjs-theme.scss'],
})
export class ChartJSBarChart extends BarChartComponent {
  barChartData: ChartDataSets[];
  barChartLabels: Label[];
  barChartOptions: (ChartOptions & { annotation?: any }) | any;
  barChartColors: Color[];
  barChartLegend = true;
  barChartType: string;
  barChartPlugins = [pluginAnnotations];

  onChartClick(e: any): void {
    if (e && e.event && e.active && e.active.length > 0) {
      const chartInstance = e.active[0]._chart;
      if (chartInstance) {
        const clickedElements = chartInstance.getElementAtEvent(e.event);
        const targetElement = (clickedElements && clickedElements.length > 0) ? clickedElements[0] : e.active[0];
        const datasetIndex = targetElement._datasetIndex;
        const index = targetElement._index;

        if (this.barChartData && this.barChartData[datasetIndex] && this.barChartLabels) {
          const serie = this.barChartData[datasetIndex].label;
          const label = this.barChartLabels[index];
          const foundItem = (this.data || []).find(
            (element: any) => element.serie === serie && element.label === label
          );
          if (foundItem && typeof window !== 'undefined' && (window as any).onEnvBarClick) {
            (window as any).onEnvBarClick(foundItem);
          }
        }
      }
    }
  }

  configChart(legend?): void {
    this.barChartType = 'bar';
    const seriesArray = this.data.map((element) => <string>element.serie);
    const hasLapses = seriesArray.some((s) => s && s.toLowerCase().includes('lapso'));

    let series: string[];
    if (hasLapses) {
      const allLapses = ['Lapso 1', 'Lapso 2', 'Lapso 3'];
      const set = new Set([...allLapses, ...seriesArray]);
      series = [...set].sort((a, b) => a.localeCompare(b));
    } else {
      const seriesSet = new Set(seriesArray);
      series = [...seriesSet].sort();
    }

    const labelsArray = this.data.map((element) => <string>element.label);
    const labelsSet = new Set(labelsArray); // This remove duplicates labels
    this.barChartLabels = [...labelsSet];

    this.barChartData = series.map((serie) => {
      const data = this.barChartLabels.map((label) => {
        const found = this.data.find(
          (element) => element.serie === serie && element.label === label
        );
        return (found && found.value !== undefined && found.value !== null) ? <number>found.value : null;
      });

      return {
        data: data,
        label: serie,
      };
    });

    if (!legend) {
      legend = {
        labels: {
          fontColor: '#fff',
        },
      };
    }

    this.barChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        line: {
          borderWidth: 4,
          fill: false,
        },
        point: {},
      },
      scales: {
        type: 'category',
        display: true,
      },
      legend,
    };

    const defaultColors = ['#00809a', '#2e7d32', '#ef6c00'];
    this.barChartColors = series.map((_, idx) => {
      const color = (this.props && this.props.colors && this.props.colors[idx])
        ? this.props.colors[idx]
        : defaultColors[idx % defaultColors.length];
      return {
        backgroundColor: color,
        borderColor: color,
      };
    });
  }

  configMarkers(): void {
    this.barChartOptions.elements.point = {
      radius: this.markers.show ? 5 : 0,
    };
    this.barChartColors = this.barChartColors.map((chartColors) => {
      return {
        ...chartColors,
        pointBackgroundColor: this.markers.color,
        pointBorderColor: this.markers.color,
        pointHoverBackgroundColor: this.markers.color,
        pointHoverBorderColor: this.markers.color,
      };
    });
  }

  configXAxis(): void {
    this.barChartOptions.scales.xAxes = [
      {
        display: true,
        offset: true,
        gridLines: {
          display: true,
          drawOnChartArea: this.grid.show,
          drawTicks: this.xaxis.ticks,
          color: this.xaxis.color || '#FFF',
          lineWidth: 3,
        },
        ticks: {
          fontColor: this.xaxis.color || '#FFF',
          padding: 10,
        },
      },
    ];
  }

  configYAxis(): void {
    this.barChartOptions.scales.yAxes = [
      {
        position: 'left',
        offset: true,
        gridLines: {
          display: true,
          drawOnChartArea: this.grid.show || false,
          drawTicks: this.yaxis.ticks || false,
          color: this.yaxis.color || '#FFF',
          lineWidth: 3,
        },
        ticks: {
          display: this.yaxis.ticks || false,
          ...this.calculateNumericAxisRange('y', this.yaxis.edgeSpace),
          min: 0,
          fontColor: this.yaxis.color || '#FFF',
          padding: 20,
        },
      },
    ];
  }

  configGrid(): void {
    // console.log('Method not implemented');
  }

  configAsymptotes(): void {
    const annotations = this.asymptotes.map((asymtote) => {
      const { axis, value, color, title } = asymtote;
      return {
        type: 'line',
        mode: axis == 'y' ? 'horizontal' : 'vertical',
        scaleID: 'y-axis-0',
        value: value,
        borderColor: color || '#FFF',
        borderWidth: 2,
        borderDash: [12, 12],
        borderDashOffset: 12,
        label: {
          backgroundColor: 'rgba(0,0,0,0)',
          content: title || '',
          enabled: title !== '',
          fontColor: color || '#FFF',
          position: 'right',
          yAdjust: -10,
        },
      };
    });
    this.barChartOptions.annotation = { annotations };
    /*
    this.barChartOptions.scales.yAxes = this.barChartOptions.scales.yAxes.map((yaxis) => {
      return {
        ...yaxis,
        ticks: {
          ...this.calculateNumericAxisRange("y", this.yaxis.edgeSpace),
          ...yaxis.ticks,
        },
      };
    });
    */
  }
}
