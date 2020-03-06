import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SchoolService } from 'src/app/services/web/school.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.scss']
})
export class SchoolDetailComponent implements OnInit, AfterViewInit {

  carouselOptions: OwlOptions = {
    autoplay: false,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    nav: true,
    navText: ['', ''],
    navSpeed: 1000,
  }

  teachersOptions: OwlOptions = {
    ...this.carouselOptions,
    responsive: {
      0: {
        items: 2
      },
      [768 * 1.3]: {
        items: 3
      }
    }
  }

  activitiesOptions: OwlOptions = {
    ...this.carouselOptions,
    responsive: {
      0: {
        items: 1
      },
      [767 * 0.84]: {
        items: 3
      },
      [1024 * 0.84]: {
        items: 4
      }
    }
  }

  otherSchoolsOptions: OwlOptions = {
    ...this.carouselOptions,
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      [768 * 0.8]: {
        items: 3
      }
    }
  }

  school;
  @ViewChild('schoolDetails', { static: false }) schoolSection: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private schoolService: SchoolService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      //console.log(params.schoolSlug)
      this.getSchoolBySlug(params.get('schoolSlug'));

    })

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.scrollToPage();
      }
    });
  }

  ngAfterViewInit() {
    this.scrollToPage();
  }

  scrollToPage() {
    const schoolTopPos = this.schoolSection.nativeElement.offsetTop;
    window.scrollTo(0, schoolTopPos);
  }

  getSchoolBySlug(slug) {
    this.schoolService.getSchoolBySlugJSON(slug)
    .subscribe(data => {
      //console.log(data)
      this.school = data;
    })
  }

}
