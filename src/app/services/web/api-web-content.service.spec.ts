import { TestBed, waitForAsync } from "@angular/core/testing";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { ApiWebContentService } from "./api-web-content.service";
import { environment } from "src/environments/environment";
import { HOME_CONTENT } from "src/app/web/pages/home/home-static-content";
import { BLOG_CONTENT } from "src/app/web/pages/blog/blog-static-content";
import { of } from "rxjs";

describe("ApiWebContentService", () => {
  let apiService: ApiWebContentService;
  let httpSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient],
    });

    httpSpy = jasmine.createSpyObj("HttpClient", ["get"]);
    apiService = new ApiWebContentService(<any>httpSpy);
    apiService.setBaseUrl(environment.baseUrl);
    apiService.setResourcePath("webcontent?page=homePage");
  });

  it("should be created", () => {
    expect(apiService).toBeTruthy();
  });

  it("should get webcontent data in execution time", () => {
    httpSpy.get.and.returnValue(of<any>(HOME_CONTENT));
    apiService.getWebContent().subscribe((resp) => {
      expect(resp).toEqual(HOME_CONTENT);
    });
    expect(httpSpy.get.calls.count()).toBe(1);
  });

  it("should get web content by param in execution time", () => {
    const blogPostToFind = BLOG_CONTENT.records[0];
    httpSpy.get.and.returnValue(of<any>(blogPostToFind));
    apiService
      .getWebContentByParam("slug", blogPostToFind.slug)
      .subscribe((resp) => {
        expect(resp).toEqual(blogPostToFind);
      });
    expect(httpSpy.get.calls.count()).toBe(1);
  });
});
