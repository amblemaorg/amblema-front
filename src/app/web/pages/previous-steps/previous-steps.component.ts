import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-previous-steps',
  templateUrl: './previous-steps.component.html',
  styleUrls: ['./previous-steps.component.scss']
})
export class PreviousStepsComponent implements OnInit {
  documentt;
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.documentt = document;
  }

  ngOnInit() {
  }

}
