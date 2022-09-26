import { Template, TemplateOptions } from './Template';

interface Options {
  withSubtitle?: boolean;
  limit?: number;
  offset?: number;
  backgroundClass?: string;
}

export class GalleryTemplate extends Template {
  options = {
    withSubtitle: false,
    limit: 12,
    offset: 0,
    backgroundClass: 'background--gallery',
  };

  constructor(
    public images: any[],
    options?: Options,
    templateOptions?: TemplateOptions,
  ) {
    super('galleryTemplate', templateOptions);

    if (options) {
      this.options = {
        ...this.options,
        ...options,
      };
    }
  }
}
