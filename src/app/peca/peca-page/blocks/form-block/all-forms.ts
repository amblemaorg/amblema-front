import {
  requiredAndNormalText,
  normalText,
  requiredAndNaturalNumber,
  naturalNumber,
  requiredAndEmail,
  email,
  requiredAndOnlyLetters,
  onlyLetters,
  requiredAndOnlyLettersAndNumbers,
  onlyLettersAndNumbers
} from '../../../../web/shared/forms/custom-validators';
import { MESSAGES } from '../../../../web/shared/forms/validation-messages';

const controlProps = {
  onlyLettersAndRequired: {
    type: 'text',
    validations: requiredAndOnlyLetters,
    messages: { pattern: MESSAGES.ONLY_LETTERS_MESSAGE }
  },
  onlyLetters: {
    type: 'text',
    validations: onlyLetters,
    messages: { pattern: MESSAGES.ONLY_LETTERS_MESSAGE }
  },
  onlyLettersNumbersAndRequired: {
    type: 'text',
    validations: requiredAndOnlyLettersAndNumbers,
    messages: { pattern: MESSAGES.ONLY_LETTERS_NUMBERS_MESSAGE }
  },
  onlyLettersNumbers: {
    type: 'text',
    validations: onlyLettersAndNumbers,
    messages: { pattern: MESSAGES.ONLY_LETTERS_NUMBERS_MESSAGE }
  },
  normalTextAndRequired: {
    type: 'text',
    validations: requiredAndNormalText,
    messages: { pattern: MESSAGES.TEXT_MESSAGE }
  },
  normalText: {
    type: 'text',
    validations: normalText,
    messages: { pattern: MESSAGES.TEXT_MESSAGE }
  },
  emailAndRequired: {
    type: 'email',
    validations: requiredAndEmail,
    messages: { pattern: MESSAGES.EMAIL_MESSAGE }
  },
  email: {
    type: 'email',
    validations: email,
    messages: { pattern: MESSAGES.EMAIL_MESSAGE }
  },
  numberAndRequired: {
    type: 'number',
    validations: requiredAndNaturalNumber,
    messages: { pattern: MESSAGES.NATURAL_NUMBER_MESSAGE }
  },
  number: {
    type: 'number',
    validations: naturalNumber,
    messages: { pattern: MESSAGES.NATURAL_NUMBER_MESSAGE }
  },
  phoneAndRequired: {
    type: "tel",
    validations: requiredAndNaturalNumber,
    messages: { pattern: MESSAGES.PHONE_MESSAGE }
  },
  phone: {
    type: "tel",
    validations: naturalNumber,
    messages: { pattern: MESSAGES.PHONE_MESSAGE }
  },
  dateAndRequired: {
    type: "date",
    validations: { required: true }
  },
  date: {
    type: "date",
    validations: { required: false }
  },
  selectAndRequired: {
    type: 'select',
    options: [],
    validations: { required: true }
  },
  select: {
    type: 'select',
    options: [],
    validations: { required: false }
  },
}

