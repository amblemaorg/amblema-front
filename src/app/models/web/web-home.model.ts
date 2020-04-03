import { Slider } from './slider.model';
import { Testimonial } from './testimonial.model';

export interface HomePage {
    slider: Slider[];
    aboutUsText: string;
    environmentText: string;
    readingText: string;
    mathText: string;
    statistics: any;
    testimonials: Testimonial[];
}

export interface WebHome {
    homePage: HomePage;
}
