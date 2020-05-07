import { Component, OnInit, AfterViewChecked } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent implements OnInit, AfterViewChecked {
  isBlogArchive: boolean = true;
  coverData = {
    slides: [
      {
        image: "./assets/images/background-blog.jpg",
      },
    ],
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  ngAfterViewChecked(): void {
    setTimeout(() => {
      this.isBlogArchive =
        this.router.url.includes("/blog") && !this.router.url.includes("/post");
    });
  }
}
