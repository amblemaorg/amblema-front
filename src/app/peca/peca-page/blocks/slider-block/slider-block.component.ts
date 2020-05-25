import { Component, OnInit } from '@angular/core';
import { PageBlockComponent, PresentationalBlockComponent } from '../page-block.component';

@Component({
  selector: 'slider-block',
  templateUrl: './slider-block.component.html',
  styleUrls: ['./slider-block.component.scss']
})
export class SliderBlockComponent implements PresentationalBlockComponent, OnInit {
  type: 'presentational';
  component: string;
  settings: {
    sliderImage: any;
  };
  constructor() { 
    this.type = 'presentational';
    this.component = 'slider';
  }

  ngOnInit() {
  }
  setSettings(settings: any) {
    this.settings = { ...settings };
  }
}
