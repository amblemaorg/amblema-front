import { Slider } from './slider.model';

export interface Award {
    title: string;
    image: string;
    image2: string;
    description: string;
    description2: string;
}

export interface AulaActivaImage {
    image: string;
    description?: string | null;
}

export interface AboutUsPage {
    slider: Slider[];
    aboutUsText: string;
    environmentText: string;
    readingText: string;
    mathText: string;
    aulaActivaText?: string;
    aulaActivaGallery?: AulaActivaImage[];
    awards: Award[];
}

export interface WebAboutUs {
    aboutUsPage?: AboutUsPage;
}
