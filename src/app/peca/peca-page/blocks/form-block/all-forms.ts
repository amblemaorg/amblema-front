/*
? INFO:

  (I) for adding titles to the form data::
  --> i.e; 
    title_sample: { label: "Title_label", type: "title"},

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

  (III) for adding an Identification Document to the form data::
  --> i.e;
    documentGroup: {
      type: "prepend",
      fields: {
        prependSelect: {
          label: "select_value",
          placeholder: "select_value",
          fullwidth: boolean_here,
          ...controlProps.select,
          options: [
            { id: "1", name: "value_one" },
            { id: "2", name: "value_two" },
          ],
        },
        prependInput: {
          label: "input_value",
          placeholder: "input_value",
          fullwidth: boolean_here,
          ...controlProps.numberAndRequired
        },
      },
    }

  (IV) for adding double inputs to the form data::
  *note: text and number inputs only
  --> i.e;
    doubleFieldsN: { // 'doubleFieldsN' can be any name
      type: "double",
      fields: { // only 2 fields allowed
        field_1: {
          label: "input_text_or_number",
          placeholder: "input_text_or_number",
          fullwidth: false, // it must be false
          ...controlProps.[number or text controlprops],
        },
        field_2: {
          label: "input2_text_or_number",
          placeholder: "input2_text_or_number",
          fullwidth: false, // it must be false
          ...controlProps.[number or text controlprops],
        },
      }
    },
    --> special case:
    // if double input is for sibling inputs, do the following::
    sibling_fields: { // 'sibling_fields' can be any name
      type: "double",
      isInputGroup: true, // this attribute must be placed here as true
      label: "input_text_or_number", // must have a label here, and not in children fields
      fields: { // only 2 fields allowed
        sibling_field1: {
          placeholder: "input_text_or_number",
          fullwidth: false, // it must be false
          ...controlProps.[number or text controlprops],
        },
        sibling_field2: {
          placeholder: "input_text_or_number",
          fullwidth: false, // it must be false
          ...controlProps.[number or text controlprops],
        },
      }
    },

  (V) to make a field 'Read Only', 'Max length', 'Refreshable', 'Grades sections refreshable', 'Section change emmitter'; set 
    'readonly', 
    'maxlength',
    'shouldContentRefresh',
    'isGrades',
    'emmitSectionChange'; 
    property as following::
  -->
    field_name: {
      ...(this field's properties),
      ..
      readonly: true,
      maxlength: "[number]",
      shouldContentRefresh: true,
      isGrades: true,
      emmitSectionChange: true,
      .
      .
    }

  todo: for (II) and (III) their field name is indispensable to be typed as 'imageGroup' and 'documentGroup', in other words, texts typed above with underscore are editable.
*/

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
} from "../../../../web/shared/forms/custom-validators";
import { MESSAGES } from "../../../../web/shared/forms/validation-messages";

const controlProps = {
  onlyLettersAndRequired: {
    type: "text",
    validations: requiredAndOnlyLetters,
    messages: { pattern: MESSAGES.ONLY_LETTERS_MESSAGE }
  },
  onlyLetters: {
    type: "text",
    validations: onlyLetters,
    messages: { pattern: MESSAGES.ONLY_LETTERS_MESSAGE }
  },
  onlyLettersNumbersAndRequired: {
    type: "text",
    validations: requiredAndOnlyLettersAndNumbers,
    messages: { pattern: MESSAGES.ONLY_LETTERS_NUMBERS_MESSAGE }
  },
  onlyLettersNumbers: {
    type: "text",
    validations: onlyLettersAndNumbers,
    messages: { pattern: MESSAGES.ONLY_LETTERS_NUMBERS_MESSAGE }
  },
  normalTextAndRequired: {
    type: "text",
    validations: requiredAndNormalText,
    messages: { pattern: MESSAGES.TEXT_MESSAGE }
  },
  normalText: {
    type: "text",
    validations: normalText,
    messages: { pattern: MESSAGES.TEXT_MESSAGE }
  },
  emailAndRequired: {
    type: "email",
    validations: requiredAndEmail,
    messages: { pattern: MESSAGES.EMAIL_MESSAGE }
  },
  email: {
    type: "email",
    validations: email,
    messages: { pattern: MESSAGES.EMAIL_MESSAGE }
  },
  numberAndRequired: {
    type: "number",
    validations: requiredAndNaturalNumber,
    messages: { pattern: MESSAGES.NATURAL_NUMBER_MESSAGE }
  },
  number: {
    type: "number",
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
    type: "select",
    options: [],
    validations: { required: true }
  },
  select: {
    type: "select",
    options: [],
    validations: { required: false }
  },
  textareaNormalTextAndRequired: {
    type: "textarea",
    validations: requiredAndNormalText,
    messages: { pattern: MESSAGES.TEXT_MESSAGE }
  },
  textareaNnormalText: {
    type: "textarea",
    validations: normalText,
    messages: { pattern: MESSAGES.TEXT_MESSAGE }
  }
};

