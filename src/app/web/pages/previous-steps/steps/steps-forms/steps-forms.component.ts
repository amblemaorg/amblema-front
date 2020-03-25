import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-steps-forms',
  templateUrl: './steps-forms.component.html',
  styleUrls: ['./steps-forms.component.scss']
})
export class StepsFormsComponent implements OnInit {
  @Input() who:string;

  constructor() { }

  ngOnInit() {
  }

}
