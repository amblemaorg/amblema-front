import { Template, TemplateOptions } from './Template';
export class ActivityTemplate extends Template {
  constructor(
    public storeId: string,
    public name: string,
    public description = '',
    public images = [],
    public characterLimit = 0,
    templateOptions?: TemplateOptions,
  ) {
    super('activityTemplate', templateOptions);
  }
}
