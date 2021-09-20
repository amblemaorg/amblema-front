export default {
  columns: {
    description: {
      title: "Descripcion",
    },
  },
  noDataMessage: "No hay registros",
  mode: "external",
  actions: {
    columnTitle: "Acciones",
    add: false,
    edit: false,
    delete: true,
    custom: [{ name: "DELETE", title: '<i class="icon-trash"></i>' }],
  },
  pager: {
    display: true,
    perPage: 5,
  },
  delete: {
    deleteButtonContent: '<i class="ion-trash-a"></i>',
    confirmDelete: true,
  },
};
