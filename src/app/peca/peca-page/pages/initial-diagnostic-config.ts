const readingDiagnosticTable = {
  component: 'table',
  settings: {
    columns: {
      grade: {
        title: "Grado",
      },
      section: {
        title: "Sección"
      },
      speedReading: {
        title: 'Velocidad de lectura'
      },
      reading: {
        title: 'Palabras correctas'
      }
    },
    data: [
      {
        grade: '6to Grado',
        section: 'A',
        speedReading: '30 palabras/min',
        reading: '20 palabras correctas/min'
      },
    ]
  }
}

const mathDiagnosticTable = {
  component: 'table',
  settings: {
    columns: {
      grade: {
        title: "Grado",
      },
      section: {
        title: "Sección"
      },
      multiplication: {
        title: 'Multiplicación'
      },
      mathLogic: {
        title: 'Lógica Matemática'
      }
    },
    data: [
      {
        grade: '5to Grado',
        section: 'B',
        multiplication: '30 operaciones/min',
        mathLogic: '30 operaciones/min'
      },
    ]
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
              { ...readingDiagnosticTable }
            ]
          },
          {
            title: "Matemática",
            childBlocks: [
              { ...mathDiagnosticTable }
            ]
          }
        ],
      },
    },
  ]
}
