import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Input } from '@angular/core';

@Component({
  selector: 'web-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {
  @Input() tagline;
  @Input() coverImage;
  @Input() slides;

  customOptions: OwlOptions = {
    autoplay: true,
    items: 1,
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    nav: false,
    navSpeed: 700,
  }

  constructor() { }

  ngOnInit() {
  }

}
