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

export function amblecoinsConfigMapper(
  pecaData,
  lapseNumber,
  updatedElaborationDate,
  updatedSections,
  permissions,
  store
) {
  const { amblecoins_peca_edit } = permissions;
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
            specialDateForm: "dateForMeetingToTeachers",
            dateForMeetingToTeachersDay: null,
            dateForMeetingToTeachersMonth: null,
            dateForMeetingToTeachersYear: null,
            dateForMeetingToTeachersInactiveInput: null,
            theWholeDate: meetingDate ? meetingDate : null,
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
          hidden: !amblecoins_peca_edit,
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
            specialDateForm: "dateForPiggyBankElaboration",
            dateForPiggyBankElaborationDay: null,
            dateForPiggyBankElaborationMonth: null,
            dateForPiggyBankElaborationYear: null,
            dateForPiggyBankElaborationInactiveInput: null,
            theWholeDate: elaborationDate ? elaborationDate : null,
            ...controlProps.dateAndRequired,
            value: elaborationDate ? elaborationDate.split("T")[0] : "",
          },
        ],
      },
      action: [
        {
          hidden: !amblecoins_peca_edit,
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
        hideEdit: !amblecoins_peca_edit,
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
      hiddenButton: !amblecoins_peca_edit,
      formType: "tablaConfirmacionDocente",
      tableCode: "amblemonedaConfigConfirmacionDocente",
      modalCode: "amblemonedaConfigConfirmacionDocente",
      isFromCustomTableActions: true,
      //fetcherMethod: "put",
      onSubmit: (values) => {
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

  const sectionDeleteForm = {
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

  const sectionModal = {
    component: "modal",
    settings: {
      modalCode: "amblemonedaConfigConfirmacionDocente",
      items: [
        {
          childBlocks: [sectionForm, sectionDeleteForm],
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
