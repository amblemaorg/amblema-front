import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { ChartComponent, ChartsSwitcherOptions } from './chart-components';
import { ChartComponentFactory } from './chart-component-factory';
​
@Component({
  selector: 'charts-switcher',
  templateUrl: './charts-switcher.component.html',
  styleUrls: ['./charts-switcher.component.scss'],
})
export class ChartsSwitcherComponent implements OnInit {
  @Input() options: ChartsSwitcherOptions;
  @Output() switch: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild('chartHost', { read: ViewContainerRef, static: false })
  chartHostRef: ViewContainerRef;
  direction: string;
  buttonsDescription: string;
  charts: ChartComponent[];
  chartFactory: ChartComponentFactory;
  activeChartIndex: number = 0;
​
  constructor(private resolver: ComponentFactoryResolver) {}
​
  ngOnInit() {
    this.chartFactory = new ChartComponentFactory(this.resolver);
    this.charts = this.options.charts.filter((chart) => {
      return chart.data && chart.data.length > 0;
    });
    this.buttonsDescription = this.options.buttonsDescription;
    this.direction = this.options.direction || 'row';
    
    console.log("VER CHARTS 1", this.options.charts);
    console.log("VER CHARTS 2", this.charts);

    setTimeout(() => {
      this.loadChartComponent();
    });
  }
​
  loadChartComponent() {
    if (this.charts.length > 0) {
      const activeChart = this.charts[this.activeChartIndex];
      this.chartFactory.createChartComponent(this.chartHostRef, activeChart);
    }
  }
​
  switchChart(index: number) {
    this.activeChartIndex = index;
    this.loadChartComponent();
    this.switch.emit(this.activeChartIndex);
  }
}
