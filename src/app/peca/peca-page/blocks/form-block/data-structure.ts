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
            section: cf.get('section').value,
            docente: formsContent['docente'].options.find(d=>{return d.id===cf.get('docente').value}).id,
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
            /**
             firstName: cf.get('name').value,
        lastName: cf.get('lastName').value,
        cardType: cf.controls['documentGroup'].get('prependSelect').value,
        cardId: cf.controls['documentGroup'].get('prependInput').value,
        email: cf.get('email').value,
        gender: cf.get('gender').value,
        status: cf.get('status').value,
        phone: cf.get('phone').value,
        addressState: cf.get('addressState').value,
        addressMunicipality: cf.get('addressMunicipality').value,
        address: cf.get('street').value,
        addressCity: cf.get('city').value,
             */
          };              
          break;
        case 'buscarEstudiante': // for Datos de la Escuela view and Estudiantes section
          data.data = {
            name: cf.get('name').value, 
            lastName: cf.get('lastName').value, 
            documentGroup: {
              prependSelect: cf.controls['documentGroup'].get('prependSelect').value,
              prependInput: cf.controls['documentGroup'].get('prependInput').value,
            },
            gender: cf.get('gender').value, 
            grades: cf.get('grades').value,
            section: cf.get('section').value,
          };              
          break;
        case 'initialWorkshopConfigPreparacionTaller': // for Taller Inicial view and Preparacion del Taller section
          data.isThereTable = false;
          console.log(cf.value);
          break;
        case 'tablaLectura': // for Diagnostico Inicial view and Lectura tab table
          data.data = {
            name: cf.get('name').value,
            lastName: cf.get('lastName').value,
            gender: cf.get('gender').value,
            grade: cf.get('grade').value,
            section: cf.get('section').value,
            result: cf.get('result').value,
            index: cf.get('index').value,
          };
          break;
        case 'tablaMatematica': // for Diagnostico Inicial view and Matematica tab table
          data.data = {
            name: cf.get('name').value,
            lastName: cf.get('lastName').value,
            gender: cf.get('gender').value,
            grade: cf.get('grade').value,
            section: cf.get('section').value,
            resultMul: cf.get('resultMul').value,
            resultLog: cf.get('resultLog').value,
            indexMul: cf.get('indexMul').value,
            indexLog: cf.get('indexLog').value,
          };
          break;
        case 'tablaConfirmacionDocente': // for Amblemonedas view and Confirmacion Docente tab table
          data.data = {
            grade: cf.get('grade').value,
            section: cf.get('section').value,
            confirmation: cf.get('confirmation').value,
          };
          break;
        case 'imageContainerFormType': // for Taller Inicial view and Registro Inicial modal and for Datos de la Escuela view and Slider principal de la escuela modal
          console.log(formsContent);
          data.data = {            
            image: cf.controls['imageGroup'].get('imageSelected').value
              ? cf.controls['imageGroup'].get('imageSelected').value.name 
              : null,
            description: cf.controls['imageGroup'].get('imageDescription').value,
            state: cf.controls['imageGroup'].get('imageStatus').value,
            status: 'En espera',
            source: cf.controls['imageGroup'].get('imageSrc').value
              ? cf.controls['imageGroup'].get('imageSrc').value 
              : null,
            imageSelected: cf.controls['imageGroup'].get('imageSelected').value
              ? cf.controls['imageGroup'].get('imageSelected').value 
              : null,
            /**
             image: cf.controls['imageGroup'].get('imageSelected').value
          ? cf.controls['imageGroup'].get('imageSelected').value.name
          : null,
        description: cf.controls['imageGroup'].get('imageDescription').value,
        state: cf.controls['imageGroup'].get('imageStatus').value,
        status: 'En espera',
        source: cf.controls['imageGroup'].get('imageSrc').value
          ? cf.controls['imageGroup'].get('imageSrc').value
          : null,
        imageSelected: cf.controls['imageGroup'].get('imageSelected').value
          ? cf.controls['imageGroup'].get('imageSelected').value
          : null,
             */
          };   
          break;
        case 'imageSoloType': // for generic Actividades image container in Anuario's view
          data.data = {
            image: cf.controls['imageGroup'].get('imageSelected').value
              ? cf.controls['imageGroup'].get('imageSelected').value.name 
              : null,            
            source: cf.controls['imageGroup'].get('imageSrc').value
              ? cf.controls['imageGroup'].get('imageSrc').value 
              : null,
            imageSelected: cf.controls['imageGroup'].get('imageSelected').value
              ? cf.controls['imageGroup'].get('imageSelected').value 
              : null,
          };
          break;
        case 'agregarDocentePreinscripcion': // Agregar de la Preparacion anual view
          data.data = {
            name: cf.get('name').value,
            lastName: cf.get('lastName').value,
            phone: cf.get('phone').value,
            email: cf.get('email').value,
          };
          break;
        case 'agregarResultadoEstudiante': // Agregar del Olimpiadas de matematicas
          data.data = {
            name: cf.get('name').value,
            lastName: cf.get('lastName').value,
            grade: cf.get('grade').value,
            section: cf.get('section').value,
            gradeAndSection: {
                grade: cf.get('grade').value,
                section: cf.get('section').value,
            },
            addressState: cf.get('addressState').value,
            result: cf.get('result').value,
          };
          break;
        case 'agregarActividadEspecial': // for Actividad Especial view and table
          data.data = {
            item: cf.get('item').value,
            description: cf.get('description').value,
            cantidad: cf.get('cantidad').value,
            price: cf.get('price').value,
            impuesto: cf.get('impuesto').value,
            subtotal: cf.get('subtotal').value,
          };
          break;
        case 'docenteTestimonioUpdate': // for Testimonio Docente view table
          data.data = {
            cargo: cf.controls['imageGroup'].get('imageCargo').value,
            description: cf.controls['imageGroup'].get('imageDescription').value,
            status: cf.controls['imageGroup'].get('imageStatus').value,
            source: cf.controls['imageGroup'].get('imageSrc').value
              ? cf.controls['imageGroup'].get('imageSrc').value 
              : null,
            imageSelected: cf.controls['imageGroup'].get('imageSelected').value
              ? cf.controls['imageGroup'].get('imageSelected').value 
              : null,
            /**
             source: cf.controls['imageGroup'].get('imageSrc').value
          ? cf.controls['imageGroup'].get('imageSrc').value
          : null,
        imageSelected: cf.controls['imageGroup'].get('imageSelected').value
          ? cf.controls['imageGroup'].get('imageSelected').value
          : null,
             */
          };
          break;
        case 'agregarImagenEscuela': // for Agregar Fotos Escuela view
          data.data = {
            image: cf.controls['imageGroup'].get('imageSelected').value
              ? cf.controls['imageGroup'].get('imageSelected').value.name 
              : null,
            description: cf.controls['imageGroup'].get('imageDescription').value,
            source: cf.controls['imageGroup'].get('imageSrc').value
              ? cf.controls['imageGroup'].get('imageSrc').value 
              : null,
            imageSelected: cf.controls['imageGroup'].get('imageSelected').value
              ? cf.controls['imageGroup'].get('imageSelected').value 
              : null,
            /**
             image: cf.controls['imageGroup'].get('imageSelected').value
          ? cf.controls['imageGroup'].get('imageSelected').value.name
          : null,
        description: cf.controls['imageGroup'].get('imageDescription').value,
        source: cf.controls['imageGroup'].get('imageSrc').value
          ? cf.controls['imageGroup'].get('imageSrc').value
          : null,
        imageSelected: cf.controls['imageGroup'].get('imageSelected').value
          ? cf.controls['imageGroup'].get('imageSelected').value
          : null,
             */
          };
          break;

    default:
      break;
  }

  return data;
}
