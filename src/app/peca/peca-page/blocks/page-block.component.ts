export interface PageBlockComponent {
  type: 'structural' | 'presentational';
  component: string;
  settings: any;
  setSettings(settings: any): void;
}

export interface StructuralBlockComponent extends PageBlockComponent {
  type: 'structural';
  settings: {
    items: StructuralItem[];
    modalCode?: string; // for views with modal inside
  };
}

export interface StructuralItem {
  title: string;
  childBlocks: PageBlockComponent[];
  formBlock?: PageBlockComponent;
  icon?: string;
  description?: string;
  image?: string;
}

export interface PresentationalBlockComponent extends PageBlockComponent {
  type: 'presentational';
  settings: any;
}
