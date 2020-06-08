import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageBlockComponent, PresentationalBlockComponent } from '../page-block.component';
import { NG2_SMART_TABLE_DEFAULT_SETTINGS as defaultSettings } from './ng2-smart-table-default-settings';
import { LocalDataSource } from 'ng2-smart-table';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'table-block',
  templateUrl: './ng2-smart-table-template.html',
  styleUrls: ['./table-block.component.scss']
})
export class TableBlockComponent implements PresentationalBlockComponent, OnInit, OnDestroy {
  type: 'presentational';
  component: string;
  settings: {
    columns: any;
    // dataTypes: {};    
    tableCode: string; // specifies which table to work with
    buttonCode?: string; // to know if sending info to textsandbuttons component and specify which instance to manage
    hideImgContainer?: boolean; // if view has image adder container set this to true
    modalCode?: string; // for views with modal inside
    classes: {
      hideView: boolean;
      hideEdit: boolean;
      hideDelete: boolean;
    };
  };

  source: LocalDataSource | any;
  // source: LocalDataSource;

  constructor(private globals: GlobalService) {
    this.type = 'presentational';
    this.component = 'table';
  }

  ngOnInit() {
    // data actions (data.action): set, add, edit, delete, view
    this.globals.updateTableDataEmitter.subscribe(data => {
      this.confsOnTable(data);
      console.log(this.settings[data.code])
    });

    this.globals.showImageContainerEmitter.subscribe(code => {
      if(this.settings.buttonCode && this.settings.buttonCode == code)
        this.settings.hideImgContainer = false;
    });
  }
  ngOnDestroy() {
    this.settings[this.settings.tableCode] = null;
    this.source = null;
  }

  confsOnTable(data) {
    if (this.settings[data.code]) {

      switch (data.action) {
        case 'edit':
          this.source.update(data.rowData.oldData,data.rowData.newData);
          this.source.refresh();
          break;
        case 'delete':
          this.source.remove(data.rowData.oldData);
          this.source.refresh();
          break;
        case 'view':
          
          break;
      
        default: // add or set
          if (data.resetData) this.settings[data.code] = data.dataArr;
          else this.settings[data.code].push(data.data);
          this.source = new LocalDataSource(this.settings[data.code]);
          break;
      }

      //updating textAndButton button data
      if (this.settings.buttonCode)
        this.globals.buttonDataUpdater({
          code: this.settings.buttonCode,
          whichData: 'table',
          table: this.settings[data.code],
        });
    }  
  }

  setSettings(settings: any) {    
    this.settings = { ...defaultSettings, ...settings };
    this.source = new LocalDataSource(this.settings[this.settings.tableCode]);
  }

  onCustomActions(e) {
    let obj = {
      code: this.settings.tableCode,
      action: e.action.toLowerCase(),
      rowData: {
        oldData: e.data,
        newData: {...e.data},
      }
    };

    switch ( e.action) {
      case 'VIEW':
        this.globals.ModalShower(this.settings.modalCode);
        break;

     case 'EDIT':
        this.globals.ModalShower({
          code: this.settings.modalCode,
          data: obj.rowData.oldData,
        });
        obj.rowData.newData = {
          description: "descripcion actualizada",
          image: e.data.image,
          state: e.data.state,
          status: e.data.status,
        };
        this.confsOnTable(obj);
        break;

     case 'DELETE':
        this.confsOnTable(obj);
        break;
    }
  }

  
}
