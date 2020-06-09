import { FormGroup } from '@angular/forms';

export function structureData(formType: string, formsContent, cf: FormGroup) {
    let data = {
      isThereTable: true,
      data: {},
    };

    switch (formType) {
        case 'agregarGradoSeccion': // for Datos de la Escuela view and Grados y Secciones section         
          data.data = {
            grades: cf.get('grades').value,
            secctions: cf.get('section').value,
            name: formsContent['docentes'].options.find(d=>{return d.id===cf.get('docentes').value}).name,
          };              
          break;
        case 'agregarDocente': // for Datos de la Escuela view and Docentes section
          data.data = {
            name: cf.get('name').value,
            lastName: cf.get('lastName').value,
            email: cf.get('email').value,
            status: cf.get('status').value,
            documentGroup: {
              prependSelect: cf.controls['documentGroup'].get('prependSelect').value,
              prependInput: cf.controls['documentGroup'].get('prependInput').value,
            },
            phone: cf.get('phone').value,
            addressState: cf.get('addressState').value,
            addressMunicipality: cf.get('addressMunicipality').value,
            street: cf.get('street').value,
            city: cf.get('city').value,
          };              
          break;
        case 'buscarEstudiante': // for Datos de la Escuela view and Estudiantes section
          data.data = {
            name: cf.get('letterName').value, 
            lastName: cf.get('lastNameLetter').value, 
            doc: cf.controls['documentGroup'].get('prependInput').value, 
            sex: cf.get('sexo').value=="1"? 'Femenino':'Masculino', 
            age: null,
          };              
          break;
        case 'initialWorkshopConfigPreparacionTaller': // for Taller Inicial view and Preparacion del Taller section
          data.isThereTable = false;
          console.log(cf.value);
          break;
        case 'pruebaaaaaaaa': //! borrar
          data.data = {
            item: cf.get('item').value,
            description: cf.get('description').value,
            cantidad: cf.get('cantidad').value,
            price: cf.get('price').value,
            impuesto: cf.get('impuestoValue').value+'%',
            impuestoValue: cf.get('impuestoValue').value,
            subtotal: cf.get('subtotal').value,
          };
          break;
        case 'imageContainerFormType': // for Taller Inicial view and Registro Inicial modal and for Datos de la Escuela view and Slider principal de la escuela modal
          data.data = {            
            image: cf.controls['imageGroup'].get('imageSelected').value? cf.controls['imageGroup'].get('imageSelected').value.name : null,
            description: cf.controls['imageGroup'].get('imageDescription').value,
            state: cf.controls['imageGroup'].get('imageStatus').value,
            status: 'En espera',
            source: cf.controls['imageGroup'].get('imageSrc').value? cf.controls['imageGroup'].get('imageSrc').value : null,
            imageSelected: cf.controls['imageGroup'].get('imageSelected').value? cf.controls['imageGroup'].get('imageSelected').value : null,
          };   
          break;

        default:
          break;
    }

    return data
}