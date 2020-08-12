export function adaptBody(formType: string, body: any) {
  const body_adapted = {};

  switch (formType) {
    case "agregarDocente":
      Object.keys(body).map((key) => {
        if (key != "id" && key != "documentGroup")
          body_adapted[
            key === "city"
              ? "addressCity"
              : key === "name"
                ? "firstName"
                : key === "street"
                  ? "address"
                  : key
          ] = body[key];
        else if (key === "documentGroup") {
          body_adapted["cardType"] = body[key]["prependSelect"];
          body_adapted["cardId"] = body[key]["prependInput"];
        }
      });
      break;

    case "agregarGradoSeccion":
      Object.keys(body).map((key) => {
        if (key != "id")
          body_adapted[
            key === "grades" ? "grade" : key === "docente" ? "teacher" : "name"
          ] = body[key];
      });
      break;

    case "buscarEstudiante":
      Object.keys(body).map((key) => {
        if (
          key != "id" &&
          key != "documentGroup" &&
          key != "grades" &&
          key != "section"
        )
          body_adapted[
            key === "name" ? "firstName" : key === "age" ? "birthdate" : key
          ] = body[key];
        else if (
          key === "documentGroup" &&
          body[key]["prependInput"].length > 0
        ) {
          body_adapted["cardType"] = body[key]["prependSelect"];
          body_adapted["cardId"] = body[key]["prependInput"];
        }
      });
      break;

    case 'tablaLectura':
      Object.keys(body).map((key) => {

        if (
          key != "date" &&
          key != "gender" &&
          key != "grade" &&
          key != "index" &&
          key != "lastName" &&
          key != "name" &&
          key != "section"
        )
          body_adapted[key === "result" ? "wordsPerMin" : key] = body[key];
      });
      break;

    case 'tablaMatematica':
      Object.keys(body).map((key) => {

        if (
          key != "date" &&
          key != "dateLog" &&
          key != "grade" &&
          key != "gender" &&
          key != "lastName" &&
          key != "name" &&
          key != "indexLog" &&
          key != "indexMul" &&
          key != "section"
        )
          body_adapted[key === "resultLog" ? "operationsPerMin" : key === "resultMul" ? "multiplicationsPerMin" : key] = body[key];
      });
      break;

    case 'tablaConfirmacionDocente':
      Object.keys(body).map((key) => {
        if (
          key != "grade" &&
          key != "section"
        )
          body_adapted[key === "confirmation" ? "status" : key] = body[key];
      });
      break;

    case 'agregarActividadEspecial':
      Object.keys(body).map((key) => {
        if (
          key !="id" &&
          key != "subtotal" &&
          key != "description" &&
          key != "item"
        )
          body_adapted[key === "impuesto" ? "tax" : key === "cantidad" ? "quantity" : key === "price" ? "unitPrice" : key] = body[key];
      });
      break;
      
    default:
      Object.keys(body).map((key) => {
        body_adapted[key] = body[key];
      });
      break;
  }

  return body_adapted;
}
