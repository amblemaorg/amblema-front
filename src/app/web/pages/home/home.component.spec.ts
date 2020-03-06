import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeService } from 'src/app/services/web/home.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent],
            imports: [
              BrowserAnimationsModule,
              SharedModule,
              CarouselModule,
              HttpClientModule
            ],
            providers: [HomeService]
        })
        .compileComponents();
    }));

    beforeEach(inject([HomeService], (homeService: HomeService) => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create home page', () => {
        expect(component).toBeTruthy();
    });

    it('should have at less and only one h1 tag', () => {
      let h1Count = fixture.nativeElement.querySelectorAll('h1').length;
      expect(h1Count).toBe(1);
    })

    it('should have a h1 tag in about us section', () => {
      el = fixture.nativeElement.querySelector('section.about-us');
      const h1Tag = el.children[1].tagName;
      expect(h1Tag).toBe('H1');
    })

    it('should have a h1 tag in about us section with content "Acerca de nosotros"', () => {
      el = fixture.nativeElement.querySelector('section.about-us');
      const h1Text = el.children[1].textContent;
      expect(h1Text).toBe('Acerca de nosotros');
    })

    it('should have a h2 tag in three pillars section', () => {
      let h2Count = fixture.nativeElement.querySelectorAll('section.pillars h2').length;
      expect(h2Count).toBe(1);
    })

    it('should have a h2 tag in three pillars section with content "Tenemos tres pilares fundamentales"', () => {
      el = fixture.nativeElement.querySelector('section.pillars h2');
      const h2Text = el.textContent;
      expect(h2Text).toBe('Tenemos tres pilares fundamentales');
    })

    it('should have a h2 tag in social impact section', () => {
      let h2Count = fixture.nativeElement.querySelectorAll('section.social-impact h2').length;
      expect(h2Count).toBe(1);
    })

    it('should have a h2 tag in social impact section with content "Impacto social"', () => {
      el = fixture.nativeElement.querySelector('section.social-impact h2');
      const h2Text = el.textContent;
      expect(h2Text).toBe('Impacto social');
    })

    it('should have a h2 tag in founders section', () => {
      let h2Count = fixture.nativeElement.querySelectorAll('section.founders h2').length;
      expect(h2Count).toBe(1);
    })

    it('should have a h2 tag in founders section with content "Fundadores"', () => {
      el = fixture.nativeElement.querySelector('section.founders h2');
      const h2Text = el.textContent;
      expect(h2Text).toBe('Fundadores');
    })
});
