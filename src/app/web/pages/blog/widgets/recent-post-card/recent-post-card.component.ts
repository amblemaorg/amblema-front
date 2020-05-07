import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { faCalendarAlt as faCalendar } from "@fortawesome/free-solid-svg-icons";
import { registerLocaleData } from "@angular/common";
import localeEs from "@angular/common/locales/es-VE";
registerLocaleData(localeEs, "es");
import "src/assets/js/clamp.min.js";
declare let $clamp: Function;

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

  constructor() {}

  ngOnInit() {
    $clamp(this.title.nativeElement, { clamp: 4 });
  }
}
