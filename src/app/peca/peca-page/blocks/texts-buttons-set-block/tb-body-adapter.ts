export function textsAndButtonsAdaptBody(buttonCode: string, tAndFData: {table: any[]; form: any;}) {
    let body_adapted = {};

    switch (buttonCode) {        
        case 'schoolDataConfigRegistroEscuela':
            console.log(tAndFData);
            Object.keys(tAndFData.form).map( key => {
                if (tAndFData.form[key] && key != "imageGroup")
                    body_adapted[
                        key == "nameEscuela" ? "name" 
                        : key == "codigoEscuela" ? "code" 
                        : key == "callesEscuela" ? "address"
                        : key == "ciudadEscuela" ? "addressCity"
                        : key == "nameDirector" ? "principalFirstName"
                        : key == "lastnameDirector" ? "principalLastName"
                        : key == "phoneDirector" ? "principalPhone"
                        : key == "emailDirector" ? "principalEmail"
                        : key == "nameSubDirector" ? "subPrincipalFirstName"
                        : key == "lastnameSubDirector" ? "subPrincipalLastName"
                        : key == "phoneSubDirector" ? "subPrincipalPhone"
                        : key == "emailSubDirector" ? "subPrincipalEmail"
                        : key == "number1" ? "nTeachers"
                        : key == "number2" ? "nAdministrativeStaff"
                        : key == "number3" ? "nLaborStaff"
                        : key == "number4" ? "nStudents"
                        : key == "number5" ? "nGrades"
                        : key
                    ] = tAndFData.form[key];
            });
            body_adapted["slider"] = tAndFData.table.map( slide => {
                let slide_ = {};
                let hasAutoId = slide.id.substring(0, 5) === "auto-";
                if (!hasAutoId) slide_['id'] = slide.id;
                slide_['description'] = slide.description;
                slide_['image'] = slide.source;

                return slide_
            });
            break;
    
        default:
            break;
    }
    console.log(body_adapted);
    return body_adapted
}