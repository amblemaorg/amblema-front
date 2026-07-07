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
import { Title, Meta } from "@angular/platform-browser";
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
    private titleService: Title,
    private metaService: Meta,
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
          const metadata = this.convertPostDataToMetaData(this.post);
          this.titleService.setTitle(data.title);
          metadata.map((metatag) => {
            const attributeSelector = metatag.name
              ? `name="${metatag.name}"`
              : `property="${metatag.property}"`;
            this.metaService.removeTag(attributeSelector);
            this.metaService.addTag(metatag, false);
          });
          this.injectSchema();
        },
        (err) => console.error(err),
        () => {
          this.getRecentPosts();
          this.store.dispatch([new SetIsLoadingPage(false)]);
        }
      );
    });
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

  convertPostDataToMetaData(post) {
    return [
      {
        name: "title",
        content: post.title,
      },
      {
        property: "og:title",
        content: post.title,
      },
      {
        name: "description",
        content: post.content.slice(0, 140),
      },
      {
        property: "og:description",
        content: post.content.slice(0, 140),
      },
      {
        property: "og:image",
        content: post.mainImage,
      },
      {
        property: "og:url",
        content: typeof window !== 'undefined' ? window.location.href : 'https://amblema.org/blog/post/' + post.slug,
      },
      {
        property: "og:site_name",
        content: "Fundación AmbLeMa",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:image:alt",
        content: "Texto alternativo de la imagen de la entrada del blog AmbLeMa",
      },
    ];
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
