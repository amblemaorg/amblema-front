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

export const showClauseFn = (pageTmp): boolean => {
  return true;
};

export const getPageLabelKeyFn = (pageTmp): string => {
  return 'title';
};

export class TemplateUtils {
  static addItemsToIndex(
    pagesTmp: any[],
    pagerInst: Pager,
    getLabelKey = getPageLabelKeyFn,
    parentItem?: IndexListItem,
    showClause = showClauseFn,
  ): RecursiveArrayIndexListItem {
    const listItems = [];
    const childItems = [];

    if (parentItem) {
      listItems.push(parentItem);
    }

    for (let index = 0; index < pagesTmp.length; index++) {
      const pageTmp = pagesTmp[index];
      const labelKey = getLabelKey(pageTmp);
      pageTmp.setPagerInst(pagerInst, pageTmp[labelKey]);

      if (parentItem) {
        childItems.push(
          new IndexListItem(
            pageTmp[labelKey],
            pageTmp.pgHref,
            pageTmp.page,
            showClause(pageTmp),
          ),
        );

        continue;
      }

      listItems.push(
        new IndexListItem(
          pageTmp[labelKey],
          pageTmp.pgHref,
          pageTmp.page,
          showClause(pageTmp),
        ),
      );
    }

    if (childItems.length > 0) {
      listItems.push(childItems);
    }

    return listItems;
  }
}
