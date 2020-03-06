import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { SponsorsComponent } from './sponsors.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SponsorService } from '../../../services/web/sponsors.service';
import { SponsorPage } from '../../../models/web/web-sponsor.model';
import { HttpClientModule } from '@angular/common/http';

describe('SponsorsComponent', () => {
    let component: SponsorsComponent;
    let fixture: ComponentFixture<SponsorsComponent>;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
              SponsorsComponent,
            ],
            imports: [
              BrowserAnimationsModule,
              SharedModule,
              CarouselModule,
              HttpClientModule
            ],
            providers: [
              SponsorService
            ]
        })
        .compileComponents();
    }));

    beforeEach(inject([SponsorService], (sponsorService: SponsorService) => {
        fixture = TestBed.createComponent(SponsorsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create sponsors page', () => {
        expect(component).toBeTruthy();
    });

    it('should have at less and only one h1 tag', () => {
      let h1Count = fixture.nativeElement.querySelectorAll('h1').length;
      expect(h1Count).toBe(1);
    })

    it('should have a h1 tag in cover section', () => {
      el = fixture.nativeElement.querySelector('section.cover');
      const h1Tag = el.children[1].tagName;
      expect(h1Tag).toBe('H1');
    })

    it('should have a h1 tag in cover section with content "Padrinos"', () => {
      el = fixture.nativeElement.querySelector('section.cover h1');
      const h1Text = el.textContent;
      expect(h1Text).toBe('Padrinos');
    })

    it('should have a h2 tag in steps section', () => {
      let h2Count = fixture.nativeElement.querySelectorAll('section.steps h2').length;
      expect(h2Count).toBe(1);
    })

    it('should have a h2 tag in steps section with content "¿Cómo ser un padrino?"', () => {
      el = fixture.nativeElement.querySelector('section.steps h2');
      const h2Text = el.textContent;
      expect(h2Text).toBe('¿Cómo ser un padrino?');
    })

    it('should have a h2 tag in sponsors section', () => {
      let h2Count = fixture.nativeElement.querySelectorAll('section.sponsors h2').length;
      expect(h2Count).toBe(1);
    })

    it('should have a h2 tag in sponsors section with content "Nuestros padrinos"', () => {
      el = fixture.nativeElement.querySelector('section.sponsors h2');
      const h2Text = el.textContent;
      expect(h2Text).toBe('Nuestros padrinos');
    })
});
