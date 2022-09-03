import { Template, TemplateOptions } from './Template';

export class IndexTemplate extends Template {
  constructor(public listItems, templateOptions?: TemplateOptions) {
    super('indexTemplate', templateOptions);
  }
}

interface listItem {
  label: string;
  href: string;
}
