import { Component, OnInit } from '@angular/core';
import { PresentationalBlockComponent } from '../page-block.component';

@Component({
  selector: 'app-summary-block',
  templateUrl: './summary-block.component.html',
  styleUrls: ['./summary-block.component.scss']
})
export class SummaryBlockComponent implements OnInit, PresentationalBlockComponent {

  type: 'presentational';
  component: string;
  settings: {
    urlImage?: string, 
    text?: string
  };   

  constructor() { }

  ngOnInit() {
  }

  setSettings(settings: any ) : void {
    this.settings = { ...settings }
  }
}
