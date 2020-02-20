import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-godparents',
  templateUrl: './godparents.component.html',
  styleUrls: ['./godparents.component.scss']
})

export class GodparentsComponent implements OnInit {
  coverData = {
    slides: [
      {
        images: {
          desktop: './assets/images/banner-1.jpg',
          tablet: './assets/images/banner-movil-1.jpg',
          movil: './assets/images/banner-movil-1.jpg',
        }
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
