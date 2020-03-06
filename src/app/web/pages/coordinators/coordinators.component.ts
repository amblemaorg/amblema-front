import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CoordinatorService } from '../../../services/web/coordinator.service';
import { CoordinatorPage } from '../../../models/web/web-coordinator.model';

@Component({
  selector: 'app-coordinators',
  templateUrl: './coordinators.component.html',
  styleUrls: ['./coordinators.component.scss']
})
export class CoordinatorsComponent implements OnInit {
  coverData = {
    slides: [
      {
        image: {
          desktop: './assets/images/banner-2.jpg',
          tablet: './assets/images/banner-movil-2.jpg',
          movil: './assets/images/banner-movil-2.jpg',
        }
      }
    ]
  }

  customOptions: OwlOptions = {
    autoplay: true,
    items: 1,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    nav: false,
    navSpeed: 3000,
  }

  coordinatorsPageData: CoordinatorPage;
  constructor(private coordinatorService: CoordinatorService) { }

  ngOnInit() {
    this.getCoordinatorsData();
  }

  getCoordinatorsData() {
    this.coordinatorService.getCoordinatorsJSON()
        .subscribe(data => {
          // console.log(data)
          this.coordinatorsPageData = data.coordinatorPage;
        });
  }
}