export const sampleFormData = {
  title1: { label: "Letras", type: "title" },
  letter: {
    label: "Input letter text",
    placeholder: "Input letter text",
    fullwidth: false,
    ...controlProps.onlyLettersAndRequired
  },
  letterNumber: {
    label: "Input letters and numbers text",
    placeholder: "Input letters and numbers text",
    fullwidth: false,
    ...controlProps.onlyLettersNumbersAndRequired
  },
  normal: {
    label: "Input normal text",
    placeholder: "Input normal text",
    fullwidth: false,
    ...controlProps.normalTextAndRequired
  },
  title2: { label: "Fecha y Direccion", type: "title" },
  date: {
    label: "Input date",
    placeholder: "Input date",
    fullwidth: false,
    ...controlProps.dateAndRequired
  },
  addressState: {
    label: "Input select state",
    placeholder: "Input select state",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: []
  },
  addressMunicipality: {
    label: "Input select municipality",
    placeholder: "Input select municipality",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: []
  },
  title3: { label: "Otros campos", type: "title" },
  email: {
    label: "Input email text",
    placeholder: "Input email text",
    fullwidth: false,
    ...controlProps.emailAndRequired
  },
  number: {
    label: "Input number text",
    placeholder: "Input number text",
    fullwidth: false,
    ...controlProps.numberAndRequired
  },
  phone: {
    label: "Input phone text",
    placeholder: "Input phone text",
    fullwidth: false,
    ...controlProps.phoneAndRequired
  },
  title4: { label: "Imagen aca", type: "title" },
  imageGroup: {
    type: "image",
    fields: {
      imageDescription: {
        label: "Input image description",
        placeholder: "Input image description",
        fullwidth: false,
        ...controlProps.normalText
      },
      imageStatus: {
        label: "Input image status",
        placeholder: "Input image status",
        fullwidth: false,
        ...controlProps.select,
        options: [
          { id: "1", name: "Visible" },
          { id: "2", name: "No visible" }
        ]
      }
    }
  },
  documentGroup: {
    type: "prepend",
    fields: {
      prependSelect: {
        label: "Input group select",
        placeholder: "Input group select",
        fullwidth: false,
        value: "1",
        ...controlProps.select,
        options: [
          { id: "1", name: "V" },
          { id: "2", name: "J" },
          { id: "3", name: "E" }
        ]
      },
      prependInput: {
        label: "Input group description",
        placeholder: "Documento de identidad",
        fullwidth: false,
        ...controlProps.numberAndRequired
      }
    }
  }
};

/*TESTIMONIO DE DOCENTES*/
export const formTestimonioDocentes = {
  imageGroup: {
    type: "image",
    fields: {
      imageDocente: {
        label: "Seleccione el docente",
        placeholder: "Seleccione el docente",
        fullwidth: false,
        ...controlProps.selectAndRequired,
        options: []
      },
      imageCargo: {
        label: "Cargo",
        placeholder: "Cargo",
        fullwidth: false,
        ...controlProps.normalTextAndRequired
      },
      imageDescription: {
        label: "Descripción de la imagen",
        placeholder: "Descripción de la imagen",
        fullwidth: false,
        ...controlProps.normalTextAndRequired
      }
      // imageStatus: {
      //   label: "Estado de la imagen",
      //   placeholder: "Estado de la imagen",
      //   fullwidth: false,
      //   ...controlProps.selectAndRequired,
      //   options: [
      //     { id: "1", name: "Activo" },
      //     { id: "2", name: "Inactivo" }
      //   ]
      // }
    }
  }
};
//* TESTIMONIO DOCENTES MODAL
//modal edit
export const formTestimonioDocentesModalEdit = {
  imageGroup: {
    type: "image",
    fields: {
      imageCargo: {
        label: "Cargo",
        placeholder: "Cargo",
        fullwidth: false,
        ...controlProps.normalTextAndRequired
      },
      imageDescription: {
        label: "Descripción",
        placeholder: "Descripción",
        fullwidth: false,
        ...controlProps.normalTextAndRequired
      }
      // imageStatus: {
      //   label: "Estatus",
      //   placeholder: "Estatus",
      //   fullwidth: false,
      //   ...controlProps.selectAndRequired,
      //   options: [
      //     { id: "1", name: "Activo" },
      //     { id: "2", name: "Inactivo" }
      //   ]
      // }
    }
  }
};
//modal view
export const formTestimonioDocentesModal = {
  name: {
    label: "Nombre",
    placeholder: "Nombre",
    fullwidth: false,
    ...controlProps.onlyLettersAndRequired
  },
  lastName: {
    label: "Apellido",
    placeholder: "Apellido",
    fullwidth: false,
    ...controlProps.onlyLettersAndRequired
  },
  cargo: {
    label: "Cargo",
    placeholder: "Cargo",
    fullwidth: false,
    ...controlProps.onlyLettersAndRequired
  },
  description: {
    label: "Descripcion",
    placeholder: "Descripcion",
    fullwidth: false,
    ...controlProps.onlyLettersAndRequired
  },
  addressState: {
    label: "Estado",
    placeholder: "Estado",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: []
  }
  // status: {
  //   label: "Estatus",
  //   placeholder: "Estatus",
  //   fullwidth: false,
  //   ...controlProps.selectAndRequired,
  //   options: [
  //     { id: "1", name: "Activo" },
  //     { id: "2", name: "Inactivo" }
  //   ]
  // }
};

