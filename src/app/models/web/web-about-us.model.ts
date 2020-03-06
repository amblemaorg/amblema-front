import { Slider } from './slider.model';

export interface Award {
    title: string;
    image: string;
    image2: string;
    description: string;
    description2: string;
}

export interface AboutUsPage {
    slider: Slider[];
    aboutUsText: string;
    environmentText: string;
    readingText: string;
    mathText: string;
    awards: Award[];
}

export interface WebAboutUs {
    aboutUsPage?: AboutUsPage;
}
