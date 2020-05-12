import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from "@angular/core";
import {
  requiredAndNormalText,
  requiredAndNaturalNumber,
  requiredAndEmail,
  requiredAndOnlyLetters,
  requiredAndOnlyLettersAndNumbers,
  onlyLetters,
  naturalNumber,
  email,
} from "./custom-validators";
import { MESSAGES } from "./validation-messages";
import { ContactService } from "src/app/services/web/contact.service";
import { FormWizardComponent } from "./form-wizard/form-wizard.component";
import { cloneDeep } from "lodash-es";
import { ToastrService } from "ngx-toastr";
import { isNullOrUndefined } from "util";

@Component({
  selector: "web-implemented-forms",
  template: `
    <ng-container [ngSwitch]="form">
      <web-form-wizard
        #formWizard
        *ngSwitchCase="'schoolForm'"
        class="school-form-wizard"
        [formsContent]="schoolStepItems"
        (submit)="submitContactForm('school', $event)"
      >
      </web-form-wizard>
      <web-form-wizard
        #formWizard
        *ngSwitchCase="'sponsorForm'"
        class="sponsor-form-wizard"
        [formsContent]="sponsorStepItems"
        (submit)="submitContactForm('sponsor', $event)"
      >
      </web-form-wizard>
      <web-form-wizard
        #formWizard
        *ngSwitchCase="'coordinatorForm'"
        class="coordinator-form-wizard"
        [formsContent]="coordinatorStepItems"
        (submit)="submitContactForm('coordinator', $event)"
      >
      </web-form-wizard>
    </ng-container>
  `,
  styleUrls: ["./implemented-forms.component.scss"],
})
export class ImplementedFormsComponent implements OnInit {
  @ViewChild("formWizard", { static: false }) formWizard: FormWizardComponent;
  @Input() form: string;
  @Output() success = new EventEmitter<string>();

  // Generic form control props to extend
  controlProps = {
    onlyLetters: {
      type: "text",
      validations: requiredAndOnlyLetters,
      messages: { pattern: MESSAGES.ONLY_LETTERS_MESSAGE },
    },
    onlyLettersNotRequired: {
      type: "text",
      validations: onlyLetters,
      messages: { pattern: MESSAGES.ONLY_LETTERS_MESSAGE },
    },
    onlyLettersNumbers: {
      type: "text",
      validations: requiredAndOnlyLettersAndNumbers,
      messages: { pattern: MESSAGES.ONLY_LETTERS_NUMBERS_MESSAGE },
    },
    normalText: {
      type: "text",
      validations: requiredAndNormalText,
      messages: { pattern: MESSAGES.TEXT_MESSAGE },
    },
    email: {
      type: "email",
      validations: requiredAndEmail,
      messages: { pattern: MESSAGES.EMAIL_MESSAGE },
    },
    emailNotRequired: {
      type: "email",
      validations: email,
      messages: { pattern: MESSAGES.EMAIL_MESSAGE },
    },
    number: {
      type: "number",
      validations: requiredAndNaturalNumber,
      messages: { pattern: MESSAGES.NATURAL_NUMBER_MESSAGE },
    },
    phone: {
      type: "tel",
      validations: requiredAndNaturalNumber,
      messages: { pattern: MESSAGES.PHONE_MESSAGE },
    },
    phoneNotRequired: {
      type: "tel",
      validations: naturalNumber,
      messages: { pattern: MESSAGES.PHONE_MESSAGE },
    },
    date: {
      type: "date",
      validations: { required: true },
    },
    select: {
      type: "select",
      options: [],
      validations: { required: true },
    },
    confirmation: {
      type: "confirmation",
      value: false,
      options: { positive: "Sí", negative: "No" },
      validations: { required: true },
    },
  };

  // Steps for School form
  schoolStep1 = {
    name: { label: "Nombre de la escuela", ...this.controlProps.normalText },
    code: { label: "Código del plantel", ...this.controlProps.onlyLettersNumbers },
    email: { label: "Correo electrónico", ...this.controlProps.email },
    phone: { label: "Número de teléfono", ...this.controlProps.phone },
    addressState: { label: "Estado", ...this.controlProps.select },
    addressMunicipality: { label: "Municipio", ...this.controlProps.select },
    address: { label: "Calles / Carreras", ...this.controlProps.normalText },
    addressCity: { label: "Ciudad", ...this.controlProps.onlyLetters },
    zone: {
      label: "Zona",
      type: "identification",
      validations: {},
      subfields: {
        id: {
          name: "addressZone",
          ...this.controlProps.normalText,
          label: "",
        },
        type: {
          name: "addressZoneType",
          ...this.controlProps.select,
          options: [
            { id: "1", name: "Sector" },
            { id: "2", name: "Barrio" },
            { id: "3", name: "Cacerío" },
          ],
        },
      },
    },
  };

