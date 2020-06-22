import { formLecturaModal, formMatematicaModal } from '../blocks/form-block/all-forms';
/*Boton estadistica Lectura y modal con grafica*/
const botonEstadisticaLectura = {
  component: 'textsbuttons',
  settings: {
    action: [
      {
        type: 5,
        name: 'Ver estadísticas',
      }
    ],
    modalCode:'dataModalEstadisticasLectura'
  }
}

const estadisticaLectura = {
  component: 'graphics',
  settings: {
    id: 'chart',
    items:[],
  }
}

const modalEstadisticasLectura = {
  component: 'modal',
  settings: {
    modalCode: 'dataModalEstadisticasLectura',
    isNotTableEditing: true,
    items: [
      {
        childBlocks:[
          {...estadisticaLectura}
        ]
      }
    ]
  }
}

/*Boton estadistica matematica y modales*/
const botonEstadisticaMatematica = {
  component: 'textsbuttons',
  settings: {
    action: [
      {
        type: 5,
        name: 'Ver estadísticas',
      }
    ],
    modalCode:'dataModalEstadisticasMatematica'
  }
}

const estadisticaMatematica = {
  component: 'graphics',
  settings: {
    items:[],
  }
}

const modalEstadisticasMatematica = {
  component: 'modal',
  settings: {
    modalCode: 'dataModalEstadisticasMatematica',
    isNotTableEditing: true,
    items: [
      {
        childBlocks:[
          {...estadisticaMatematica}
        ]
      }
    ]
  }
}
/*Fin de botones y modales */
const readingDiagnosticTable = {
  component: 'table',
  settings: {
    columns: {
      name: {
        title: "Nombre",
      },
      lastName: {
        title: "Apellido"
      },
      gender: {
        title: 'Género',
        valuePrepareFunction: ( row: any ) => {  
          if (row) return row == "1"? 'Femenino' : 'Masculino';
          else return '';
        },
        filterFunction: (cell?: any, search?: string) => {          
            let value: string = cell == "1"? 'Femenino' : 'Masculino';
            value = value.toUpperCase();
            
            if (value.includes(search.toUpperCase()) || search === '') return true;
            else return false;
        }
      },
      grade: {
        title: 'Grado',
        valuePrepareFunction: ( row: any ) => {          
          if (row) return formLecturaModal.grade.options.find(d=>{return d.id===row}).name;
          else return '';
        },
        filterFunction: (cell?: any, search?: string) => {
            let value: string = formLecturaModal.grade.options.find(d=>{return d.id===cell}).name;
            value = value.toUpperCase();
            
            if (value.includes(search.toUpperCase()) || search === '') return true;
            else return false;
        }
      },
      section: {
        title: 'Sección'
      },
      result: {
        title: 'Resultado de lectura '
      },
      index: {
        title: 'Indice'
      },
    },
    modalCode: 'initialDiagnosticConfigLectura',
    tableCode: 'initialDiagnosticConfigLectura',
    initialDiagnosticConfigLectura: [
      {
        id: '1abcdefghijk',
        name: 'Alfredo',
        lastName: 'Valbuena',
        gender: '2',
        grade: '4',
        section: 'B',
        result: '20 palabras correctas/min',
        index: 1,
      },
      {
        id: '2abcdefghijk',
        name: 'Manuel',
        lastName: 'Perez',
        gender: '2',
        grade: '5',
        section: 'A',
        result: '20 palabras correctas/min',
        index: 2,
      },
    ],
    classes: {
      hideView: false,
      hideEdit: false,
      hideDelete: false,
    },
  }
}
//* MODAL LECTURA ----------------------------------
const formReadingDiagnosticTable = {
  component: 'form',
  viewMode: 'both',
  settings: {
    formsContent: formLecturaModal,
    buttons: ['guardar'],
    formType: 'tablaLectura',
    tableCode: 'initialDiagnosticConfigLectura',
    modalCode: 'initialDiagnosticConfigLectura',
    isFromCustomTableActions: true,
  }
}
const textsAndButtonsReadingDiagnosticTable = {
  component: 'textsbuttons',
  settings: {
    subtitles: [{
      text: '¿Desea eliminar este ítem?',
    }],
    action: [
      {
          type: 1,
          name: 'Si',
      },
      {
          type: 2,
          name: 'No',
      },
    ],
    modalCode: 'initialDiagnosticConfigLectura',
    isFromCustomTableActions: true,
  }
}
const modalReadingDiagnosticTable = {
  component: 'modal',
  settings: {
    modalCode: 'initialDiagnosticConfigLectura',
    items: [
      {        
        childBlocks: [
          { ...formReadingDiagnosticTable },
          { ...textsAndButtonsReadingDiagnosticTable },
        ]
      }
    ]
  }
}
//* ------------------------------------------


