// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
// COMPONENTS
import { ChartsSwitcherComponent } from './charts-switcher.component';
import {
  ChartJSLineChart as LineChart
} from './chartjs-adapters';

@NgModule({
  declarations: [
    ChartsSwitcherComponent,
    LineChart,
    //PieChart,
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    ChartsSwitcherComponent,
  ],
  entryComponents: [
    LineChart,
    //PieChart
  ]
})
export class ChartsSwitcherModule { }
