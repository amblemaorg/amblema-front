import { Component, OnInit } from '@angular/core';
import { PageBlockComponent, PresentationalBlockComponent } from '../page-block.component';
import { NG2_SMART_TABLE_DEFAULT_SETTINGS as defaultSettings } from './ng2-smart-table-default-settings';

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
    data: any;
  };

  constructor() {
    this.type = 'presentational';
    this.component = 'table';
  }

  ngOnInit() { }

  setSettings(settings: any) {
    this.settings = { ...defaultSettings, ...settings };
  }
}
