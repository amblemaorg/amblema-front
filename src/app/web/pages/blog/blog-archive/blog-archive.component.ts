import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/models/web/blog.model";
import { WebContentService } from "src/app/services/web/web-content.service";
import { ApiWebContentService } from "src/app/services/web/api-web-content.service";
import { HttpClient } from "@angular/common/http";
import { StaticWebContentService } from "src/app/services/web/static-web-content.service";
import { environment } from "src/environments/environment";
import { BLOG_CONTENT } from "../blog-static-content";
import { PostCardComponent } from "../post-card/post-card.component";
// import 'src/assets/js/clamp.min.js';

@Component({
  selector: "app-blog-archive",
  templateUrl: "./blog-archive.component.html",
  styleUrls: ["./blog-archive.component.scss"],
})
export class BlogArchiveComponent implements OnInit {
  coverData = {
    slides: [
      {
        image: "./assets/images/background-blog.jpg",
      },
    ],
  };

  postsList = [];
  blogService: WebContentService;
  BLOG_PATH = "webcontent/posts";
  constructor(private http: HttpClient) {}

  ngOnInit() {
    //this.setStaticService();
    this.setApiService();
    this.getBlogPostsJSON();
  }

  setStaticService() {
    this.blogService = new StaticWebContentService();
    this.blogService.setWebContent(BLOG_CONTENT);
  }

  setApiService() {
    const service = new ApiWebContentService(this.http);
    service.setBaseUrl(environment.baseUrl);
    service.setResourcePath(this.BLOG_PATH);
    this.blogService = service;
  }

  getBlogPostsJSON() {
    this.blogService.getWebContent().subscribe((data) => {
      //console.log(data);
      this.postsList = this.adaptEndpointResponseToPost(data.records);
      console.log(this.postsList);
    });
  }

  adaptEndpointResponseToPost(data: any) {
    return data.map((post) => {
      return {
        mainImage: post.image,
        secondaryImage: post.image2,
        slug: post.id,
        title: post.title,
        content: post.text,
        date: new Date(post.createdAt).getDate(),
        //tags: record.tag,
        status: post.status,
      };
    });
  }
}
