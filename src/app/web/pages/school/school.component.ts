import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ModuleMapNgFactoryLoader } from '@nguniversal/module-map-ngfactory-loader';
import { SchoolService } from 'src/app/services/web/school.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements AfterViewInit, OnInit {

  constructor(private schoolService: SchoolService) {}

  ngAfterViewInit() {

  }

  ngOnInit() {

  }

}
