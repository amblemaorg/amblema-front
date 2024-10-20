import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  Input,
} from '@angular/core'
import { Chart, ChartOptions, ChartType, ChartDataSets } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Label } from 'ng2-charts'
import {
  PageBlockComponent,
  PresentationalBlockComponent,
} from '../page-block.component'
import { Router, NavigationEnd, Event } from '@angular/router'
import { Observable, Subscription } from 'rxjs'
import { PecaState } from '../../../../store/states/peca/peca.state'
import { Select } from '@ngxs/store'
import { PdfYearbookService } from '../../../../services/peca/pdf-yearbook.service'

@Component({
  selector: 'app-graphics-block',
  templateUrl: './graphics-block.component.html',
  styleUrls: ['./graphics-block.component.scss'],
})
export class GraphicsBlockComponent
  implements PresentationalBlockComponent, OnInit, AfterViewInit, OnDestroy {
  type: 'presentational'
  component: string
  @Input() settings: {
    hideChart?: boolean
    chartId?: string
    labels: string[]
    sendGraphicToPdf?: string
    lapseN?: number
    items: any[]
    legendName: string
    datasets?: any[]
    options?: {}
  }

  @Input() fitContainer = false

  canvas: any
  ctx: any
  chart: Chart
  color: any
  @Select(PecaState.getActivePecaContent) infoData$: Observable<any>
  routerSubscription: Subscription
  infoDataSubscription: Subscription
  arraySections = []
  arrayColors = []
  dataChart = []
  dataLabel = []
  UrlLapse = ''

  private subscription: Subscription = new Subscription()

  constructor(
    private router: Router,
    private pdfYearbookService: PdfYearbookService,
  ) {
    this.type = 'presentational'
    this.component = 'graphics'
    this.routerSubscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.UrlLapse = event.url
        this.UrlLapse = this.router.url.substr(12, 1)
      }
    })
  }

  ngOnInit() {
    if (this.router.url.substring(14, 33) == 'diagnostico-inicial') {
      this.color = '#FFF'
    } else {
      this.color = '#111'
    }

    const routePathArray = this.router.url.split('/')

    if (
      routePathArray[2] == 'anuario-page' ||
      routePathArray[2] == 'yearbook'
    ) {
      this.dataLabel = this.settings.labels
      if (!this.settings.datasets) {
        this.arrayColors = this.settings.labels.map(() => '#81B03E')
        this.dataChart = this.settings.items
      }

      this.subscription.add(
        this.pdfYearbookService.callGraphicBase64ImgEmitter.subscribe((res) => {
          if (this.settings.lapseN && this.settings.sendGraphicToPdf) {
            this.pdfYearbookService.setGraphics(
              `lapse${this.settings.lapseN}`,
              this.settings.sendGraphicToPdf,
              {
                labels: this.dataLabel,
                values: this.dataChart,
              },
            )
          }
        }),
      )
      return
    }

    this.getInfo()
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadChart()
    })
  }

  parseGradeName(grade, name): string {
    switch (grade) {
      case '0':
        return `Preescolar ${name}`
      case '1':
        return `1er Grado ${name}`
      case '2':
        return `2do Grado ${name}`
      case '3':
        return `3er Grado ${name}`
      case '4':
        return `4to Grado ${name}`
      case '5':
        return `5to Grado ${name}`
      case '6':
        return `6to Grado ${name}`
      default:
        return `${grade} Grado ${name}`
    }
  }

  getInfo() {
    this.UrlLapse = this.router.url.substr(12, 1)
    this.infoDataSubscription = this.infoData$.subscribe(
      (data) => {
        if (data.activePecaContent) {
          this.arraySections = data.activePecaContent.school.sections

          for (let i = 0; i < this.arraySections.length; i++) {
            this.dataLabel.push(
              this.parseGradeName(
                data.activePecaContent.school.sections[i].grade,
                data.activePecaContent.school.sections[i].name,
              ),
            )
            this.arrayColors.push('#81B03E')
          }
          if (this.UrlLapse === '1') {
            for (let i = 0; i < this.arraySections.length; i++) {
              this.dataChart.push(
                parseFloat(
                  data.activePecaContent.school.sections[i].diagnostics.lapse1
                    .wordsPerMinIndex,
                ).toFixed(2),
              )
            }
          } else if (this.UrlLapse === '2') {
            for (let i = 0; i < this.arraySections.length; i++) {
              this.dataChart.push(
                parseFloat(
                  data.activePecaContent.school.sections[i].diagnostics.lapse2
                    .wordsPerMinIndex,
                ).toFixed(2),
              )
            }
          } else {
            for (let i = 0; i < this.arraySections.length; i++) {
              this.dataChart.push(
                parseFloat(
                  data.activePecaContent.school.sections[i].diagnostics.lapse3
                    .wordsPerMinIndex,
                ).toFixed(2),
              )
            }
          }
        }
      },

      (error) => console.error(error),
    )
  }

  setSettings(settings: any) {
    this.settings = { ...settings }
  }

  getChartDatasets() {
    let datasets = []

    if (this.settings.datasets) {
      datasets = this.settings.datasets
    }

    if (!this.settings.datasets) {
      datasets = [
        {
          label: this.settings.legendName
            ? this.settings.legendName
            : 'Diagnóstico de lectura (%)',
          data: this.dataChart,
          backgroundColor: this.arrayColors,
          fill: true,
        },
      ]
    }

    return datasets
  }

  getOptions() {
    var max = Math.max(...this.dataChart)
    if(max > 100 && max <= 120){
      max = 120
    }else if(max > 120 && max <= 140){
      max = 140
    }else if(max > 140 && max <= 160){
      max = 160
    }
    
    var maxValue = max > 100 ? max : 100
    
    if (this.settings.options) {
      return this.settings.options
    }

    return {
      maintainAspectRatio: false,
      title: {
        //text: "BAR CHART",
        display: true,
      },
      scales: {
        yAxes: [
          {
            suggestedMax: 100,
            suggestedMin: 0,
            ticks: {
              fontColor: this.color,
              beginAtZero: true,
              max: maxValue
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              fontColor: this.color,
              beginAtZero: true,
            },
          },
        ],
      },
      legend: {
        labels: {
          fontColor: this.color,
        },
      },
      plugins: {
        datalabels: {
          display: false,
        },
      },
    }
  }

  loadChart() {
    if (document.getElementById(this.settings.chartId)) {
      this.canvas = document.getElementById(this.settings.chartId)
      this.ctx = this.canvas.getContext('2d')
      // Chart.plugins.register(ChartDataLabels);
      this.chart = new Chart(this.ctx, {
        type: 'bar',
        data: {
          labels: this.dataLabel,
          datasets: this.getChartDatasets(),
        },
        options: this.getOptions(),
        plugins: [ChartDataLabels],
      })
    }
  }

  ngOnDestroy() {
    if (this.infoDataSubscription) {
      this.infoDataSubscription.unsubscribe()
    }
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe()
    }
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }
}
