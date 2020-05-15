import { NgModule } from "@angular/core";
import { Routes, RouterModule, NavigationEnd, Router, ActivatedRoute } from "@angular/router";
import { WebComponent } from "./web.component";
import { Title, Meta } from "@angular/platform-browser";
import { filter, map, mergeMap } from "rxjs/operators";

const routes: Routes = [
  {
    path: "",
    component: WebComponent,
    children: [
      {
        path: "",
        loadChildren: () => import("./pages/home/home.module").then((m) => m.HomeModule),
        data: {
          title: "Inicio | AmbLeMa",
          description:
            "AmbLeMa es una herramienta socio-educativa, que busca motivar a muchos docentes para alcanzar una educación de calidad en toda Venezuela con aportes de empresas y particulares que asumen una eficaz inversión social.",
        },
      },
      {
        path: "nosotros",
        loadChildren: () => import("./pages/about/about.module").then((m) => m.AboutModule),
        data: {
          title: "Nosotros | AmbLeMa",
          description:
            "Damos herramientas eficaces que motivan a los docentes de calidad para mejorar los indicadores claves de gestión docente con actividades diarias y actividades especiales, a lo largo del año escolar.",
        },
      },
      {
        path: "padrinos",
        loadChildren: () =>
          import("./pages/sponsors/sponsors.module").then((m) => m.SponsorsModule),
        data: {
          title: "Padrinos | AmbLeMa",
          description:
            "El padrino es una empresa, finca o familia que patrocina AmbLeMa en una escuela pública de su comunidad. Esta inversión social rinde beneficios tangibles e intangibles como las mejoras en la calidad de su comunidad y a la vez el país.",
        },
      },
      {
        path: "coordinadores",
        loadChildren: () =>
          import("./pages/coordinators/coordinators.module").then((m) => m.CoordinatorsModule),
        data: {
          title: "Coordinadores | AmbLeMa",
          description:
            "El coordinador AmbLeMa es una persona de la comunidad donde se encuentra la escuela y desea aportar su valioso grano de arena para ayudar a implementar AmbLeMa en una escuela. ¿Estás interesado en transformar tu comunidad?",
        },
      },
      {
        path: "escuelas",
        loadChildren: () => import("./pages/school/school.module").then((m) => m.SchoolModule),
        data: {
          title: "Escuelas | AmbLeMa",
          description:
            "Para formar parte de la red AmbLeMa de escuelas, la fundación AmbLeMa te ayuda y orienta para identificar un posible padrino en tu comunidad, hacer el primer contacto y presentación, para comenzar a aplicar la herramienta al inicio  del año escolar.",
        },
      },
      {
        path: "blog",
        loadChildren: () => import("./pages/blog/blog.module").then((m) => m.BlogModule),
        data: {
          title: "Blog | AmbLeMa",
          description:
            "Conoce los detalles de todas nuestras actividades en Ambiente, Lectura y Matemática a través de las noticias de nuestro blog.",
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebRoutingModule {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap((route) => route.data)
      )
      .subscribe((event) => {
        console.log(event);
        this.titleService.setTitle(event.title);
        const metaTag = { name: "description", content: event.description };
        const attributeSelector = 'name="description"';
        this.metaService.removeTag(attributeSelector);
        this.metaService.addTag(metaTag, false);
      });
  }
}
