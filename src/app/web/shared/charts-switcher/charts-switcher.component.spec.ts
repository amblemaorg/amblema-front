import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsSwitcherComponent } from './charts-switcher.component';
import { Component } from '@angular/core';
import { ChartsSwitcherModule } from './charts-switcher.module';
import { ChartsModule } from 'ng2-charts';

describe('ChartsSwitcherComponent', () => {
  @Component({
    selector: `charts-switcher-host`,
    template: `<charts-switcher [options]="chartSwitcherOptions"></charts-switcher>`
  })
  class ChartsSwitcherHostComponent {
    chartSwitcherOptions = {
      direction: 'column',
      charts: [
        {
          title: 'Diagnóstico de Lectura',
          type: 'line',
          data: [
            { label: 'Lapso 2 (2017-2018)', value: 10 },
            { label: 'Lapso 3 (2017-2018)', value: 20 },
            { label: 'Lapso 1 (2018-2019)', value: 40 },
            { label: 'Lapso 2 (2018-2019)', value: 30 },
            { label: 'Lapso 3 (2018-2019)', value: 20 },
            { label: 'Lapso 1 (2019-2020)', value: 30 },
            { label: 'Lapso 2 (2019-2020)', value: 50 },
            { label: 'Lapso 2 (2017-2018)', value: 10 },
            { label: 'Lapso 3 (2017-2018)', value: 20 },
            { label: 'Lapso 1 (2018-2019)', value: 40 },
            { label: 'Lapso 2 (2018-2019)', value: 30 },
            { label: 'Lapso 3 (2018-2019)', value: 20 },
            { label: 'Lapso 1 (2019-2020)', value: 30 },
            { label: 'Lapso 2 (2019-2020)', value: 50 },
            { label: 'Lapso 2 (2017-2018)', value: 10 },
          ],
          props: {
            colors: ['#81B03E', '#00722E'],
          },
          markers: {
            show: true,
            color: '#81B03E'
          },
          xaxis: {
          },
          yaxis: {
            labels: false
          },
          grid: {
          },
          asymptotes: [{
            axis: 'y',
            color: '#FFF',
            title: 'Valor esperado: 50',
            value: 50
          }]
        },
        {
          title: 'Palabras por minuto',
          type: 'line',
          data: [
            { label: 'Lapso 2 (2017-2018)', value: 100 },
            { label: 'Lapso 3 (2017-2018)', value: 90  },
            { label: 'Lapso 1 (2018-2019)', value: 120 },
            { label: 'Lapso 2 (2018-2019)', value: 120 },
            { label: 'Lapso 3 (2018-2019)', value: 110 },
            { label: 'Lapso 1 (2019-2020)', value: 130 },
            { label: 'Lapso 2 (2019-2020)', value: 150 },
          ],
          props: {
            colors: ['#81B03E', '#00722E'],
          },
          markers: {
            show: true,
            color: '#81B03E'
          },
          xaxis: {
          },
          yaxis: {
            labels: false
          },
          grid: {
          },
          asymptotes: [{
            axis: 'y',
            color: '#FFF',
            title: 'Valor esperado: 160',
            value: 160
          }]
        },
        {
          title: 'Diagnóstico de matemática',
          type: 'line',
          data: [
            { label: 'Lapso 2 (2017-2018)', value: 20 },
            { label: 'Lapso 3 (2017-2018)', value: 30 },
            { label: 'Lapso 1 (2018-2019)', value: 15 },
            { label: 'Lapso 2 (2018-2019)', value: 20 },
            { label: 'Lapso 3 (2018-2019)', value: 20 },
            { label: 'Lapso 1 (2019-2020)', value: 30 },
            { label: 'Lapso 2 (2019-2020)', value: 40 },
          ],
          props: {
            colors: ['#81B03E', '#00722E'],
          },
          markers: {
            show: true,
            color: '#81B03E'
          },
          xaxis: {
          },
          yaxis: {
            labels: false
          },
          grid: {
          },
          asymptotes: [{
            axis: 'y',
            color: '#FFF',
            title: 'Valor esperado: 50',
            value: 50
          }]
        },
      ],
    }
  }

  let hostComponent: ChartsSwitcherHostComponent;
  let hostFixture: ComponentFixture<ChartsSwitcherHostComponent>;
  let component: ChartsSwitcherComponent;
  let fixture: ComponentFixture<ChartsSwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChartsSwitcherHostComponent
      ],
      imports: [
        ChartsModule,
        ChartsSwitcherModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    hostFixture = TestBed.createComponent(ChartsSwitcherHostComponent);
    hostComponent = hostFixture.componentInstance;
    hostFixture.detectChanges();
  });

  it('should create', () => {
    const chartsSwitcherComponent = hostFixture.nativeElement.querySelector('charts-switcher');
    expect(chartsSwitcherComponent).toBeTruthy();
  });
});
