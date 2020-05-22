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
    classes: {
      hideView: boolean;
      hideEdit: boolean;
      hideDelete: boolean;
    };
  };

  source: LocalDataSource | any;

  constructor(private globals: GlobalService) {
    this.type = 'presentational';
    this.component = 'table';
  }

  ngOnInit() {
    this.globals.updateTableDataEmitter.subscribe(data => {
      if (this.settings[data.code]) {
        this.settings[data.code].push(data.data);
        this.source = new LocalDataSource(this.settings[data.code]);
      }      
    });
  }
  ngOnDestroy() {
    this.settings[this.settings.tableCode] = null;
    this.source = null;
  }

  setSettings(settings: any) {    
    this.settings = { ...defaultSettings, ...settings };
    this.source = new LocalDataSource(this.settings[this.settings.tableCode]);
  }
  
}
