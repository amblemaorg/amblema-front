import { Template, TemplateOptions } from './';

export type RecursiveArrayIndexListItem = Array<
  RecursiveArrayIndexListItem | IndexListItem
>;
export class IndexTemplate extends Template {
  // listItems: any[];
  notNestedItems = [];
  maxItemsToWrap = 23;
  maxItemsPerPaged = 48;

  constructor(
    public listItems: RecursiveArrayIndexListItem,
    templateOptions?: TemplateOptions,
  ) {
    super('indexTemplate', templateOptions);
  }

  setNotNestedItems(listItems: any[]) {
    for (let index = 0; index < listItems.length; index++) {
      const item = listItems[index];

      if (!Array.isArray(item)) {
        this.notNestedItems.push(item);
        continue;
      }

      this.setNotNestedItems(item);
    }
  }

  getListItemsLength(listItems: any[]) {
    this.notNestedItems = [];
    this.setNotNestedItems(listItems);
    // console.log('this.notNestedItems', this.notNestedItems);
    return this.notNestedItems.length;
  }

  haveToWrapList(listItems: any[]) {
    // console.log(this.getListItemsLength(listItems));

    return this.getListItemsLength(listItems) > this.maxItemsToWrap;
  }

  // addListItems(listItems) {}
}

export class IndexListItem {
  constructor(
    public label: string,
    public href?: string,
    public pageNumber?: number,
    public show = true,
  ) {}
}
