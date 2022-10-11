import { Component, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
declare let gtag: Function;

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet> `,
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'amblema-web';
  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'UA-159331906-1', {
          page_path: event.urlAfterRedirects,
        });
      }
    });
  }
}
