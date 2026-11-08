import { Component, OnInit, OnDestroy, Inject } from "@angular/core";
import { Location, DOCUMENT } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { Post } from "src/app/models/web/blog.model";
import { ApiWebContentService } from "src/app/services/web/api-web-content.service";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { WebContentService } from "src/app/services/web/web-content.service";
import { StaticWebContentService } from "src/app/services/web/static-web-content.service";
import { BLOG_CONTENT } from "../blog-static-content";
import { registerLocaleData } from "@angular/common";
import localeEs from "@angular/common/locales/es-VE";
import { SeoService } from "src/app/services/seo.service";
import { Store } from "@ngxs/store";
import { SetIsLoadingPage } from "src/app/store/actions/web/web.actions";
registerLocaleData(localeEs, "es");

@Component({
  selector: "app-blog-post",
  templateUrl: "./blog-post.component.html",
  styleUrls: ["./blog-post.component.scss"],
})
export class BlogPostComponent implements OnInit, OnDestroy {
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
  recentPosts = [];
  blogService: WebContentService;
  BLOG_PATH = "webcontent/posts";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private seo: SeoService,
    private store: Store,
    @Inject(DOCUMENT) private document: any
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit() {
    // this.setStaticService();
    this.setApiService();
    this.route.paramMap.subscribe((params) => {
      this.blogService.getWebContentByParam("id", params.get("postSlug")).subscribe(
        (data) => {
          this.post = this.adaptEndpointResponseToPost(data);
          this.setSeo(this.post);
          this.injectSchema();
        },
        (err) => {
          console.error(err);
          this.store.dispatch([new SetIsLoadingPage(false)]);
        },
        () => {
          this.getRecentPosts();
          const postImages = this.post ? [this.post.mainImage, this.post.secondaryImage] : [];
          this.preloadImages(postImages).then(() => {
            this.store.dispatch([new SetIsLoadingPage(false)]);
          });
        }
      );
    });
  }

  preloadImages(images: any, timeoutMs: number = 3000): Promise<any> {
    if (typeof window === 'undefined' || typeof Image === 'undefined') {
      return Promise.resolve();
    }
    const flatList: string[] = Array.isArray(images) ? images.reduce((acc, val) => acc.concat(val), []) : [images];
    const validImages = flatList.filter((src) => typeof src === 'string' && !!src);
    if (validImages.length === 0) {
      return Promise.resolve();
    }
    const loadPromise = Promise.all(
      validImages.map((src: string) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(true);
          img.onerror = () => resolve(true);
          img.src = src;
        });
      })
    );
    const timeoutPromise = new Promise((resolve) => setTimeout(resolve, timeoutMs));
    return Promise.race([loadPromise, timeoutPromise]);
  }

  setStaticService() {
    this.blogService = new StaticWebContentService();
    this.blogService.setWebContent(BLOG_CONTENT.records);
  }

  setApiService(query?: string) {
    const queryParams = query ? query : "";
    const service = new ApiWebContentService(this.http);
    service.setBaseUrl(environment.baseUrl);
    service.setResourcePath(this.BLOG_PATH + queryParams);
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

  setSeo(post) {
    // Títulos cortos llevan la marca; los largos se dejan completos para no truncarlos
    const title = post.title && post.title.length <= 45 ? `${post.title} | Blog AmbLeMa` : post.title;
    this.seo.setPage({
      title,
      description: post.content,
      path: `/blog/post/${post.slug}`,
      image: post.mainImage,
      imageAlt: post.title,
      type: "article",
    });
  }

  navigateToArchive(params: string) {
    this.router.navigate(["/blog", { title: params }]);
  }

  getRecentPosts() {
    this.setApiService("/page/1?page_size=4");
    this.blogService.getWebContent().subscribe((data) => {
      this.recentPosts = data.records.map((record) => {
        return this.adaptEndpointResponseToPost(record);
      });
      this.store.dispatch([new SetIsLoadingPage(false)]);
    }, (error) => {
      this.store.dispatch([new SetIsLoadingPage(false)]);
    });
  }

  injectSchema() {
    if (!this.post || !this.post.title) return;

    // Remove HTML tags from content excerpt for description
    const rawContent = this.post.content || '';
    const cleanContent = rawContent.replace(/<[^>]*>/g, '').slice(0, 150);

    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": this.post.title,
      "image": [
        this.post.mainImage,
        this.post.secondaryImage
      ].filter(Boolean),
      "datePublished": this.post.date,
      "description": cleanContent,
      "publisher": {
        "@type": "EducationalOrganization",
        "name": "AmbLeMa",
        "url": "https://amblema.org"
      }
    };

    let script = this.document.getElementById('json-ld-blog-post-schema');
    if (script) {
      script.text = JSON.stringify(schema);
    } else {
      script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'json-ld-blog-post-schema';
      script.text = JSON.stringify(schema);
      this.document.head.appendChild(script);
    }
  }

  ngOnDestroy() {
    const script = this.document.getElementById('json-ld-blog-post-schema');
    if (script) {
      script.remove();
    }
  }
}
