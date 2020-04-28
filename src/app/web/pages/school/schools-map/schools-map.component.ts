import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  TemplateRef,
} from "@angular/core";
import { SchoolService } from "src/app/services/web/school.service";
import { Router } from "@angular/router";
import { GlobalService } from "src/app/services/global.service";
import { isNullOrUndefined } from "util";
// import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from "src/app/services/modal.service";

const DISMISS = "0";
const ACCEPT = "1";

@Component({
  selector: "web-schools-map",
  templateUrl: "./schools-map.component.html",
  styleUrls: ["./schools-map.component.scss"],
})
export class SchoolsMapComponent implements AfterViewInit {
  @ViewChild("content", { read: TemplateRef, static: false })
  modal: TemplateRef<any>;
  @ViewChild("mapWrapper", { read: ElementRef, static: false })
  gmap: ElementRef;

  map: google.maps.Map;
  lat = 8.14893; // Venezuela's middle latitude
  lng = -66.831185; // Venezuela's middle longitude
  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 7,
  };

  schoolsList;
  constructor(
    private router: Router,
    private globalService: GlobalService,
    private schoolService: SchoolService,
    private modalService: ModalService
  ) {}

  ngAfterViewInit() {
    this.mapInitializer();
    this.getSchoolsList();
    if (this.hadNotAcceptedModal()) {
      this.open(this.modal);
    }
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

  getSchoolsList() {
    this.schoolService.getSchoolsJSON().subscribe((data) => {
      //console.log(data);
      this.schoolsList = data.schools;
      this.loadAllMarkers();
    });
  }
}
