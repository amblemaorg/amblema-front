import { Pager, PagerOptions } from './Pager';
export interface TemplateOptions {
  show?: boolean;
  priority?: number;
  pagerOptions?: PagerOptions;
}

export class Template {
  private templateOptions: TemplateOptions = {
    show: false,
    priority: 0,
    pagerOptions: {
      // lastPagesAdded: 0,
      incrementFactor: 1,
    },
  };
  pager: Pager = null;

  constructor(public templateName: string, templateOptions?: TemplateOptions) {
    this.setTemplateOptions(templateOptions);

    // if (!pager) {
    //   const { lastPagesAdded, incrementFactor } = this.templateOptions.pagerOptions;
    //   this.pager = new Pager(lastPagesAdded, incrementFactor);
    // }
  }

  setPagerInst(pagerInst: Pager) {
    const { incrementFactor } = this.templateOptions.pagerOptions;
    this.pager = pagerInst;
    this.pager.increment(incrementFactor);
  }

  getPage() {
    return this.pager.getPage();
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
