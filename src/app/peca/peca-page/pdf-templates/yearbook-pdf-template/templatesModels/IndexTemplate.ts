import { Template, TemplateOptions } from './Template';

export type RecursiveArrayIndexListItem = Array<
  RecursiveArrayIndexListItem | IndexListItem
>;
export class IndexTemplate extends Template {
  maxItemsToWrap = 22;
  utils = new IndexTemplateUtils();

  constructor(
    public listItems: RecursiveArrayIndexListItem = [],
    templateOptions?: TemplateOptions,
  ) {
    super('indexTemplate', templateOptions);

    this.listItems = listItems;
  }

  haveToWrapList() {
    return this.listItems.length > this.maxItemsToWrap;
  }
}

export class IndexTemplateUtils {
  notNestedItems = [];
  levels = 0;

  setNotNestedItems(
    listItems: RecursiveArrayIndexListItem | IndexListItem,
    levels = 0,
  ) {
    if (Array.isArray(listItems)) {
      levels += 1;
      listItems.forEach((item) => {
        this.setNotNestedItems(item, levels);
      });
      return;
    }

    const item = listItems;

    if (!item.label) return;

    item.arrayLevel = levels;

    this.notNestedItems.push(item);
  }

  initRecursiveSettingNotNestedItems(listItems: RecursiveArrayIndexListItem) {
    this.notNestedItems = [];

    listItems.forEach((listItemsForE) => {
      const levels = 0;

      this.setNotNestedItems(listItemsForE, levels);
    });
  }

  getNotNestedItems(listItems: RecursiveArrayIndexListItem) {
    this.initRecursiveSettingNotNestedItems(listItems);

    return this.notNestedItems;
  }

  getNotNestedItemsPaged(
    maxItemsPerPage: number,
    notNestedItems = this.notNestedItems,
  ): IndexListItem[][] {
    const notNestedItemsPaged = [];
    const totalIndexPage = parseFloat(
      (notNestedItems.length / maxItemsPerPage).toFixed(1),
    );

    for (let index = 0; index < totalIndexPage; index++) {
      const itemsToIgnore = index * maxItemsPerPage;

      notNestedItemsPaged.push(
        notNestedItems.slice(itemsToIgnore, itemsToIgnore + maxItemsPerPage),
      );
    }

    return notNestedItemsPaged;
  }
}

export class IndexListItem {
  private readonly factorPaddingIncrement = 10;
  constructor(
    public label: string,
    public href?: string,
    public pageNumber?: number,
    public show = true,
    public arrayLevel = 0,
  ) {}

  getPaddingLeftByLevel() {
    const padding = this.arrayLevel * this.factorPaddingIncrement;
    return `${padding}px`;
  }
}