/*TALLER INICIAL*/
export const formPreparacionTallerInicial = {
  letterNumber: {
    label: "Registro del lugar de taller",
    placeholder: "Registro del lugar de taller",
    fullwidth: false,
    ...controlProps.onlyLettersNumbersAndRequired
  },
  date: {
    label: "Fecha del taller",
    placeholder: "Fecha del taller",
    fullwidth: false,
    ...controlProps.dateAndRequired
  }
};
export const formRegistroInicial = {
  title1: { label: "Resumen del taller inicial", type: "title" },
  normal: {
    label: "Descripción del taller inicial",
    placeholder: "Descripción del taller inicial",
    fullwidth: true,
    ...controlProps.normalTextAndRequired
  },
  title4: { label: "Imágenes del taller inicial", type: "title" },
  imageGroup: {
    type: "image",
    fields: {
      imageDescription: {
        label: "Descripción de la imagen",
        placeholder: "Descripción de la imagen",
        fullwidth: false,
        ...controlProps.normalText
      }
      // imageStatus: {
      //   label: 'Estado de la imagen',
      //   placeholder: 'Estado de la imagen',
      //   fullwidth: false,
      //   ...controlProps.select,
      //   options: [
      //     { id: '1', name: 'Visible' },
      //     { id: '2', name: 'No visible' },
      //   ],
      // },
    }
  }
};
//* MODAL PARA LAS ACCIONES DE LA TABLA DE IMAGENES DEL TALLER INICIAL
export const formRegistroInicialModal = {
  imageGroup: {
    type: "image",
    fields: {
      imageDescription: {
        label: "Descripción de la imagen",
        placeholder: "Descripción de la imagen",
        fullwidth: false,
        ...controlProps.normalTextAndRequired
      }
      // imageStatus: {
      //   label: 'Estado de la imagen',
      //   placeholder: 'Estado de la imagen',
      //   fullwidth: false,
      //   ...controlProps.selectAndRequired,
      //   options: [
      //     { id: '1', name: 'Visible' },
      //     { id: '2', name: 'No visible' },
      //   ],
      // },
    }
  }
};
/*DATOS DE LA ESCUELA*/
export const formDatosEscuela = {
  title1: { label: "Datos básicos de la escuela", type: "title" },
  nameEscuela: {
    label: "Nombre de la escuela",
    placeholder: "Nombre de la escuela",
    readonly: true,
    fullwidth: false,
    ...controlProps.onlyLettersNumbers
  },
  codigoEscuela: {
    label: "Código del plantel",
    placeholder: "Código del plantel",
    readonly: true,
    fullwidth: false,
    ...controlProps.onlyLettersNumbers
  },
  phoneEscuela: {
    label: "Teléfono",
    placeholder: "Teléfono",
    fullwidth: false,
    readonly: true,
    ...controlProps.phone
  },
  addressState: {
    label: "Seleccione el estado",
    placeholder: "Seleccione el estado",
    fullwidth: false,
    readonly: true,
    ...controlProps.selectAndRequired,
    options: []
  },
  addressMunicipality: {
    label: "Seleccione el municipio",
    placeholder: "Seleccione el municipio",
    fullwidth: false,
    readonly: true,
    ...controlProps.selectAndRequired,
    options: []
  },
  callesEscuela: {
    label: "Calles / carreras",
    placeholder: "Calles / carreras",
    readonly: true,
    fullwidth: false,
    ...controlProps.onlyLettersNumbers
  },
  ciudadEscuela: {
    label: "Ciudad",
    placeholder: "Ciudad",
    readonly: true,
    fullwidth: false,
    ...controlProps.onlyLettersNumbers
  },
  /*DATOS DIRECTOR*/
  title2: { label: "Datos del director", type: "title" },
  namesDirector: {
    type: "double",
    isInputGroup: true,
    label: "Nombres del director o directora",
    fields: {
      nameDirector: {
        placeholder: "Nombre",
        fullwidth: false,
        ...controlProps.onlyLetters
      },
      lastnameDirector: {
        placeholder: "Apellido",
        fullwidth: false,
        ...controlProps.onlyLetters
      }
    }
  },
  // nameDirector: {
  //   label: "Nombre del director o directora",
  //   placeholder: "Nombre del director o directora",
  //   fullwidth: false,
  //   ...controlProps.normalText,
  // },
  phoneDirector: {
    label: "Número de teléfono del director",
    placeholder: "Número de teléfono del director",
    fullwidth: false,
    ...controlProps.phone
  },
  emailDirector: {
    label: "Correo electrónico del director",
    placeholder: "Correo electrónico del director",
    fullwidth: false,
    ...controlProps.email
  },
  /*DATOS SUB-DIRECTOR*/
  title3: { label: "Datos del subdirector", type: "title" },
  namesSubDirector: {
    type: "double",
    isInputGroup: true,
    label: "Nombres del subdirector o subdirectora",
    fields: {
      nameSubDirector: {
        placeholder: "Nombre",
        fullwidth: false,
        ...controlProps.onlyLetters
      },
      lastnameSubDirector: {
        placeholder: "Apellido",
        fullwidth: false,
        ...controlProps.onlyLetters
      }
    }
  },
  // nameSubDirector: {
  //   label: "Nombre del subdirector o subdirectora",
  //   placeholder: "Nombre del subdirector o subdirectora",
  //   fullwidth: false,
  //   ...controlProps.normalText,
  // },
  phoneSubDirector: {
    label: "Número de teléfono del subdirector",
    placeholder: "Número de teléfono del subdirector",
    fullwidth: false,
    ...controlProps.phone
  },
  emailSubDirector: {
    label: "Correo electrónico del subdirector",
    placeholder: "Correo electrónico del subdirector",
    fullwidth: false,
    ...controlProps.email
  },
  /*Información adicional*/
  title4: { label: "Información adicional", type: "title" },
  doubleFields1: {
    type: "double",
    fields: {
      number1: {
        label: "Cantidad de docentes",
        placeholder: "Cantidad de docentes",
        readonly: true,
        fullwidth2: true,
        ...controlProps.number
      },
      number2: {
        label: "Cantidad de personal administrativo",
        placeholder: "Cantidad de personal administrativo",
        readonly: true,
        fullwidth2: true,
        ...controlProps.number
      }
    }
  },
  doubleFields2: {
    type: "double",
    fields: {
      number3: {
        label: "Cantidad de personal obrero",
        placeholder: "Cantidad de personal obrero",
        readonly: true,
        fullwidth2: true,
        ...controlProps.number
      },
      number4: {
        label: "Cantidad de estudiantes",
        placeholder: "Cantidad de estudiantes",
        readonly: true,
        fullwidth2: true,
        ...controlProps.number
      }
    }
  },
  doubleFields3: {
    type: "double",
    fields: {
      number5: {
        label: "Cantidad de grados",
        placeholder: "Cantidad de grados",
        readonly: true,
        fullwidth2: true,
        ...controlProps.number
      },
      facebook: {
        label: "Facebook",
        placeholder: "Facebook",
        fullwidth2: true,
        ...controlProps.normalText
      }
    }
  },
  doubleFields4: {
    type: "double",
    fields: {
      instagram: {
        label: "Instagram",
        placeholder: "Instagram",
        fullwidth2: true,
        ...controlProps.normalText
      },
      twitter: {
        label: "Twitter",
        placeholder: "Twitter",
        fullwidth2: true,
        ...controlProps.normalText
      }
    }
  },
  imageGroup: {
    type: "image",
    fields: {
      imageDescription: {
        label: "Descripción de la imagen",
        placeholder: "Descripción de la imagen",
        fullwidth: false,
        ...controlProps.normalText
      }
      // imageStatus: {
      //   label: 'Estado de la imagen',
      //   placeholder: 'Estado de la imagen',
      //   fullwidth: false,
      //   ...controlProps.select,
      //   options: [
      //     { id: '1', name: 'Visible' },
      //     { id: '2', name: 'No visible' },
      //   ],
      // },
    }
  }
};
//* MODAL PARA LAS ACCIONES DE LA TABLA DE IMAGENES DE DATOS DE LA ESCUELA
export const formDatosEscuelaModal = {
  imageGroup: {
    type: "image",
    fields: {
      imageDescription: {
        label: "Descripción de la imagen",
        placeholder: "Descripción de la imagen",
        fullwidth: false,
        ...controlProps.normalTextAndRequired
      }
      // imageStatus: {
      //   label: 'Estado de la imagen',
      //   placeholder: 'Estado de la imagen',
      //   fullwidth: false,
      //   ...controlProps.selectAndRequired,
      //   options: [
      //     { id: '1', name: 'Visible' },
      //     { id: '2', name: 'No visible' },
      //   ],
      // },
    }
  }
};

