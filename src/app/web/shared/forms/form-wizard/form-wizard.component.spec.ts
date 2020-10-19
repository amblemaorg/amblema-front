import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormWizardComponent } from './form-wizard.component';
import {
  requiredAndOnlyLetters,
  requiredAndOnlyLettersAndNumbers,
  requiredAndNormalText,
  requiredAndEmail,
  requiredAndNaturalNumber
}
from '../custom-validators';
import { MESSAGES } from '../validation-messages';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormConfirmationComponent } from '../elements/form-confirmation.component';
import { FormValidationComponent } from '../elements/form-validation.component';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { ReCaptchaV3Service, RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';

describe('FormWizardComponent', () => {
  let component: FormWizardComponent;
  let fixture: ComponentFixture<FormWizardComponent>;

  const controlProps = {
    onlyLetters: {
      type: 'text',
      validations: requiredAndOnlyLetters,
      messages: { pattern: MESSAGES.ONLY_LETTERS_MESSAGE }
    },
    onlyLettersNumbers: {
      type: 'text',
      validations: requiredAndOnlyLettersAndNumbers,
      messages: { pattern: MESSAGES.ONLY_LETTERS_NUMBERS_MESSAGE }
    },
    normalText: {
      type: 'text',
      validations: requiredAndNormalText,
      messages: { pattern: MESSAGES.TEXT_MESSAGE }
    },
    email: {
      type: 'email',
      validations: requiredAndEmail,
      messages: { pattern: MESSAGES.EMAIL_MESSAGE }
    },
    number: {
      type: 'number',
      validations: requiredAndNaturalNumber,
      messages: { pattern: MESSAGES.NATURAL_NUMBER_MESSAGE }
    },
    phone: {
      type: "tel",
      validations: requiredAndNaturalNumber,
      messages: { pattern: MESSAGES.PHONE_MESSAGE }
    },
    date: {
      type: "date",
      validations: { required: true }
    },
    select: {
      type: 'select',
      options: [],
      validations: { required: true }
    },
    confirmation: {
      type: 'confirmation',
      value: false,
      options: { positive: 'Sí', negative: 'No' },
      validations: { required: true }
    }
  }

  const schoolStep1 = {
    card: { label: "Rif de la Empresa", type: 'identification', validations: {},
      subfields: {
        id: {
          name: 'rif',
          ...controlProps.number,
          label: '',
          type: 'text',
        },
        type: {
          name: 'rifType',
          ...controlProps.select,
          value: '2',
          options: [{ id: '2', name: 'J' }]
        }
      }
    },
    firstName:    { label: "Nombre",                  ...controlProps.onlyLetters },
    lastName:     { label: "Apellido",                ...controlProps.onlyLetters },
    email:        { label: "Correo Electrónico",      ...controlProps.email       },
    phone:        { label: "Número de Teléfono",      ...controlProps.phone       },
    nStudents:    { label: "Cantidad de estudiantes", ...controlProps.number      },
  }

  const schoolStep2 = {
    addressState: { label: "Estado",            ...controlProps.select      },
    address:      { label: "Calles / Carreras", ...controlProps.normalText  },
    addressCity:  { label: "Ciudad",            ...controlProps.onlyLetters },
  }

  const schoolStepItems = [
    {
      title: 'Datos de la Escuela:',
      data: schoolStep1
    },
    {
      title: 'Datos de la Escuela:',
      data: schoolStep2
    }
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormWizardComponent,
        FormConfirmationComponent,
        FormValidationComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        ToastrModule.forRoot(),
        ReactiveFormsModule,
        NgSelectModule,
        FormsModule,
        RecaptchaV3Module
      ],
      providers: [
        FormBuilder,
        ReCaptchaV3Service,
        { provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.recaptchaKey },
        { provide: ToastrService, useClass: ToastrService }
      ]
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWizardComponent);
    component = fixture.componentInstance;
    component.formsContent = schoolStepItems;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it("should not go to next step if a required field is empty", async () => {
    spyOn(component, 'goToStep');
    let step = fixture.nativeElement.querySelector('.form-step-0');
    const nextButton = fixture.nativeElement.querySelector('#next-button');

    //Initial state of component
    expect(step).toBeTruthy();
    expect(nextButton.disabled).toBeTruthy();

    nextButton.click();
    fixture.whenStable().then(() => {
      expect(component.goToStep).toHaveBeenCalledTimes(0);
    });
    fixture.detectChanges();
    step = fixture.nativeElement.querySelector('.form-step-1');
    expect(step).toBeFalsy();
  });

  it('Rif input should display error message with letters', () => {
    testInvalidInput('input#rif', 'abdc', MESSAGES.NATURAL_NUMBER_MESSAGE);
  });

  it('Email input should display error message with invalid format', () => {
    testInvalidInput('input#email', 'abdc@gmail', MESSAGES.EMAIL_MESSAGE);
  });

  it('Firstname input should display error message with special characters', () => {
    testInvalidInput('input#firstName', '-|@~!"#$%&/', MESSAGES.ONLY_LETTERS_MESSAGE);
  });

  it('Lastname input should display error message with number', () => {
    testInvalidInput('input#lastName', '3445', MESSAGES.ONLY_LETTERS_MESSAGE);
  });

  it('Phone input should display error message with letters', () => {
    testInvalidInput('input#phone', 'vngjhn', MESSAGES.PHONE_MESSAGE);
  });

  it('Number Students input should display error message with negative number', () => {
    testInvalidInput('input#nStudents', '-100', MESSAGES.NATURAL_NUMBER_MESSAGE);
  });

  it('Required field should display required message', () => {
    testInvalidInput('input#email', '', MESSAGES.REQUIRED_MESSAGE);
  });

  const testInvalidInput = (selector: string, value: string, errorMessage: string) => {
    const input =  fixture.nativeElement.querySelector(selector);
    const errorDiv = fixture.nativeElement.querySelector(selector + ' ~ web-form-validation .error-message');

    input.value = value;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(errorDiv.textContent).toBe(errorMessage);
  }

});
