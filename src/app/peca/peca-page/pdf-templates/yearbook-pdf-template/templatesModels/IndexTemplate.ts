import { Template, TemplateOptions } from './Template';

export class IndexTemplate extends Template {
  listItems: any[];
  notNestedItems: any[] = [];
  maxItemsToWrap = 30;

  constructor(listItems: any[], templateOptions?: TemplateOptions) {
    super('indexTemplate', templateOptions);

    this.setListItems(listItems);
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
    console.log('this.notNestedItems', this.notNestedItems);
    return this.notNestedItems.length;
  }

  haveToWrapList(listItems: any[]) {
    return this.getListItemsLength(listItems) > this.maxItemsToWrap;
  }

  setListItems(listItems: any[]) {
    this.listItems = listItems;
    return this.listItems;
  }
}

interface listItem {
  label: string;
  href: string;
}
