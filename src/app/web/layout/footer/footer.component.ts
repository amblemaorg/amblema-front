import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'web-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Output() schoolForm = new EventEmitter<string>();
  @Output() sponsorForm = new EventEmitter<string>();
  @Output() coordinatorForm = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  triggerSchoolForm() {
    this.schoolForm.emit('complete');
  }

  triggerSponsorForm() {
    this.sponsorForm.emit('complete');
  }

  triggerCoordinatorForm() {
    this.coordinatorForm.emit('complete');
  }

}
