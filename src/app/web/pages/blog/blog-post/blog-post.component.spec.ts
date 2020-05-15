import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { BlogPostComponent } from "./blog-post.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "src/app/web/shared/shared.module";
import { of } from "rxjs";
import { ActivatedRouteStub } from "src/assets/tests/activated-route-stub";
import { RouterTestingModule } from "@angular/router/testing";
import { ApiWebContentService } from "src/app/services/web/api-web-content.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { SearcherComponent } from "../widgets/searcher/searcher.component";
import { RecentPostsListComponent } from "../widgets/recent-post-card/recent-posts-list.component";
import { SocialSharingComponent } from "../widgets/social-sharing/social-sharing.component";
import { CategoriesListComponent } from "../widgets/categories-list/categories-list.component";
import { BlogModule } from "../blog.module";
import { ShareModule } from "@ngx-share/core";

describe("BlogPostComponent", () => {
  let component: BlogPostComponent;
  let fixture: ComponentFixture<BlogPostComponent>;
  let activatedRoute = new ActivatedRouteStub();
  let httpSpy;
  let blogService;

  const post = {
    image: "./assets/images/background-pillar-matematica.jpg",
    image2: "",
    id: "la-capacitacion-en-matematicas-induce-al-docente-en-el-razonamiento",
    title: "La capacitación en matemáticas induce al docente en el razonamiento",
    text:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur vivamus congue dictum risus molestie urna, suspendisse ac sapien magna habitasse natoque. Eget mauris placerat erat nec curae non litora lobortis, mus sem primis accumsan velit cras praesent blandit nunc, justo neque euismod mollis lacus orci scelerisque. Id hendrerit metus mus iaculis vestibulum, tellus nostra vitae libero tincidunt facilisi, eleifend cubilia nibh leo. Condimentum molestie imperdiet turpis in velit fringilla maecenas nullam, enim rhoncus magna aptent sociis lacinia eu libero posuere, taciti rutrum commodo montes aenean congue est. Praesent nostra suscipit tempus congue lacinia cubilia hendrerit, a nam gravida convallis vulputate dignissim, leo lobortis quis cursus augue posuere. Iaculis duis sociosqu curabitur phasellus placerat dictumst consequat fames posuere, pharetra nunc scelerisque ante malesuada eros fermentum sed.",
    createdAt: new Date(),
    tags: ["Empezando", "Tu comunidad"],
    status: "published",
  };

  const response = {
    ...post,
    records: [post, post],
  };

  beforeEach(async(() => {
    httpSpy = jasmine.createSpyObj("HttpClient", ["get"]);
    httpSpy.get.and.returnValue(of(response));
    blogService = new ApiWebContentService(<any>httpSpy);
    blogService.setBaseUrl(environment.baseUrl);
    blogService.setResourcePath("webcontent/posts");

    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule,
        BlogModule,
        SharedModule,
        HttpClientModule,
        ShareModule,
      ],
      providers: [
        { provide: ApiWebContentService, useValue: blogService },
        { provide: HttpClient, useValue: httpSpy },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    activatedRoute.setParamMap({
      postSlug: "la-capacitacion-en-matematicas-induce-al-docente-en-el-razonamiento",
    });
    fixture = TestBed.createComponent(BlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create and call getWebContentByParam() function in BlogService", () => {
    expect(httpSpy.get.calls.count()).toBe(2, "getWebContentByParam is called");
    expect(component).toBeTruthy();
  });
});
