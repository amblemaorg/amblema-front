import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  TemplateRef,
} from "@angular/core";
import { Router } from "@angular/router";
import { GlobalService } from "src/app/services/global.service";
import { isNullOrUndefined } from "util";
import { ModalService } from "src/app/services/modal.service";
import { ApiWebContentService } from "src/app/services/web/api-web-content.service";
import { WebContentService } from "src/app/services/web/web-content.service";
import { environment } from "src/environments/environment";
import { Store, Select } from "@ngxs/store";
import { HttpClient } from "@angular/common/http";
import { SetIsLoadingPage } from "src/app/store/actions/web/web.actions";
import { WebState } from '../../../../store/states/web/web.state';
import { Observable } from "rxjs";
const DISMISS = "0";
const ACCEPT = "1";

@Component({
  selector: "web-schools-map",
  templateUrl: "./schools-map.component.html",
  styleUrls: ["./schools-map.component.scss"],
})
export class SchoolsMapComponent implements AfterViewInit, OnInit {
  @ViewChild("content", { read: TemplateRef, static: false })
  modal: TemplateRef<any>;
  @ViewChild("mapWrapper", { read: ElementRef, static: false })
  gmap: ElementRef;

  @Select(WebState.getIsLoadingSchoolMarkers) isItLoading$: Observable<any>;

  map: google.maps.Map;
  lat = 8.14893; // Venezuela's middle latitude
  lng = -66.831185; // Venezuela's middle longitude
  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 7,
  };

  schoolsList;
  SCHOOLS_PATH = "schoolspage";
  schoolService: WebContentService;

  constructor(
    private router: Router,
    private globalService: GlobalService,
    private modalService: ModalService,
    private http: HttpClient,
    private store: Store
  ) {}

  ngAfterViewInit() {
    this.mapInitializer();
    if (this.hadNotAcceptedModal()) {
      this.open(this.modal);
    }
  }

  ngOnInit() {
    this.setApiService();
    this.getSchoolsPageData();
  }

  hadNotAcceptedModal(): boolean {
    if (this.globalService.isBrowser) {
      const acceptedModal = sessionStorage.getItem("accepted-school-modal");
      return isNullOrUndefined(acceptedModal) || acceptedModal == DISMISS;
    }
    return true;
  }

  open(content: TemplateRef<any>) {
    this.modalService.openModal(content).result.then(
      (result) => {
        if (this.globalService.isBrowser) {
          sessionStorage.setItem("accepted-school-modal", ACCEPT);
        }
      },
      (reason) => {
        sessionStorage.setItem("accepted-school-modal", DISMISS);
      }
    );
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
  }

  loadAllMarkers() {
    this.schoolsList.map((schoolData) => {
      const marker = new google.maps.Marker({
        map: this.map,
        position: new google.maps.LatLng(schoolData.lat, schoolData.lng),
        title: schoolData.slug,
      });

      marker.addListener("click", () => {
        this.router.navigate(["escuelas/" + marker.getTitle()]);
      });

      marker.setMap(this.map);
    });
  }

  setApiService() {
    const service = new ApiWebContentService(this.http);
    service.setBaseUrl(environment.baseUrl);
    service.setResourcePath(this.SCHOOLS_PATH);
    this.schoolService = service;
  }

  getSchoolsPageData() {
    this.store.dispatch([new SetIsLoadingPage("true")]);
    this.schoolService.getWebContent().subscribe((data) => {
      //console.log(data);
      this.schoolsList = data.records.map((school) => {
        return {
          slug: school.slug,
          name: school.name,
          lat: school.coordinate.latitude,
          lng: school.coordinate.longitude,
        };
      });
      this.loadAllMarkers();
      this.store.dispatch([new SetIsLoadingPage("false")]);
    });
  }
}
