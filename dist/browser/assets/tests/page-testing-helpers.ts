import {} from "jasmine";
import { Meta, Title } from "@angular/platform-browser";

export class WebPageTestHelpers {
  testIsUniqueTag = (nativeElement: any, tag: string) => {
    this.testIsUniqueTagInSelector(nativeElement, "", tag);
  };

  testIsUniqueTagInSelector = (nativeElement: any, cssSelector: string, tag: string) => {
    const elements: HTMLElement[] = nativeElement.querySelectorAll(cssSelector + " " + tag);
    expect(elements.length).toBe(1);

    const el: HTMLElement = elements[0];
    expect(el.tagName).toBe(tag.toUpperCase());
  };

  testSelectorHasContent = (nativeElement: any, cssSelector: string, content: string) => {
    const el: HTMLElement = nativeElement.querySelector(cssSelector);
    expect(el.textContent).toBe(content);
  };

  testMetaTitle = (titleService: Title, title) => {
    expect(titleService.getTitle()).toBe(title);
  };

  testMetaTag = (metaService: Meta, metaTag, metaContent) => {
    expect(metaService.getTag(metaTag).content).toBe(metaContent);
  };
}
