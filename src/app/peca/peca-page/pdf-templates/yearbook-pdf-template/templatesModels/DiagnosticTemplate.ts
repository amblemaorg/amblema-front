import { Template, TemplateOptions } from './Template';

export class DiagnosticTemplate extends Template {
  constructor(
    public title: string,
    public description: string,
    public graphic: string,
    public subtitle?: string,
    templateOptions?: TemplateOptions,
  ) {
    super('diagnosticTemplate', templateOptions);
  }
}
