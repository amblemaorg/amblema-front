import { Template, TemplateOptions } from './Template';

export class IndexTemplate extends Template {
  listItems: any[];
  notNestedItems: any[] = [];

  constructor(listItems: any[], templateOptions?: TemplateOptions) {
    super('indexTemplate', templateOptions);

    this.setListItems(listItems);
    this.setNotNestedItems(listItems);
    console.log('this.notNestedItems', this.notNestedItems);
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

  setListItems(listItems: any[]) {
    this.listItems = listItems;
    return this.listItems;
  }
}

interface listItem {
  label: string;
  href: string;
}