  schoolStep2 = {
    principalFirstName: { label: "Nombre del director", ...this.controlProps.onlyLetters },
    principalLastName: { label: "Apellido del director", ...this.controlProps.onlyLetters },
    principalEmail: { label: "Correo electrónico del director", ...this.controlProps.email },
    principalPhone: { label: "Número de teléfono del director", ...this.controlProps.phone },
    subPrincipalFirstName: {
      label: "Nombre del subdirector",
      ...this.controlProps.onlyLettersNotRequired,
    },
    subPrincipalLastName: {
      label: "Apellido del subdirector",
      ...this.controlProps.onlyLettersNotRequired,
    },
    subPrincipalEmail: {
      label: "Correo electrónico del subdirector",
      ...this.controlProps.emailNotRequired,
    },
    subPrincipalPhone: {
      label: "Número de teléfono del subdirector",
      ...this.controlProps.phoneNotRequired,
    },
  };

  schoolStep3 = {
    nTeachers: { label: "Cantidad de docentes", ...this.controlProps.number },
    nAdministrativeStaff: { label: "Cantidad de administrativos", ...this.controlProps.number },
    nLaborStaff: { label: "Cantidad de obreros", ...this.controlProps.number },
    nStudents: { label: "Cantidad de estudiantes", ...this.controlProps.number },
    nGrades: { label: "Cantidad de grados", ...this.controlProps.number },
    nSections: { label: "Cantidad de secciones", ...this.controlProps.number },
    schoolType: {
      label: "Tipo de escuela",
      ...this.controlProps.select,
      options: [
        { id: "1", name: "Nacional" },
        { id: "2", name: "Estadal" },
        { id: "3", name: "Municipal" },
      ],
    },
    schoolShift: {
      label: "Turno de clases",
      ...this.controlProps.select,
      options: [
        { id: "1", name: "Mañana" },
        { id: "2", name: "Tarde" },
        { id: "3", name: "Ambos" },
      ],
    },
  };

  schoolStep4 = {
    hasSponsor: { label: "¿Cuentas con un padrino?", ...this.controlProps.confirmation },
  };

  schoolLastStep = {
    steps: {
      label: "",
      type: "list",
      options: [
        "Visita comercios, empresas o negocios cercanos a tu escuela.",
        "Consulta entre padres y representantes si alguno conoce o trabaja en empresas cercanas a la escuela.",
        "Recauda información de los posibles padrinos y completa la planilla.",
        "Escríbenos a través de info@amblema.org y solicítanos un padrino.",
      ],
      validations: {},
    },
  };

  // Steps for Sponsor form
  sponsorStep1 = {
    name: { label: "Nombre de la empresa", ...this.controlProps.normalText },
    card: {
      label: "Rif de la empresa",
      type: "identification",
      validations: {},
      subfields: {
        id: {
          name: "rif",
          ...this.controlProps.number,
          label: "",
          type: "text",
        },
        type: {
          name: "rifType",
          ...this.controlProps.select,
          value: "2",
          options: [{ id: "2", name: "J" }],
        },
      },
    },
    email: { label: "Correo electrónico", ...this.controlProps.email },
    companyPhone: { label: "Número de teléfono", ...this.controlProps.phone },
    addressState: { label: "Estado", ...this.controlProps.select },
    addressMunicipality: { label: "Municipio", ...this.controlProps.select },
    address: { label: "Calles / Carreras", ...this.controlProps.normalText },
    addressCity: { label: "Ciudad", ...this.controlProps.onlyLetters },
  };

  sponsorStep2 = {
    companyType: {
      label: "Tipo de empresa",
      ...this.controlProps.select,
      options: [
        { id: "1", name: "Fábrica" },
        { id: "2", name: "Tienda" },
        { id: "3", name: "Negocio personal" },
        { id: "4", name: "Hacienda" },
        { id: "0", name: "Otro" },
      ],
    },
    companyOtherType: {
      label: "Otro tipo de empresa",
      ...this.controlProps.onlyLetters,
      condition: { formControlName: "companyType", value: "0" },
    },
    contactFirstName: {
      label: "Nombre de la persona de contacto",
      ...this.controlProps.onlyLetters,
    },
    contactLastName: {
      label: "Apellido de la persona de contacto",
      ...this.controlProps.onlyLetters,
    },
    contactEmail: {
      label: "Correo electrónico de la persona de contacto",
      ...this.controlProps.email,
    },
    contactPhone: {
      label: "Número de teléfono de la persona de contacto",
      ...this.controlProps.phone,
    },
  };

