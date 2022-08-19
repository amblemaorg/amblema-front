interface TemplateOptions {
  show?: boolean;
  priority?: number;
}

class Template {
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

export class SecondLayoutTemplate extends Template {
  paragraphColumns: string[] = [];

  constructor(
    public title: string,
    public img: string,
    description: string,
    public subtitle?: string,
    templateOptions?: TemplateOptions,
  ) {
    super('layout2Template', templateOptions);

    this.setParagraphColumns(description);
  }

  private setParagraphColumns(description: string) {
    this.paragraphColumns = [description, description];
  }
}

export class SummaryAndCoordinatorPage {
  constructor(
    public data: {
      historicalReviewText;
      historicalReviewImg;
      coordinatorName;
      coordinatorImg;
      coordinatorText;
    },
    public template = 'layout2Template',
    public show = false,
    public priority = 0,
  ) {}
}
