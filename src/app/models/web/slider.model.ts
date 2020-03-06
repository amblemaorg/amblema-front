export interface ResponsiveImage {
  desktop: string;
  tablet?: string;
  movil: string;
}

export interface Slider {
    id?: number;
    image: ResponsiveImage;
    description: string;
}
