import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { DOCUMENT } from '@angular/common';
import { GlobalService } from '../services/global.service';

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
    @Inject(DOCUMENT) private _document: any,
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.displayFooter();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.displayFooter();
      }
    });
  }

  displayFooter() {
    if (this.router.url == '/escuelas') {
      this.addElementClass(this.footer.nativeElement, 'hide');
    }
    else {
      this.removeElementClass(this.footer.nativeElement, 'hide');
    }
  }

  openOffcanvas(content: string) {
    disableBodyScroll(this.offcanvas.nativeElement);
    this.offcanvasClass = 'opened';
    this.formSelected = content;
    this.addElementClass(this._document.body, 'active-form-wizard');
  }

  closeOffcanvas() {
    enableBodyScroll(this.offcanvas.nativeElement);
    this.offcanvasClass = 'closed';
    this.removeElementClass(this._document.body, 'active-form-wizard');
  }

  addElementClass(element: any, className: string) {
    if (this.globalService.isBrowser) {
      element.classList.add(className);
    }
  }

  removeElementClass(element: any, className: string) {
    if (this.globalService.isBrowser) {
      element.classList.remove(className);
    }
  }

}
