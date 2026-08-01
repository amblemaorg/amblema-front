import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  NgZone,
  Inject,
} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DOCUMENT } from "@angular/common";
import { OwlOptions } from "ngx-owl-carousel-o";
import { WebContentService } from "src/app/services/web/web-content.service";
import { ApiWebContentService } from "src/app/services/web/api-web-content.service";
import { StaticWebContentService } from "src/app/services/web/static-web-content.service";
import { CoordinatorPage } from "../../../models/web/web-coordinator.model";
import { COORDINATOR_CONTENT } from "./coordinators-static-content";
import { environment } from "src/environments/environment";
import { Subscription, fromEvent } from "rxjs";
import { METADATA } from "../../web-pages-metadata";
import { GlobalService } from "src/app/services/global.service";
import { Store } from "@ngxs/store";
import { SetIsLoadingPage } from "src/app/store/actions/web/web.actions";

@Component({
  selector: "app-coordinators",
  templateUrl: "./coordinators.component.html",
  styleUrls: ["./coordinators.component.scss"],
})
export class CoordinatorsComponent implements OnInit, OnDestroy {
  @ViewChild("stepsList", { static: true }) stepsList: ElementRef;
  scrollSubscription: Subscription;

  customOptions: OwlOptions = {
    autoplay: true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    nav: false,
    navSpeed: 3000,
    autoplayTimeout: 15000,
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  coverData = {
    options: {
      titleBold: true,
      coordinatorPage: true,
    },
    slides: [],
    title: "¿Quién es el Coordinador AmbLeMa?",
    description:
      "El coordinador AmbLeMa es la persona encargada de colaborar para la aplicación del método AmbLeMa en una escuela de su comunidad. Es el puente entre la Fundación AmbLeMa, el Padrino y la Escuela. Su función es Hacer Que Suceda (HQS)",
  };
  coordinatorsPageData: CoordinatorPage = {
    backgroundImage: "",
    testimonials: [],
    steps: [],
  };
  stepsList1 = [];
  stepsList2 = [];
  coordinatorService: WebContentService;
  SPONSOR_PATH = "webcontent?page=coordinatorPage";

  constructor(
    private http: HttpClient,
    private globalService: GlobalService,
    private zone: NgZone,
    private store: Store,
    @Inject(DOCUMENT) private document: any
  ) {
    this.globalService.setTitle(METADATA.coordinatorsPage.title);
    this.globalService.setMetaTags(METADATA.coordinatorsPage.metatags);
  }

  ngOnInit() {
    // this.setStaticService();
    this.setApiService();
    this.getCoordinatorsData();
    this.injectSchema();
    this.zone.runOutsideAngular(() => {
      this.scrollSubscription = fromEvent(window, "scroll").subscribe(
        (event) => {
          this.onScroll(event);
        }
      );
    });
  }

  setStaticService() {
    this.coordinatorService = new StaticWebContentService();
    this.coordinatorService.setWebContent(COORDINATOR_CONTENT);
  }

  setApiService() {
    const service = new ApiWebContentService(this.http);
    service.setBaseUrl(environment.baseUrl);
    service.setResourcePath(this.SPONSOR_PATH);
    this.coordinatorService = service;
  }

  getCoordinatorsData() {
    this.coordinatorService.getWebContent().subscribe((data) => {
      const stepsLength = data.coordinatorPage.steps.length;
      this.stepsList1 = data.coordinatorPage.steps.slice(
        0,
        (stepsLength + 1) / 2
      );
      this.stepsList2 = data.coordinatorPage.steps.slice(
        (stepsLength + 1) / 2,
        stepsLength
      );
      this.coordinatorsPageData = data.coordinatorPage;
      this.coverData.slides.push({
        image: this.coordinatorsPageData.backgroundImage,
        title: this.coverData.title,
        description: this.coverData.description,
      });
      this.store.dispatch([new SetIsLoadingPage(false)]);
    }, (error) => {
      this.store.dispatch([new SetIsLoadingPage(false)]);
    });
  }

  onScroll($event) {
    let scrollPosition = $event.srcElement.children[0].scrollTop;
    let listElementPosition = this.stepsList.nativeElement.offsetTop;

    if (listElementPosition / scrollPosition <= 2) {
      if (this.scrollSubscription) {
        this.scrollSubscription.unsubscribe();
      }
      this.stepsList.nativeElement.classList.add("animation-finish");
      this.stepsList.nativeElement.classList.remove("animation-init");
    }
  }

  injectSchema() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Coordinadores | AmbLeMa",
      "description": "El coordinador AmbLeMa es una persona de la comunidad donde se encuentra la escuela y desea colaborar con el método AmbLeMa.",
      "publisher": {
        "@type": "EducationalOrganization",
        "name": "AmbLeMa",
        "url": "https://amblema.org"
      }
    };

    let script = this.document.getElementById('json-ld-coordinators-schema');
    if (!script) {
      script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'json-ld-coordinators-schema';
      script.text = JSON.stringify(schema);
      this.document.head.appendChild(script);
    }
  }

  ngOnDestroy() {
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
    const script = this.document.getElementById('json-ld-coordinators-schema');
    if (script) {
      script.remove();
    }
  }
}
