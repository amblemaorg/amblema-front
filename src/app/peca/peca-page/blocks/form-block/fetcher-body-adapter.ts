export function adaptBody(formType: string, body: any) {
    const body_adapted = {};

    switch (formType) {        
        case 'agregarDocente':
            Object.keys(body).map( (key) => {
                if (key != 'id' && key != 'documentGroup') 
                    body_adapted[key === 'city' 
                        ? 'addressCity' 
                        : key === 'name' 
                            ? 'firstName' 
                            : key === 'street' 
                                ? 'address' 
                                : key] 
                    = body[key];
                else if (key === 'documentGroup') {
                    body_adapted['cardType'] = body[key]['prependSelect'];
                    body_adapted['cardId'] = body[key]['prependInput'];
                }
            });
            break;

        case 'agregarGradoSeccion':
            Object.keys(body).map( (key) => {
                if (key != 'id') 
                    body_adapted[key === 'grades' 
                        ? 'grade'
                        : key === 'docente' 
                            ? 'teacher' 
                            : 'name'] 
                    = body[key];
            });
            break;

        case 'buscarEstudiante':
            Object.keys(body).map( (key) => {
                if (
                    key != 'id' && 
                    key != 'documentGroup' && 
                    key != 'grades' && 
                    key != 'section'
                ) 
                    body_adapted[key === 'name' 
                        ? 'firstName' 
                        : key === 'age' 
                            ? 'birthdate'
                            : key] 
                    = body[key];
                else if (key === 'documentGroup') {
                    body_adapted['cardType'] = body[key]['prependSelect'];
                    body_adapted['cardId'] = body[key]['prependInput'];
                }
            });
            break;
    /*
          case 'buscarEstudiante':
            Object.keys(body).map( (key) => {
                if (
                    key != 'id' && 
                    key != 'documentGroup' && 
                    key != 'grades' && 
                    key != 'section'
                ) 
                    body_adapted[key === 'name' 
                        ? 'firstName' 
                        : key === 'age' 
                            ? 'birthdate'
                            : key] 
                    = body[key];
                else if (key === 'documentGroup') {
                    body_adapted['cardType'] = body[key]['prependSelect'];
                    body_adapted['cardId'] = body[key]['prependInput'];
                }
            });
            break;
    */
        default:
            Object.keys(body).map( (key) => {
                body_adapted[key] = body[key];
            });
            break;
    }

    return body_adapted
}