/*TABS DOCENTE*/
export const formTabsDocente = {
  titleName: { label: "Datos del Docente", type: "title" },
  name: {
    label: "Nombre del Docente",
    placeholder: "Nombre",
    fullwidth: false,
    ...controlProps.onlyLettersAndRequired
  },
  lastName: {
    label: "Apellido del Docente",
    placeholder: "Apellido",
    fullwidth: false,
    ...controlProps.onlyLettersAndRequired
  },
  documentGroup: {
    type: "prepend",
    fields: {
      prependSelect: {
        label: "Input group select",
        placeholder: "Input group select",
        fullwidth: false,
        value: "1",
        ...controlProps.select,
        options: [
          { id: "1", name: "V" },
          { id: "2", name: "E" }
        ]
      },
      prependInput: {
        label: "Documento de identidad",
        placeholder: "Documento de identidad",
        fullwidth: false,
        ...controlProps.numberAndRequired
      }
    }
  },
  gender: {
    label: "Género",
    placeholder: "Género",
    ...controlProps.selectAndRequired,
    options: [
      { id: "1", name: "Femenino" },
      { id: "2", name: "Masculino" }
    ]
  },
  phone: {
    label: "Teléfono",
    placeholder: "Teléfono",
    fullwidth: false,
    ...controlProps.phoneAndRequired
  },
  email: {
    label: "Correo",
    placeholder: "Correo",
    fullwidth: false,
    ...controlProps.emailAndRequired
  },
  addressState: {
    label: "Seleccione el estado",
    placeholder: "Estado",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: []
  },
  addressMunicipality: {
    label: "Seleccione el municipio",
    placeholder: "Municipio",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: []
  },
  street: {
    label: "Calles / carreras",
    placeholder: "Calles / carreras",
    fullwidth: false,
    ...controlProps.normalTextAndRequired
  },
  city: {
    label: "Ciudad",
    placeholder: "Ciudad",
    fullwidth: false,
    ...controlProps.normalTextAndRequired
  },
  status: {
    label: "Estatus",
    placeholder: "Estatus",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: [
      { id: "1", name: "Activo" },
      { id: "2", name: "Inactivo" }
    ]
  }
};
/*TABS GRADOS Y SECCIONES*/
export const formGradosSecciones = {
  grades: {
    label: "Seleccione el grado",
    placeholder: "Grado",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: [
      { id: "0", name: "Preescolar" },
      { id: "1", name: "1er Grado" },
      { id: "2", name: "2do Grado" },
      { id: "3", name: "3er Grado" },
      { id: "4", name: "4to Grado" },
      { id: "5", name: "5to Grado" },
      { id: "6", name: "6to Grado" }
    ]
  },
  section: {
    label: "Sección",
    placeholder: "Sección",
    fullwidth: false,
    maxlength: "1",
    ...controlProps.onlyLettersAndRequired
  },
  docente: {
    label: "Seleccione el docente",
    placeholder: "Docente",
    fullwidth: false,
    shouldContentRefresh: true,
    ...controlProps.selectAndRequired,
    options: [
      // { id: "1", name: "Alfredo" },
      // { id: "2", name: "Yanior" },
      // { id: "3", name: "Stephanie" }
    ]
  }
};
/*Tabs Estudiantes*/
export const formTabsEstudiantesGradesSections = {
  grades: {
    label: "Seleccione el grado",
    placeholder: "Grados",
    fullwidth: false,
    isGrades: true,
    ...controlProps.selectAndRequired,
    options: []
  },
  section: {
    label: "Seleccione la sección",
    placeholder: "Sección",
    fullwidth: false,
    emmitSectionChange: true,
    ...controlProps.selectAndRequired,
    options: []
  },
}
export const formTabsEstudiantes = {  
  name: {
    label: "Nombre estudiante",
    placeholder: "Nombre",
    fullwidth: false,
    ...controlProps.onlyLettersAndRequired
  },
  lastName: {
    label: "Apellido estudiante",
    placeholder: "Apellido",
    fullwidth: false,
    ...controlProps.onlyLettersAndRequired
  },
  documentGroup: {
    type: "prepend",
    fields: {
      prependSelect: {
        label: "Input group select",
        placeholder: "Input group select",
        fullwidth: false,
        value: "1",
        ...controlProps.select,
        options: [
          { id: "1", name: "V" },
          { id: "2", name: "E" },
        ]
      },
      prependInput: {
        label: "Documento de identidad",
        placeholder: "Documento de identidad",
        fullwidth: false,
        ...controlProps.numberAndRequired
      }
    }
  },
  age: {
    lower: true,
    label: "Fecha de nacimiento",
    placeholder: "Fecha de nacimiento",
    fullwidth: false,
    ...controlProps.dateAndRequired
  },
  gender: {
    label: "Género",
    placeholder: "Género",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: [
      { id: "1", name: "Femenino" },
      { id: "2", name: "Masculino" }
    ]
  }
};
/* PERFIL DE USUARIO COORDINADOR*/
export const formCoordinador = {
  titleName: { label: "Datos del coordinador", type: "title" },
  letter: {
    label: "Nombre del coordinador",
    placeholder: "Nombre del coordinador",
    fullwidth: false,
    ...controlProps.onlyLettersAndRequired
  },
  lastNameLetter: {
    label: "Apellido del coordinador",
    placeholder: "Apellido del coordinador",
    fullwidth: false,
    ...controlProps.onlyLettersAndRequired
  },
  documentGroup: {
    type: "prepend",
    fields: {
      prependSelect: {
        label: "Input group select",
        placeholder: "Input group select",
        fullwidth: false,
        value: "1",
        ...controlProps.select,
        options: [
          { id: "1", name: "V" },
          { id: "2", name: "J" },
          { id: "3", name: "E" }
        ]
      },
      prependInput: {
        label: "Documento de identidad",
        placeholder: "Documento de identidad",
        fullwidth: false,
        ...controlProps.numberAndRequired
      }
    }
  },
  email: {
    label: "Correo",
    placeholder: "Correo",
    fullwidth: false,
    ...controlProps.emailAndRequired
  },
  phoneMovil: {
    label: "Teléfono móvil",
    placeholder: "Teléfono móvil",
    fullwidth: false,
    ...controlProps.phoneAndRequired
  },
  phone: {
    label: "Teléfono de habitación",
    placeholder: "Teléfono de habitación",
    fullwidth: false,
    ...controlProps.phoneAndRequired
  },
  date: {
    lower: true,
    label: "Fecha de nacimiento",
    placeholder: "Fecha de nacimiento",
    fullwidth: false,
    ...controlProps.dateAndRequired
  },
  sexo: {
    label: "Género",
    placeholder: "Género",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: [
      { id: "1", name: "Femenino" },
      { id: "2", name: "Masculino" }
    ]
  },
  addressState: {
    label: "Seleccione el estado",
    placeholder: "Seleccione el estado",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: []
  },
  addressMunicipality: {
    label: "Seleccione el municipio",
    placeholder: "Seleccione el municipio",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: []
  },
  city: {
    label: "Ciudad",
    placeholder: "Ciudad",
    fullwidth: false,
    ...controlProps.normalTextAndRequired
  },
  street: {
    label: "Calles / carreras",
    placeholder: "Calles / carreras",
    fullwidth: false,
    ...controlProps.normalTextAndRequired
  },
  house: {
    label: "casa / edificio",
    placeholder: "casa / edificio",
    fullwidth: false,
    ...controlProps.normalTextAndRequired
  },
  proffesion: {
    label: "Profesión",
    placeholder: "Profesión",
    fullwidth: false,
    ...controlProps.normalTextAndRequired
  }
};
/* PERFIL DE USUARIO PADRINO*/
export const formPadrino = {
  titleName: { label: "Datos de la empresa", type: "title" },
  letter: {
    label: "Nombre de la empresa",
    placeholder: "Nombre de la empresa",
    fullwidth: false,
    ...controlProps.onlyLettersNumbersAndRequired
  },
  rif: {
    label: "Rif",
    placeholder: "Rif",
    fullwidth: false,
    ...controlProps.normalTextAndRequired
  },
  phone: {
    label: "Teléfono",
    placeholder: "Teléfono",
    fullwidth: false,
    ...controlProps.phoneAndRequired
  },
  email: {
    label: "Correo",
    placeholder: "Correo",
    fullwidth: false,
    ...controlProps.emailAndRequired
  },
  tipoEmpresa: {
    label: "Tipo de empresa",
    placeholder: "Tipo de empresa",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: [
      { id: "1", name: "Fábrica" },
      { id: "2", name: "Tienda" },
      { id: "3", name: "Negocio Personal" },
      { id: "4", name: "Hacienda" },
      { id: "0", name: "Otro" }
    ],
    isFactoryType: true
  },
  companyOtherType: {
    label: "Otro tipo de empresa",
    placeholder: "Otro tipo de empresa ",
    fullwidth: false,
    ...controlProps.onlyLetters
  },
  titleName2: { label: "Datos de la persona de contacto", type: "title" },
  letterName: {
    label: "Nombre de la persona de contacto",
    placeholder: "Nombre de la persona de contacto",
    fullwidth: false,
    ...controlProps.onlyLettersAndRequired
  },
  letterLastName: {
    label: "Apellido de la persona de contacto",
    placeholder: "Apellido de la persona de contacto",
    fullwidth: false,
    ...controlProps.onlyLettersAndRequired
  },
  phoneContact: {
    label: "Teléfono de la persona de contacto",
    placeholder: "Teléfono de la persona de contacto",
    fullwidth: false,
    ...controlProps.phoneAndRequired
  },
  emailContact: {
    label: "Correo electronico",
    placeholder: "Correo electronico",
    fullwidth: false,
    ...controlProps.emailAndRequired
  },
  addressState: {
    label: "Seleccione el estado",
    placeholder: "Estado",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: []
  },
  addressMunicipality: {
    label: "Seleccione el municipio",
    placeholder: "Municipio",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: []
  },
  city: {
    label: "Ciudad",
    placeholder: "Ciudad",
    fullwidth: false,
    ...controlProps.normalTextAndRequired
  },
  street: {
    label: "Calles / carreras",
    placeholder: "Calles / carreras",
    fullwidth: false,
    ...controlProps.normalTextAndRequired
  }
};
/* PERFIL DE USUARIO ESCUELA*/
export const formEscuela = {
  titleName: { label: "Datos de la escuela", type: "title" },
  name: {
    label: "Nombre de la escuela",
    placeholder: "Nombre de la escuela",
    fullwidth: false,
    ...controlProps.onlyLettersNumbersAndRequired  },
  code: {
    label: "Código del plantel",
    placeholder: "Código del plantel",
    fullwidth: false,
    ...controlProps.onlyLettersNumbersAndRequired
  },
  email: {
    label: "Correo",
    placeholder: "Correo",
    fullwidth: false,
    ...controlProps.emailAndRequired
  },
  phone: {
    label: "Teléfono",
    placeholder: "Teléfono",
    fullwidth: false,
    ...controlProps.phoneAndRequired
  },
  addressState: {
    label: "Seleccione el estado",
    placeholder: "Seleccione el estado",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: []
  },
  addressMunicipality: {
    label: "Seleccione el municipio",
    placeholder: "Seleccione el municipio",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: []
  },
  city: {
    label: "Ciudad",
    placeholder: "Ciudad",
    fullwidth: false,
    ...controlProps.normalTextAndRequired
  },
  street: {
    label: "Calles / carreras",
    placeholder: "Calles / carreras",
    fullwidth: false,
    ...controlProps.normalTextAndRequired
  },
  zone: {
    label: "Tipo de zona",
    placeholder: "Tipo de zona",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: [
      { id: "1", name: "Sector" },
      { id: "2", name: "Barrio" },
      { id: "3", name: "Cacerio" }
    ]
  },
  address: {
    label: "Direccion de la zona",
    placeholder: "Direccion de la zona",
    fullwidth: false,
    ...controlProps.normalTextAndRequired
  },
  turno: {
    label: "Turno de clases",
    placeholder: "Turno de clases",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: [
      { id: "1", name: "Manana" },
      { id: "2", name: "Tarde" },
      { id: "3", name: "Ambos" }
    ]
  },
  typeEscuela: {
    label: "Tipo de escuela",
    placeholder: "Tipo de escuela",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: [
      { id: "1", name: "Nacional" },
      { id: "2", name: "Estadal" },
      { id: "3", name: "Municipal" }
    ]
  },
  titleDirector: { label: "Datos del director", type: "title" },
  letterName: {
    label: "Nombre del director",
    placeholder: "Nombre del director",
    fullwidth: false,
    ...controlProps.onlyLettersAndRequired
  },
  letterLastName: {
    label: "Apellido del director",
    placeholder: "Apellido del director",
    fullwidth: false,
    ...controlProps.onlyLettersAndRequired
  },
  phoneContact: {
    label: "Teléfono del director",
    placeholder: "Teléfono del director",
    fullwidth: false,
    ...controlProps.phoneAndRequired
  },
  emailContact: {
    label: "Correo del director",
    placeholder: "Correo del director",
    fullwidth: false,
    ...controlProps.emailAndRequired
  },

  titleSubDirector: { label: "Datos del subdirector", type: "title" },
  letterName2: {
    label: "Nombre del subdirector",
    placeholder: "Nombre del subdirector",
    fullwidth: false,
    ...controlProps.onlyLetters
  },
  letterLastName2: {
    label: "Apellido del subdirector",
    placeholder: "Apellido del subdirector",
    fullwidth: false,
    ...controlProps.onlyLetters
  },
  phoneContact2: {
    label: "Teléfono del subdirector",
    placeholder: "Teléfono del subdirector",
    fullwidth: false,
    ...controlProps.phone
  },
  emailContact2: {
    label: "Correo del subdirector",
    placeholder: "Correo del subdirector",
    fullwidth: false,
    ...controlProps.email
  }
};

