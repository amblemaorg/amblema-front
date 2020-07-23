import { Component, OnInit } from '@angular/core';
import { PageBlockComponent, PresentationalBlockComponent } from '../page-block.component';

@Component({
  selector: 'stepper-block',
  templateUrl: './stepper-block.component.html',
  styleUrls: ['./stepper-block.component.scss']
})
export class StepperBlockComponent implements PresentationalBlockComponent, OnInit {
  type: 'presentational';
  component: string;
  settings: {
    text1: {
      id: number;
      text: string;
      content: string;
      aligning: string; // 'center' for center aligning, 'left' otherwise
    }
    text2: {
      id: number;
      text: string;
      content: string;
      aligning: string; // 'center' for center aligning, 'left' otherwise
    }
    text3: {
      id: number;
      text: string;
      content: string;
      aligning: string; // 'center' for center aligning, 'left' otherwise
    }
    text4: {
      id: number;
      text: string;
      content: string;
      aligning: string; // 'center' for center aligning, 'left' otherwise
    }

  };
  constructor() {
    this.type = 'presentational';
    this.component = 'stepper';
  }

  ngOnInit() {
  }

  setSettings(settings: any) {
    this.settings = { ...settings };
  }

  setData(data: any) {
    if (data["text1"]) this.settings.text1.content = data.text1.content;
    if (data["text2"]) this.settings.text2.content = data.text2.content;
    if (data["text3"]) this.settings.text3.content = data.text3.content;
    if (data["text4"]) this.settings.text4.content = data.text4.content;

    //console.log(data, "asdsa");
  }

}
