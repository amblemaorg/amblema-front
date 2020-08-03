import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart, ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { PageBlockComponent, PresentationalBlockComponent } from '../page-block.component';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { PecaState } from 'src/app/store/states/peca/peca.state';
import { Select } from '@ngxs/store';
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
  @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;
  routerSubscription: Subscription;
  infoDataSubscription: Subscription;
  UrlLapse = "";
  resultadoLectura: any;
  indiceLectura: number;
  resultadoMultiplicacion: number;
  indiceMultiplicacion: number;
  resultadoLogica: number;
  indiceLogica: number;


  constructor( private router: Router) {
    this.type = 'presentational';
    this.component = 'graphics';
    this.routerSubscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.UrlLapse = event.url;
        this.UrlLapse = this.router.url.substr(12, 1);
      }
    });
  }

  ngOnInit() {
    this.getInfo();
  }

  getInfo(){
    this.UrlLapse=this.router.url.substr(12, 1)
    this.infoDataSubscription = this.infoData$.subscribe(
      (data) => {
        if (data.activePecaContent) {
          if (this.UrlLapse==='1'){
          this.resultadoLectura= data.activePecaContent.school.sections[0].diagnostics.lapse1.wordsPerMin;
          this.indiceLectura= data.activePecaContent.school.sections[0].diagnostics.lapse1.wordsPerMinIndex;
          this.resultadoMultiplicacion= data.activePecaContent.school.sections[0].diagnostics.lapse1.multiplicationsPerMin;
          this.indiceMultiplicacion= data.activePecaContent.school.sections[0].diagnostics.lapse1.multiplicationsPerMinIndex;
          this.resultadoLogica= data.activePecaContent.school.sections[0].diagnostics.lapse1.operationsPerMin;
          this.indiceLogica= data.activePecaContent.school.sections[0].diagnostics.lapse1.operationsPerMinIndex;
          console.log('this.resultadoLectura',this.resultadoLectura);
          console.log('this.indiceLectura',this.indiceLectura);
          console.log('this.resultadoMultiplicacion',this.resultadoMultiplicacion);
          console.log('this.resultadoLogica',this.resultadoLogica);
          console.log('this.indiceLogica',this.indiceLogica);
          console.log('indiceMultiplicacion', this.indiceMultiplicacion); 
          }
          else if (this.UrlLapse==='2') {
            this.resultadoLectura= data.activePecaContent.school.sections[0].diagnostics.lapse2.wordsPerMin;
            this.indiceLectura= data.activePecaContent.school.sections[0].diagnostics.lapse2.wordsPerMinIndex;
            this.resultadoMultiplicacion= data.activePecaContent.school.sections[0].diagnostics.lapse2.multiplicationsPerMin;
            this.indiceMultiplicacion= data.activePecaContent.school.sections[0].diagnostics.lapse2.multiplicationsPerMinIndex;
            this.resultadoLogica= data.activePecaContent.school.sections[0].diagnostics.lapse2.operationsPerMin;
            this.indiceLogica= data.activePecaContent.school.sections[0].diagnostics.lapse2.operationsPerMinIndex;
             console.log('this.resultadoLectura',this.resultadoLectura);
            console.log('this.indiceLectura',this.indiceLectura);
            console.log('this.resultadoMultiplicacion',this.resultadoMultiplicacion);
            console.log('this.resultadoLogica',this.resultadoLogica);
            console.log('this.indiceLogica',this.indiceLogica);
            console.log('indiceMultiplicacion', this.indiceMultiplicacion); 
          }
          else {
            this.resultadoLectura= data.activePecaContent.school.sections[0].diagnostics.lapse3.wordsPerMin;
            this.indiceLectura= data.activePecaContent.school.sections[0].diagnostics.lapse3.wordsPerMinIndex;
            this.resultadoMultiplicacion= data.activePecaContent.school.sections[0].diagnostics.lapse3.multiplicationsPerMin;
            this.indiceMultiplicacion= data.activePecaContent.school.sections[0].diagnostics.lapse3.multiplicationsPerMinIndex;
            this.resultadoLogica= data.activePecaContent.school.sections[0].diagnostics.lapse3.operationsPerMin;
            this.indiceLogica= data.activePecaContent.school.sections[0].diagnostics.lapse3.operationsPerMinIndex;
             console.log('this.resultadoLectura',this.resultadoLectura);
            console.log('this.indiceLectura',this.indiceLectura);
            console.log('this.resultadoMultiplicacion',this.resultadoMultiplicacion);
            console.log('this.resultadoLogica',this.resultadoLogica);
            console.log('this.indiceLogica',this.indiceLogica);
            console.log('indiceMultiplicacion', this.indiceMultiplicacion); 
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
    if(document.getElementById(this.settings.chartId)) {
      this.canvas = document.getElementById(this.settings.chartId);
      this.ctx = this.canvas.getContext('2d');
  
      this.chart = new Chart(this.ctx, {
        type: "bar",
        data: {
          labels: ['Primer grado C'],
          datasets: [
            {
              label: 'Resultado de lectura',
              data: [this.resultadoLectura],
              backgroundColor: [
                '#81b03e',
              ],
              fill: false
            },
            {
              label: 'Índice de lectura',
              data: [this.indiceLectura],
              backgroundColor: [
                '#EEE9E8',
              ],
              fill: false
            },
            {
              label: 'Resultado de lógica matemática',
              data: [this.resultadoLogica],
              backgroundColor: [
                '#00353a',
              ],
              fill: false
            },
            {
              label: 'Índice de lógica matemática',
              data: [this.indiceLogica],
              backgroundColor: [
                '#00353a',
              ],
              fill: false
            },
            {
              label: 'Resultado de multiplicación',
              data: [this.resultadoMultiplicacion],
              backgroundColor: [
                '#00353a',
              ],
              fill: false
            },
            {
              label: 'Índice de multiplicación',
              data: [this.indiceMultiplicacion],
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
  ngOnDestroy() {
    this.infoDataSubscription.unsubscribe();
    this.routerSubscription.unsubscribe();
  }
}
