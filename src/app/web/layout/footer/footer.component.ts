import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'web-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Output() openModal = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  triggerSchoolForm() {
    this.openModal.emit('schoolForm');
  }

  triggerSponsorForm() {
    this.openModal.emit('sponsorForm');
  }

  triggerCoordinatorForm() {
    this.openModal.emit('coordinatorForm');
  }
}
