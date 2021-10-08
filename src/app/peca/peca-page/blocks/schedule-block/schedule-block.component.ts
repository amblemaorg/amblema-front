import {
  Component,
  OnInit,
  ViewContainerRef,
  QueryList,
  ViewChildren,
} from "@angular/core";
import { PresentationalBlockComponent } from "../page-block.component";
import { PageBlockFactory } from "../page-block-factory";
import {
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  AgendaService,
  View,
  EventSettingsModel,
} from "@syncfusion/ej2-angular-schedule";
import { Internationalization, L10n, loadCldr } from "@syncfusion/ej2-base";
import * as numberingSystems from "cldr-data/supplemental/numberingSystems.json";
import * as gregorian from "cldr-data/main/es/ca-gregorian.json";
import * as numbers from "cldr-data/main/es/numbers.json";
import * as timeZoneNames from "cldr-data/main/es/timeZoneNames.json";
import { Observable, Subscription } from "rxjs";
import { PecaState } from "../../../../store/states/peca/peca.state";
import { Select } from "@ngxs/store";
import { isNullOrUndefined } from "util";
import { DatePipe } from "@angular/common";
loadCldr(
  numberingSystems["default"],
  gregorian["default"],
  numbers["default"],
  timeZoneNames["default"]
);
L10n.load({
  es: {
    schedule: {
      month: "Mes",
      agenda: "Listado",
      today: "Hoy",
      allDay: "Todo el dia",
      close: "Cerrar",
      delete: "Eliminar",
      edit: "Editar",
    },
  },
});

@Component({
  selector: "app-schedule-block",
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
  ],
  templateUrl: "./schedule-block.component.html",
  styleUrls: ["./schedule-block.component.scss"],
})
export class ScheduleBlockComponent
  implements PresentationalBlockComponent, OnInit {
  @ViewChildren("agendaContainer", { read: ViewContainerRef })
  agendaContainer: QueryList<ViewContainerRef>;
  factory: PageBlockFactory;

  type: "presentational";
  component: string;
  settings: {
    items: any[];
  };

  pipe = new DatePipe("en-US");
  schedules: any;
  constructor() {
    this.type = "presentational";
    this.component = "agendas";
  }

  //Selectores
  @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;

  //subscripciones
  infoDataSubscription: Subscription;

  isInstanciated: boolean;
  loadedData: boolean;
  /*--------------------------------------------------------*/

  /*Consumo Local*/
  /*
  public data: object[] = [{
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
  */
  public eventSettings: EventSettingsModel;
  public allowVirtualScroll: boolean = true;
  public currentView: View = "Month";
  private instance: Internationalization = new Internationalization();
  getTimeString(value: Date): string {
    return this.instance.formatDate(value, { skeleton: "hm" });
  }
  public isReadOnly: boolean = true;

  ngOnInit() {
    this.infoDataSubscription = this.infoData$.subscribe(
      (data) => {
        if (data && data.activePecaContent) {
          // if (!isNullOrUndefined(data)) {
          // }
          let auxSchedule = [];
          data.activePecaContent.schedule.forEach((schedule) => {
            // Change "-" for "/" in date string to instantiate valid dates in iOS and OSX
            schedule.StartTime = new Date(
              schedule.StartTime.replace(/-/g, "/")
            );
            schedule.EndTime = new Date(schedule.EndTime.replace(/-/g, "/"));
            //schedule.StartTime = this.pipe.transform(Date.parse( schedule.StartTime), 'yyyy/MM/dd , h:mm');
            //schedule.EndTime = this.pipe.transform(Date.parse(schedule.EndTime), 'yyyy/MM/dd , h:mm');
          });
          auxSchedule = auxSchedule.concat(data.activePecaContent.schedule);
          this.schedules = auxSchedule;
          this.eventSettings = {
            dataSource: this.schedules,
          };
          this.loadedData = true;
          if (this.isInstanciated) this.updateMethods();
        }
      },
      (er) => {
        console.log(er);
      }
    );
  }
  updateMethods() {
    //this.updateDataToBlocks();
  }

  setSettings(settings: any) {
    this.settings = { ...settings };
  }
}
