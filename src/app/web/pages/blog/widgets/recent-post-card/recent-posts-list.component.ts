import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiWebContentService } from "src/app/services/web/api-web-content.service";
import { environment } from "src/environments/environment";
import { WebContentService } from "src/app/services/web/web-content.service";

@Component({
  selector: "recent-posts-list",
  template: `
    <div class="recent-posts">
      <p class="recent-posts-title">Artículos recientes</p>
      <ul class="recent-posts-list">
        <li class="recent-posts-list-item" *ngFor="let post of posts">
          <recent-post-card [post]="post"></recent-post-card>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ["./recent-posts-list.component.scss"],
})
export class RecentPostsListComponent implements OnInit {
  @Input() posts = [
    {
      title:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam",
      slug: "",
      image: "./assets/images/background-pillar-matematica.jpg",
      date: new Date(),
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam",
      slug: "",
      image: "./assets/images/background-pillar-matematica.jpg",
      date: new Date(),
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam",
      slug: "",
      image: "./assets/images/background-pillar-matematica.jpg",
      date: new Date(),
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam",
      slug: "",
      image: "./assets/images/background-pillar-matematica.jpg",
      date: new Date(),
    },
  ];

  blogService: WebContentService;
  constructor() {}

  ngOnInit() {}
}
