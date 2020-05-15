import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "../../../shared/shared.module";
import { BlogArchiveComponent } from "./blog-archive.component";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { PostCardComponent } from "../post-card/post-card.component";
import { RouterModule, ActivatedRoute, Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { SearcherComponent } from "../widgets/searcher/searcher.component";
import { JwPaginationComponent } from "src/app/web/shared/jw-angular-pagination/lib/jw-pagination.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ActivatedRouteStub } from "src/assets/tests/activated-route-stub";
import { of } from "rxjs";
import { ApiWebContentService } from "src/app/services/web/api-web-content.service";
import { environment } from "src/environments/environment";
import { WebPageTestHelpers } from "src/assets/tests/page-testing-helpers";
import { Title, Meta } from "@angular/platform-browser";
import { METADATA } from "src/app/web/web-pages-metadata";

describe("BlogArchiveComponent", () => {
  const testHelpers = new WebPageTestHelpers();
  let component: BlogArchiveComponent;
  let fixture: ComponentFixture<BlogArchiveComponent>;
  let activatedRoute = new ActivatedRouteStub();
  let httpSpy;
  let blogService;
  const postsResponse = {
    pagination: {
      first_record: 4,
      last_record: 8,
      page: 1,
      total_pages: 2,
      total_records: 8,
    },
    records: [
      {
        createdAt: "2020-05-04T15:22:32.615688",
        id: "5eace57ff5aa9f0006a48010",
        image: "http://157.245.131.248:10506/resources/images/posts/5ea1ff10b20b418e50fd9082.jpg",
        image2: "http://157.245.131.248:10506/resources/images/posts/5ea1ff10b20b418e50fd9083.jpg",
        status: "1",
        tag: "2",
        text:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur vivamus congue dictum risus molestie urna, suspendisse ac sapien magna habitasse natoque. Eget mauris placerat erat nec curae non litora lobortis, mus sem primis accumsan velit cras praesent blandit nunc, justo neque euismod mollis lacus orci scelerisque. Id hendrerit metus mus iaculis vestibulum, tellus nostra vitae libero tincidunt facilisi, eleifend cubilia nibh leo. Condimentum molestie imperdiet turpis in velit fringilla maecenas nullam, enim rhoncus magna aptent sociis lacinia eu libero posuere, taciti rutrum commodo montes aenean congue est. Praesent nostra suscipit tempus congue lacinia cubilia hendrerit, a nam gravida convallis vulputate dignissim, leo lobortis quis cursus augue posuere. Iaculis duis sociosqu curabitur phasellus placerat dictumst consequat fames posuere, pharetra nunc scelerisque ante malesuada eros fermentum sed.",
        title:
          "La capacitaci\u00f3n en literatura y lectura diaria induce al docente a mejorar su conocimiento. Parte 3.",
        updatedAt: "2020-05-04T15:22:32.615651",
      },
      {
        createdAt: "2020-04-21T20:48:16.722000",
        id: "5ea1ff10b20b418e50fd9084",
        image: "http://157.245.131.248:10506/resources/images/posts/5ea1ff10b20b418e50fd9082.jpg",
        image2: "http://157.245.131.248:10506/resources/images/posts/5ea1ff10b20b418e50fd9083.jpg",
        status: "1",
        tag: "2",
        text:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur vivamus congue dictum risus molestie urna, suspendisse ac sapien magna habitasse natoque. Eget mauris placerat erat nec curae non litora lobortis, mus sem primis accumsan velit cras praesent blandit nunc, justo neque euismod mollis lacus orci scelerisque. Id hendrerit metus mus iaculis vestibulum, tellus nostra vitae libero tincidunt facilisi, eleifend cubilia nibh leo. Condimentum molestie imperdiet turpis in velit fringilla maecenas nullam, enim rhoncus magna aptent sociis lacinia eu libero posuere, taciti rutrum commodo montes aenean congue est. Praesent nostra suscipit tempus congue lacinia cubilia hendrerit, a nam gravida convallis vulputate dignissim, leo lobortis quis cursus augue posuere. Iaculis duis sociosqu curabitur phasellus placerat dictumst consequat fames posuere, pharetra nunc scelerisque ante malesuada eros fermentum sed.",
        title:
          "La capacitaci\u00f3n en literatura y lectura diaria induce al docente a mejorar su conocimiento",
        updatedAt: "2020-04-21T20:48:16.722000",
      },
      {
        createdAt: "2020-04-25T20:49:00.519000",
        id: "5ea1ff3cb20b418e50fd9087",
        image: "http://157.245.131.248:10506/resources/images/posts/5ea1ff3cb20b418e50fd9085.jpg",
        image2: "http://157.245.131.248:10506/resources/images/posts/5ea1ff3cb20b418e50fd9086.jpg",
        status: "1",
        tag: "1",
        text:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur vivamus congue dictum risus molestie urna, suspendisse ac sapien magna habitasse natoque. Eget mauris placerat erat nec curae non litora lobortis, mus sem primis accumsan velit cras praesent blandit nunc, justo neque euismod mollis lacus orci scelerisque. Id hendrerit metus mus iaculis vestibulum, tellus nostra vitae libero tincidunt facilisi, eleifend cubilia nibh leo. Condimentum molestie imperdiet turpis in velit fringilla maecenas nullam, enim rhoncus magna aptent sociis lacinia eu libero posuere, taciti rutrum commodo montes aenean congue est. Praesent nostra suscipit tempus congue lacinia cubilia hendrerit, a nam gravida convallis vulputate dignissim, leo lobortis quis cursus augue posuere. Iaculis duis sociosqu curabitur phasellus placerat dictumst consequat fames posuere, pharetra nunc scelerisque ante malesuada eros fermentum sed.",
        title: "Promover el cuidado ambiental",
        updatedAt: "2020-04-25T20:49:00.519000",
      },
      {
        createdAt: "2020-04-25T20:49:00.519000",
        id: "5eace53ff5aa9f0006a4800a",
        image: "http://157.245.131.248:10506/resources/images/posts/5ea1ff3cb20b418e50fd9085.jpg",
        image2: "http://157.245.131.248:10506/resources/images/posts/5ea1ff3cb20b418e50fd9086.jpg",
        status: "1",
        tag: "1",
        text:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur vivamus congue dictum risus molestie urna, suspendisse ac sapien magna habitasse natoque. Eget mauris placerat erat nec curae non litora lobortis, mus sem primis accumsan velit cras praesent blandit nunc, justo neque euismod mollis lacus orci scelerisque. Id hendrerit metus mus iaculis vestibulum, tellus nostra vitae libero tincidunt facilisi, eleifend cubilia nibh leo. Condimentum molestie imperdiet turpis in velit fringilla maecenas nullam, enim rhoncus magna aptent sociis lacinia eu libero posuere, taciti rutrum commodo montes aenean congue est. Praesent nostra suscipit tempus congue lacinia cubilia hendrerit, a nam gravida convallis vulputate dignissim, leo lobortis quis cursus augue posuere. Iaculis duis sociosqu curabitur phasellus placerat dictumst consequat fames posuere, pharetra nunc scelerisque ante malesuada eros fermentum sed.",
        title: "Promover el cuidado ambiental. Parte 2.",
        updatedAt: "2020-04-25T20:49:00.519000",
      },
    ],
  };

  beforeEach(async(() => {
    httpSpy = jasmine.createSpyObj("HttpClient", ["get"]);
    httpSpy.get.and.returnValue(of(postsResponse));
    blogService = new ApiWebContentService(<any>httpSpy);
    blogService.setBaseUrl(environment.baseUrl);
    blogService.setResourcePath("webcontent/posts/page/");

    TestBed.configureTestingModule({
      declarations: [BlogArchiveComponent, PostCardComponent, SearcherComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientModule,
        BrowserAnimationsModule,
        SharedModule,
        RouterModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        FormsModule,
      ],
      providers: [
        { provide: ApiWebContentService, useValue: blogService },
        { provide: HttpClient, useValue: httpSpy },
        { provide: Title, useClass: Title },
        { provide: Meta, useClass: Meta },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    activatedRoute.setParamMap({ prueba: "" });
    fixture = TestBed.createComponent(BlogArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create blog page", () => {
    expect(component).toBeTruthy();
  });

  it("updatePostsIndex should increase when add new posts", () => {
    testUpdatePostsIndex(200, 220);
  });

  it("updatePostsIndex should decrease when remove old posts", () => {
    testUpdatePostsIndex(200, 180);
  });

  it("updatePostsIndex should be 0 if there is no posts", () => {
    testUpdatePostsIndex(200, 0);
  });

  function testUpdatePostsIndex(initialPosts, newPosts) {
    component.postsIndex = createNumericArray(initialPosts);
    let lastIndex = component.postsIndex.length - 1;
    expect(component.postsIndex.length).toBe(initialPosts);
    expect(component.postsIndex[lastIndex]).toBe(initialPosts ? initialPosts : undefined);
    component.updatePostsIndex(newPosts);
    lastIndex = component.postsIndex.length - 1;
    expect(component.postsIndex.length).toBe(newPosts);
    expect(component.postsIndex[lastIndex]).toBe(newPosts ? newPosts : undefined);
  }

  function createNumericArray(count: number): number[] {
    const numericArray = [];
    for (let i = 1; i <= count; i++) {
      numericArray.push(i);
    }
    return numericArray;
  }

  it(`should have meta title tag with content ${METADATA.blogPage.title}`, () => {
    testHelpers.testMetaTitle(TestBed.get(Title), METADATA.blogPage.title);
  });

  METADATA.blogPage.metatags.map((metatag) => {
    it(`should have meta ${metatag.name} with content`, () => {
      testHelpers.testMetaTag(TestBed.get(Meta), `name="${metatag.name}"`, metatag.content);
    });
  });
});
