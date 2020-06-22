export function adaptBody(formType: string, body: any) {
    let body_adapted = {};

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
    
        default:
            body_adapted = body;
            break;
    }

    return body_adapted
}