const mathDiagnosticTable = {
  component: 'table',
  settings: {
    columns: {
      name: {
        title: "Nombre",
      },
      lastName: {
        title: "Apellido"
      },
      gender: {
        title: 'Género',
        valuePrepareFunction: ( row: any ) => {  
          if (row) return row == "1"? 'Femenino' : 'Masculino';
          else return '';
        },
        filterFunction: (cell?: any, search?: string) => {          
            let value: string = cell == "1"? 'Femenino' : 'Masculino';
            value = value.toUpperCase();
            
            if (value.includes(search.toUpperCase()) || search === '') return true;
            else return false;
        }
      },
      grade: {
        title: 'Grado',
        valuePrepareFunction: ( row: any ) => {          
          if (row) return formMatematicaModal.grade.options.find(d=>{return d.id===row}).name;
          else return '';
        },
        filterFunction: (cell?: any, search?: string) => {
            let value: string = formMatematicaModal.grade.options.find(d=>{return d.id===cell}).name;
            value = value.toUpperCase();
            
            if (value.includes(search.toUpperCase()) || search === '') return true;
            else return false;
        }
      },
      section: {
        title: 'Sección'
      },
      resultMul: {
        title: 'Resultado de multiplicación'
      },
      resultLog: {
        title: 'Resultado de lógica matematica'
      },
      indexMul: {
        title: 'Indice de multiplicación'
      },
      indexLog: {
        title: 'Indice de lógica matematica'
      },
    },
    modalCode: 'initialDiagnosticConfigMatematica',
    tableCode: 'initialDiagnosticConfigMatematica',
    initialDiagnosticConfigMatematica: [
      {
        id: '1abcdefghijk',
        name: 'Alfredo',
        lastName: 'Valbuena',
        gender: '2',
        grade: '5',
        section: 'B',
        resultMul: 40,
        resultLog: 50,
        indexMul: 100,
        indexLog: 29,
      },
      {
        id: '2abcdefghijk',
        name: 'Maria',
        lastName: 'Torres',
        gender: '1',
        grade: '4',
        section: 'A',
        resultMul: 60,
        resultLog: 80,
        indexMul: 100,
        indexLog: 29,
      },
    ],
    classes: {
      hideView: false,
      hideEdit: false,
      hideDelete: false,
    },
  }
}
//* MODAL MATEMATICA ----------------------------------
const formMathDiagnosticTable = {
  component: 'form',
  viewMode: 'both',
  settings: {
    formsContent: formMatematicaModal,
    buttons: ['guardar'],
    formType: 'tablaMatematica',
    tableCode: 'initialDiagnosticConfigMatematica',
    modalCode: 'initialDiagnosticConfigMatematica',
    isFromCustomTableActions: true,
  }
}
const textsAndButtonsMathDiagnosticTable = {
  component: 'textsbuttons',
  settings: {
    subtitles: [{
      text: '¿Desea eliminar este ítem?',
    }],
    action: [
      {
          type: 1,
          name: 'Si',
      },
      {
          type: 2,
          name: 'No',
      },
    ],
    modalCode: 'initialDiagnosticConfigMatematica',
    isFromCustomTableActions: true,
  }
}
const modalMathDiagnosticTable = {
  component: 'modal',
  settings: {
    modalCode: 'initialDiagnosticConfigMatematica',
    items: [
      {        
        childBlocks: [
          { ...formMathDiagnosticTable },
          { ...textsAndButtonsMathDiagnosticTable },
        ]
      }
    ]
  }
}
//* ------------------------------------------

export const INITIAL_DIAGNOSTIC_CONFIG = {
  header: {
    title: "Diagnóstico inicial"
  },
  blocks: [
    {
      component: 'tabs',
      settings: {
        items: [
          {
            title: "Lectura",
            childBlocks: [
              { ...botonEstadisticaLectura },
              { ...readingDiagnosticTable },
              { ...modalReadingDiagnosticTable },
              { ...modalEstadisticasLectura }
            ]
          },
          {
            title: "Matemática",
            childBlocks: [
              { ...botonEstadisticaMatematica },
              { ...mathDiagnosticTable },
              { ...modalMathDiagnosticTable },
              { ...modalEstadisticasMatematica }
            ]
          }
        ],
      },
    },
  ]
}
