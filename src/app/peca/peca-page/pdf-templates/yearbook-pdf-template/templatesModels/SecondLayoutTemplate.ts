import { Template, TemplateOptions } from './Template';

export class SecondLayoutTemplate extends Template {
  constructor(
    public title: string,
    public img: string,
    public description: string,
    public subtitle?: string,
    public isDirectionReverse = true,
    templateOptions?: TemplateOptions,
  ) {
    super('layout2Template', templateOptions);
  }
}