  sponsorStep3 = {
    hasSchool: { label: "¿Cuentas con una escuela?", ...this.controlProps.confirmation },
  };

  sponsorLastStep = {
    steps: {
      label: "",
      type: "list",
      options: [
        "Debe seleccionar una escuela cercana a tu empresa, comercio o negocio, en base a los siguientes criterios: escuela pública, que tenga preescolar y primaria, con un número de estudiantes entre 150 y 300, que presente necesidades de ayuda y apoyo de un tercero, y que el personal docente manifieste la disposición de mejorar la calidad educativa de la escuela.",
        "Visite la escuela de su preferencia y recaude todos los datos.",
      ],
      validations: {},
    },
  };

  // Steps for Coordinator form
  coordinatorStep1 = {
    firstName: { label: "Nombre", ...this.controlProps.onlyLetters },
    lastName: { label: "Apellido", ...this.controlProps.onlyLetters },
    gender: {
      label: "Sexo",
      ...this.controlProps.select,
      options: [
        { id: "1", name: "Femenino" },
        { id: "2", name: "Masculino" },
      ],
    },
    card: {
      label: "Identificación",
      type: "identification",
      validations: {},
      subfields: {
        id: {
          name: "cardId",
          ...this.controlProps.number,
          label: "",
          type: "text",
        },
        type: {
          name: "cardType",
          ...this.controlProps.select,
          value: "1",
          options: [
            { id: "1", name: "V" },
            { id: "3", name: "E" },
          ],
        },
      },
    },
    homePhone: { label: "Teléfono de habitación", ...this.controlProps.phone },
    birthdate: { label: "Fecha de nacimiento", ...this.controlProps.date },
    addressState: { label: "Estado", ...this.controlProps.select },
    addressMunicipality: { label: "Municipio", ...this.controlProps.select },
  };

  coordinatorStep2 = {
    addressCity: { label: "Ciudad de residencia", ...this.controlProps.onlyLetters },
    addressHome: { label: "Casa / Edificio", ...this.controlProps.normalText },
    address: { label: "Calles / Carreras", ...this.controlProps.normalText },
    email: { label: "Correo electrónico", ...this.controlProps.email },
    phone: { label: "Número de teléfono", ...this.controlProps.phone },
    profession: { label: "Profesión", ...this.controlProps.onlyLetters },
    isReferred: {
      label: "¿Es referido de álguien?",
      ...this.controlProps.select,
      options: [
        { id: true, name: "Sí" },
        { id: false, name: "No" },
      ],
    },
    referredName: {
      label: "Nombre completo de la persona que lo refirió",
      ...this.controlProps.onlyLetters,
      condition: { formControlName: "isReferred", value: true },
    },
  };

  // Step Items to create each form wizard
  schoolStepItems = [
    {
      title: "Datos de la escuela:",
      data: this.schoolStep1,
    },
    {
      title: "Datos de la escuela:",
      data: this.schoolStep2,
    },
    {
      title: "Datos de la escuela:",
      data: this.schoolStep3,
    },
    {
      title:
        "Para formar parte de la red AmbLeMa de escuelas, la fundación te ayuda y orienta para identificar un posible padrino en tu comunidad, hacer el primer contacto y presentación, para comenzar a aplicar la herramienta al inicio del año escolar",
      data: this.schoolStep4,
    },
    {
      title: "Datos del padrino: ",
      data: this.addPrefixToObjectProperties("sponsor", this.sponsorStep1),
      condition: { formControlName: "hasSponsor", value: true },
    },
    {
      title: "Datos del padrino: ",
      data: this.addPrefixToObjectProperties("sponsor", this.sponsorStep2),
      condition: { formControlName: "hasSponsor", value: true },
    },
    {
      title: "Puedes seguir cualquiera de estos pasos:",
      data: this.schoolLastStep,
      condition: { formControlName: "hasSponsor", value: false },
    },
  ];

