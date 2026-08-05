import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Inject,
  HostListener,
  AfterViewInit,
} from '@angular/core';
import { Router, NavigationEnd, NavigationStart, NavigationCancel } from '@angular/router';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { DOCUMENT } from '@angular/common';
import { GlobalService } from '../services/global.service';
import { Observable } from 'rxjs';
import { WebState } from '../store/states/web/web.state';
import { Select, Store } from '@ngxs/store';
import { SetIsLoadingPage } from '../store/actions/web/web.actions';
import { OffcanvasComponent } from './shared/offcanvas/offcanvas.component';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss'],
})
export class WebComponent implements OnInit {
  @ViewChild('footer', { read: ElementRef, static: true }) footer: ElementRef;
  @ViewChild('offcanvas', { read: OffcanvasComponent, static: true })
  offcanvas: OffcanvasComponent;
  @ViewChild('pageLoader', { read: ElementRef, static: true }) pageLoader: ElementRef;
  isloading: Boolean = true;
  offcanvasClass: string = 'closed';
  formSelected: string = '';

  @Select(WebState.getIsLoadingPage) isloadingPage$: Observable<boolean>;

  constructor(
    private router: Router,
    private store: Store,
    @Inject(DOCUMENT) private _document: any,
    private globalService: GlobalService
  ) {}

  ngOnInit() {
    this.store.dispatch([new SetIsLoadingPage(true)]);
    this.displayFooter();
    this.loadingPageSubscription();
    this.routerEventsSubscription();
  }

  loadingPageSubscription() {
    this.isloadingPage$.subscribe((isloadingPage) => {
      this.isloading = isloadingPage;
      if (isloadingPage) {
        disableBodyScroll(this.pageLoader.nativeElement);
      } else {
        enableBodyScroll(this.pageLoader.nativeElement);
      }
    });
  }

  routerEventsSubscription() {
    this.router.events.subscribe((event) => {
      if (
        event instanceof NavigationStart &&
        this.isNotNavigationToAuthPecaAndSchoolDetail(event)
      ) {
        this.store.dispatch([new SetIsLoadingPage(true)]);
      }
      if (event instanceof NavigationEnd) {
        this.displayFooter();
      }
    });
  }

  isNotNavigationToAuthPecaAndSchoolDetail(routerEvent: NavigationStart) {
    const urlPathArray = routerEvent.url.split('/');
    return (
      urlPathArray[1] !== 'auth' &&
      urlPathArray[1] !== 'peca' &&
      (urlPathArray[1] !== 'escuelas' || (urlPathArray[1] == 'escuelas' && !urlPathArray[2]))
    );
  }

  displayFooter() {
    if (this.router.url == '/escuelas') {
      this.addElementClass(this.footer.nativeElement, 'hide');
    } else {
      this.removeElementClass(this.footer.nativeElement, 'hide');
    }
  }

  openOffcanvas(content: string) {
    this.offcanvas.open();
    this.formSelected = content;
    this.addElementClass(this._document.body, 'active-form-wizard');
  }

  closeOffcanvas() {
    this.offcanvas.toClose();
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

  remove() {
    
  }
}
