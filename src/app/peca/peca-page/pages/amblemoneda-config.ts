import { formConfirmacionDocenteModal } from "../blocks/form-block/all-forms";
import {
  UpdateAmblecoins,
  UpdateAmblecoinsSections,
} from "src/app/store/actions/peca/peca.actions";

const controlProps = {
  dateAndRequired: {
    type: "date",
    validations: { required: true },
  },
  date: {
    type: "date",
    validations: { required: false },
  },
};

const sliderAmblemoneda = {
  component: "slider",
  name: "sliderAmblemaData",
  settings: {
    sliderImage: [
      {
        image: "",
        description: "",
      },
      {
        image: "",
        description: "",
      },
      {
        image: "",
        description: "",
      },
      {
        image: "",
        description: "",
      },
    ],
  },
};

const btnGuardarFechaSlider = {
  component: "textsbuttons",
  settings: {
    action: [
      {
        type: 1,
        name: "Guardar",
      },
    ],
  },
};

const ConfirmacionDocente = {
  component: "table",
  name: "amblemonedaTable",
  settings: {
    columns: {
      grade: {
        title: "Grado",
        valuePrepareFunction: (row: any) => {
          if (row)
            return formConfirmacionDocenteModal.grade.options.find((d) => {
              return d.id === row;
            }).name;
          else return "";
        },
        filterFunction: (cell?: any, search?: string) => {
          let value: string = formConfirmacionDocenteModal.grade.options.find((d) => {
            return d.id === cell;
          }).name;
          value = value.toUpperCase();

          if (value.includes(search.toUpperCase()) || search === "") return true;
          else return false;
        },
      },
      section: {
        title: "Sección",
      },
      confirmation: {
        title: "Confirmación",
        valuePrepareFunction: (row: any) => {
          if (row) return row == "1" ? "Confirmado" : "Por confirmar";
          else return "";
        },
        filterFunction: (cell?: any, search?: string) => {
          let value: string = cell == "1" ? "Confirmado" : "Por confirmar";
          value = value.toUpperCase();

          if (value.includes(search.toUpperCase()) || search === "") return true;
          else return false;
        },
      },
    },
    modalCode: "amblemonedaConfigConfirmacionDocente",
    tableCode: "amblemonedaConfigConfirmacionDocente",
    amblemonedaConfigConfirmacionDocente: [
      /*{
                id: '1abcdefghijk',
                grade: '5',
                section: 'B',
                confirmation: '1',
            },
            {
                id: '2abcdefghijk',
                grade: '4',
                section: 'A',
                confirmation: '2',
            }*/
    ],
    classes: {
      hideView: false,
      hideEdit: false,
      hideDelete: true,
    },
  },
};
//* MODAL CONFIRMACION DOCENTE ----------------------------------
const formConfirmacionDocente = {
  component: "form",
  name: "confirmacionDocenteModal",
  viewMode: "both",
  settings: {
    formsContent: formConfirmacionDocenteModal,
    buttons: ["guardar"],
    formType: "tablaConfirmacionDocente",
    tableCode: "amblemonedaConfigConfirmacionDocente",
    modalCode: "amblemonedaConfigConfirmacionDocente",
    isFromCustomTableActions: true,
    fetcherMethod: "put",
  },
};
const textsAndButtonsConfirmacionDocente = {
  component: "textsbuttons",
  settings: {
    subtitles: [
      {
        text: "¿Desea eliminar este ítem?",
      },
    ],
    action: [
      {
        type: 1,
        name: "Si",
      },
      {
        type: 2,
        name: "No",
      },
    ],
    modalCode: "amblemonedaConfigConfirmacionDocente",
    isFromCustomTableActions: true,
    isDeleting: true,
  },
};
const modalConfirmacionDocente = {
  component: "modal",
  settings: {
    modalCode: "amblemonedaConfigConfirmacionDocente",
    items: [
      {
        childBlocks: [{ ...formConfirmacionDocente }, { ...textsAndButtonsConfirmacionDocente }],
      },
    ],
  },
};
//* ------------------------------------------

const charlaConDocentes = {
  component: "textsbuttons",
  name: "amblemonedaCharla",
  settings: {
    dateOrtext: {
      text: "Fecha de la reunión:",
      fields: [
        {
          label: "Input date",
          placeholder: "Fecha de la reunión",
          fullwidth: false,
          ...controlProps.dateAndRequired,
        },
      ],
    },
    download: {},
    subtitles: [
      {
        text: "",
      },
    ],
    action: [
      {
        type: 1,
        name: "Guardar",
      },
    ],
    fetcherMethod: "put",
  },
  modalCode: "enviarDataCharla",
  buttonCode: "enviarDataCharla",
  tableCode: "enviarDataCharla",
};

const btnGuardarFechaCharla = {
  component: "textsbuttons",
  name: "btnEnviarSolicitud",
  settings: {
    action: [
      {
        type: 1,
        name: "Guardar",
      },
    ],
    fetcherMethod: "put",
  },
};

export const AMBLEMONEDA_CONFIG = {
  header: {
    title: "AmbLeMonedas",
  },
  blocks: [
    {
      component: "tabs",
      settings: {
        items: [
          {
            title: "Charla con los docentes",
            childBlocks: [{ ...charlaConDocentes }, { ...btnGuardarFechaCharla }],
          },
          {
            title: "Elaboración de alcancía",
            childBlocks: [{ ...sliderAmblemoneda }, { ...btnGuardarFechaSlider }],
          },
          {
            title: "Entrega de AmbLeMonedas",
            childBlocks: [{ ...ConfirmacionDocente }, { ...modalConfirmacionDocente }],
          },
        ],
      },
    },
  ],
};

