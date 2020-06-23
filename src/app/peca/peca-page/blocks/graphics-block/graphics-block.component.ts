import { Component, OnInit,AfterViewInit } from '@angular/core';
import { Chart, ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { PageBlockComponent, PresentationalBlockComponent } from '../page-block.component';
@Component({
  selector: 'app-graphics-block',
  templateUrl: './graphics-block.component.html',
  styleUrls: ['./graphics-block.component.scss']
})
export class GraphicsBlockComponent implements PresentationalBlockComponent, OnInit {
  type: 'presentational';
  component: string;
  settings: {
    items: any[];
  }
  canvas: any;
  ctx: any;
  chart: any;

  constructor() {
    this.type = 'presentational';
    this.component = 'graphics';
  }

  ngOnInit() {
    this.canvas = document.getElementById('myChart');
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
              'rgb(66, 134, 244,0.5)',
              'rgb(66, 134, 244,0.5)',
              'rgb(66, 134, 244,0.5)',
            ],
            fill: false
          },
          {
            label: 'Num datos',
            data: [3, 15, 11],
            backgroundColor: [
              'rgb(74, 135, 72,0.5)',
              'rgb(74, 135, 72,0.5)',
              'rgb(74, 135, 72,0.5)',
            ],
            fill: false
          },
          {
            label: 'Num datos',
            data: [8, 5, 12],
            backgroundColor: [
              'rgb(229, 89, 50,0.5)',
              'rgb(229, 89, 50,0.5)',
              'rgb(229, 89, 50,0.5)'
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



  setSettings(settings: any) {
    this.settings = { ...settings };
  }

}