export const sampleFormData = {
  title1: { label: "Letras", type: "title" },
  letter: { label: "Input letter text", placeholder: "Input letter text", fullwidth: false, ...controlProps.onlyLettersAndRequired },
  letterNumber: { label: "Input letters and numbers text", placeholder: "Input letters and numbers text", fullwidth: false, ...controlProps.onlyLettersNumbersAndRequired },
  normal: { label: "Input normal text", placeholder: "Input normal text", fullwidth: false, ...controlProps.normalTextAndRequired },
  title2: { label: "Fecha y Direccion", type: "title" },
  date: { label: "Input date", placeholder: "Input date", fullwidth: false, ...controlProps.dateAndRequired },
  addressState: {
    label: "Input select state",
    placeholder: "Input select state",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: [
      { id: "165146541654hjvjh", name: "Lara" },
      { id: "165146wfw254hjvjh", name: "Yaracuy" },
    ],
  },
  addressMunicipality: {
    label: "Input select municipality",
    placeholder: "Input select municipality",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: [
      {
        id: "dgisgsd64646464",
        name: "Iribarren",
        state: { id: "165146541654hjvjh", name: "Lara" },
      },
      {
        id: "tdjsgshdge8791654",
        name: "Palavecinos",
        state: { id: "165146541654hjvjh", name: "Lara" },
      },
      {
        id: "jgisgsd64646464",
        name: "Cocorote",
        state: { id: "165146wfw254hjvjh", name: "Yaracuy" },
      },
      {
        id: "bdjsgshdge8791654",
        name: "Bruzual",
        state: { id: "165146wfw254hjvjh", name: "Yaracuy" },
      },
    ],
  },
  title3: { label: "Otros campos", type: "title" },
  email: { label: "Input email text", placeholder: "Input email text", fullwidth: false, ...controlProps.emailAndRequired },
  number: { label: "Input number text", placeholder: "Input number text", fullwidth: false, ...controlProps.numberAndRequired },
  phone: { label: "Input phone text", placeholder: "Input phone text", fullwidth: false, ...controlProps.phoneAndRequired },
  title4: { label: "Imagen aca", type: "title" },
  imageGroup: {
    type: "image",
    fields: {
      imageDescription: { label: "Input image description", placeholder: "Input image description", fullwidth: false, ...controlProps.normalText },
      imageStatus: {
        label: "Input image status",
        placeholder: "Input image status",
        fullwidth: false,
        ...controlProps.select,
        options: [
          { id: "1", name: "Visible" },
          { id: "2", name: "No visible" },
        ],
      },
    },
  },
  documentGroup: {
    type: "prepend",
    fields: {
      prependSelect: {
        label: "Input group select",
        placeholder: "Input group select",
        fullwidth: false,
        ...controlProps.select,
        options: [
          { id: "1", name: "V" },
          { id: "2", name: "J" },
          { id: "3", name: "E" },
        ],
      },
      prependInput: { label: "Input group description", placeholder: "Input group description", fullwidth: false, ...controlProps.numberAndRequired },      
    },
  },
}

export const formCoordinador = {
  titleName: { label: "Datos del Coordinador", type: "title" },
  letter: { label: "Nombre del Coordinador", placeholder: "Nombre del Coordinador", fullwidth: false, ...controlProps.onlyLettersAndRequired },
  lastNameLetter: { label: "Apellido del Coordinador", placeholder: "Apellido del Coordinador", fullwidth: false, ...controlProps.onlyLettersAndRequired },
  document: { label: "Documento de Identidad", placeholder: "Documento de Identidad", fullwidth: false, ...controlProps.onlyLettersNumbersAndRequired },
  email: { label: "Input email text", placeholder: "Correo", fullwidth: false, ...controlProps.emailAndRequired },
  phoneMovil: { label: "Input phone text", placeholder: "Teléfono móvil", fullwidth: false, ...controlProps.phoneAndRequired },
  phone: { label: "Input phone text", placeholder: "Teléfono de habitación", fullwidth: false, ...controlProps.phoneAndRequired },
  date: { label: "Input date", placeholder: "Fecha de nacimiento", fullwidth: false, ...controlProps.dateAndRequired },
  sexo: {
    label: "Input select sex",
    placeholder: "Sexo (Femenino ó Msculino)",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: [
      { id: "1", name: "Femenino" },
      { id: "2", name: "Masculino" },
    ],
  },
  addressState: {
    label: "Input select state",
    placeholder: "Estado",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: [
      { id: "165146541654hjvjh", name: "Lara" },
      { id: "165146wfw254hjvjh", name: "Yaracuy" },
    ],
  },
  addressMunicipality: {
    label: "Input select municipality",
    placeholder: "Municipio",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: [
      {
        id: "dgisgsd64646464",
        name: "Iribarren",
        state: { id: "165146541654hjvjh", name: "Lara" },
      },
      {
        id: "tdjsgshdge8791654",
        name: "Palavecinos",
        state: { id: "165146541654hjvjh", name: "Lara" },
      },
      {
        id: "jgisgsd64646464",
        name: "Cocorote",
        state: { id: "165146wfw254hjvjh", name: "Yaracuy" },
      },
      {
        id: "bdjsgshdge8791654",
        name: "Bruzual",
        state: { id: "165146wfw254hjvjh", name: "Yaracuy" },
      },
    ],
  },
  city: { label: "Input normal text", placeholder: "Ciudad", fullwidth: false, ...controlProps.normalTextAndRequired },
  street: { label: "Input normal text", placeholder: "Calles / Carreras", fullwidth: false, ...controlProps.normalTextAndRequired },
  house: { label: "Input normal text", placeholder: "Casa / edificio", fullwidth: false, ...controlProps.normalTextAndRequired },
  proffesion: { label: "Input normal text", placeholder: "Profesión", fullwidth: false, ...controlProps.normalTextAndRequired },
  titleImagen: { label: "Imagen Coordinador", type: "title" },
  imageGroup: {
    type: "image",
    fields: {
      imageDescription: { label: "Input image description", placeholder: "Input image description", fullwidth: false, ...controlProps.normalText },
      imageStatus: {
        label: "Input image status",
        placeholder: "Input image status",
        fullwidth: false,
        ...controlProps.select,
        options: [
          { id: "1", name: "Visible" },
          { id: "2", name: "No visible" },
        ],
      },
    },
  },
}

