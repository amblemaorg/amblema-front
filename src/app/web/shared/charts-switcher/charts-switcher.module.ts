// MODULES
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChartsModule } from "ng2-charts";
// COMPONENTS
import { ChartsSwitcherComponent } from "./charts-switcher.component";
import { ChartJSLineChart as LineChart } from "./chartjs-adapters/chartjs-line-chart";
import { ChartJSBarChart as BarChart } from "./chartjs-adapters/chartjs-bar-chart";

@NgModule({
  declarations: [
    ChartsSwitcherComponent,
    LineChart,
    BarChart,
    //PieChart,
  ],
  imports: [CommonModule, ChartsModule],
  exports: [ChartsSwitcherComponent],
  entryComponents: [
    LineChart,
    BarChart,
    //PieChart
  ],
})
export class ChartsSwitcherModule {}
