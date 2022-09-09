import { Template, TemplateOptions } from './Template';
// export class FrontPageTemplate {
//   constructor(
//     public data: { schoolName; schoolYear; sponsorName; sponsorLogo },
//     public template = 'frontpageTemplate',
//     public show = false,
//     public priority = 0,
//   ) {}
// }

export class FrontPageTemplate extends Template {
  constructor(
    public head: Head,
    public body: Body,
    TemplateOptions?: TemplateOptions,
  ) {
    super('frontpageTemplate', TemplateOptions);
  }
}

interface Head {
  title: string;
  brand: string;
}

interface Body {
  title: string;
  subTitle: string;
  subTitleN2: string;
}
