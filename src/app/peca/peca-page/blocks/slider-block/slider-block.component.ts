import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { PageBlockComponent, PresentationalBlockComponent } from '../page-block.component';
import { OwlCarousel } from 'ngx-owl-carousel';
import { DOCUMENT } from "@angular/common";
import { GlobalService } from '../../../../services/global.service';
import { DatepickerOptions } from 'ng2-datepicker';

@Component({
  selector: 'slider-block',
  templateUrl: './slider-block.component.html',
  styleUrls: ['./slider-block.component.scss']
})

export class SliderBlockComponent implements PresentationalBlockComponent, OnInit {
  @ViewChild('owlElement', { static: false }) owlEl: OwlCarousel;
  type: 'presentational';
  component: string;
  settings: {
    sliderImage: {
      text: string;
      image: string;
      description: string;
      fields: string[];
    }[];
  };

  glbls: any;
  constructor(@Inject(DOCUMENT) private document: Document, private globals: GlobalService) {
    this.type = 'presentational';
    this.component = 'slider';
    this.glbls = globals;
  }

  ngOnInit() {
  }

  title = 'OwlCarousel2 in Angular7 with Custom Navigation Arrows';


  mySlideOptions = { items: 1, dots: false, mouseDrag: false, touchDrag: false, animateOut: 'fadeOut', video: true, lazyLoad: true };
  myCarouselOptions = { items: 5, dots: false, mouseDrag: false, touchDrag: false, video: true, lazyLoad: true };

  OwlOptions = {
    items: 1,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    nav: true,
    responsiveClass: true,
  }

  datePickerOptions: DatepickerOptions = {
    minYear: 1950,
    maxYear: 2050,
    displayFormat: 'DD/MM/YYYY',
    barTitleFormat: 'MMMM YYYY',
    dayNamesFormat: 'dd',
    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    minDate: new Date(Date.now()),
    // maxDate: new Date(Date.now()),
    barTitleIfEmpty: 'Haga click para seleccionar una fecha',
    placeholder: 'Seleccione una fecha',
    addClass: 'form-control', // Optional, value to pass on to [ngClass] on the input field
    addStyle: {}, // Optional, value to pass to [ngStyle] on the input field
    fieldId: 'inputDate', // ID to assign to the input field. Defaults to datepicker-<counter>
    useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown
  };

  shown = 0;

  goToImg(i) {
    this.owlEl.to([i]);
    this.document.querySelectorAll('.images .owl-carousel .owl-stage .owl-item').item(this.shown).setAttribute('style', 'display:block');
    this.document.querySelectorAll('.images .owl-carousel .owl-stage .owl-item').item(i).setAttribute('style', 'display:none');
    this.shown = i;
    // to stop playing video
    this.owlEl.reInit();
  }

  setSettings(settings: any) {
    this.settings = { ...settings };
  }

  prueba:any;
  flags= false;
  setData(data: any) {
    //this.prueba= data.sliderImage.description;
    this.flags = true;
    if (data["sliderImage"]) {
      for (let i = 0; i < data.sliderImage.length; i++) {
        this.settings.sliderImage.push(data.sliderImage[i]);
        //this.settings.sliderImage[i].description = data.sliderImage[i].description;
        //this.settings.sliderImage[i].image = data.sliderImage[i].image;
      }
    }
  }

  focusDatePicker(e) {
    e.focus();
  }
}