//ANUARIO-----------------------------------------------------
//RESENA HISTORICA
export const formResenaHistorica = {
  nameDescription: {
    placeholder: "Descripción de la reseña histórica ",
    fullwidth: true,
    ...controlProps.textareaNnormalText
  }
};
//PADRINO
export const formPadrinoAnuario = {
  //name: { placeholder: "Padrino", fullwidth: false, ...controlProps.onlyLetters },
  nameDescription: {
    placeholder: "Descripción del padrino",
    fullwidth: true,
    ...controlProps.textareaNnormalText
  }
};
//Coordinador
export const formCoordinadorAnuario = {
  nameDescription: {
    placeholder: "Descripción del coordinador",
    fullwidth: true,
    ...controlProps.textareaNnormalText
  }
};
//escuela
export const formEscuelaAnuario = {
  nameDescription: {
    placeholder: "Descripción del escuela",
    fullwidth: true,
    ...controlProps.textareaNnormalText
  }
};
//Actividades
export const formActividades = {
  nameDescription: {
    placeholder: "Descripción de la actividad",
    fullwidth: true,
    ...controlProps.textareaNnormalText
  },
  imageGroup: {
    type: "image",
    fields: {}
  }
};
export const formImgActividades = {
  imageGroup: {
    type: "image",
    fields: {}
  }
};

