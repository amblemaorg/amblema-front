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
  };
}

export interface StructuralItem {
  title: string;
  childBlocks: PageBlockComponent[];
  icon?: string;
}

export interface PresentationalBlockComponent extends PageBlockComponent {
  type: 'presentational';
  settings: any;
}
