import { Template, TemplateOptions } from './Template';

export class SponsorLogoTemplate extends Template {
  constructor(
    public img: string,
    templateOptions?: TemplateOptions,
  ) {
    super('sponsorLogoTemplate', templateOptions);
  }
}
