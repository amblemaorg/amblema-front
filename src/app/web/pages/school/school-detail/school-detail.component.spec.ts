import { async, ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/web/shared/shared.module';
import { SchoolDetailComponent } from './school-detail.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { of } from 'rxjs';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterTestingModule } from '@angular/router/testing';
import { SchoolService } from 'src/app/services/web/school.service';
import { ActivatedRouteStub } from 'src/assets/tests/activated-route-stub';
import { OwlModule } from 'ngx-owl-carousel';


describe('SchoolDetailComponent', () => {
  let component: SchoolDetailComponent;
  let fixture: ComponentFixture<SchoolDetailComponent>;
  let el: HTMLElement;
  let activatedRoute = new ActivatedRouteStub;
  let getSchoolSpy;
  const school = {
    lat: 8.60123,
    lng: -67.831185,
    name: 'U.E.E Santo Ángel',
    slug: 'escuela-santo-angel',
    sponsor: "Proter & Gamble",
    direction: "Aragua, Lara, Carabobo, Yaracuy, Venezuela",
    staff: "Información del personal docente, obrero y administrativo",
    coordinator: "Información del coordinador general",
    enrollment: "Matrícula estudiantil",
    activities: [
      {
        title: "Título de la actividad",
        date: "20/03/2020",
        place: "Barquisimeto",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
      },
      {
        title: "Título de la actividad",
        date: "20/03/2020",
        place: "Barquisimeto",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
      },
      {
        title: "Título de la actividad",
        date: "20/03/2020",
        place: "Barquisimeto",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
      },
      {
        title: "Título de la actividad",
        date: "20/03/2020",
        place: "Barquisimeto",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
      },
      {
        title: "Título de la actividad",
        date: "20/03/2020",
        place: "Barquisimeto",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
      }
    ],
    testimonials: [
      {
        firstName: "Oscar A.",
        lastName: "Pietri Pacheco",
        image: "./assets/images/profile-oscar.jpg",
        function: "Docente de Matemática",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
      },
      {
        firstName: "Oscar A.",
        lastName: "Pietri Pacheco",
        image: "./assets/images/profile-oscar.jpg",
        function: "Docente de Lectura",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
      },
      {
        firstName: "Oscar A.",
        lastName: "Pietri Pacheco",
        image: "./assets/images/profile-oscar.jpg",
        function: "Docente de Ambiente",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
      },
    ],
    otherSchools: [
      {
        name: 'U.E.E Arturo Michelena',
        slug: 'escuela-arturo-michelena',
        image: './assets/images/background-pillar-ambiente.jpg',
      },
      {
        name: 'U.E.E Los próceres',
        slug: 'escuela-los-proceres',
        image: './assets/images/background-pillar-ambiente.jpg',
      },
      {
        name: 'E.P.B Francisco Tovar',
        slug: 'escuela-francisco-tovar',
        image: './assets/images/background-pillar-ambiente.jpg',
      }
    ]
  };

  beforeEach(() => {

    const schoolService = jasmine.createSpyObj('SchoolService', ['getSchoolBySlugJSON'])
    getSchoolSpy = schoolService.getSchoolBySlugJSON.and.returnValue( of(school) );

    const fakeRouter = {
      provide: Router,
      useValue: {
        url: 'escuelas/escuela-santo-angel',
        events: of(new NavigationEnd(0, 'escuelas/escuela-santo-angel', 'escuelas/escuela-santo-angel')),
        createUrlTree: (commands, navExtras = {}) => {},
        serializeUrl: () => {}
      }
    };

    TestBed.configureTestingModule({
      declarations: [ SchoolDetailComponent ],
      imports: [
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule,
        SharedModule,
        OwlModule,
        CarouselModule
      ],
      providers: [
        { provide: SchoolService, useValue: schoolService },
        // fakeRouter
      ]
    })
    //.compileComponents();
    activatedRoute.setParamMap({ schoolSlug: 'escuela-santo-angel' });
    fixture = TestBed.createComponent(SchoolDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // onInit()
  });

  it('should create component and call getSchoolBySlugJSON() service function', () => {
    expect(getSchoolSpy.calls.any()).toBe(true, 'getSchoolBySlugJSON is called');
    expect(component).toBeTruthy();
  });

  it('should have at less and only one h1 tag with content', () => {
    el = fixture.nativeElement.querySelectorAll('h1');
    const h1Count = fixture.nativeElement.querySelectorAll('h1').length;
    expect(h1Count).toBe(1);
    expect(el[0].textContent).toBe(school.name);
  });

  it('should have a h2 tag in teachers section with content "Los docentes dicen"', () => {
    el = fixture.nativeElement.querySelector('section.teachers h2');
    const h2Count = fixture.nativeElement.querySelectorAll('section.teachers h2').length;
    expect(h2Count).toBe(1);
    expect(el.textContent).toBe("Los Docentes dicen");
  });

  it('should have a h2 tag in activities section with content "Próximas actividades"', () => {
    el = fixture.nativeElement.querySelector('section.activities h2');
    const h2Count = fixture.nativeElement.querySelectorAll('section.activities h2').length;
    expect(h2Count).toBe(1);
    expect(el.textContent).toBe("Próximas actividades");
  });

  it('should have a h2 tag in other schools section with content "Descubre otras escuelas"', () => {
    el = fixture.nativeElement.querySelector('section.other-schools h2');
    const h2Count = fixture.nativeElement.querySelectorAll('section.other-schools h2').length;
    expect(h2Count).toBe(1);
    expect(el.textContent).toBe("Descubre otras escuelas");
  });
});
