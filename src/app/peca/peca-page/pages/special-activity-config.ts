import { formSpecialActivityTableModal } from "../blocks/form-block/all-forms";
import {
  UpdateSpecialActivity,
  SetSpecialActivityRequestData,
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

const textsAndButtons = {
  component: "textsbuttons",
  settings: {
    action: [
      {
        type: 3,
        name: "Enviar Solicitud",
      },
    ],
    receivesFromTableOrForm: "table",
    buttonCode: "dataSpecialActivityTable",
  },
};

const dateAndStatus = {
  component: "textsbuttons",
  name: "statusYDate",
  settings: {
    dateOrtext: {
      text: "Fecha de la actividad especial:",
      fields: [
        {
          label: "Input date",
          placeholder: "Fecha de la actividad",
          fullwidth: false,
          ...controlProps.dateAndRequired,
        },
      ],
    },
    status: {
      text: "Estatus",
      subText: 1,
    },
    action: [
      {
        type: 6,
        name: "Agregar Nuevo",
      },
    ],
    modalCode: "dataSpecialActivityTable",
  },
};
const specialActivityTable = {
  component: "table",
  name: "tableActividadEspecial",
  settings: {
    columns: {
      item: {
        title: "Item",
      },
      description: {
        title: "Descripción",
      },
      cantidad: {
        title: "Cantidad",
      },
      price: {
        title: "Precio unitario",
      },
      impuesto: {
        title: "Impuesto",
        valuePrepareFunction: (row: any) => {
          if (row) return row.toString() + "%";
          else return "";
        },
        filterFunction: (cell?: any, search?: string) => {
          let value: string = cell.toString() + "%";
          value = value.toUpperCase();

          if (value.includes(search.toUpperCase()) || search === "") return true;
          else return false;
        },
      },
      subtotal: {
        title: "Subtotal",
      },
    },
    makesNoRequest: true,
    modalCode: "dataSpecialActivityTable",
    buttonCode: "dataSpecialActivityTable",
    tableCode: "dataSpecialActivityTable",
    dataSpecialActivityTable: [
      /*
      {
        id: '1sdfsdfsdfsd',
        item: 1,
        description: 'cosa',
        cantidad: 34,
        price: 444,
        impuesto: 20,
        subtotal: 500,
      },
      {
        id: '2sdfsdfsdfsd',
        item: 1,
        description: 'cosa',
        cantidad: 34,
        price: 444,
        impuesto: 20,
        subtotal: 500,
      },
      */
    ],
    classes: {
      hideView: false,
      hideEdit: false,
      hideDelete: false,
    },
    total: 1000,
  },
};

//* MODAL ACTIVIDAD ESPECIAL ----------------------------------
const formSpecialActivityTable = {
  component: "form",
  name: "modalActividadEspecial",
  viewMode: "both",
  settings: {
    formsContent: formSpecialActivityTableModal,
    buttons: ["guardar"],
    formType: "agregarActividadEspecial",
    tableCode: "dataSpecialActivityTable",
    modalCode: "dataSpecialActivityTable",
    isFromCustomTableActions: true,
    makesNoRequest: true,
    //fetcherMethod: "put",
  },
};
const textsAndButtonsSpecialActivityTable = {
  component: "textsbuttons",
  name: "specialDeleteModal",
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
    modalCode: "dataSpecialActivityTable",
    isFromCustomTableActions: true,
    isDeleting: true,
    makesNoRequest: true,
  },
};
const modalSpecialActivityTable = {
  component: "modal",
  settings: {
    modalCode: "dataSpecialActivityTable",
    items: [
      {
        childBlocks: [{ ...formSpecialActivityTable }, { ...textsAndButtonsSpecialActivityTable }],
      },
    ],
  },
};
//* ------------------------------------------

export const SPECIAL_ACTIVITY_CONFIG = {
  header: {
    title: "Actividad especial",
  },
  blocks: [
    {
      component: "profiles",
      settings: {
        items: [
          {
            childBlocks: [
              { ...dateAndStatus },
              { ...specialActivityTable },
              { ...textsAndButtons },
              { ...modalSpecialActivityTable },
            ],
          },
        ],
      },
    },
  ],
};