export const formPadrino = {
  titleName: { label: "Datos de la Empresa", type: "title" },
  letter: { label: "Nombre de la Empresa", placeholder: "Nombre de la Empresa", fullwidth: false, ...controlProps.onlyLettersAndRequired },
  document: { label: "RIF", placeholder: "RIF", fullwidth: false, ...controlProps.onlyLettersNumbersAndRequired },
  phone: { label: "Input phone text", placeholder: "Teléfono", fullwidth: false, ...controlProps.phoneAndRequired },
  email: { label: "Input email text", placeholder: "Correo", fullwidth: false, ...controlProps.emailAndRequired },
  tipoEmpresa: {
    label: "Input select type",
    placeholder: "Tipo de empresa",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: [
      { id: "1", name: "Fábrica" },
      { id: "2", name: "Tienda" },
      { id: "3", name: "Negocio Personal" },
      { id: "4", name: "Hacienda" },
      { id: "5", name: "Otro" },
    ],
  },
  companyOtherType: {
    label: "Otro tipo de empresa", placeholder: "Otro tipo de empresa ", fullwidth: false, ...controlProps.onlyLettersAndRequired,
    options: [
      {
        id: "5",
        state: { id: "5", name: "Otro" },
      }
    ]
  },
  titleName2: { label: "Datos de la Persona de contacto", type: "title" },
  letterName: { label: "Nombre de la Persona de contacto", placeholder: "Nombre de la Persona de contacto", fullwidth: false, ...controlProps.onlyLettersAndRequired },
  letterLastName: { label: "Apellido de la Persona de contacto", placeholder: "Apellido de la Persona de contacto", fullwidth: false, ...controlProps.onlyLettersAndRequired },
  phoneContact: { label: "Input phone text", placeholder: "Teléfono de la persona de contacto", fullwidth: false, ...controlProps.phoneAndRequired },
  emailContact: { label: "Input email text", placeholder: "Correo Electronico", fullwidth: false, ...controlProps.emailAndRequired },
  addressState: {
    label: "Input select state",
    placeholder: "Estado",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: [
      { id: "165146541654hjvjh", name: "Lara" },
      { id: "165146wfw254hjvjh", name: "Yaracuy" },
    ],
  },
  addressMunicipality: {
    label: "Input select municipality",
    placeholder: "Municipio",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: [
      {
        id: "dgisgsd64646464",
        name: "Iribarren",
        state: { id: "165146541654hjvjh", name: "Lara" },
      },
      {
        id: "tdjsgshdge8791654",
        name: "Palavecinos",
        state: { id: "165146541654hjvjh", name: "Lara" },
      },
      {
        id: "jgisgsd64646464",
        name: "Cocorote",
        state: { id: "165146wfw254hjvjh", name: "Yaracuy" },
      },
      {
        id: "bdjsgshdge8791654",
        name: "Bruzual",
        state: { id: "165146wfw254hjvjh", name: "Yaracuy" },
      },
    ],
  },
  city: { label: "Input normal text", placeholder: "Ciudad", fullwidth: false, ...controlProps.normalTextAndRequired },
  street: { label: "Input normal text", placeholder: "Calles / Carreras", fullwidth: false, ...controlProps.normalTextAndRequired },
  titleImagen: { label: "Imagen del Padrino", type: "title" },
  imageGroup: {
    type: "image",
    fields: {
      imageDescription: { label: "Input image description", placeholder: "Input image description", fullwidth: false, ...controlProps.normalText },
      imageStatus: {
        label: "Input image status",
        placeholder: "Input image status",
        fullwidth: false,
        ...controlProps.select,
        options: [
          { id: "1", name: "Visible" },
          { id: "2", name: "No visible" },
        ],
      },
    },
  },
}

