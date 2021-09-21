export default {
  selectMode: "multi", //single|multi
  columns: {
    name: {
      title: "Nombre",
      width: "20%",
    },
    lastName: {
      title: "Apellido",
      width: "20%",
    },
    idCard: {
      title: "Cédula",
      width: "20%",
    },
    gender: {
      title: "Género",
      width: "20%",
    },
    birthDate: {
      title: "Fecha de Nacimiento",
      width: "20%",
    },
  },
  noDataMessage: "No hay datos para mostrar",
  mode: "external",
  hideSubHeader: true,
  actions: {
    columnTitle: "Acciones",
    add: false,
    edit: false,
    delete: false,
  },
  pager: {
    display: true,
    perPage: 10,
  },
};
