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
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { ApiWebContentService } from "src/app/services/web/api-web-content.service";
import { WebContentService } from "src/app/services/web/web-content.service";
import { environment } from "src/environments/environment";
import { DatePipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe("SchoolDetailComponent", () => {
  let component: SchoolDetailComponent;
  let fixture: ComponentFixture<SchoolDetailComponent>;
  let el: HTMLElement;
  let activatedRoute = new ActivatedRouteStub();
  let chartsSpy;
  let httpSpy;
  let schoolService;
  let staticSchoolService;
  const school = {
    "activities": [
      {
        "description": "",
        "name": "Taller inicial"
      },
      {
        "description": "",
        "name": "AmbLeMonedas"
      },
      {
        "description": "",
        "name": "Convención anual"
      },
      {
        "description": "Descripcion para el contenido web",
        "name": "Olimpíadas matemáticas"
      },
      {
        "description": "dwadaw",
        "name": "Actividad especial de lapso"
      },
      {
        "description": "dwadwadwa",
        "name": "Nueva Actividad"
      },
      {
        "description": "",
        "name": "Venezuela Megadiversa"
      }
    ],
    "activitiesSlider": [
      "http://157.245.131.248:10506/resources/images/school_years/5e823371e01964539e0e5f68/pecas/5ed6b7e9073310fdc86ea305/activities_slider/8/5f0f1b4e18c9d8522c65f222.jpe",
      "http://157.245.131.248:10506/resources/images/school_years/5e823371e01964539e0e5f68/pecas/5ed6b7e9073310fdc86ea305/activities_slider/8/5f0f1b4e18c9d8522c65f223.jpe"
    ],
    "address": "Blanco, Lara, Venezuela",
    "coordinator": "Harry Potter",
    "diagnostics": {
      "multiplicationsPerMinIndex": [
        {
          "label": "Año Escolar 2020 - 2021",
          "serie": "Lapso 1",
          "value": 1.042
        },
        {
          "label": "Año Escolar 2020 - 2021",
          "serie": "Lapso 2",
          "value": 0.0
        },
        {
          "label": "Año Escolar 2020 - 2021",
          "serie": "Lapso 3",
          "value": 4.85
        }
      ],
      "operationsPerMinIndex": [
        {
          "label": "Año Escolar 2020 - 2021",
          "serie": "Lapso 1",
          "value": 1.792
        },
        {
          "label": "Año Escolar 2020 - 2021",
          "serie": "Lapso 2",
          "value": 0.0
        },
        {
          "label": "Año Escolar 2020 - 2021",
          "serie": "Lapso 3",
          "value": 8.4
        }
      ],
      "wordsPerMinIndex": [
        {
          "label": "Año Escolar 2020 - 2021",
          "serie": "Lapso 1",
          "value": 3.604
        },
        {
          "label": "Año Escolar 2020 - 2021",
          "serie": "Lapso 2",
          "value": 8.0
        },
        {
          "label": "Año Escolar 2020 - 2021",
          "serie": "Lapso 3",
          "value": 0.5
        }
      ]
    },
    "id": "5ec3f8b74308cd229d10e656",
    "nAdministrativeStaff": 100,
    "nLaborStaff": 100,
    "nStudents": 105,
    "nTeachers": 106,
    "name": "Escuela Santa Maria",
    "nearbySchools": [
      {
        "id": "5f0e39c1db7d3ce9af9b34f0",
        "image": null,
        "name": "Escuela diagnóstico1",
        "slug": "sdasdsaw34534_Escuela-diagnóstico1"
      },
      {
        "id": "5f0f1e3918c9d8522c65f56e",
        "image": "http://157.245.131.248:10506/resources/images/schools/5f0f1e3818c9d8522c65f56d.jpe",
        "name": "Escuela de Prueba Binaural",
        "slug": "002_Escuela-de-Prueba-Binaural"
      },
      {
        "id": "5f0f374c2b862b0ada8c8ebb",
        "image": "http://157.245.131.248:10506/resources/images/schools/5f0f8304a73e0dc2d10267e1.jpeg",
        "name": "Escuela de prueba Binaural dos",
        "slug": "003_Escuela-de-prueba-Binaural-dos"
      }
    ],
    "nextActivities": [
      {
        "date": "2020-07-16T08:00:00.000Z",
        "description": "Descripcion para el contenido web",
        "name": "Olimpíadas matemáticas"
      }
    ],
    "olympicsSummary": {
      "classified": 0,
      "description": null,
      "inscribed": 0,
      "medalsBronze": 0,
      "medalsGold": 0,
      "medalsSilver": 0
    },
    "slider": [
      {
        "description": "first image",
        "id": "5f0f07acf997f718f38f9617",
        "image": "http://testing.binaural.com.ve:10512/assets/images/banner-1.jpg"
      },
      {
        "description": "second image",
        "id": "5f0f07acf997f718f38f9619",
        "image": "http://testing.binaural.com.ve:10512/assets/images/banner-1.jpg"
      },
      {
        "description": "third image",
        "id": "5f0f07acf997f718f38f961b",
        "image": "http://testing.binaural.com.ve:10512/assets/images/banner-1.jpg"
      },
      {
        "description": "fourth image",
        "id": "5f0f07acf997f718f38f961d",
        "image": "http://testing.binaural.com.ve:10512/assets/images/banner-1.jpg"
      }
    ],
    "slug": "001_Escuela-Santa-Maria",
    "sponsor": "hogthwarts",
    "teachersTestimonials": {
      "approvalHistory": [
        {
          "comments": null,
          "createdAt": "2020-07-09T15:33:07.998000",
          "detail": {
            "schoolId": "5ec3f8b74308cd229d10e656",
            "testimonials": [
              {
                "description": "Amblema ha motivado a cada estudiante a hacer su mejor esfuerzo, y los resultados son evidentes",
                "firstName": "Martitza",
                "id": "5f0738b39b2ed636ffb3e6fb",
                "image": "http://157.245.131.248:10506/resources/images/schools/5ec3f8b74308cd229d10e656/testimonials/1/5f0738b39b2ed636ffb3e6fc.jpeg",
                "lastName": "Torres",
                "position": "Profesor",
                "teacherId": "5ef667febf3212aa82622540"
              }
            ]
          },
          "id": "5f0738b39b2ed636ffb3e6fd",
          "status": "2",
          "updatedAt": "2020-07-09T15:33:07.998000",
          "user": {
            "id": "5ec695819ee40a429d6644c8",
            "name": "Odalis España"
          }
        },
        {
          "comments": null,
          "createdAt": "2020-07-09T15:37:38.022000",
          "detail": {
            "schoolId": "5ec3f8b74308cd229d10e656",
            "testimonials": [
              {
                "description": "Amblema ha motivado a cada estudiante a hacer su mejor esfuerzo, y los resultados son evidentes",
                "firstName": "Martitza",
                "id": "5f0739c29b2ed636ffb3e710",
                "image": "http://157.245.131.248:10506/resources/images/schools/5ec3f8b74308cd229d10e656/testimonials/2/5f0739c29b2ed636ffb3e711.jpeg",
                "lastName": "Torres",
                "position": "Profesor",
                "teacherId": "5ef667febf3212aa82622540"
              },
              {
                "description": "Amblema ha motivado a cada estudiante a hacer su mejor esfuerzo, y los resultados son evidentes",
                "firstName": "Armando",
                "id": "5f0739c29b2ed636ffb3e712",
                "image": "http://157.245.131.248:10506/resources/images/schools/5ec3f8b74308cd229d10e656/testimonials/2/5f0739c29b2ed636ffb3e713.jpeg",
                "lastName": "Arismendi",
                "position": "Profesor",
                "teacherId": "5f05c77dff7398a24c4550a3"
              }
            ]
          },
          "id": "5f0739c29b2ed636ffb3e714",
          "status": "1",
          "updatedAt": "2020-07-09T15:37:38.022000",
          "user": {
            "id": "5ec695819ee40a429d6644c8",
            "name": "Odalis España"
          }
        }
      ],
      "createdAt": "2020-07-17T22:45:35.014778",
      "isInApproval": true,
      "testimonials": [
        {
          "description": "Amblema ha motivado a cada estudiante a hacer su mejor esfuerzo, y los resultados son evidentes",
          "firstName": "Martitza",
          "id": "5f0738b39b2ed636ffb3e6fb",
          "image": "http://157.245.131.248:10506/resources/images/schools/5ec3f8b74308cd229d10e656/testimonials/1/5f0738b39b2ed636ffb3e6fc.jpeg",
          "lastName": "Torres",
          "position": "Profesor",
          "teacherId": "5ef667febf3212aa82622540"
        }
      ],
      "updatedAt": "2020-07-17T22:45:35.014782"
    }
  };

  const charts = [
    {
      title: "Diagnóstico de lectura",
      id: "wordsPerMinIndex",
      description:
        "Diagnóstico de lectura fluida: Medimos trimestralmente el número de palabras leídas por minuto. La grágica muestra el índice de resultados, en comparación con las metas por nivel en el tiempo. PPM. Palabras por minuto.",
      type: "bar",
      data: [],
      goals: [{ label: "Valor esperado", value: 1 }],
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
      title: "Diagnóstico de Multiplicación",
      id: "multiplicationsPerMinIndex",
      description:
        "Medimos cada trimestre cuantas multiplicaciones de una cifra son contestadas correctamente en 2 minutos. La gráfica muestra el índice de resultados en base a la meta por grado. M2M. Multiplicaciónes en 2 minutos",
      type: "bar",
      data: [],
      goals: [{ label: "Valor esperado", value: 1 }],
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
      title: "Diagnóstico de Razonamiento Lógico - Matemático",
      id: "operationsPerMinIndex",
      description:
        "Medimos trimestralmente la cantidad de problemas lógico matemáticos, adecuados a cada nivel, resuelto en 30 minutos.  La gráfica muestra el índice de resultados en comparación con la meta por grado en el tiempo. LM30: Lógica - Matemática en 30 minutos.",
      type: "bar",
      data: [],
      goals: [{ label: "Valor esperado", value: 1 }],
      testimonial: {
        firstName: "Oscar A.",
        lastName: "Pietri Pacheco",
        image: "./assets/images/profile-oscar.jpg",
        function: "Docente de Matemática",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
      },
    },
  ];

  beforeEach(() => {
    staticSchoolService = jasmine.createSpyObj("SchoolService", ["getChartsTemplateJSON"]);
    chartsSpy = staticSchoolService.getChartsTemplateJSON.and.returnValue(of(charts));
    httpSpy = jasmine.createSpyObj("HttpClient", ["get"]);
    httpSpy.get.and.returnValue(of(school));
    schoolService = new ApiWebContentService(<any>httpSpy);
    schoolService.setBaseUrl(environment.baseUrl);
    schoolService.setResourcePath("schoolspage/001_Escuela-Santa-Maria");


    TestBed.configureTestingModule({
      declarations: [SchoolDetailComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule,
        SharedModule,
        FontAwesomeModule,
        OwlModule,
        CarouselModule,
        ChartsSwitcherModule,
        HttpClientModule,
        NgxsModule.forRoot([WebState]),
      ],
      providers: [
        { provide: HttpClient, useValue: httpSpy },
        { provide: SchoolService, useValue: staticSchoolService },
        { provide: ApiWebContentService, useValue: schoolService },
        GlobalService,
        DatePipe,
        { provide: Store, useClass: Store },
      ],
    });
    activatedRoute.setParamMap({ schoolSlug: "001_Escuela-Santa-Maria" });
    fixture = TestBed.createComponent(SchoolDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create component and call getChartsTemplateJSON() service function", () => {
    expect(chartsSpy.calls.any()).toBe(true, "getChartsTemplateJSON is called");
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