export function specialActivityConfigMapper(specialActivity, lapseNumber, pecaId, userId, store) {
  const { approvalHistory, isInApproval, activityDate, itemsActivities } = specialActivity;
  let currentDateFormatted = activityDate ? activityDate.split("T")[0] : null;
  let currentItems = itemsActivities;
  let currentStatus = itemsActivities.length > 0 ? 2 : 1;
  let lastSpecialActivityRequest = null;
  if (isInApproval || (!isInApproval && approvalHistory.length > 0)) {
    lastSpecialActivityRequest = approvalHistory[approvalHistory.length - 1];
    const lastItemActivities = lastSpecialActivityRequest.detail.itemsActivities;
    const lastActivityDate = lastSpecialActivityRequest.detail.activityDate;
    currentItems = lastItemActivities && lastItemActivities.length > 0 ? lastItemActivities : [];
    currentDateFormatted = lastActivityDate ? lastActivityDate.split("T")[0] : null;
    currentStatus = +lastSpecialActivityRequest.status < 4 ? +lastSpecialActivityRequest.status : 1;
  }

  const dateAndStatus = {
    component: "textsbuttons",
    name: "statusYDate",
    settings: {
      dateOrtext: {
        text: "Fecha de la actividad especial:",
        fields: [
          {
            label: "Input date",
            placeholder: "Fecha de la actividad",
            fullwidth: false,
            ...controlProps.dateAndRequired,
            value: currentDateFormatted,
          },
        ],
      },
      status: {
        text: "Estatus",
        subText: currentStatus,
      },
      action: [
        {
          type: 6,
          name: "Agregar Nuevo",
        },
      ],
      modalCode: "dataSpecialActivityTable",
      onDateChange: (value) => {
        console.log("special activity date", value);
        const data = {
          activityDate: value,
        };
        store.dispatch(new SetSpecialActivityRequestData(data));
      },
    },
  };

  const specialActivityTable = {
    component: "table",
    name: "tableActividadEspecial",
    settings: {
      columns: {
        item: {
          title: "Item",
        },
        description: {
          title: "Descripción",
        },
        cantidad: {
          title: "Cantidad",
        },
        price: {
          title: "Precio unitario",
        },
        impuesto: {
          title: "Impuesto",
          valuePrepareFunction: (row: any) => {
            if (row) return row.toString() + "%";
            else return "";
          },
          filterFunction: (cell?: any, search?: string) => {
            let value: string = cell.toString() + "%";
            value = value.toUpperCase();

            if (value.includes(search.toUpperCase()) || search === "") return true;
            else return false;
          },
        },
        subtotal: {
          title: "Subtotal",
        },
      },
      makesNoRequest: true,
      modalCode: "dataSpecialActivityTable",
      buttonCode: "dataSpecialActivityTable",
      tableCode: "dataSpecialActivityTable",
      dataSpecialActivityTable: currentItems.map((item) => {
        const { name, description, quantity, unitPrice, tax, subtotal } = item;
        return {
          item: name,
          name,
          description: description,
          cantidad: quantity,
          price: unitPrice,
          impuesto: tax,
          subtotal,
        };
      }),
      classes: {
        hideView: false,
        hideEdit: false,
        hideDelete: false,
      },
      //total: 1000,
    },
  };

  const sendSpecialActivityRequest = {
    component: "textsbuttons",
    settings: {
      action: [
        {
          type: isInApproval ? 9 : 0,
          name: isInApproval ? "Cancelar Solicitud" : "Enviar Solicitud",
        },
      ],
      receivesFromTableOrForm: "table",
      buttonCode: "dataSpecialActivityTable",
      fetcherMethod: "post",
      fetcherUrls: {
        cancel: `requestscontentapproval/${
          lastSpecialActivityRequest ? lastSpecialActivityRequest.id : ""
        }`,
      },
      onSubmit: isInApproval
        ? () => {}
        : (values) => {
            console.log("specialActivity submit", values);
            store.dispatch(new UpdateSpecialActivity({ lapseNumber, ...values.data }));
          },
    },
  };

  return {
    header: {
      title: "Actividad especial",
    },
    blocks: [
      {
        component: "profiles",
        settings: {
          items: [
            {
              childBlocks: [
                { ...dateAndStatus },
                { ...specialActivityTable },
                { ...sendSpecialActivityRequest },
                { ...modalSpecialActivityTable },
              ],
            },
          ],
        },
      },
    ],
  };
}
