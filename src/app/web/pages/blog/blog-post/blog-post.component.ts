import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Post } from "src/app/models/web/blog.model";
import { ApiWebContentService } from "src/app/services/web/api-web-content.service";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { WebContentService } from "src/app/services/web/web-content.service";

@Component({
  selector: "app-blog-post",
  templateUrl: "./blog-post.component.html",
  styleUrls: ["./blog-post.component.scss"],
})
export class BlogPostComponent implements OnInit {
  coverData = {
    slides: [
      {
        image: "./assets/images/background-blog.jpg",
      },
    ],
  };

  post = {
    mainImage: "",
    secondaryImage: "",
    slug: "",
    title: "",
    content: "",
    date: "",
    //tags: [],
    status: "",
  };
  blogService: WebContentService;
  BLOG_PATH = "webcontent/posts";

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.setApiService();
    this.route.paramMap.subscribe((params) => {
      this.blogService
        .getWebContentByParam("id", params.get("postSlug"))
        .subscribe((data) => {
          this.post = this.adaptEndpointResponseToPost(data);
        });
    });
  }

  setApiService() {
    const service = new ApiWebContentService(this.http);
    service.setBaseUrl(environment.baseUrl);
    service.setResourcePath(this.BLOG_PATH);
    this.blogService = service;
  }

  adaptEndpointResponseToPost(data: any) {
    return {
      mainImage: data.image,
      secondaryImage: data.image2,
      slug: data.id,
      title: data.title,
      content: data.text,
      date: data.createdAt,
      //tags: record.tag,
      status: data.status,
    };
  }
}
