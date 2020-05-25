import { Component, OnInit } from '@angular/core';
import { PageBlockComponent, PresentationalBlockComponent } from '../page-block.component';
import { GlobalService } from '../../../../services/global.service';

@Component({
  selector: 'buttons-set-block',
  templateUrl: './texts-buttons-set-block.component.html',
  styleUrls: ['./texts-buttons-set-block.component.scss']
})
export class TextsButtonsSetBlockComponent implements PresentationalBlockComponent, OnInit {
  type: 'presentational';
  component: string;
  settings: {    
    dateOrtext: {
      text: string;
      date: string;
      fields: string[];
    };
    selectStatus:{
      text:string;
      placeholder: string;
      lista:string[];
    };
    status: string;
    // texts: {
      title: {
        aligning: string; // 'center' for center aligning, 'left' otherwise
        text: string;
      };
      subtitles: {
        title: string; // subtitle
        text: string; // paragraph
      }[];
    // }[];    
    action: {
        type: number; // 1 send, 2 save
        name: string; // text in the button
    };
    upload: any;
    download: any;
    btnGeneral: any;
  };
  glbls:any;
  constructor(private globals: GlobalService,) {
    this.type = 'presentational';
    this.component = 'buttons';
    this.glbls = globals;
  }

  ngOnInit() { }

  setSettings(settings: any) {
    this.settings = { ...settings };
  }
  focusDatePicker(e) {
    e.focus();
  }
}