//? -- MODALES -----------------------------------------------
// DIAGNOSTICO INICIAL
export const formLecturaModal = {
  name: {
    label: "Nombre",
    placeholder: "Nombre",
    fullwidth: false,
    ...controlProps.onlyLettersAndRequired
  },
  lastName: {
    label: "Apellido",
    placeholder: "Apellido",
    fullwidth: false,
    ...controlProps.onlyLettersAndRequired
  },
  grade: {
    label: "Grado",
    placeholder: "Grados",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: [
      { id: "1", name: "1er grado" },
      { id: "2", name: "2do grado" },
      { id: "3", name: "3er grado" },
      { id: "4", name: "4to grado" },
      { id: "5", name: "5to grado" },
      { id: "6", name: "6to grado" }
    ]
  },
  section: {
    label: "Sección",
    placeholder: "Sección",
    fullwidth: false,
    ...controlProps.normalTextAndRequired
  },
  gender: {
    label: "Género",
    placeholder: "Género",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: [
      { id: "1", name: "Femenino" },
      { id: "2", name: "Masculino" }
    ]
  },
  date: {
    label: "Fecha del diagnostico",
    placeholder: "Fecha del diagnostico",
    fullwidth: false,
    ...controlProps.dateAndRequired
  },
  result: {
    label: "Resultado",
    placeholder: "Resultado",
    fullwidth: false,
    ...controlProps.normalTextAndRequired
  },
  index: {
    label: "Indice",
    placeholder: "Indice",
    fullwidth: false,
    ...controlProps.numberAndRequired
  }
};
export const formMatematicaModal = {
  name: {
    label: "Nombre",
    placeholder: "Nombre",
    fullwidth: false,
    ...controlProps.onlyLettersAndRequired
  },
  lastName: {
    label: "Apellido",
    placeholder: "Apellido",
    fullwidth: false,
    ...controlProps.onlyLettersAndRequired
  },
  grade: {
    label: "Grados",
    placeholder: "Grados",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: [
      { id: "1", name: "1er grado" },
      { id: "2", name: "2do grado" },
      { id: "3", name: "3er grado" },
      { id: "4", name: "4to grado" },
      { id: "5", name: "5to grado" },
      { id: "6", name: "6to grado" }
    ]
  },
  section: {
    label: "Sección",
    placeholder: "Sección",
    fullwidth: false,
    ...controlProps.normalTextAndRequired
  },
  gender: {
    label: "Género",
    placeholder: "Género",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: [
      { id: "1", name: "Femenino" },
      { id: "2", name: "Masculino" }
    ]
  },
  date: {
    label: "Fecha del resultado de multiplicacion",
    placeholder: "Fecha del resultado de multiplicacion",
    fullwidth: false,
    ...controlProps.dateAndRequired
  },
  resultMul: {
    label: "Resultado de multiplicacion",
    placeholder: "Resultado de multiplicacion",
    fullwidth: false,
    ...controlProps.numberAndRequired
  },
  date2: {
    label: "Fecha del resultado logica matematica",
    placeholder: "Fecha del resultado de logica matematica",
    fullwidth: false,
    ...controlProps.dateAndRequired
  },
  resultLog: {
    label: "Resultado de logica matematica",
    placeholder: "Resultado de logica matematica",
    fullwidth: false,
    ...controlProps.numberAndRequired
  },
  indexMul: {
    label: "Indice de multiplicacion",
    placeholder: "Indice de multiplicacion",
    fullwidth: false,
    ...controlProps.numberAndRequired
  },
  indexLog: {
    label: "Indice de logica matematica",
    placeholder: "Indice de logica matematica",
    fullwidth: false,
    ...controlProps.numberAndRequired
  }
};

