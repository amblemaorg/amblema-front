export interface PageBlockComponent {
  type: 'structural' | 'presentational';
  name?: string;
  component: string;
  viewMode?: string; // view, edit, both
  settings: any;
  setSettings(settings: any): void;
  setData?(data: any): void;
  setFetcherUrls?(urls: object): void;
}

export interface StructuralBlockComponent extends PageBlockComponent {
  type: 'structural';
  settings: {
    items: StructuralItem[];
    modalCode?: string; // for views with modal inside
    isFromImgContainer?: boolean;
  };
}

export interface StructuralItem {
  title?: string;
  childBlocks: PageBlockComponent[];
  icon?: string;
  description?: string;
  image?: string;
}

export interface PresentationalBlockComponent extends PageBlockComponent {
  type: 'presentational';
  settings: any;
}
