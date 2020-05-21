import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "src/app/web/shared/shared.module";
import { SchoolDetailComponent } from "./school-detail.component";
import { of } from "rxjs";
import { CarouselModule } from "ngx-owl-carousel-o";
import { RouterTestingModule } from "@angular/router/testing";
import { SchoolService } from "src/app/services/web/school.service";
import { ActivatedRouteStub } from "src/assets/tests/activated-route-stub";
import { OwlModule } from "ngx-owl-carousel";
import { ChartsSwitcherModule } from "src/app/web/shared/charts-switcher/charts-switcher.module";
import { GlobalService } from "src/app/services/global.service";
import { NgxsModule, Store } from "@ngxs/store";
import { WebState } from "src/app/store/states/web/web.state";

describe("SchoolDetailComponent", () => {
  let component: SchoolDetailComponent;
  let fixture: ComponentFixture<SchoolDetailComponent>;
  let el: HTMLElement;
  let activatedRoute = new ActivatedRouteStub();
  let getSchoolSpy;
  const school = {
    lat: 8.60123,
    lng: -67.831185,
    name: "U.E.E Santo Ángel",
    slug: "escuela-santo-angel",
    sponsor: "Proter & Gamble",
    direction: "Aragua, Lara, Carabobo, Yaracuy, Venezuela",
    staff: "Información del personal docente, obrero y administrativo",
    coordinator: "Información del coordinador general",
    enrollment: "Matrícula estudiantil",
    images: [
      "./assets/images/banner-1.jpg",
      "./assets/images/banner-2.jpg",
      "./assets/images/banner-1.jpg",
      "./assets/images/banner-2.jpg",
    ],
    charts: [
      {
        title: "Diagnóstico de lectura",
        type: "line",
        data: [
          { label: "Lapso 2 (2017-2018)", value: 10 },
          { label: "Lapso 3 (2017-2018)", value: 20 },
          { label: "Lapso 1 (2018-2019)", value: 40 },
          { label: "Lapso 2 (2018-2019)", value: 30 },
          { label: "Lapso 3 (2018-2019)", value: 20 },
          { label: "Lapso 1 (2019-2020)", value: 30 },
          { label: "Lapso 2 (2019-2020)", value: 50 },
          { label: "Lapso 2 (2017-2018)", value: 10 },
          { label: "Lapso 3 (2017-2018)", value: 20 },
          { label: "Lapso 1 (2018-2019)", value: 40 },
          { label: "Lapso 2 (2018-2019)", value: 30 },
          { label: "Lapso 3 (2018-2019)", value: 20 },
          { label: "Lapso 1 (2019-2020)", value: 30 },
          { label: "Lapso 2 (2019-2020)", value: 50 },
          { label: "Lapso 2 (2017-2018)", value: 10 },
        ],
        goals: [{ label: "Valor esperado: 50", value: 50 }],
        testimonial: {
          firstName: "Oscar A.",
          lastName: "Pietri Pacheco",
          image: "./assets/images/profile-oscar.jpg",
          function: "Docente de Matemática",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
      },
      {
        title: "Palabras por minuto",
        type: "line",
        data: [
          { label: "Lapso 2 (2017-2018)", value: 100 },
          { label: "Lapso 3 (2017-2018)", value: 90 },
          { label: "Lapso 1 (2018-2019)", value: 120 },
          { label: "Lapso 2 (2018-2019)", value: 120 },
          { label: "Lapso 3 (2018-2019)", value: 110 },
          { label: "Lapso 1 (2019-2020)", value: 130 },
          { label: "Lapso 2 (2019-2020)", value: 150 },
        ],
        goals: [{ label: "Valor esperado: 160", value: 160 }],
        testimonial: {
          firstName: "Oscar A.",
          lastName: "Pietri Pacheco",
          image: "./assets/images/profile-oscar.jpg",
          function: "Docente de Matemática",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
      },
      {
        title: "Diagnóstico de matemática",
        type: "line",
        data: [
          { label: "Lapso 2 (2017-2018)", value: 20 },
          { label: "Lapso 3 (2017-2018)", value: 30 },
          { label: "Lapso 1 (2018-2019)", value: 15 },
          { label: "Lapso 2 (2018-2019)", value: 20 },
          { label: "Lapso 3 (2018-2019)", value: 20 },
          { label: "Lapso 1 (2019-2020)", value: 30 },
          { label: "Lapso 2 (2019-2020)", value: 40 },
        ],
        goals: [{ label: "Valor esperado: 50", value: 50 }],
        testimonial: {
          firstName: "Oscar A.",
          lastName: "Pietri Pacheco",
          image: "./assets/images/profile-oscar.jpg",
          function: "Docente de Matemática",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
      },
    ],
    mathOlympics: {
      enrolled: 145,
      classified: 30,
      goldMedal: 10,
      silverMedal: 15,
      bronzeMedal: 5,
    },
    activities: {
      withTeachers: [
        {
          name: "Actividad 1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
          images: [
            "./assets/images/banner-1.jpg",
            "./assets/images/banner-2.jpg",
            "./assets/images/background-pillar-lectura.jpg",
            "./assets/images/background-pillar-ambiente.jpg",
            "./assets/images/background-pillar-matematica.jpg",
          ],
        },
        {
          name: "Actividad 2",
          description:
            "Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
          images: [
            "./assets/images/banner-1.jpg",
            "./assets/images/banner-2.jpg",
            "./assets/images/background-pillar-lectura.jpg",
            "./assets/images/background-pillar-ambiente.jpg",
            "./assets/images/background-pillar-matematica.jpg",
          ],
        },
        {
          name: "Actividad 3",
          description:
            "Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
          images: [
            "./assets/images/banner-1.jpg",
            "./assets/images/banner-2.jpg",
            "./assets/images/banner-1.jpg",
            "./assets/images/banner-2.jpg",
          ],
        },
      ],
      specials: [
        {
          name: "Actividad 1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
          images: [
            "./assets/images/banner-1.jpg",
            "./assets/images/banner-2.jpg",
            "./assets/images/background-pillar-lectura.jpg",
            "./assets/images/background-pillar-ambiente.jpg",
            "./assets/images/background-pillar-matematica.jpg",
          ],
        },
        {
          name: "Actividad 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
          images: [
            "./assets/images/banner-1.jpg",
            "./assets/images/banner-2.jpg",
            "./assets/images/background-pillar-lectura.jpg",
            "./assets/images/background-pillar-ambiente.jpg",
            "./assets/images/background-pillar-matematica.jpg",
          ],
        },
        {
          name: "Actividad 3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
          images: [
            "./assets/images/banner-1.jpg",
            "./assets/images/banner-2.jpg",
            "./assets/images/banner-1.jpg",
            "./assets/images/banner-2.jpg",
          ],
        },
        {
          name: "Actividad 4",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
          images: [
            "./assets/images/banner-1.jpg",
            "./assets/images/banner-2.jpg",
            "./assets/images/banner-1.jpg",
            "./assets/images/banner-2.jpg",
          ],
        },
        {
          name: "Actividad 5",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
          images: [
            "./assets/images/banner-1.jpg",
            "./assets/images/banner-2.jpg",
            "./assets/images/banner-1.jpg",
            "./assets/images/banner-2.jpg",
          ],
        },
        {
          name: "Actividad 6",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
          images: [
            "./assets/images/banner-1.jpg",
            "./assets/images/banner-2.jpg",
            "./assets/images/banner-1.jpg",
            "./assets/images/banner-2.jpg",
          ],
        },
      ],
    },
    newActivities: [
      {
        title: "Título de la actividad",
        date: "20/03/2020",
        place: "Barquisimeto",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
      },
      {
        title: "Título de la actividad",
        date: "20/03/2020",
        place: "Barquisimeto",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
      },
      {
        title: "Título de la actividad",
        date: "20/03/2020",
        place: "Barquisimeto",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
      },
      {
        title: "Título de la actividad",
        date: "20/03/2020",
        place: "Barquisimeto",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
      },
      {
        title: "Título de la actividad",
        date: "20/03/2020",
        place: "Barquisimeto",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
      },
    ],
    testimonials: [
      {
        firstName: "Oscar A.",
        lastName: "Pietri Pacheco",
        image: "./assets/images/profile-oscar.jpg",
        function: "Docente de Matemática",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
      },
      {
        firstName: "Oscar A.",
        lastName: "Pietri Pacheco",
        image: "./assets/images/profile-oscar.jpg",
        function: "Docente de Lectura",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
      },
      {
        firstName: "Oscar A.",
        lastName: "Pietri Pacheco",
        image: "./assets/images/profile-oscar.jpg",
        function: "Docente de Ambiente",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
      },
    ],
    otherSchools: [
      {
        name: "U.E.E Arturo Michelena",
        slug: "escuela-arturo-michelena",
        image: "./assets/images/background-pillar-ambiente.jpg",
      },
      {
        name: "U.E.E Los próceres",
        slug: "escuela-los-proceres",
        image: "./assets/images/background-pillar-ambiente.jpg",
      },
      {
        name: "E.P.B Francisco Tovar",
        slug: "escuela-francisco-tovar",
        image: "./assets/images/background-pillar-ambiente.jpg",
      },
    ],
  };

  beforeEach(() => {
    const schoolService = jasmine.createSpyObj("SchoolService", ["getSchoolBySlugJSON"]);
    getSchoolSpy = schoolService.getSchoolBySlugJSON.and.returnValue(of(school));

    TestBed.configureTestingModule({
      declarations: [SchoolDetailComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule,
        SharedModule,
        OwlModule,
        CarouselModule,
        ChartsSwitcherModule,
        NgxsModule.forRoot([WebState]),
      ],
      providers: [
        { provide: SchoolService, useValue: schoolService },
        GlobalService,
        { provide: Store, useClass: Store },
      ],
    });
    activatedRoute.setParamMap({ schoolSlug: "escuela-santo-angel" });
    fixture = TestBed.createComponent(SchoolDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create component and call getSchoolBySlugJSON() service function", () => {
    expect(getSchoolSpy.calls.any()).toBe(true, "getSchoolBySlugJSON is called");
    expect(component).toBeTruthy();
  });

  it("should have at less and only one h1 tag with content", () => {
    el = fixture.nativeElement.querySelectorAll("h1");
    const h1Count = fixture.nativeElement.querySelectorAll("h1").length;
    expect(h1Count).toBe(1);
    expect(el[0].textContent).toBe(school.name);
  });

  it('should have a h2 tag in teachers section with content "Los docentes dicen"', () => {
    el = fixture.nativeElement.querySelector("section.teachers h2");
    const h2Count = fixture.nativeElement.querySelectorAll("section.teachers h2").length;
    expect(h2Count).toBe(1);
    expect(el.textContent).toBe("Los docentes dicen");
  });

  it('should have a h2 tag in activities section with content "Próximas actividades"', () => {
    el = fixture.nativeElement.querySelector("section.next-activities h2");
    const h2Count = fixture.nativeElement.querySelectorAll("section.next-activities h2").length;
    expect(h2Count).toBe(1);
    expect(el.textContent).toBe("Próximas actividades");
  });

  it('should have a h2 tag in other schools section with content "Descubre otras escuelas"', () => {
    el = fixture.nativeElement.querySelector("section.other-schools h2");
    const h2Count = fixture.nativeElement.querySelectorAll("section.other-schools h2").length;
    expect(h2Count).toBe(1);
    expect(el.textContent).toBe("Descubre otras escuelas");
  });
});
