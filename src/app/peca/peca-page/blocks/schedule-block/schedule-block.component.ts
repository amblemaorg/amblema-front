import { Component, OnInit, AfterViewInit, ViewContainerRef, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { PageBlockComponent, PresentationalBlockComponent } from '../page-block.component';
import { PageBlockFactory } from '../page-block-factory';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { Internationalization, L10n, loadCldr } from '@syncfusion/ej2-base';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import * as  numberingSystems from 'cldr-data/supplemental/numberingSystems.json';
import * as  gregorian from 'cldr-data/main/es/ca-gregorian.json';
import * as  numbers from 'cldr-data/main/es/numbers.json';
import * as  timeZoneNames from 'cldr-data/main/es/timeZoneNames.json';

loadCldr(numberingSystems['default'], gregorian['default'], numbers['default'], timeZoneNames['default']);
L10n.load({
  "es": {
    "schedule": {
      "month": "Mes",
      "agenda": "Listado",
      "today": "Hoy",
      "allDay": "Todo el dia",
      "close": "Cerrar",
      "delete": "Eliminar",
      "edit": "Editar",
    },
  }
});

@Component({
  selector: 'app-schedule-block',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  templateUrl: './schedule-block.component.html',
  styleUrls: ['./schedule-block.component.scss']
})
export class ScheduleBlockComponent implements PresentationalBlockComponent, OnInit {
  @ViewChildren('agendaContainer', { read: ViewContainerRef }) agendaContainer: QueryList<ViewContainerRef>;
  factory: PageBlockFactory;

  type: 'presentational';
  component: string;
  settings: {
    items: any[];
  }
  constructor() {
    this.type = 'presentational';
    this.component = 'agendas';
  }


  /*Ejemplo Consumo remoto*/
  private dataManager: DataManager = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
  });
  private dataQuery: Query = new Query().from("Events");
  public eventSettings: EventSettingsModel = { dataSource: this.dataManager, query: this.dataQuery };
/*--------------------------------------------------------*/

  /*COnsumo Local*/
  /*public data: object[] = [{
    Id: 1,
    Subject: 'Meeting',
    StartTime: new Date(2020, 5, 15),
    EndTime: new Date(2020, 5, 17),
    Description: 'Meeting time changed based on team activities.',
    IsAllDay: true,
    CategoryColor: "Blue",
  },
  {
    Id: 2,
    Subject: 'Scrum Meeting',
    StartTime: new Date(2020, 5, 30, 9, 0),
    EndTime: new Date(2020, 5, 30, 10, 30),
    Description: 'Meeting time changed based on team activities.',
  }];
  public eventSettings: EventSettingsModel = {
    dataSource: this.data
  }*/
/*-------------------------------------------------------*/

  public allowVirtualScroll: boolean = true;
  public currentView: View = 'Month';
  private instance: Internationalization = new Internationalization();
  getTimeString(value: Date): string {
    return this.instance.formatDate(value, { skeleton: 'hm' });
  };
  public isReadOnly: boolean = true;


  ngOnInit() {
  }

  setSettings(settings: any) {
    this.settings = { ...settings };
  }


}