// AMBLEMONEDAS
export const formConfirmacionDocenteModal = {
  grade: {
    label: "Input select sex",
    placeholder: "Grados",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: [
      { id: "1", name: "1er grado" },
      { id: "2", name: "2do grado" },
      { id: "3", name: "3er grado" },
      { id: "4", name: "4to grado" },
      { id: "5", name: "5to grado" },
      { id: "6", name: "6to grado" }
    ]
  },
  section: {
    label: "Input normal text",
    placeholder: "Sección",
    fullwidth: false,
    ...controlProps.normalTextAndRequired
  },
  confirmation: {
    label: "Input select confirmacion",
    placeholder: "Confirmacion",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: [
      { id: "1", name: "Confirmado" },
      { id: "2", name: "Por confirmar" }
    ]
  }
};
// PREPARACION DE LA CONVENCION ANUAL
export const formPreinscripcionDocenteModal = {
  name: {
    label: "Nombre",
    placeholder: "Nombre",
    fullwidth: false,
    ...controlProps.onlyLettersAndRequired
  },
  lastName: {
    label: "Apellido",
    placeholder: "Apellido",
    fullwidth: false,
    ...controlProps.onlyLettersAndRequired
  },
  phone: {
    label: "Telefono",
    placeholder: "Telefono",
    fullwidth: false,
    ...controlProps.phoneAndRequired
  },
  email: {
    label: "Correo",
    placeholder: "Correo",
    fullwidth: false,
    ...controlProps.emailAndRequired
  }
};
// ACTIVIDAD ESPECIAL
export const formSpecialActivityTableModal = {
  item: {
    label: "Item",
    placeholder: "Item",
    fullwidth: false,
    ...controlProps.numberAndRequired
  },
  description: {
    label: "Description",
    placeholder: "Description",
    fullwidth: false,
    ...controlProps.normalTextAndRequired
  },
  cantidad: {
    label: "Cantidad",
    placeholder: "Cantidad",
    fullwidth: false,
    ...controlProps.numberAndRequired
  },
  price: {
    label: "Precio unitario",
    placeholder: "Precio unitario",
    fullwidth: false,
    ...controlProps.numberAndRequired
  },
  impuesto: {
    label: "Impuesto",
    placeholder: "Impuesto",
    fullwidth: false,
    ...controlProps.numberAndRequired
  },
  subtotal: {
    label: "Subtotal",
    placeholder: "Subtotal",
    fullwidth: false,
    ...controlProps.numberAndRequired
  }
};
// OLIMPIADAS DE MATEMATICA
export const formResultadoEstudianteModal = {
  name: {
    label: "Nombre",
    placeholder: "Nombre",
    fullwidth: false,
    ...controlProps.onlyLettersAndRequired
  },
  lastName: {
    label: "Apellido",
    placeholder: "Apellido",
    fullwidth: false,
    ...controlProps.onlyLettersAndRequired
  },
  grade: {
    label: "Grados",
    placeholder: "Grados",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: [
      { id: "1", name: "1er grado" },
      { id: "2", name: "2do grado" },
      { id: "3", name: "3er grado" },
      { id: "4", name: "4to grado" },
      { id: "5", name: "5to grado" },
      { id: "6", name: "6to grado" }
    ]
  },
  section: {
    label: "Sección",
    placeholder: "Sección",
    fullwidth: false,
    ...controlProps.normalTextAndRequired
  },
  status: {
    label: "Estatus",
    placeholder: "Estatus",
    fullwidth: false,
    ...controlProps.selectAndRequired,
    options: [
      { id: "1", name: "Registrado" },
      { id: "2", name: "Calificado" }
    ]
  },
  result: {
    label: "Resultado",
    placeholder: "Resultado",
    fullwidth: false,
    ...controlProps.normalTextAndRequired
  }
};
// FOTOS DE LA ACTIVIDAD
//* MODAL PARA LAS ACCIONES DE LA TABLA DE IMAGENES DEL TALLER INICIAL
export const tablaImagenesActividadModal = {
  imageGroup: {
    type: "image",
    fields: {
      /*imageDescription: {
        label: 'Descripción',
        placeholder: 'Descripción',
        fullwidth: false,
        ...controlProps.normalTextAndRequired,
      },*/
    },
  },
};
