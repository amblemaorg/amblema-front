const botonEstadistica = {
  component: 'textsbuttons',
  settings: {
    action: {
      type: 1,
      name: 'Ver estadísticas',
    },
  }
}

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
      sex: {
        title: 'Género'
      },
      grade: {
        title: 'Grado'
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
    data: [
      {
        name: 'Alfredo',
        lastName: 'Valbuena',
        sex: 'masculino',
        grade: '4to grado',
        section: 'B',
        result: '20 palabras correctas/min',
        index: '1',
      },
      {
        name: 'Manuel',
        lastName: 'Perez',
        sex: 'Masculino',
        grade: '5to grado',
        section: 'A',
        result: '20 palabras correctas/min',
        index: '2',
      },
    ],
    classes: {
      hideView: false,
      hideEdit: false,
      hideDelete: false,
    },
  }
}

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
      sex: {
        title: 'Género'
      },
      grade: {
        title: 'Grado'
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
    data: [
      {
        name: 'Alfredo',
        lastName: 'Valbuena',
        sex: 'masculino',
        grade: '5to grado',
        section: 'B',
        resultMul: '40',
        resultLog: '50',
        indexMul: '100',
        indexLog: '29',
      },
      {
        name: 'Maria',
        lastName: 'Torres',
        sex: 'femenino',
        grade: '4to grado',
        section: 'A',
        resultMul: '60',
        resultLog: '80',
        indexMul: '100',
        indexLog: '29',
      },
    ],
    classes: {
      hideView: false,
      hideEdit: false,
      hideDelete: false,
    },
  }
}

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
              { ...botonEstadistica},
              { ...readingDiagnosticTable }
            ]
          },
          {
            title: "Matemática",
            childBlocks: [
              { ...botonEstadistica},
              { ...mathDiagnosticTable }
            ]
          }
        ],
      },
    },
  ]
}
