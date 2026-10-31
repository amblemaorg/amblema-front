import { Component, OnInit, AfterViewChecked } from "@angular/core";
import { Router } from "@angular/router";
import { BLOG_COVER_IMAGE } from "./blog-static-content";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent implements OnInit {
  isBlogArchive: boolean = true;
  coverData = {
    slides: [
      {
        image: BLOG_COVER_IMAGE,
      },
    ],
  };

  constructor(private router: Router) {}

  ngOnInit() {
    this.isBlogArchive = this.router.url.includes("/blog") && !this.router.url.includes("/post");
  }
}
