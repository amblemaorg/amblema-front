import { Template, TemplateOptions } from './Template';

export class DiagnosticTemplate extends Template {
  isImgGraphic = true;

  constructor(
    public title: string,
    public description: string,
    public graphic: string | chartValue[],
    public subtitle?: string,
    templateOptions?: TemplateOptions,
  ) {
    super('diagnosticTemplate', templateOptions);

    if (typeof this.graphic === 'object') {
      this.isImgGraphic = false;
      this.buildGraphic();
    }
  }

  buildGraphic(chartValue = this.graphic) {}
}

// interface Diagnostics {
//   multiplicationsPerMinIndex: chartValue[];
//   operationsPerMinIndex: chartValue[];
//   wordsPerMinIndex: chartValue[];
// }

interface chartValue {
  createdAt: string;
  label: string;
  serie: string;
  value: number;
}
