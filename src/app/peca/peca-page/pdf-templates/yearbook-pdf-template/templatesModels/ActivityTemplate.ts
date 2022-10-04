import { Template, TemplateOptions } from './Template';
export class ActivityTemplate extends Template {
  constructor(
    public storeId: string,
    public title: string,
    public description = '',
    public subtitle = '',
    public images = [],
    public characterLimit = 0,
    templateOptions?: TemplateOptions,
  ) {
    super('activityTemplate', templateOptions);
  }
}
