import { LocalDataSource } from "ng2-smart-table";

export const NG2_SMART_TABLE_DEFAULT_SETTINGS = {
  //columns: {},
  //source: new LocalDataSource(),
  selectMode: "single", //single|multi
  noDataMessage: "No hay registros",
  mode: "external",
  hideSubHeader: true,
  actions: {
    columnTitle: "Acciones",
    add: false,
    edit: false,
    delete: true,
    custom: [
      { name: "VIEW", title: '<i class="icon-eye"></i>' },
      { name: "EDIT", title: '<i class="icon-pencil"></i>' },
      { name: "DELETE", title: '<i class="icon-trash"></i>' },
    ],
  },
  pager: {
    display: true,
    perPage: 5,
  },
  // Fake column cuz a bug
  delete: {
    deleteButtonContent: '<i class="ion-trash-a"></i>',
    confirmDelete: true,
  },
};
