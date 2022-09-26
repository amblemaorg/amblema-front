import { YearbookFormConfig } from './data';
// import { YearbookPdf } from './';

export class YearbookConfig {
  static forms = YearbookFormConfig;
  // static pdf = new YearbookPdf();

  static getFormDescriptionLimit(sectionName: string): number {
    if (!this.forms[sectionName]) return null;
    return this.forms[sectionName].description.limit;
  }

  static getFormDescriptionMinLimit(sectionName: string): number {
    if (!this.forms[sectionName]) return null;
    return this.forms[sectionName].description.minLimit;
  }
}
