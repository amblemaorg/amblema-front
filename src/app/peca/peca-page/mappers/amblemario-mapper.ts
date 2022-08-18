export function amblemarioMapper(pecaData) {
  const grades = {}

  const {
    schoolYearName,
    yearbook: {
      sponsor,
      school,
      coordinator,
      historicalReview,
      lapse1,
      lapse2,
      lapse3,
    },
  } = pecaData

  const schoolData = {
    city:
      pecaData.school && pecaData.school.addressCity
        ? pecaData.school.addressCity
        : null,
  }

  for (const grade of Array(7).keys()) {
    grades[`${grade}`] =
      grade === 0
        ? 'Preescolar'
        : grade === 1 || grade === 3
        ? `${grade}er Grado`
        : grade === 2
        ? `${grade}do Grado`
        : grade > 3 && grade < 7
        ? `${grade}to Grado`
        : grade === 8
        ? `${grade}vo Grado`
        : grade === 9
        ? `${grade}no Grado`
        : `${grade}mo Grado`
  }

  const schoolSections =
    pecaData.school &&
    pecaData.school.sections &&
    pecaData.school.sections.length > 0
      ? pecaData.school.sections.map((section) => {
          const { grade, image, name, teacher } = section

          const sectionStudents =
            section.students && section.students.length > 0
              ? section.students.map((student) => {
                  const { firstName, lastName } = student

                  return `${firstName} ${lastName}`
                })
              : null

          return {
            sectionName: `${grades[grade]}, sección: ${name.toUpperCase()}`,
            sectionImg: image ? image : null,
            sectionStudents,
            sectionGrade: grade,
            teacher,
          }
        })
      : null

  let breakForLapses = false
  const lapses = [lapse1, lapse2, lapse3].map((lapse, i) => {
    const {
      readingDiagnosticAnalysis,
      mathDiagnosticAnalysis,
      logicDiagnosticAnalysis,
      diagnosticSummary,
      activities,
    } = lapse

    const tables =
      diagnosticSummary && diagnosticSummary.length > 0
        ? diagnosticSummary.reduce(
            (tables, data, i) => {
              if (i === 0) {
                tables.table1.push([
                  'Grado',
                  'Sección',
                  'Resultado de lectura',
                  'Índice de lectura',
                ])
                tables.table2.push([
                  'Grado',
                  'Sección',
                  'Resultado de multiplicación',
                  'Índice de multiplicación',
                ])
                tables.table3.push([
                  'Grado',
                  'Sección',
                  'Resultado de lógica matemática',
                  'Índice de lógica matemática',
                ])
              }
              if (data.wordsPerMin !== 0)
                tables.table1.push([
                  grades[data.grade],
                  data.name.toUpperCase(),
                  `${data.wordsPerMin}`,
                  `${data.wordsPerMinIndex}`,
                ])
              if (data.multiplicationsPerMin !== 0)
                tables.table2.push([
                  grades[data.grade],
                  data.name.toUpperCase(),
                  `${data.multiplicationsPerMin}`,
                  `${data.multiplicationsPerMinIndex}`,
                ])
              if (data.operationsPerMin !== 0)
                tables.table3.push([
                  grades[data.grade],
                  data.name.toUpperCase(),
                  `${data.operationsPerMin}`,
                  `${data.operationsPerMinIndex}`,
                ])

              return tables
            },
            { table1: [], table2: [], table3: [] },
          )
        : null

    const lapseActivities =
      activities && activities.length > 0
        ? activities.map((activity) => {
            const { name, images, description } = activity

            return {
              name: name ? name : null,
              description: description ? description : null,
              images: images && images.length > 0 ? images : null,
            }
          })
        : null

    const vals4R =
      readingDiagnosticAnalysis || (tables && tables.table1.length > 1)
    const vals4M =
      mathDiagnosticAnalysis || (tables && tables.table2.length > 1)
    const vals4L =
      logicDiagnosticAnalysis || (tables && tables.table3.length > 1)

    if ((vals4R || vals4M || vals4L || lapseActivities) && !breakForLapses)
      breakForLapses = true

    return {
      lapseName:
        i === 0 ? 'Primer lapso' : i === 1 ? 'Segundo lapso' : 'Tercer lapso',
      diagnosticReading: vals4R
        ? {
            diagnosticText: 'Diagnóstico de lectura',
            diagnosticTable: tables.table1.length > 1 ? tables.table1 : null,
            diagnosticAnalysis: readingDiagnosticAnalysis
              ? readingDiagnosticAnalysis
              : null,
            diagnosticGraphicText:
              'Gráfico estadístico del diagnóstico de lectura',
            diagnosticGraphic: null,
          }
        : null,
      diagnosticMath: vals4M
        ? {
            diagnosticText: 'Diagnóstico de multiplicación',
            diagnosticTable: tables.table2.length > 1 ? tables.table2 : null,
            diagnosticAnalysis: mathDiagnosticAnalysis
              ? mathDiagnosticAnalysis
              : null,
            diagnosticGraphicText:
              'Gráfico estadístico del diagnóstico de multiplicación',
            diagnosticGraphic: null,
          }
        : null,
      diagnosticLogic: vals4L
        ? {
            diagnosticText: 'Diagnóstico de razonamiento lógico - matemático',
            diagnosticTable: tables.table3.length > 1 ? tables.table3 : null,
            diagnosticAnalysis: logicDiagnosticAnalysis
              ? logicDiagnosticAnalysis
              : null,
            diagnosticGraphicText:
              'Gráfico estadístico del diagnóstico de razonamiento lógico - matemático',
            diagnosticGraphic: null,
          }
        : null,
      activities: lapseActivities,
    }
  })

  return {
    schoolYear: schoolYearName
      ? schoolYearName.split('lar').pop().trim()
      : null,
    sponsorName: sponsor && sponsor.name ? sponsor.name : null,
    sponsorLogo: sponsor && sponsor.image ? sponsor.image : null,
    sponsorText: sponsor && sponsor.content ? sponsor.content : null,
    coordinatorName: coordinator && coordinator.name ? coordinator.name : null,
    coordinatorImg: coordinator && coordinator.image ? coordinator.image : null,
    coordinatorText:
      coordinator && coordinator.content ? coordinator.content : null,
    schoolName: school && school.name ? school.name : null,
    schoolImg: school && school.image ? school.image : null,
    schoolText: school && school.content ? school.content : null,
    schoolCity: schoolData.city,
    historicalReviewName:
      historicalReview && historicalReview.name
        ? historicalReview.name
        : 'Reseña Histórica',
    historicalReviewText:
      historicalReview && historicalReview.content
        ? historicalReview.content
        : null,
    historicalReviewImg:
      historicalReview && historicalReview.image
        ? historicalReview.image
        : null,
    schoolSections,
    lapses,
    breakForLapses,
  }
}
