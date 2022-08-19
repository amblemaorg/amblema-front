import { Template, TemplateOptions } from './Template';

export class SecondLayoutTemplate extends Template {
  paragraphColumns: string[] = [];

  constructor(
    public title: string,
    public img: string,
    description: string,
    public subtitle?: string,
    public isDirectionReverse = true,
    templateOptions?: TemplateOptions,
  ) {
    super('layout2Template', templateOptions);

    this.setParagraphColumns(description);
  }

  private setParagraphColumns(description: string) {
    this.paragraphColumns = [description, description];
  }
}
