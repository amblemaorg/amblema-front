import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart, ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { PageBlockComponent, PresentationalBlockComponent } from '../page-block.component';
import { Router } from '@angular/router';
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
  color: any;

  constructor(private router: Router) {
    this.type = 'presentational';
    this.component = 'graphics';
  }

  ngOnInit() {
    if(this.router.url.substring(14,33) == 'diagnostico-inicial'){
      this.color = '#FFF'
    }else this.color = "#111"
  }

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
          labels: ['Escuela Santa Maria'],
          datasets: [
            {
              label: '1ER',
              data: [8],
              backgroundColor: [
                '#81b03e',

              ],
              fill: true
            },
            {
              label: '3 c',
              data: [9],
              backgroundColor: [
                '#EEE9E8',

              ],
              fill: false
            },
            {
              label: '5 a',
              data: [6],
              backgroundColor: [
                '#00353a',

              ],
              fill: false
            },
            {
              label: '2 B',
              data: [8],
              backgroundColor: [
                '#81b03e',
              ],
              fill: false
            },
            {
              label: '4 b',
              data: [4],
              backgroundColor: [
                '#EEE9E8',
              ],
              fill: false
            },
            {
              label: '5 a',
              data: [6],
              backgroundColor: [
                '#00353a',
              ],
              fill: false
            }
          ]
        },
        options: {
          title: {
            //text: "BAR CHART",
            display: true,
          },
          scales: {
            yAxes: [{
              ticks: {
                fontColor: this.color,
                beginAtZero: true
              }
            }],
            xAxes: [{
              ticks: {
                fontColor: this.color,
                beginAtZero: true
              }
            }]
          },
          legend: {
            labels: {
              fontColor: this.color,
            },
          },
  
        }
      })
    }
  }

}
