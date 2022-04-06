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
import { WebState } from "../../../../store/states/web/web.state";
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

  searchInputValue = "";

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

  mapInitializer(mapOptions = this.mapOptions) {
    this.map = new google.maps.Map(this.gmap.nativeElement, mapOptions);
  }

  loadAllMarkers(coordinates?: google.maps.LatLng) {
    const svgMarker = {
      path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
      fillColor: "blue",
      fillOpacity: 1,
      strokeWeight: 0,
      rotation: 0,
      scale: 2.5,
      anchor: new google.maps.Point(15, 30),
    };

    this.schoolsList.map((schoolData) => {
      let makerOption = {
        map: this.map,
        position: new google.maps.LatLng(schoolData.lat, schoolData.lng),
        title: schoolData.slug,
      };

      if (coordinates) {
        if (coordinates.equals(makerOption.position)) {
          makerOption["icon"] = svgMarker;
          makerOption["zIndex"] = 100;
        }
      }

      const marker: google.maps.Marker = new google.maps.Marker(makerOption);

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
      this.schoolsList = data.records.map((school) => {
        return {
          slug: school.slug,
          name: school.name,
          lat: school.coordinate.latitude,
          lng: school.coordinate.longitude,
          state: school.addressState.name,
        };
      });
      this.loadAllMarkers();
      this.store.dispatch([new SetIsLoadingPage("false")]);
    });
  }

  zoomTo(lat: number, lng: number) {
    const coordinates = new google.maps.LatLng(lat, lng);
    const mapOptions: google.maps.MapOptions = {
      center: coordinates,
      zoom: 12,
    };

    this.mapInitializer(mapOptions);
    this.loadAllMarkers(coordinates);
  }

  isZoomIt(school) {
    const { lat, lng } = school;
    const coordinates = new google.maps.LatLng(lat, lng);

    return coordinates.equals(this.map.getCenter());
  }
}
