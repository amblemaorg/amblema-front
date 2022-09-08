import { Template, TemplateOptions } from './';

export type RecursiveArrayIndexListItem = Array<
  RecursiveArrayIndexListItem | IndexListItem
>;
export class IndexTemplate extends Template {
  // listItems: RecursiveArrayIndexListItem = [];
  // notNestedItems: IndexListItem[] = [];
  maxItemsToWrap = 22;
  utils = new IndexTemplateUtils();
  // maxItemsPerPaged = 48;

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

  setNotNestedItems(listItems: RecursiveArrayIndexListItem, levels = 0) {
    for (let index = 0; index < listItems.length; index++) {
      const item = listItems[index];

      if (!Array.isArray(item)) {
        if (!item.label) continue;
        item.arrayLevel = levels;
        this.notNestedItems.push(item);
        continue;
      }
      levels += 1;
      this.setNotNestedItems(item, levels);
    }
    console.log(levels);
    levels = 0;
  }

  getNotNestedItems(listItems: RecursiveArrayIndexListItem) {
    this.notNestedItems = [];
    this.levels = 0;
    this.setNotNestedItems(listItems);
    return this.notNestedItems;
  }

  getNotNestedItemsPaged(
    maxItemsPerPage: number,
    notNestedItems = this.notNestedItems,
  ) {
    const notNestedItemsPaged = [];
    const totalIndexPage = parseFloat(
      (notNestedItems.length / maxItemsPerPage).toFixed(1),
    );

    for (let index = 0; index < totalIndexPage; index++) {
      const itemsToIgnore = index * maxItemsPerPage;

      console.log('yes', itemsToIgnore);

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
