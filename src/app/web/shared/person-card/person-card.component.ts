import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'web-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {
  @Input() person;

  constructor() { }

  ngOnInit() {
  }

}
