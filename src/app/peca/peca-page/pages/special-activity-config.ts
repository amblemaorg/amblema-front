import { specialActivityPermissionsI } from "./../blocks/peca-permissology";
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
        childBlocks: [
          formSpecialActivityTable,
          textsAndButtonsSpecialActivityTable,
        ],
      },
    ],
  },
};

export function specialActivityConfigMapper(
  specialActivity,
  lapseNumber,
  pecaId,
  userId,
  permissions: specialActivityPermissionsI,
  store
) {
  const { special_activity_edit, special_activity_delete } = permissions;
  const { approvalHistory, isInApproval, activityDate, itemsActivities } =
    specialActivity;
  let currentDateFormatted = activityDate ? activityDate.split("T")[0] : null;
  let currentItems = itemsActivities;
  let currentStatus = itemsActivities.length > 0 ? 2 : 1;
  let lastSpecialActivityRequest = null;
  if (isInApproval || (!isInApproval && approvalHistory.length > 0)) {
    lastSpecialActivityRequest = approvalHistory[approvalHistory.length - 1];
    const lastItemActivities =
      lastSpecialActivityRequest.detail.itemsActivities;
    const lastActivityDate = lastSpecialActivityRequest.detail.activityDate;
    currentItems =
      lastItemActivities && lastItemActivities.length > 0
        ? lastItemActivities
        : [];
    currentDateFormatted = lastActivityDate
      ? lastActivityDate.split("T")[0]
      : null;
    currentStatus =
      +lastSpecialActivityRequest.status < 4
        ? +lastSpecialActivityRequest.status
        : 1;
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
            specialDateForm: "dateForDateAndStatus",
            dateForDateAndStatusDay: null,
            dateForDateAndStatusMonth: null,
            dateForDateAndStatusYear: null,
            dateForDateAndStatusInactiveInput: null,
            theWholeDate:
              isInApproval || (!isInApproval && approvalHistory.length > 0)
                ? approvalHistory[approvalHistory.length - 1].detail
                    .activityDate
                  ? approvalHistory[approvalHistory.length - 1].detail
                      .activityDate
                  : null
                : activityDate
                ? activityDate
                : null,
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

            if (value.includes(search.toUpperCase()) || search === "")
              return true;
            else return false;
          },
        },
        subtotal: {
          title: "Subtotal",
          valuePrepareFunction: (cell: any, row: any) => {
            const subtotal = calculateSubtotal(row);
            return subtotal.toLocaleString("es-VE");
            //return (+row.price * +row.cantidad) * (1 + (+row.impuesto / 100));
          },
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
        };
      }),
      classes: {
        hideView: false,
        hideEdit: false,
        hideDelete: false,
      },
      total: currentItems.reduce((accumTotal, item) => {
        return +accumTotal + +item.subtotal;
      }, 0),
      updateTotal: (data) => {
        return data.reduce((accumTotal, item) => {
          const currSubtotal = calculateSubtotal(item);
          return accumTotal + +currSubtotal;
        }, 0);
      },
    },
  };

  function calculateSubtotal({ price, cantidad, impuesto }): number {
    const calc = +price * +cantidad * (1 + +impuesto / 100);
    return +calc.toFixed(2);
  }

  const sendSpecialActivityRequest = {
    component: "textsbuttons",
    settings: {
      action: [
        {
          extraData: { isDuplicated: false },
          hidden: isInApproval
            ? !special_activity_delete
            : !special_activity_edit,
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
            let total = 0;
            const itemsActivities = values.data.itemsActivities.map((item) => {
              const subtotal = calculateSubtotal(item);
              total += subtotal;
              return {
                ...item,
                subtotal,
              };
            });
            function calculateSubtotal({ unitPrice, quantity, tax }): number {
              const calc = +unitPrice * +quantity * (1 + +tax / 100);
              return +calc.toFixed(2);
            }
            store.dispatch(
              new UpdateSpecialActivity({ lapseNumber, itemsActivities, total })
            );
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
                dateAndStatus,
                specialActivityTable,
                sendSpecialActivityRequest,
                modalSpecialActivityTable,
              ],
            },
          ],
        },
      },
    ],
  };
}