export function amblecoinsConfigMapper(
  pecaData,
  lapseNumber,
  updatedElaborationDate,
  updatedSections,
  store
) {
  const lapseName = `lapse${lapseNumber}`;
  const {
    meetingDate,
    teachersMeetingFile,
    teachersMeetingDescription,
    elaborationDate,
    piggyBankSlider,
    sections,
  } = pecaData[lapseName].ambleCoins;

  const meetingToTeachers = {
    component: "textsbuttons",
    name: "amblemonedaCharla",
    settings: {
      dateOrtext: {
        text: "Fecha de la reunión:",
        fields: [
          {
            label: "Input date",
            placeholder: "Fecha de la reunión",
            fullwidth: false,
            ...controlProps.dateAndRequired,
            value: meetingDate ? meetingDate.split("T")[0] : "",
          },
        ],
      },
      download: {
        url: teachersMeetingFile ? teachersMeetingFile.url : "",
        name: teachersMeetingFile ? teachersMeetingFile.name : "",
      },
      subtitles: [
        {
          text: teachersMeetingDescription ? teachersMeetingDescription : "",
        },
      ],
      action: [
        {
          name: "Guardar",
        },
      ],
      fetcherMethod: "put",
      onSubmit: (values) => {
        const data = {
          meetingDate: values.date,
          lapseNumber,
        };
        store.dispatch(new UpdateAmblecoins(data));
      },
    },
    modalCode: "enviarDataCharla",
    buttonCode: "enviarDataCharla",
    tableCode: "enviarDataCharla",
  };

  const piggyBankElaboration = {
    component: "textsbuttons",
    settings: {
      dateOrtext: {
        text: "Fecha de la actividad:",
        fields: [
          {
            label: "Input date",
            placeholder: "Fecha de la actividad",
            fullwidth: false,
            ...controlProps.dateAndRequired,
            value: elaborationDate ? elaborationDate.split("T")[0] : "",
          },
        ],
      },
      action: [
        {
          name: "Guardar",
        },
      ],
      onSubmit: (values) => {
        const data = {
          elaborationDate: values.date,
          lapseNumber,
        };
        store.dispatch(new UpdateAmblecoins(data));
      },
    },
  };

  const piggyBankSliderComponent = {
    component: "slider",
    name: "sliderAmblemaData",
    settings: {
      sliderImage: piggyBankSlider,
    },
  };

  const sectionsTable = {
    component: "table",
    name: "amblemonedaTable",
    settings: {
      columns: {
        grade: {
          title: "Grado",
          valuePrepareFunction: (row: any) => {
            if (row)
              return formConfirmacionDocenteModal.grade.options.find((d) => {
                return d.id === row;
              }).name;
            else return "";
          },
          filterFunction: (cell?: any, search?: string) => {
            let value: string = formConfirmacionDocenteModal.grade.options.find((d) => {
              return d.id === cell;
            }).name;
            value = value.toUpperCase();

            if (value.includes(search.toUpperCase()) || search === "") return true;
            else return false;
          },
        },
        section: {
          title: "Sección",
        },
        confirmation: {
          title: "Confirmación",
          valuePrepareFunction: (row: any) => {
            if (row) return row == "1" ? "Confirmado" : "Por confirmar";
            else return "";
          },
          filterFunction: (cell?: any, search?: string) => {
            let value: string = cell == "1" ? "Confirmado" : "Por confirmar";
            value = value.toUpperCase();

            if (value.includes(search.toUpperCase()) || search === "") return true;
            else return false;
          },
        },
      },
      modalCode: "amblemonedaConfigConfirmacionDocente",
      tableCode: "amblemonedaConfigConfirmacionDocente",
      amblemonedaConfigConfirmacionDocente: sections.map((section) => {
        const { id, grade, name, status } = section;
        return {
          id,
          grade,
          section: name,
          confirmation: status,
        };
      }),
      classes: {
        hideView: false,
        hideEdit: false,
        hideDelete: true,
      },
    },
  };

  const sectionForm = {
    component: "form",
    name: "confirmacionDocenteModal",
    viewMode: "both",
    settings: {
      formsContent: formConfirmacionDocenteModal,
      buttons: ["guardar"],
      formType: "tablaConfirmacionDocente",
      tableCode: "amblemonedaConfigConfirmacionDocente",
      modalCode: "amblemonedaConfigConfirmacionDocente",
      isFromCustomTableActions: true,
      //fetcherMethod: "put",
      onSubmit: (values) => {
        console.log("section table", values);
        const data = {
          lapseNumber,
          section: {
            id: values.id,
            name: values.section,
            grade: values.grade,
            status: values.confirmation,
          },
        };
        store.dispatch(new UpdateAmblecoinsSections(data));
      },
    },
  };

  const sectionModal = {
    component: "modal",
    settings: {
      modalCode: "amblemonedaConfigConfirmacionDocente",
      items: [
        {
          childBlocks: [sectionForm, textsAndButtonsConfirmacionDocente],
        },
      ],
    },
  };

  return {
    header: {
      title: "AmbLeMonedas",
    },
    blocks: [
      {
        component: "tabs",
        settings: {
          items: [
            {
              title: "Charla con los docentes",
              childBlocks: [meetingToTeachers],
            },
            {
              title: "Elaboración de alcancía",
              active: updatedElaborationDate && !updatedSections ? true : false,
              childBlocks: [piggyBankElaboration, piggyBankSliderComponent],
            },
            {
              title: "Entrega de AmbLeMonedas",
              active: updatedSections ? true : false,
              childBlocks: [sectionsTable, sectionModal],
            },
          ],
        },
      },
    ],
  };
}
