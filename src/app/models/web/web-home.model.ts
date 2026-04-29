import { Slider } from './slider.model';
import { Testimonial } from './testimonial.model';

export interface OlympicsHistoryData {
  regionalClassified: number;
  regionalGold: number;
  regionalSilver: number;
  regionalBronze: number;
  nationalClassified: number;
  nationalGold: number;
  nationalSilver: number;
  nationalBronze: number;
}

export interface OlympicsHistory {
  mathOlympics: OlympicsHistoryData;
  readingOlympics: OlympicsHistoryData;
}

export interface HomePage {
  slider: Slider[];
  aboutUsText: string;
  environmentText: string;
  readingText: string;
  mathText: string;
  statistics: any;
  testimonials: Testimonial[];
  olympicsHistory?: OlympicsHistory;
}

export interface WebHome {
    homePage: HomePage;
}
