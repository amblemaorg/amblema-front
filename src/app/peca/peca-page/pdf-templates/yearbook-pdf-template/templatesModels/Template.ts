export interface TemplateOptions {
  show?: boolean;
  priority?: number;
}

export class Template {
  templateOptions = {
    show: false,
    priority: 0,
  };

  constructor(public templateName = '', templateOptions?: TemplateOptions) {
    this.setTemplateOptions(templateOptions);
  }

  setTemplateOptions(options?: TemplateOptions) {
    if (options) {
      return {
        ...this.templateOptions,
        ...options,
      };
    }
  }
}
