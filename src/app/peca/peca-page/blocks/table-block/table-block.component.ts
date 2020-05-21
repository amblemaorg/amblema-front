import { Component, OnInit } from '@angular/core';
import { PageBlockComponent, PresentationalBlockComponent } from '../page-block.component';
import { NG2_SMART_TABLE_DEFAULT_SETTINGS as defaultSettings } from './ng2-smart-table-default-settings';
import { LocalDataSource } from 'ng2-smart-table';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'table-block',
  templateUrl: './ng2-smart-table-template.html',
  styleUrls: ['./table-block.component.scss']
})
export class TableBlockComponent implements PresentationalBlockComponent, OnInit {
  type: 'presentational';
  component: string;
  settings: {
    columns: any;
    data: any[];
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
      this.settings.data.push(data);
      this.source = new LocalDataSource(this.settings.data);
    });
  }

  setSettings(settings: any) {
    this.settings = { ...defaultSettings, ...settings };
    this.source = new LocalDataSource(this.settings.data);
  }
}
