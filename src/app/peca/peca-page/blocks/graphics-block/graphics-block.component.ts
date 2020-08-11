import { Component, OnInit, AfterViewInit, OnDestroy } from "@angular/core";
import { Chart, ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";
import {
  PageBlockComponent,
  PresentationalBlockComponent,
} from "../page-block.component";
import { Router, NavigationEnd, Event } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { PecaState } from "src/app/store/states/peca/peca.state";
import { Select } from "@ngxs/store";
import { PdfYearbookService } from '../../../../services/peca/pdf-yearbook.service';

@Component({
  selector: "app-graphics-block",
  templateUrl: "./graphics-block.component.html",
  styleUrls: ["./graphics-block.component.scss"],
})
export class GraphicsBlockComponent
  implements PresentationalBlockComponent, OnInit, AfterViewInit, OnDestroy {
  type: "presentational";
  component: string;
  settings: {
    chartId?: string;
    sendGraphicToPdf?: string;
    lapseN?: number;
    items: any[];
  };
  canvas: any;
  ctx: any;
  chart: any;
  color: any;
  @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;
  routerSubscription: Subscription;
  infoDataSubscription: Subscription;
  arraySections = [];
  arrayColors=[];
  dataChart = [];
  dataLabel = [];
  UrlLapse = "";

  private subscription: Subscription = new Subscription();

  constructor(private router: Router, private pdfYearbookService: PdfYearbookService) {
    this.type = "presentational";
    this.component = "graphics";
    this.routerSubscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.UrlLapse = event.url;
        this.UrlLapse = this.router.url.substr(12, 1);
      }
    });
  }

  ngOnInit() {
    if (this.router.url.substring(14, 33) == "diagnostico-inicial") {
      this.color = "#FFF";
    } else this.color = "#111";
    this.getInfo();

    this.subscription.add(
      this.pdfYearbookService.callGraphicBase64ImgEmitter.subscribe(res => {
        if (this.settings.lapseN && this.settings.sendGraphicToPdf) {
          const imgB64 = this.chart ? this.chart.toBase64Image() : null;
          this.pdfYearbookService.setGraphics(`lapse${this.settings.lapseN}`,this.settings.sendGraphicToPdf,imgB64); 
        }        
      })
    );
  }

  getInfo() {
    this.UrlLapse = this.router.url.substr(12, 1);
    this.infoDataSubscription = this.infoData$.subscribe(
      (data) => {
        if (data.activePecaContent) {
          this.arraySections = data.activePecaContent.school.sections;
          //console.log("secciones", this.arraySections);

          for (let i = 0; i < this.arraySections.length; i++) {
            this.dataLabel.push(
              `${data.activePecaContent.school.sections[i].grade} grado ${data.activePecaContent.school.sections[i].name}`
            );
            this.arrayColors.push(
              "#81B03E"
            );
          }
          if (this.UrlLapse === "1") {
            for (let i = 0; i < this.arraySections.length; i++) {
              this.dataChart.push(
                parseFloat(data.activePecaContent.school.sections[i].diagnostics.lapse1
                  .wordsPerMinIndex).toFixed(2)
              );
            }
          } else if (this.UrlLapse === "2") {
            for (let i = 0; i < this.arraySections.length; i++) {
              this.dataChart.push(
                parseFloat(data.activePecaContent.school.sections[i].diagnostics.lapse2
                  .wordsPerMinIndex).toFixed(2)
              );
            }
          } else {
            for (let i = 0; i < this.arraySections.length; i++) {
              this.dataChart.push(
                parseFloat(data.activePecaContent.school.sections[i].diagnostics.lapse3
                  .wordsPerMinIndex).toFixed(2)
              );
            }
          }
        }
      },

      (error) => console.error(error)
    );
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
    if (document.getElementById(this.settings.chartId)) {
      this.canvas = document.getElementById(this.settings.chartId);
      this.ctx = this.canvas.getContext("2d");
      this.chart = new Chart(this.ctx, {
        type: "bar",
        data: {
          labels: this.dataLabel,
          datasets: [
            {
              label: 'Diagnóstico de lectura',
              data: this.dataChart,
              backgroundColor: this.arrayColors,
              fill: true,
            },
          ],
        },
        options: {
          title: {
            //text: "BAR CHART",
            display: true,
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  fontColor: this.color,
                  beginAtZero: true,
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
        },
      });

    }
  }

  ngOnDestroy() {
    this.infoDataSubscription.unsubscribe();
    this.routerSubscription.unsubscribe();
    this.subscription.unsubscribe();
  }

}
