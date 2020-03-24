import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {
  @ViewChild('footer', { read: ElementRef, static: true }) footer: ElementRef;
  @ViewChild('offcanvas', { read: ElementRef, static: true }) offcanvas: ElementRef;
  offcanvasClass: string = 'closed';
  formSelected: string = '';

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.displayFooter();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.displayFooter();
      }
    });
  }

  openOffcanvas(content: string) {
    disableBodyScroll(this.offcanvas.nativeElement);
    this.offcanvasClass = 'opened';
    this.formSelected = content;
  }

  closeOffcanvas() {
    enableBodyScroll(this.offcanvas.nativeElement);
    this.offcanvasClass = 'closed';
  }

  displayFooter() {
    if (this.router.url == '/escuelas') {
      this.footer.nativeElement.classList.add('hide')
    }
    else {
      this.footer.nativeElement.classList.remove('hide')
    }
  }

}
