import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart, ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { PageBlockComponent, PresentationalBlockComponent } from '../page-block.component';
@Component({
  selector: 'app-graphics-block',
  templateUrl: './graphics-block.component.html',
  styleUrls: ['./graphics-block.component.scss']
})
export class GraphicsBlockComponent implements PresentationalBlockComponent, OnInit, AfterViewInit {
  type: 'presentational';
  component: string;
  settings: {
    chartId?: string;
    items: any[];
  }
  canvas: any;
  ctx: any;
  chart: any;

  constructor() {
    this.type = 'presentational';
    this.component = 'graphics';
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadChart();
    });
  }

  setSettings(settings: any) {
    this.settings = { ...settings };
  }

  loadChart() {    
    if(document.getElementById(this.settings.chartId)) {
      this.canvas = document.getElementById(this.settings.chartId);
      this.ctx = this.canvas.getContext('2d');
  
      this.chart = new Chart(this.ctx, {
        type: "bar",
        data: {
          labels: ['col1', 'col2', 'col3'],
          datasets: [
            {
              label: 'Num datos',
              data: [10, 9, 15],
              backgroundColor: [
                '#81b03e',
                '#81b03e',
                '#81b03e',
              ],
              fill: false
            },
            {
              label: 'Num datos',
              data: [3, 15, 11],
              backgroundColor: [
                '#EEE9E8',
                '#EEE9E8',
                '#EEE9E8',
              ],
              fill: false
            },
            {
              label: 'Num datos',
              data: [8, 5, 12],
              backgroundColor: [
                '#00353a',
                '#00353a',
                '#00353a',
              ],
              fill: false
            }
          ]
        },
        options: {
          title: {
            //text: "BAR CHART",
            display: true
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
  
        }
      })
    }
  }

}
