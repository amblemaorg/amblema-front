import { Testimonial } from './testimonial.model';
import { Sponsor } from './sponsor.model';

export interface SponsorPage {
    backgroundImage: string;
    testimonials: Testimonial[];
    steps: string[];
    sponsors: Sponsor[];
}

export interface WebSponsor {
    sponsorPage: SponsorPage;
}
