import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Testimonial } from '../../../models/web/testimonial.model';

@Component({
  selector: 'web-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss'],
})
export class TestimonialCardComponent implements OnInit {
  @Input() testimonial: Testimonial;

  constructor() {}

  ngOnInit() {}
}
