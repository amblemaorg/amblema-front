import { StaticWebContentService } from "./static-web-content.service";
import { HOME_CONTENT } from "src/app/web/pages/home/home-static-content";
import { ABOUT_US_CONTENT } from "src/app/web/pages/about/about-us-static-content";
import { BLOG_CONTENT } from "src/app/web/pages/blog/blog-static-content";

describe("StaticWebContentService", () => {
  let staticService: StaticWebContentService;
  beforeEach(() => {
    staticService = new StaticWebContentService();
    staticService.setWebContent(HOME_CONTENT);
  });

  it("should be created", () => {
    expect(staticService).toBeTruthy();
  });

  it("should get webcontent data in execution time", () => {
    staticService.getWebContent().subscribe((resp) => {
      expect(resp).toEqual(HOME_CONTENT);
    });
  });

  it("should set webcontent in execution time", () => {
    staticService.setWebContent(ABOUT_US_CONTENT);
    staticService.getWebContent().subscribe((resp) => {
      expect(resp).toEqual(ABOUT_US_CONTENT);
    });
  });

  it("should get web content by param in execution time", () => {
    staticService.setWebContent(BLOG_CONTENT.records);
    const blogPostToFind = BLOG_CONTENT.records[0];
    staticService
      .getWebContentByParam("slug", blogPostToFind.slug)
      .subscribe((resp) => {
        expect(resp).toEqual(blogPostToFind);
      });
  });
});
