import { Component, OnInit, OnDestroy, DoCheck } from "@angular/core";
import { PageBlockComponent, PresentationalBlockComponent } from "../page-block.component";
import { NG2_SMART_TABLE_DEFAULT_SETTINGS as defaultSettings } from "./ng2-smart-table-default-settings";
import { LocalDataSource } from "ng2-smart-table";
import { GlobalService } from "src/app/services/global.service";
import { Subscription } from "rxjs";
import cloneDeep from "lodash/cloneDeep";
import localeEs from "@angular/common/locales/es-VE";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeEs, "es");

@Component({
  selector: "table-block",
  templateUrl: "./ng2-smart-table-template.html",
  styleUrls: ["./table-block.component.scss"],
})
export class TableBlockComponent implements PresentationalBlockComponent, OnInit, OnDestroy, DoCheck {
  type: "presentational";
  name: string;
  component: string;
  settings: {
    columns: any;
    // dataTypes: {};
    tableCode: string; // specifies which table to work with
    buttonCode?: string; // to know if sending info to textsandbuttons component and specify which instance to manage
    hideImgContainer?: boolean; // if view has image adder container set this to true
    modalCode?: string; // for views with modal inside
    isFromImgContainer?: boolean; // indicates if data in table is from an image container
    classes: {
      hideView: boolean;
      hideEdit: boolean;
      hideDelete: boolean;
    };
    total?: number;
    updateTotal: (rows) => number;
    isImageFirstCol?: boolean;
    makesNoRequest?: boolean; // if true, this form makes no request to api
    tableTitle?: string; // to set a title for the table
    onDelete: Function | null;
  };

  tableStates: any = {};
  thisLapse: string;

  userCanCreate: boolean = true;
  userCanEdit: boolean = true;
  userCanDelete: boolean = true;
  userCanView: boolean = true;

  // source: LocalDataSource | any;
  source: LocalDataSource;
  isEdited: boolean;
  isEditable: boolean = true; // to disable editing on table actions
  isContentRefreshing: boolean = false;

  private subscription: Subscription = new Subscription();

  canTableSendFormDataToBtn: boolean = true;
  isTableContentEdited: boolean;

  tableInitialData: object = {};

  constructor(private globals: GlobalService) {
    this.type = "presentational";
    this.component = "table";
  }

  ngOnInit() {
    this.subscription.add(
      // data actions (data.action): set, add, edit, delete, view
      this.globals.updateTableDataEmitter.subscribe((data) => {
        this.confsOnTable(data);
      })
    );

    this.subscription.add(
      this.globals.showImageContainerEmitter.subscribe((code) => {
        if (this.settings.buttonCode && this.settings.buttonCode == code)
          this.settings.hideImgContainer = false;
      })
    );

    this.subscription.add(
      this.globals.resetEditedEmitter.subscribe((btnCode) => {
        if (this.settings.buttonCode && this.settings.buttonCode == btnCode) {
          this.isEdited = false;
          this.isEditable = false;
        }
      })
    );

    this.subscription.add(
      this.globals.setReadonlyEmitter.subscribe((data) => {
        if (data.isBtnCode) {
          if (this.settings.buttonCode && this.settings.buttonCode == data.buttonCode)
            this.isEditable = !data.setReadOnly;
        } else {
          if (this.settings.tableCode && this.settings.tableCode == data.buttonCode)
            this.isEditable = !data.setReadOnly;
        }
      })
    );
  }
  ngOnDestroy() {
    this.settings[this.settings.tableCode] = null;
    this.source = null;
    this.isEdited = null;
    this.isEditable = true;
    this.canTableSendFormDataToBtn = true;
    this.isTableContentEdited = null;
    this.subscription.unsubscribe();
  }
  ngDoCheck() {
    console.log(this.tableStates);
    if (
      this.thisLapse &&
      (
        this.settings.tableCode === "initialDiagnosticConfigLectura" ||
        this.settings.tableCode === "initialDiagnosticConfigMatematica"
      )
    ) {
      this.tableStates[`${this.settings.tableCode}${this.thisLapse}`] = { ...this.source.getFilter(), ...this.source.getPaging() };
    }
  }

