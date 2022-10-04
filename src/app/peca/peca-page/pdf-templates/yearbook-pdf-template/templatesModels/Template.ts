import { Pager } from './Pager';

export class Template {
  protected templateOptions: TemplateOptions = {
    show: false,
    priority: 0,
    pagerOptions: {
      incrementFactor: 1,
    },
  };

  page = 1;
  pgHref: string;

  constructor(public templateName: string, templateOptions?: TemplateOptions) {
    this.addTemplateOptions(templateOptions);
  }

  setPagerInst(pagerInst: Pager, setHref = true) {
    this.setPage(pagerInst);
    if (setHref) {
      this.pgHref = `pagerHref-${this.page}`;
    }
  }

  setPage(pagerInst: Pager) {
    const { incrementFactor } = this.templateOptions.pagerOptions;
    pagerInst.increment(incrementFactor);
    this.page = pagerInst.getPages();
  }

  addTemplateOptions(options?: TemplateOptions) {
    if (options) {
      return {
        ...this.templateOptions,
        ...options,
      };
    }
  }
}

export interface TemplateOptions {
  show?: boolean;
  priority?: number;
  pagerOptions?: {
    incrementFactor?: number;
  };
}
