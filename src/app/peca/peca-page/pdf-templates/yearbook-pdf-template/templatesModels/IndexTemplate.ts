import { Template, TemplateOptions } from './Template';

export class IndexTemplate extends Template {
  listItems: any[];

  constructor(listItems: any[], templateOptions?: TemplateOptions) {
    super('indexTemplate', templateOptions);

    this.setListItems(listItems);
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