  async confsOnTable(data) {
    if (this.settings[data.code]) {
      let index = -1; //initial

      if (data.action != "add" && data.action != "set" && this.settings.isFromImgContainer) {
        index = this.settings["dataCopy"].findIndex((obj) => {
          return obj.id === data.data.oldData.id;
        });
      }

      const actionsOTablePromise = new Promise(async (resolve) => {
        switch (data.action) {
          case "edit":
            this.source
              .find(data.data.dataToCompare)
              .then(async (value) => {
                if (index != -1) this.settings["dataCopy"][index] = data.data.newData;
                this.source
                  .update(data.data.dataToCompare, data.data.newData)
                  .then((resp) => {})
                  .catch((error) => {});
                if (this.settings.updateTotal) {
                  const tableData = await this.source.getAll();
                  this.settings.total = this.settings.updateTotal(tableData);
                }
                this.source.refresh();
                if (this.settings.makesNoRequest && this.settings.buttonCode) this.isEdited = true;
                resolve(null)
              })
              .catch((error) => {resolve(null)});
            break;
  
          case "delete":
            this.source
              .find(data.data.dataToCompare)
              .then(async (value) => {
                if (index != -1) this.settings["dataCopy"].splice(index, 1);
                this.source.remove(data.data.dataToCompare);
                if (this.settings.updateTotal) {
                  const tableData = await this.source.getAll();
                  this.settings.total = this.settings.updateTotal(tableData);
                }
                this.source.refresh();
                if (this.settings.makesNoRequest && this.settings.buttonCode) this.isEdited = true;
                resolve(null)
              })
              .catch((error) => {resolve(null)});
            break;
  
          case "view":
            resolve(null)
            break;
  
          default:
            // add or set
            if (data.resetData) {
              this.settings[data.code] = data.dataArr;
              if (this.settings.isFromImgContainer)
                this.settings["dataCopy"] = [...this.settings[data.code]];
              this.source = new LocalDataSource(this.settings[data.code]);
            } else {
              if (this.settings.isFromImgContainer) this.settings["dataCopy"].push(data.data);
              if (this.settings.isFromImgContainer)
                this.settings[data.code] = [...this.settings["dataCopy"]];
              this.source.add(data.data);
              if (this.settings.updateTotal) {
                const tableData = await this.source.getAll();
                this.settings.total = this.settings.updateTotal(tableData);
              }
              this.source.refresh();
            }
            resolve(null)
            // if (this.settings.isFromImgContainer) this.source = new LocalDataSource(this.settings[data.code]);
            break;
        }
      });

      await actionsOTablePromise;

      this.isTableContentEdited = true;
      this.sendTableData();
    }
  }

  sendTableData() {
    //updating textAndButton button data
    if (this.settings.buttonCode) {
      let sendFormDataToBtn_ = false;

      if (!this.globals.getTableImgsCopy(this.settings.buttonCode) && !this.isTableContentEdited) this.globals.setTableImgsCopy(this.settings.buttonCode,this.settings["dataCopy"]);

      if (this.settings.isFromImgContainer && this.canTableSendFormDataToBtn) {
        if (this.globals.getTableImgsCopy(this.settings.buttonCode) && this.isTableContentEdited) {
          if (
            this.settings.buttonCode !== "schoolDataConfigRegistroEscuela" || 
            this.globals.getTableImgsCopy(this.settings.buttonCode).length !== this.settings["dataCopy"].length || 
            this.settings["dataCopy"].reverse().some(tableEl => tableEl.source ? tableEl.source.includes(";base64,") : true) || 
            !this.settings["dataCopy"].every((tableEl,inx) => tableEl.description === this.globals.getTableImgsCopy(this.settings.buttonCode)[inx].description)
          ) sendFormDataToBtn_ = true;
        }
      }
      else if (this.canTableSendFormDataToBtn) sendFormDataToBtn_ = true;

      this.globals.sendFormDataToBtn(this.settings.buttonCode,sendFormDataToBtn_);

      if (this.settings.isFromImgContainer) {
        this.globals.buttonDataUpdater({
          code: this.settings.buttonCode,
          whichData: "table",
          table: this.settings["dataCopy"],
          wasEdited: sendFormDataToBtn_ ? true : false,
          tableEdited: this.isTableContentEdited,
        });
      } else {
        this.source.getAll().then((value) => {
          this.globals.buttonDataUpdater({
            code: this.settings.buttonCode,
            whichData: "table",
            table: value,
            wasEdited: true,
            tableEdited: this.isTableContentEdited,
          });
        });
      }
    }
  }

