import { FormGroup } from '@angular/forms';

export function structureData(formType: string, formsContent, cf: FormGroup) {
    let data = {
      isThereTable: true,
      data: {},
    };

    switch (formType) {
        case 'agregarGradoSeccion':          
          data.data = {
            grades: cf.get('grades').value,
            secctions: cf.get('section').value,
            name: formsContent['docentes'].options.find(d=>{return d.id===cf.get('docentes').value}).name,
          };              
          break;
        case 'agregarDocente':
          data.data = {
            name: cf.get('nameDocente').value,
            lastName: cf.get('lastNameDocente').value,
            identity: cf.controls['documentGroup'].get('prependInput').value,
            mail: cf.get('email').value,
            status: cf.get('status').value=="1"? 'Activo':'Inactivo',
          };              
          break;
        case 'buscarEstudiante':
          data.data = {
            name: cf.get('letterName').value, 
            lastName: cf.get('lastNameLetter').value, 
            doc: cf.controls['documentGroup'].get('prependInput').value, 
            sex: cf.get('sexo').value=="1"? 'Femenino':'Masculino', 
            age: null,
          };              
          break;
        case 'initialWorkshopConfigPreparacionTaller':
          data.isThereTable = false;
          console.log(cf.value);
          break;
        case 'pruebaaaaaaaa': //! borrar
          data.data = {
            item: cf.get('item').value,
            description: cf.get('description').value,
            cantidad: cf.get('cantidad').value,
            price: cf.get('price').value,
            impuesto: cf.get('impuesto').value,
            subtotal: cf.get('subtotal').value,
          };
          break;   
        
        default:
          break;
    }

    return data
}