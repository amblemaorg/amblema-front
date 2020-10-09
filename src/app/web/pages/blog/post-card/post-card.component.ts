import { Component, OnInit, Input, ElementRef, ViewChild } from "@angular/core";
import { Post } from "src/app/models/web/blog.model";
import { registerLocaleData } from "@angular/common";
import localeEs from "@angular/common/locales/es-VE";
import { GlobalService } from "src/app/services/global.service";
registerLocaleData(localeEs, "es");
import "src/assets/js/clamp.min.js";
declare let $clamp: Function;

@Component({
  selector: "blog-post-card",
  templateUrl: "./post-card.component.html",
  styleUrls: ["./post-card.component.scss"],
})
export class PostCardComponent implements OnInit {
  @Input() post: Post;
  @ViewChild("title", { read: ElementRef, static: true }) title: ElementRef;
  @ViewChild("excerpt", { read: ElementRef, static: true }) excerpt: ElementRef;

  constructor(private globalService: GlobalService) {}

  ngOnInit() {
    if (this.globalService.isBrowser) {
      $clamp(this.title.nativeElement, { clamp: 3 });
      $clamp(this.excerpt.nativeElement, { clamp: 6 });
    }
  }

  getExcerpt() {
    return `${this.post.content.slice(0, 180)}...`;
  }
}
