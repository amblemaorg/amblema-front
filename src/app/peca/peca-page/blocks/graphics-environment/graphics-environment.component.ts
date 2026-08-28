import { Component, OnInit, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { PresentationalBlockComponent } from '../page-block.component';

@Component({
  selector: 'app-graphics-environment',
  templateUrl: './graphics-environment.component.html',
  styleUrls: ['./graphics-environment.component.scss']
})
export class GraphicsEnvironmentComponent
  implements PresentationalBlockComponent, OnInit, AfterViewInit, OnDestroy {
  type: 'presentational';
  component: string;

  @Input() settings: {
    chartId?: string;
    labels?: string[];
    items?: any[];
    title?: string;
  };

  canvas: any;
  ctx: any;
  chart: any;
  color: string = '#FFF';

  defaultLabels = [
    'Limpieza y cuidado',
    'Gestión de residuos',
    'Biodiversidad',
    'Aprovechamiento de agua',
    'Relación comunitaria'
  ];

  dataChart: number[] = [0, 0, 0, 0, 0];
  dataLabel: string[] = [];

  constructor() {
    this.type = 'presentational';
    this.component = 'graphics-environment';
  }

  ngOnInit(): void {
    this.dataLabel = this.settings && this.settings.labels ? this.settings.labels : this.defaultLabels;
    if (this.settings && this.settings.items && this.settings.items.length) {
      this.dataChart = this.settings.items.map((val) => (val !== null && val !== undefined ? Number(val) : 0));
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadChart();
    }, 100);
  }

  setData(data: any): void {
    if (data) {
      if (data.labels) {
        this.dataLabel = data.labels;
      }
      if (data.items) {
        this.dataChart = data.items.map((val) => (val !== null && val !== undefined ? Number(val) : 0));
      }
      if (data.title) {
        if (!this.settings) {
          this.settings = {};
        }
        this.settings.title = data.title;
      }

      if (this.chart) {
        this.chart.data.labels = this.dataLabel;
        this.chart.data.datasets[0].data = this.dataChart;
        if (data.title) {
          this.chart.options.title.text = data.title;
          this.chart.data.datasets[0].label = data.title;
        }
        this.chart.update();
      } else {
        setTimeout(() => {
          this.loadChart();
        }, 100);
      }
    }
  }

  setSettings(settings: any): void {
    if (settings && settings.settings) {
      this.settings = { ...settings.settings };
    } else {
      this.settings = { ...settings };
    }
    this.setData(this.settings);
  }

  loadChart(): void {
    const chartId = (this.settings && this.settings.chartId) || 'estadisticaAmbienteEvaluador';
    const canvasEl = document.getElementById(chartId);
    if (canvasEl) {
      this.canvas = canvasEl;
      this.ctx = this.canvas.getContext('2d');
      if (this.chart) {
        this.chart.destroy();
      }
      this.chart = new Chart(this.ctx, {
        type: 'bar',
        data: {
          labels: this.dataLabel,
          datasets: [
            {
              label: this.settings && this.settings.title ? this.settings.title : 'Diagnóstico de Ambiente (Puntaje 0-7)',
              data: this.dataChart,
              backgroundColor: [
                '#00809a',
                '#2e7d32',
                '#689f38',
                '#0288d1',
                '#ef6c00'
              ],
              borderColor: [
                '#006073',
                '#1b5e20',
                '#4b7328',
                '#01579b',
                '#e65100'
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: this.settings && this.settings.title ? this.settings.title : 'Diagnóstico de Ambiente',
            fontColor: '#333'
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  max: 7,
                  stepSize: 1,
                  fontColor: '#333'
                }
              }
            ],
            xAxes: [
              {
                ticks: {
                  fontColor: '#333',
                  fontSize: 11
                }
              }
            ]
          },
          legend: {
            labels: {
              fontColor: '#333'
            }
          }
        }
      });
    }
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}

