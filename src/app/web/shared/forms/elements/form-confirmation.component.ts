import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'web-form-confirmation',
  template: `
    <div class="form-element" [formGroup]="formGroup">
      <label class="form-label" [for]="name">{{ label }}</label>
      <div class="form-options">
        <input
          class="form-confirmation"
          type="radio"
          [formControlName]="name"
          value="true"
        />
        <button
          type="button"
          [ngClass]="{
            'form-button': true,
            'active': getValue() === true
          }"
          (click)="setValue(true)"
        >
          {{ options.positive }}
        </button>
        <input
          class="form-confirmation"
          type="radio"
          [formControlName]="name"
          value="false"
        />
        <button
          type="button"
          [ngClass]="{
            'form-button': true,
            'active': getValue() === false
          }"
          (click)="setValue(false)"
        >
          {{ options.negative }}
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./form-confirmation.component.scss'],
})
export class FormConfirmationComponent implements OnInit {

  @Input() label: string;
  @Input() name: string;
  @Input() options: { positive: any, negative: any };
  @Input() formGroup: FormGroup;
  //@Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void { }

  setValue(value: any) {
    this.formGroup.controls[this.name].setValue(value);
  }

  getValue(): any {
    return this.formGroup.get(this.name).value;
  }

}
