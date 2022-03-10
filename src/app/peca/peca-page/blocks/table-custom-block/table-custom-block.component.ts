import { cloneDeep } from "lodash/cloneDeep";
import { GlobalService } from "./../../../../services/global.service";
import { LocalDataSource } from "ng2-smart-table";
import { PresentationalBlockComponent } from "./../page-block.component";
import { AfterViewChecked } from "@angular/core";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-table-custom-block",
  templateUrl: "./table-custom-block.component.html",
  styleUrls: ["./table-custom-block.component.scss"],
})
export class TableCustomBlockComponent
  implements OnInit, AfterViewChecked, PresentationalBlockComponent
{
  constructor(private globals: GlobalService) {}
  source: {}[] | LocalDataSource;
  //
  type: "presentational";
  settings: any;
  // name?: string; // Not use
  component: string; // Not use
  // viewMode?: string;
  setSettings(settings: any): void {
    // throw new Error("Method not implemented.");
  }
  setData?(data: any): void {
    // throw new Error("Method not implemented.");
  }
  setFetcherUrls?(urls: object): void {
    // throw new Error("Method not implemented.");
  }
  //

  ngOnInit(): void {
    const width = "20%";
    this.settings = {
      selectMode: "multi",
      columns: {
        column1: {
          title: "column1",
          width,
        },
        column2: {
          title: "column2",
          width,
        },
      },
      pager: {
        display: true,
        perPage: 2,
      },
      actions: {
        columnTitle: "Acciones",
        add: false,
        edit: false,
        delete: true,
        custom: [
          { name: "VIEW", title: '<i class="icon-eye"></i>' },
          { name: "EDIT", title: '<i class="icon-pencil"></i>' },
          { name: "DELETE", title: '<i class="icon-trash"></i>' },
        ],
      },
      delete: {
        deleteButtonContent: '<i class="ion-trash-a"></i>',
        confirmDelete: true,
      },
    };

    this.source = [
      {
        id: 1,
        column1: "row1 y column1",
        column2: "row1 y column2",
      },
      {
        id: 2,
        column1: "row1 y column1",
        column2: "row1 y column2",
      },
      {
        id: 3,
        column1: "row1 y column1",
        column2: "row1 y column2",
      },
    ];

    this.source = new LocalDataSource(this.source);
  }

  onUserRowSelect($event) {
    console.log("onUserRowSelect", $event);
  }

  onCustomActions(e) {
    console.log("onCustomActions", e);
    console.log("source", this.source);

    // ///
    let index = -1;
    console.log("this.settings", this.settings);
    let obj = {
      componentName: this.settings.name,
      code: this.settings.modalCode,
      // data: {
      //   dataCopyData: e.data,
      //   dataToCompare: e.data,
      //   oldData: cloneDeep(e.data),
      //   newData: cloneDeep(e.data),
      // },
      action: e.action.toLowerCase(),
      showBtn: false,
      component: "form",
    };

    switch (e.action) {
      case "VIEW":
        this.globals.ModalShower(obj);
        break;

      case "EDIT":
        // if (this.isEditable) {
        obj.showBtn = true;
        this.globals.ModalShower(obj);
        // }
        break;

      case "DELETE":
        // // if (this.settings.onDelete) {
        // this.settings.onDelete(obj);
        // // }
        // if (this.isEditable) {
        obj.component = "textsbuttons";
        this.globals.ModalShower(obj);
        // }
        break;
    }
  }

  ngAfterViewChecked() {}
}
