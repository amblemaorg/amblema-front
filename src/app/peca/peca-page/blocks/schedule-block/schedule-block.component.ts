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
import { extend } from '@syncfusion/ej2-base';
import { Observable, Subscription } from "rxjs";
import { PecaState } from "../../../../store/states/peca/peca.state";
import { Select } from "@ngxs/store";
import { isNullOrUndefined } from "util";
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


  /*************************************** */

  //Selectores
  @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;

  //subscripciones
  infoDataSubscription: Subscription;

  isInstanciated: boolean;
  loadedData: boolean;
  /*************************************** */



  /*Ejemplo Consumo remoto*/
  /* private dataManager: DataManager = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData', 
    adaptor: new ODataV4Adaptor,
    crossDomain: true
  });
  private dataQuery: Query = new Query().from("Events");

  public eventSettings: EventSettingsModel = { dataSource: this.dataManager }; */
  /*--------------------------------------------------------*/

  /*COnsumo Local*/
  /* public data: object[] = [{
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
  }]; */
  public eventSettings: EventSettingsModel ;/* = {
    dataSource: this.data
  } */
  /*-------------------------------------------------------*/

  public allowVirtualScroll: boolean = true;
  public currentView: View = 'Month';
  private instance: Internationalization = new Internationalization();
  getTimeString(value: Date): string {
    return this.instance.formatDate(value, { skeleton: 'hm' });
  };
  public isReadOnly: boolean = true;


  ngOnInit() {
    let prueba = [{Description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
    EndTime: new Date(2020, 6, 21),
    Id: "5f0fa00152621b4c06c4cbc2",
    StartTime: new Date(2020, 6, 21),}]
    this.infoDataSubscription = this.infoData$.subscribe(
      data => {
        if (data.activePecaContent) {
          if (!isNullOrUndefined(data)) {
            console.log(data, "data schedule")
            console.log(new Date(2020, 6, 21))
          }

          this.eventSettings = {
            dataSource: prueba
          } 

          this.loadedData = true;
          if (this.isInstanciated) this.updateMethods();
        }

      }, er => { console.log(er) })
      console.log(this.eventSettings, "holaaaaaaaaaaaaaa")
  }




  updateMethods() {
    //this.updateDataToBlocks();
  }

  setSettings(settings: any) {
    this.settings = { ...settings };
  }
}




