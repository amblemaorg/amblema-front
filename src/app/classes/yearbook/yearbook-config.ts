import { YearbookFormConfig } from './data';

export class YearbookConfig {
  static forms = YearbookFormConfig;

  static getFormDescriptionLimit(sectionName: string): number {
    if (!this.forms[sectionName]) return null;
    return this.forms[sectionName].description.limit;
  }
}