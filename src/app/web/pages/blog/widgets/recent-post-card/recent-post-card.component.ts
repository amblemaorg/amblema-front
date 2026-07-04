import { Component, OnInit, Input, ViewChild, ElementRef, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { faCalendarAlt as faCalendar } from "@fortawesome/free-solid-svg-icons";
import { registerLocaleData } from "@angular/common";
import localeEs from "@angular/common/locales/es-VE";
registerLocaleData(localeEs, "es");

@Component({
  selector: "recent-post-card",
  template: `
    <div class="recent-post-card">
      <div class="image-wrapper">
        <img [src]="post.mainImage" [alt]="post.title + ' image'" />
      </div>
      <div #recentPostTitle class="recent-post-title">
        <a [routerLink]="['/blog/post', post.slug]">{{ post.title }}</a>
      </div>
      <div class="recent-post-data">
        <div class="recent-post-date">
          <fa-icon [icon]="calendarIcon"></fa-icon>
          {{ post.date | date: "mediumDate":"-0400":"es" }}
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./recent-post-card.component.scss"],
})
export class RecentPostCardComponent implements OnInit {
  @Input() post: {
    title: string;
    slug: string;
    mainImage: string;
    date: Date;
  };
  @ViewChild("recentPostTitle", { read: ElementRef, static: true })
  title: ElementRef;

  calendarIcon = faCalendar;

  isBrowser: boolean;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  async ngOnInit() {
    if (this.isBrowser) {
      await import("src/assets/js/clamp.min.js");
      const $clamp = (window as any).$clamp;
      $clamp(this.title.nativeElement, { clamp: 4 });
    }
  }
}
