export function textsAndButtonsAdaptBody(
  buttonCode: string,
  tAndFData: { table: any[]; form: any }
) {
  let body_adapted = {};

  switch (buttonCode) {
    case "schoolDataConfigRegistroEscuela":
      console.log(tAndFData);
      Object.keys(tAndFData.form).map((key) => {
        if (tAndFData.form[key] && key != "imageGroup")
          body_adapted[
            key == "nameEscuela"
              ? "name"
              : key == "codigoEscuela"
              ? "code"
              : key == "callesEscuela"
              ? "address"
              : key == "ciudadEscuela"
              ? "addressCity"
              : key == "nameDirector"
              ? "principalFirstName"
              : key == "lastnameDirector"
              ? "principalLastName"
              : key == "phoneDirector"
              ? "principalPhone"
              : key == "emailDirector"
              ? "principalEmail"
              : key == "nameSubDirector"
              ? "subPrincipalFirstName"
              : key == "lastnameSubDirector"
              ? "subPrincipalLastName"
              : key == "phoneSubDirector"
              ? "subPrincipalPhone"
              : key == "emailSubDirector"
              ? "subPrincipalEmail"
              : key == "number1"
              ? "nTeachers"
              : key == "number2"
              ? "nAdministrativeStaff"
              : key == "number3"
              ? "nLaborStaff"
              : key == "number4"
              ? "nStudents"
              : key == "number5"
              ? "nGrades"
              : key
          ] = tAndFData.form[key];
      });
      body_adapted["slider"] = tAndFData.table.map((slide) => {
        const slide_ = {};
        const hasAutoId = slide.id.substring(0, 5) === "auto-";
        if (!hasAutoId) slide_["id"] = slide.id;
        slide_["description"] = slide.description;
        slide_["image"] = slide.source;

        return slide_;
      });
      break;
    case "dataTestimonioDocenteTabla":
      const testimonials = tAndFData.table.map((teacher) => {
        const { id, description, cargo, source } = teacher;
        return {
          teacherId: id,
          image: source,
          position: cargo,
          description,
        };
      });
      body_adapted = {
        testimonials,
      };
      break;
    case "dataSpecialActivityTable":
      const itemsActivities = tAndFData.table.map((item) => {
        const { id, item: name, description, price, cantidad, impuesto, subtotal } = item;
        return {
          name,
          description,
          quantity: +cantidad,
          unitPrice: +price,
          tax: +impuesto,
          subtotal,
        };
      });
      body_adapted = {
        itemsActivities,
      };
      break;
    default:
      break;
  }
  console.log(body_adapted);
  return body_adapted;
}
