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
    titles: {
      id: number,
      text: string;
      content: string;
      aligning: string; // 'center' for center aligning, 'left' otherwise
    }[];
    
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

}
