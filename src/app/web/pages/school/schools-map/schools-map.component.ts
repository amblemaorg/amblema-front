import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { SchoolService } from 'src/app/services/web/school.service';
import { Router } from '@angular/router';

@Component({
  selector: 'web-schools-map',
  templateUrl: './schools-map.component.html',
  styleUrls: ['./schools-map.component.scss']
})
export class SchoolsMapComponent implements AfterViewInit {

  @ViewChild('mapWrapper', { read: ElementRef, static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat = 8.14893;         // Venezuela's middle latitude
  lng = -66.831185;      // Venezuela's middle longitude
  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 7
  }

  schoolsList;
  constructor(
    private router: Router,
    private schoolService: SchoolService
  ) {}

  ngAfterViewInit() {
    this.mapInitializer();
    this.getSchoolsList();

  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
  }

  loadAllMarkers() {
    this.schoolsList.map(schoolData => {
      const marker = new google.maps.Marker({
        map: this.map,
        position: new google.maps.LatLng(schoolData.lat, schoolData.lng),
        title: schoolData.slug,
      })

      marker.addListener('click', () => {
        this.router.navigate(['escuelas/' + marker.getTitle()])
      })

      marker.setMap(this.map);
    })
  }

  getSchoolsList() {
    this.schoolService.getSchoolsJSON()
        .subscribe(data => {
          //console.log(data);
          this.schoolsList = data.schools;
          this.loadAllMarkers();
        })
  }

}
