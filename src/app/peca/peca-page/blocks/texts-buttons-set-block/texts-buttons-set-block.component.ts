import { Component, OnInit } from '@angular/core';
import { PageBlockComponent, PresentationalBlockComponent } from '../page-block.component';

@Component({
  selector: 'buttons-set-block',
  templateUrl: './texts-buttons-set-block.component.html',
  styleUrls: ['./texts-buttons-set-block.component.scss']
})
export class TextsButtonsSetBlockComponent implements PresentationalBlockComponent, OnInit {
  type: 'presentational';
  component: string;
  settings: {
    title: {
      aligning: string;
      text: string;
    };
    subtitles: {
      title: string;
      text: string;
    }[];
    action: {
        type: number; // 1 send, 2 save
        name: string;
    };
    upload: any;
    download: any;
  };

  constructor() {
    this.type = 'presentational';
    this.component = 'buttons';
  }

  ngOnInit() { }

  setSettings(settings: any) {
    this.settings = { ...settings };
  }
}
