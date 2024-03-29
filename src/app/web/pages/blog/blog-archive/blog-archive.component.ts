import { Component, OnInit, ViewChild } from "@angular/core";
import { Location } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { WebContentService } from "src/app/services/web/web-content.service";
import { ApiWebContentService } from "src/app/services/web/api-web-content.service";
import { StaticWebContentService } from "src/app/services/web/static-web-content.service";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Post } from "src/app/models/web/blog.model";
import { environment } from "src/environments/environment";
import { BLOG_CONTENT } from "../blog-static-content";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { JwPaginationComponent } from "src/app/web/shared/jw-angular-pagination/lib/jw-pagination.component";
import { BLOG_CATEGORIES } from "../categories";
import { METADATA } from "src/app/web/web-pages-metadata";
import { GlobalService } from "src/app/services/global.service";
import { Store } from "@ngxs/store";
import { SetIsLoadingPage } from "src/app/store/actions/web/web.actions";
@Component({
  selector: "app-blog-archive",
  templateUrl: "./blog-archive.component.html",
  styleUrls: ["./blog-archive.component.scss"],
})
export class BlogArchiveComponent implements OnInit {
  @ViewChild("pagination", { static: false }) pagination: JwPaginationComponent;
  postsList = [];
  postsIndex = [];
  activePage = 1;
  pageSize = 8;
  totalPages = 1;
  queryParams = "";
  queryBreadcrums = "";
  categories = BLOG_CATEGORIES;
  leftArrowIcon = faAngleLeft;
  rightArrowIcon = faAngleRight;
  blogService: WebContentService;
  BLOG_PATH = "webcontent/posts/page/";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private globalService: GlobalService,
    public location: Location,
    private store: Store
  ) {
    this.globalService.setTitle(METADATA.blogPage.title);
    this.globalService.setMetaTags(METADATA.blogPage.metatags);
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (params.keys.length) {
        this.queryBreadcrums = this.generateQueryBreadcrums(params);
        this.queryParams = this.generateQueryParams(params);
      }
      //this.setStaticService();
      this.setApiService(this.activePage, this.pageSize, this.queryParams);
      this.getBlogPostsJSON();
    });
  }

  generateQueryParams(params: ParamMap): string {
    return params.keys.reduce((prevParam, currentParam, i) => {
      const paramValue = params.get(currentParam);
      if (paramValue) {
        return prevParam + currentParam + "=" + paramValue + "&";
      } else {
        return prevParam;
      }
    }, "?");
  }

  generateQueryBreadcrums(params: ParamMap): string {
    const translates = { title: "Título", tag: "Etiqueta" };
    return params.keys.reduce((prevParam, currentParam, i) => {
      let paramValue = "";
      if (currentParam == "tag") {
        this.categories.map((category) => {
          if (params.get(currentParam) == category.id)
            paramValue = category.name;
        });
      } else {
        paramValue = params.get(currentParam);
      }

      if (paramValue) {
        return prevParam + translates[currentParam] + ": " + paramValue + " ";
      } else {
        return prevParam;
      }
    }, "");
  }

  setStaticService() {
    this.blogService = new StaticWebContentService();
    this.blogService.setWebContent(BLOG_CONTENT);
  }

  setApiService(page: number, size: number, params?: string) {
    const queryParams = params
      ? `${params}&page_size=${size}`
      : `?page_size=${size}`;
    const service = new ApiWebContentService(this.http);
    service.setBaseUrl(environment.baseUrl);
    service.setResourcePath(this.BLOG_PATH + page + queryParams);
    this.blogService = service;
  }

  getBlogPostsJSON() {
    this.blogService.getWebContent().subscribe((data) => {
      this.postsList = this.adaptEndpointResponseToPost(data.records);
      this.updatePostsIndex(data.pagination.total_records);
      this.totalPages = data.pagination.total_pages;
      this.store.dispatch([new SetIsLoadingPage(false)]);
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
        date: post.createdAt,
        //tags: record.tag,
        status: post.status,
      };
    });
  }

  updatePostsIndex(totalNewPosts: number) {
    const totalCurrentPosts = this.postsIndex.length;
    if (totalCurrentPosts != totalNewPosts) {
      const postDiff = totalNewPosts - totalCurrentPosts;
      const factor = postDiff / Math.abs(postDiff);
      // If factor is positive add posts indexes, if it's negative remove posts indexes
      for (
        let i = totalCurrentPosts * factor;
        i < totalNewPosts * factor;
        i++
      ) {
        if (factor > 0) {
          this.postsIndex.push(i + 1);
        } else {
          this.postsIndex.splice(i * factor - 1, 1);
        }
      }
    }
  }

  navigateToArchive(params: string) {
    this.router.navigate(["/blog", { title: params }]);
  }

  changePostPage(event) {
    const firstPostIndex = event[0] + this.pageSize - 1;
    this.activePage = firstPostIndex / this.pageSize;
    //this.setStaticService();
    this.setApiService(this.activePage, this.pageSize, this.queryParams);
    this.getBlogPostsJSON();
  }

  triggerChangePage(page) {
    if (page >= 1 && page <= this.totalPages) this.pagination.setPage(page);
  }
}
