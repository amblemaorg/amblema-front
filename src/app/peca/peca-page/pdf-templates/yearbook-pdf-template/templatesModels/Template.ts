import { IndexTemplate } from './IndexTemplate';
import { Pager, PagerOptions } from './Pager';
export interface TemplateOptions {
  show?: boolean;
  priority?: number;
  pagerOptions: PagerOptions;
}

export class Template {
  private templateOptions: TemplateOptions = {
    show: false,
    priority: 0,
    pagerOptions: {
      lastPagesAdded: 0,
      incrementFactor: 1,
    },
  };
  pager: Pager;

  constructor(public templateName = '', templateOptions?: TemplateOptions) {
    this.setTemplateOptions(templateOptions);

    const { lastPagesAdded, incrementFactor } = this.templateOptions.pagerOptions;
    this.pager = new Pager(lastPagesAdded, incrementFactor);
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
