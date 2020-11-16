import { Component, OnInit, AfterViewChecked } from "@angular/core";
import { Router } from "@angular/router";

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
        image: "./assets/images/background-blog2.png",
      },
    ],
  };

  constructor(private router: Router) {}

  ngOnInit() {
    this.isBlogArchive = this.router.url.includes("/blog") && !this.router.url.includes("/post");
  }
}
