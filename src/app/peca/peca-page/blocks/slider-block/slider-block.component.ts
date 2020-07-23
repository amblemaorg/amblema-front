import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { PageBlockComponent, PresentationalBlockComponent } from '../page-block.component';
import { OwlCarousel } from 'ngx-owl-carousel';
import { DOCUMENT } from "@angular/common";
import { GlobalService } from '../../../../services/global.service';

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
    this.prueba= data.sliderImage.description;
    this.flags=true;
    if (data["sliderImage"]) {
      for (let i = 0; i < data.sliderImage.description.length; i++) {
        console.log("posicion i", data.sliderImage.description[i]);

        this.settings.sliderImage[i].description = data.sliderImage.description[i].description;

        this.settings.sliderImage[i].image = data.sliderImage.description[i].image;
      }

      //this.settings.sliderImage.description = data.sliderImage.description;
      //this.settings.sliderImage.image = data.sliderImage.image;
    }
    console.log(this.settings.sliderImage, "imagenes")
    //console.log("checkkk",data);
    console.log("toda la data", data.sliderImage.description);
  }

  focusDatePicker(e) {
    e.focus();
  }
}
