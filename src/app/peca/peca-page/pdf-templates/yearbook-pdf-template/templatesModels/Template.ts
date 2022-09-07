import { Pager } from './Pager';
export interface TemplateOptions {
  show?: boolean;
  priority?: number;
  pagerOptions?: {
    incrementFactor?: number;
  };
}

export class Template {
  private templateOptions: TemplateOptions = {
    show: false,
    priority: 0,
    pagerOptions: {
      incrementFactor: 1,
    },
  };

  pgHref: string;
  page = 1;

  constructor(public templateName: string, templateOptions?: TemplateOptions) {
    this.setTemplateOptions(templateOptions);
  }

  setPagerInst(pagerInst: Pager, href: string) {
    const regex = /[!\"#\$%&\'\(\)\*\+,-\./:;<=>\?@\[\\\]\^_`{\|}~]/gi;
    href = href.replace(regex, ' ');
    href = href.replace(/\s/g, '-');
    this.setPage(pagerInst);

    this.pgHref = `${href}-${this.page}`;
  }

  setPage(pagerInst: Pager) {
    const { incrementFactor } = this.templateOptions.pagerOptions;
    pagerInst.increment(incrementFactor);
    this.page = pagerInst.getPages();
  }

  setTemplateOptions(options?: TemplateOptions) {
    if (options) {
      return {
        ...this.templateOptions,
        ...options,
      };
    }
  }
}
