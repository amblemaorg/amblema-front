import { Pager, IndexListItem, RecursiveArrayIndexListItem } from './';

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

  setPagerInst(pagerInst: Pager, href?: string) {
    this.setPage(pagerInst);
    if (href) {
      const regex = /[!\"#\$%&\'\(\)\*\+,-\./:;<=>\?@\[\\\]\^_`{\|}~]/gi;
      href = href.replace(regex, ' ');
      href = href.replace(/\s/g, '-');
      this.pgHref = `${href}-${this.page}`;
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

export class TemplateUtils {
  static addItemsToIndex(
    pagesTmp: any[],
    pagerInst: Pager,
    parentItem?: IndexListItem,
  ): RecursiveArrayIndexListItem {
    const listItems = [];
    const items = [];

    if (parentItem) {
      listItems.push(parentItem);
    }

    pagesTmp.forEach((pageTmp) => {
      pageTmp.setPagerInst(pagerInst, pageTmp.name);

      items.push(new IndexListItem(pageTmp.name, pageTmp.pgHref, pageTmp.page));
    });

    listItems.push(items);
    // console.log('addItemsToIndex', parentItem);

    return listItems;
  }
}
