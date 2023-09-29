import { parseDate } from "../../functions/parse-date";

export const TABLE_DEFAULT_SETTINGS = {
  selectMode: "multi", //single|multi
  columns: {
    firstName: {
      title: "Nombre",
      width: "20%",
      filterFunction: (cell, search) => {
        let value = (cell && cell.toLowerCase()) || "";

        if (value.includes(search.toLowerCase()) || search === "") return true;
        else return false;
      },
    },
    lastName: {
      title: "Apellido",
      width: "20%",
      filterFunction: (cell, search) => {
        let value = (cell && cell.toLowerCase()) || "";

        if (value.includes(search.toLowerCase()) || search === "") return true;
        else return false;
      },
    },
    cardId: {
      title: "Cédula",
      width: "20%",
    },
    gender: {
      title: "Género",
      width: "20%",
      valuePrepareFunction: (row) => {
        return row && row.length
          ? row === "1"
            ? "Femenino"
            : "Masculino"
          : "Indefinido";
      },
      filterFunction: (cell, search) => {
        let value =
          cell && cell.length
            ? cell === "1"
              ? "femenino"
              : "masculino"
            : "indefinido";

        if (value.includes(search.toLowerCase()) || search === "") return true;
        else return false;
      },
    },
    birthdate: {
      title: "Fecha de Nacimiento",
      width: "20%",
      valuePrepareFunction: (row) => {
        if (row) return parseDate(new Date(row)).replace(/-/g, "/");
        else return "";
      },
      filterFunction: (cell, search) => {
        let value = parseDate(new Date(cell)).replace(/-/g, "/");
        value = value.toUpperCase();

        if (value.includes(search.toUpperCase()) || search === "") return true;
        else return false;
      },
      compareFunction: (direction, a, b) => {
        let first = new Date(a);
        let second = new Date(b);

        if (first < second) {
          return -1 * direction;
        }
        if (first > second) {
          return direction;
        }
        return 0;
      },
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
    perPage: 100,
  },
};