export const formEscuela = {
  titleName: { label: "Datos de la Escuela", type: "title" },
  name: { label: "Nombre de la Escuela", placeholder: "Nombre de la Escuela", fullwidth: false, ...controlProps.onlyLettersAndRequired },
  code: { label: "Código del plantel", placeholder: "Código del plantel", fullwidth: false, ...controlProps.onlyLettersNumbersAndRequired },
  email: { label: "Input email text", placeholder: "Correo", fullwidth: false, ...controlProps.emailAndRequired },
  phone: { label: "Input phone text", placeholder: "Teléfono", fullwidth: false, ...controlProps.phoneAndRequired },
  addressState: {
    label: "Input select state",
    placeholder: "Estado",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: [
      { id: "165146541654hjvjh", name: "Lara" },
      { id: "165146wfw254hjvjh", name: "Yaracuy" },
    ],
  },
  addressMunicipality: {
    label: "Input select municipality",
    placeholder: "Municipio",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: [
      {
        id: "dgisgsd64646464",
        name: "Iribarren",
        state: { id: "165146541654hjvjh", name: "Lara" },
      },
      {
        id: "tdjsgshdge8791654",
        name: "Palavecinos",
        state: { id: "165146541654hjvjh", name: "Lara" },
      },
      {
        id: "jgisgsd64646464",
        name: "Cocorote",
        state: { id: "165146wfw254hjvjh", name: "Yaracuy" },
      },
      {
        id: "bdjsgshdge8791654",
        name: "Bruzual",
        state: { id: "165146wfw254hjvjh", name: "Yaracuy" },
      },
    ],
  },
  city: { label: "Input normal text", placeholder: "Ciudad", fullwidth: false, ...controlProps.normalTextAndRequired },
  street: { label: "Input normal text", placeholder: "Calles / Carreras", fullwidth: false, ...controlProps.normalTextAndRequired },
  zone: {
    label: "Input select zone",
    placeholder: "Tipo de Zona",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: [
      { id: "1", name: "Sector" },
      { id: "2", name: "Barrio" },
      { id: "3", name: "Cacerio" },
    ],
  },
  address: { label: "Input normal text", placeholder: "Direccion de la zona", fullwidth: false, ...controlProps.normalTextAndRequired },
  turno: {
    label: "Input select turno",
    placeholder: "Turno de Clases",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: [
      { id: "1", name: "Manana" },
      { id: "2", name: "Tarde" },
      { id: "3", name: "Ambos" },
    ],
  },
  typeEscuela: {
    label: "Input select type",
    placeholder: "Tipo de Escuela",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: [
      { id: "1", name: "Nacional" },
      { id: "2", name: "Estadal" },
      { id: "3", name: "Municipal" },
    ],
  },
  titleDirector: { label: "Datos del Director", type: "title" },
  letterName: { label: "Nombre del Director", placeholder: "Nombre del Director", fullwidth: false, ...controlProps.onlyLettersAndRequired },
  letterLastName: { label: "Apellido del Director", placeholder: "Apellido del Director", fullwidth: false, ...controlProps.onlyLettersAndRequired },
  phoneContact: { label: "Input phone text", placeholder: "Teléfono del Director", fullwidth: false, ...controlProps.phoneAndRequired },
  emailContact: { label: "Input email text", placeholder: "Correo del Director", fullwidth: false, ...controlProps.emailAndRequired },

  titleSubDirector: { label: "Datos del SubDirector", type: "title" },
  letterName2: { label: "Nombre del SubDirector", placeholder: "Nombre del SubDirector", fullwidth: false, ...controlProps.onlyLettersAndRequired },
  letterLastName2: { label: "Apellido del SubDirector", placeholder: "Apellido del SubDirector", fullwidth: false, ...controlProps.onlyLettersAndRequired },
  phoneContact2: { label: "Input phone text", placeholder: "Teléfono del SubDirector", fullwidth: false, ...controlProps.phoneAndRequired },
  emailContact2: { label: "Input email text", placeholder: "Input del SubDirector", fullwidth: false, ...controlProps.emailAndRequired },
}



/*
? INFO:

  (I) for adding titles to the form data::
  --> i.e; title_sample: { label: "Title_label", type: "title"},

  (II) for adding an add image container to the form data::
  --> i.e;
  imageGroup: {
    type: "image",
    fields: {
      imageDescription: {
        label: "image_description",
        placeholder: "image_description",
        fullwidth: boolean_here, // true makes this field 100% view width, false just 50%.
        ...controlProps.normalText,
      },
      imageStatus: {
        label: "image_status",
        placeholder: "image_status",
        fullwidth: boolean_here,
        ...controlProps.select,
        options: [
          { id: "1", name: "value_one" },
          { id: "2", name: "value_two" },
        ],
      },
    },
  }

  todo: for (II) is indispensable field name to be typed as 'imageGroup', in other words, texts typed above with underscore are editable.
*/