import { Component, OnInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";
import { Input } from "@angular/core";

interface Slide {
  image: string;
  title: string;
  description: string;
}
@Component({
  selector: "web-cover",
  templateUrl: "./cover.component.html",
  styleUrls: ["./cover.component.scss"],
})
export class CoverComponent implements OnInit {
  @Input() overlayImage;
  @Input() slides: Slide[];
  @Input() options: {
    titleBold: boolean;
    sponsorPage: boolean;
    coordinatorPage: boolean;
  };

  sponsorPage: boolean = false;
  coordinatorPage: boolean = false;
  titleBold: boolean = false;

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
        items: 1,
      },
    },
  };

  constructor() {}

  ngOnInit() {
    if (this.options) {
      Object.keys(this.options).map((option) => {
        this[option] = this.options[option];
      });
    }
  }
}