  sponsorStepItems = [
    {
      title: "Datos del padrino:",
      data: this.sponsorStep1,
    },
    {
      title: "Datos del padrino:",
      data: this.sponsorStep2,
    },
    {
      title:
        "El padrino es una empresa, finca o familia que patrocina AmbLeMa en una escuela pública de su comunidad. Esta inversión social rinde beneficios tangibles e intangibles. Tangibles son las mejoras en la calidad de su comunidad  y a la vez el país. Intagible es la satisfacción personal que se logra.",
      data: this.sponsorStep3,
    },
    {
      title: "Datos de la escuela:",
      data: this.addPrefixToObjectProperties("school", this.schoolStep1),
      condition: { formControlName: "hasSchool", value: true },
    },
    {
      title: "Datos de la escuela:",
      data: this.addPrefixToObjectProperties("school", this.schoolStep2),
      condition: { formControlName: "hasSchool", value: true },
    },
    {
      title: "Datos de la escuela:",
      data: this.addPrefixToObjectProperties("school", this.schoolStep3),
      condition: { formControlName: "hasSchool", value: true },
    },
    {
      title: "Puedes seguir cualquiera de estos pasos:",
      data: this.sponsorLastStep,
      condition: { formControlName: "hasSchool", value: false },
    },
  ];

  coordinatorStepItems = [
    { title: "Datos del coordinador:", data: this.coordinatorStep1 },
    { title: "Datos del coordinador:", data: this.coordinatorStep2 },
  ];

  constructor(private contactService: ContactService, private toastr: ToastrService) {}

  ngOnInit() {
    this.getMunicipalitiesData();
    this.getStatesData();
  }

  getStatesData() {
    this.contactService.getStates().subscribe((data) => {
      this.schoolStep1.addressState.options = data.records;
      this.sponsorStep1.addressState.options = data.records;
      this.coordinatorStep1.addressState.options = data.records;
    });
  }

  getMunicipalitiesData() {
    this.contactService.getMunicipalities().subscribe((data) => {
      this.schoolStep1.addressMunicipality.options = data.records;
      this.sponsorStep1.addressMunicipality.options = data.records;
      this.coordinatorStep1.addressMunicipality.options = data.records;
    });
  }

  submitContactForm(form: string, data: any) {
    this.contactService.sendContactForm(form, data).subscribe({
      next: (data) => {
        console.log(data);
        this.displayMessage("Formulario enviado satisfactoriamente", "success");
        this.formWizard.clear();
        this.formWizard.setIsSubmitting(false);
        this.success.emit("complete");
      },
      error: (error) => {
        console.error(error);
        this.displayMessage("No pudo enviarse el formulario, intenta más tarde", "error");
        this.formWizard.setIsSubmitting(false);
      },
    });
  }

  displayMessage(message: string, type?: string) {
    const options = { positionClass: "toast-bottom-right" };
    switch (type) {
      case "success":
        this.toastr.success(message, "", options);
        break;
      case "error":
        this.toastr.error(message, "", options);
        break;
      default:
        this.toastr.info(message, "", options);
    }
  }

  addPrefixToObjectProperties(prefix: string, obj: Object): Object {
    let newObj = {};
    Object.entries(obj).map((prop) => {
      const { 0: propName, 1: propValue } = { ...prop }; // Destructuring array into variables with name
      let newPropValue = propValue;
      if (newPropValue.type == "identification") {
        newPropValue = cloneDeep(propValue);
        Object.entries(newPropValue.subfields).map((subfield) => {
          const { 0: subfieldName, 1: subfieldValue } = { ...subfield };
          if (!subfieldValue["name"].startsWith(prefix)) {
            const subfieldNamePrefixed = prefix + this.toCapitalizedString(subfieldValue["name"]);
            newPropValue.subfields[subfieldName]["name"] = subfieldNamePrefixed;
          }
        });
      }
      if (!isNullOrUndefined(newPropValue.condition)) {
        newPropValue = cloneDeep(propValue);
        if (!newPropValue.condition.formControlName.startsWith(prefix)) {
          const formControlPrefixed =
            prefix + this.toCapitalizedString(newPropValue.condition.formControlName);
          newPropValue.condition.formControlName = formControlPrefixed;
        }
      }
      if (!propName.startsWith(prefix)) {
        let propNameCapitalized = this.toCapitalizedString(propName);
        newObj[prefix + propNameCapitalized] = newPropValue;
      } else {
        newObj[propName] = newPropValue;
      }
    });
    return newObj;
  }

  toCapitalizedString(value: string) {
    return value.slice(0, 1).toUpperCase() + value.slice(1, value.length);
  }
}
