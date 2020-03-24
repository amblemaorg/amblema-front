import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Input } from '@angular/core';

@Component({
  selector: 'web-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {
  @Input() coverImage;
  @Input() slides;

  customOptions: OwlOptions = {
    autoplay: true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    nav: false,
    navSpeed: 3000,
    responsive: {
      0: {
        items: 1
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }
}