  setSettings(settings: any) {
    this.settings = { ...defaultSettings, ...settings };
    if (this.settings.isFromImgContainer)
      this.settings["dataCopy"] = [...this.settings[this.settings.tableCode]];
    this.source = new LocalDataSource(this.settings[this.settings.tableCode]);
  }

  setData(data: any) {
    if (data["classes"]) {
      this.settings.classes = data["classes"];
    }
    if (!this.isEdited) {
      if (this.settings.isFromImgContainer) this.settings["dataCopy"] = [...data.data];
      this.source = new LocalDataSource(data.data);
      this.isEditable = data.isEditable ? true : false;

      if (data.hasTitle) {
        this.isContentRefreshing = true;
        this.settings["tableTitle"] = data.hasTitle.tableTitle;
        setTimeout(() => {
          this.isContentRefreshing = false;
        });
      }

      this.sendTableData();

      if (
        this.settings.tableCode === "initialDiagnosticConfigLectura" ||
        this.settings.tableCode === "initialDiagnosticConfigMatematica"
      ) {
        this.thisLapse = data.lapse;
      }

      if (
        this.settings.tableCode && 
        this.tableStates[`${this.settings.tableCode}${this.thisLapse}`] && 
        (
          this.settings.tableCode === "initialDiagnosticConfigLectura" ||
          this.settings.tableCode === "initialDiagnosticConfigMatematica"
        ) 
      ) {
        const { filters, page } = this.tableStates[`${this.settings.tableCode}${this.thisLapse}`];
        if (filters && filters.length) this.source.setFilter([...filters]);
        setTimeout(() => {
          this.source.getFilteredAndSorted().then( data => {
            const decs = `${data.length  / 5}`;
            const decs_splitted = decs.split(".");
            let pages = parseInt(decs);
            if (decs_splitted.length > 1) pages++;
            if (page) this.source.setPage(page <= pages ? page : pages);
          });
        });
      }
    }
  }

  onCustomActions(e) {
    let index = this.settings.isFromImgContainer
      ? this.settings["dataCopy"].findIndex((obj) => {
          return obj.id === e.data.id;
        })
      : -1;

    let obj = {
      componentName: this.name,
      code: this.settings.modalCode,
      data: {
        dataCopyData: index != -1 ? this.settings["dataCopy"][index] : e.data,
        dataToCompare: e.data,
        oldData: cloneDeep(e.data),
        newData: cloneDeep(e.data),
      },
      action: e.action.toLowerCase(),
      showBtn: false,
      component: "form",
    };

    switch (e.action) {
      case "VIEW":
        this.globals.ModalShower(obj);
        break;

      case "EDIT":
        if (this.isEditable) {
          obj.showBtn = true;
          this.globals.ModalShower(obj);
        }
        break;

      case "DELETE":
        if (this.settings.onDelete) {
          this.settings.onDelete(obj);
        }
        if (this.isEditable) {
          obj.component = "textsbuttons";
          this.globals.ModalShower(obj);
        }
        break;
    }
  }
}
