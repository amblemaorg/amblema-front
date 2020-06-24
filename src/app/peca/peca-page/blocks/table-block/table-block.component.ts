import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageBlockComponent, PresentationalBlockComponent } from '../page-block.component';
import { NG2_SMART_TABLE_DEFAULT_SETTINGS as defaultSettings } from './ng2-smart-table-default-settings';
import { LocalDataSource } from 'ng2-smart-table';
import { GlobalService } from 'src/app/services/global.service';
import { Subscription } from 'rxjs';
import cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'table-block',
  templateUrl: './ng2-smart-table-template.html',
  styleUrls: ['./table-block.component.scss'],
})
export class TableBlockComponent implements PresentationalBlockComponent, OnInit, OnDestroy {
  type: 'presentational';
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
  };

  // source: LocalDataSource | any;
  source: LocalDataSource;

  private subscription: Subscription = new Subscription();

  constructor(private globals: GlobalService) {
    this.type = 'presentational';
    this.component = 'table';
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
  }
  ngOnDestroy() {
    this.settings[this.settings.tableCode] = null;
    this.source = null;
    this.subscription.unsubscribe();
  }

  confsOnTable(data) {
    if (this.settings[data.code]) {
      let index = -1; //initial

      if (data.action != 'add' && data.action != 'set' && this.settings.isFromImgContainer) {
        index = this.settings['dataCopy'].findIndex((obj) => {
          return obj.id === data.data.oldData.id;
        });
      }
      
      switch (data.action) {
        case 'edit':
          this.source.find(data.data.dataToCompare).then((value) => {
            if (index != -1) this.settings['dataCopy'][index] = data.data.newData;
            this.source.update(data.data.dataToCompare, data.data.newData);
            this.source.refresh();
          }).catch( (error) => {});                    
          break;
        case 'delete':
          this.source.find(data.data.dataToCompare).then((value) => {
            if (index != -1) this.settings['dataCopy'].splice(index, 1);
            this.source.remove(data.data.dataToCompare);
            this.source.refresh();
          }).catch( (error) => {});            
          break;
        case 'view':
          break;

        default:
          // add or set
          if (data.resetData) {
            this.settings[data.code] = data.dataArr;
            if (this.settings.isFromImgContainer)
              this.settings['dataCopy'] = [...this.settings[data.code]];
            this.source = new LocalDataSource(this.settings[data.code]);
          } else {
            if (this.settings.isFromImgContainer) this.settings['dataCopy'].push(data.data);
            if (this.settings.isFromImgContainer)
              this.settings[data.code] = [...this.settings['dataCopy']];
            this.source.add(data.data);
            this.source.refresh();
          }
          // if (this.settings.isFromImgContainer) this.source = new LocalDataSource(this.settings[data.code]);
          break;
      }

      // console.log(data);
      //updating textAndButton button data
      if (this.settings.buttonCode) {
        if (this.settings.isFromImgContainer) {
          this.globals.buttonDataUpdater({
            code: this.settings.buttonCode,
            whichData: 'table',
            table: this.settings['dataCopy'],
          });
        } else {
          this.source.getAll().then((value) => {
            this.globals.buttonDataUpdater({
              code: this.settings.buttonCode,
              whichData: 'table',
              table: value,
            });
            // console.log('datos del modal form',value);
          });
        }
      }
    }
  }

  setSettings(settings: any) {
    this.settings = { ...defaultSettings, ...settings };
    if (this.settings.isFromImgContainer)
      this.settings['dataCopy'] = [...this.settings[this.settings.tableCode]];
    this.source = new LocalDataSource(this.settings[this.settings.tableCode]);
  }

  setData(data: any) {
    if (this.settings.isFromImgContainer) this.settings['dataCopy'] = [...data];
    this.source = new LocalDataSource(data);
  }

  onCustomActions(e) {
    let index = this.settings.isFromImgContainer
      ? this.settings['dataCopy'].findIndex((obj) => {
          return obj.id === e.data.id;
        })
      : -1;

    let obj = {
      componentName: this.name,
      code: this.settings.modalCode,
      data: {
        dataCopyData: index != -1 ? this.settings['dataCopy'][index] : e.data,
        dataToCompare: e.data,
        oldData: cloneDeep(e.data),
        newData: cloneDeep(e.data),
      },
      action: e.action.toLowerCase(),
      showBtn: false,
      component: 'form',
    };

    switch (e.action) {
      case 'VIEW':
        this.globals.ModalShower(obj);
        break;

      case 'EDIT':
        obj.showBtn = true;
        this.globals.ModalShower(obj);
        break;

      case 'DELETE':
        obj.component = 'textsbuttons';
        this.globals.ModalShower(obj);
        break;
    }
  }
}
