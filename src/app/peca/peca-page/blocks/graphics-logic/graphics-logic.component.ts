import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Chart, ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";
import {
  PageBlockComponent,
  PresentationalBlockComponent,
} from "../page-block.component";
import { Router, NavigationEnd, Event } from "@angular/router";
import { Select } from "@ngxs/store";
import { PecaState } from "src/app/store/states/peca/peca.state";
import { Subscription, Observable } from "rxjs";

@Component({
  selector: "app-graphics-logic",
  templateUrl: "./graphics-logic.component.html",
  styleUrls: ["./graphics-logic.component.scss"],
})
export class GraphicsLogicComponent
  implements PresentationalBlockComponent, OnInit, AfterViewInit
{
  type: "presentational";
  component: string;
  settings: {
    chartId?: string;
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
  arrayColors = [];
  dataChart = [];
  dataLabel = [];
  UrlLapse = "";
  constructor(private router: Router) {
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
  }

  parseGradeName(grade, name): string {
    switch (grade) {
      case "0":
        return `Preescolar ${name}`;
      case "1":
        return `1er Grado ${name}`;
      case "2":
        return `2do Grado ${name}`;
      case "3":
        return `3er Grado ${name}`;
      case "4":
        return `4to Grado ${name}`;
      case "5":
        return `5to Grado ${name}`;
      case "6":
        return `6to Grado ${name}`;
      default:
        return `${grade} Grado ${name}`;
    }
  }

  getInfo() {
    this.UrlLapse = this.router.url.substr(12, 1);
    this.infoDataSubscription = this.infoData$.subscribe(
      (data) => {
        if (data.activePecaContent) {
          this.arraySections = data.activePecaContent.school.sections;

          for (let i = 0; i < this.arraySections.length; i++) {
            this.dataLabel.push(
              this.parseGradeName(
                data.activePecaContent.school.sections[i].grade,
                data.activePecaContent.school.sections[i].name
              )
            );
            this.arrayColors.push("#00353A");
          }
          if (this.UrlLapse === "1") {
            for (let i = 0; i < this.arraySections.length; i++) {
              this.dataChart.push(
                parseFloat(
                  data.activePecaContent.school.sections[i].diagnostics.lapse1
                    .operationsPerMinIndex
                ).toFixed(2)
              );
            }
          } else if (this.UrlLapse === "2") {
            for (let i = 0; i < this.arraySections.length; i++) {
              this.dataChart.push(
                parseFloat(
                  data.activePecaContent.school.sections[i].diagnostics.lapse2
                    .operationsPerMinIndex
                ).toFixed(2)
              );
            }
          } else {
            for (let i = 0; i < this.arraySections.length; i++) {
              this.dataChart.push(
                parseFloat(
                  data.activePecaContent.school.sections[i].diagnostics.lapse3
                    .operationsPerMinIndex
                ).toFixed(2)
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
              label: "Diagnóstico de lógica matemática",
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
  }
}
