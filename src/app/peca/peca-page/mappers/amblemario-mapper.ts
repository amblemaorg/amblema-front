export function amblemarioMapper(pecaData) {
    console.log("amblemario mapper data",pecaData);
    const grades = {};

    const {
        schoolYearName,
        yearbook: {
            sponsor,
            school,
            coordinator,
            historicalReview,
            lapse1,
            lapse2,
            lapse3
        },
    } = pecaData;

    const schoolData = {
        city: pecaData.school && pecaData.school.addressCity ? pecaData.school.addressCity : null,
    };

    for (const grade of Array(7).keys()) {
        grades[`${grade}`] = grade === 0 
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
                                : `${grade}mo Grado`;
    }

    console.log(grades);
    
    const schoolSections = pecaData.school && pecaData.school.sections && pecaData.school.sections.length > 0 
        ? pecaData.school.sections.map((section) => {
                const {
                    grade,
                    image,
                    name
                } = section;

                const sectionStudents = section.students && section.students.length > 0 
                    ? section.students.map((student) => {
                        const {
                            firstName,
                            lastName
                        } = student;

                        return `${firstName} ${lastName}`
                    }) 
                    : null;

                return {
                    sectionName: `${grades[grade]}, sección: ${name.toUpperCase()}`,
                    sectionImg: image ? image : null,
                    sectionStudents
                }
            }) 
        : null;

    const lapses = [ lapse1, lapse2, lapse3 ].map( (lapse, i) => {
        const {
            // diagnosticAnalysis,
            diagnosticSummary,
            activities
        } = lapse;

        const diagnosticAnalysis = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip exea commodo consequat. Duis autem vel eumiriure dolor in hendrerit in vulputate velit essemolestie consequat, vel illum dolore eufeugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore tefeugait nulla facilisi.
        Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minimveniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip exea commodo consequat.
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip exea commodo consequat. Duis autem vel eumiriure dolor inh. endrerit in vulputate velit essemo. Ut wisi enim ad minimveniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip exea commodo consequat.
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip exea commodo consequat. Duis autem vel eumiriure dolor in hendrerit in vulputate velit essemo`;

        const tables = diagnosticSummary.reduce((tables, data, i) => {
            if (i === 0) {
                tables.table1.push(
                    [ 'Grado', 'Sección', 'Palabras por minutos', 'Indice de las palabras por minutos' ],
                    [ grades[data.grade], data.name.toUpperCase(), `${data.wordsPerMin}`, `${data.wordsPerMinIndex}` ]
                );
                tables.table2.push(
                    [ 'Grado', 'Sección', 'Multiplicaciones por minutos', 'Indice de las multiplicaciones por minutos' ],
                    [ grades[data.grade], data.name.toUpperCase(), `${data.multiplicationsPerMin}`, `${data.multiplicationsPerMinIndex}` ]
                );
                tables.table3.push(
                    [ 'Grado', 'Sección', 'Operaciones por minutos', 'Indice de las operaciones por minutos' ],
                    [ grades[data.grade], data.name.toUpperCase(), `${data.operationsPerMin}`, `${data.operationsPerMinIndex}` ]
                );
            }
            else {
                tables.table1.push( [ grades[data.grade], data.name.toUpperCase(), `${data.wordsPerMin}`, `${data.wordsPerMinIndex}` ] );
                tables.table2.push( [ grades[data.grade], data.name.toUpperCase(), `${data.multiplicationsPerMin}`, `${data.multiplicationsPerMinIndex}` ] );
                tables.table3.push( [ grades[data.grade], data.name.toUpperCase(), `${data.operationsPerMin}`, `${data.operationsPerMinIndex}` ] );
            }
            return tables
        }, { table1: [], table2: [], table3: [] });

        const lapseActivities = activities.map(activity => {
            const {
                name,
                images,
                description
            } = activity;

            return {
                name: name ? name : null,
                description: description ? description : null,
                images: images && images.length > 0 ? images : null
            }
        });

        return {
            lapseName: i === 0 ? "Primer lapso" : i === 1 ? "Segundo lapso" : "Tercer lapso",
            diagnosticReading: diagnosticAnalysis || tables.table1.length > 0 ? {                
                diagnosticText: "Diagnóstico de lectura",
                diagnosticTable: tables.table1.length > 0 ? tables.table1 : null,
                diagnosticTableAnalysis: diagnosticAnalysis ? diagnosticAnalysis : null,
                diagnosticGraphicText: "Gráficos estadísticos del diagnóstico de lectura",
                diagnosticGraphic: null,
                diagnosticGraphicAnalysis: diagnosticAnalysis ? diagnosticAnalysis : null,
            } : null,
            diagnosticMath: diagnosticAnalysis || tables.table2.length > 0 ? {
                diagnosticText: "Diagnóstico de multiplicación",
                diagnosticTable: tables.table2.length > 0 ? tables.table2 : null,
                diagnosticTableAnalysis: diagnosticAnalysis ? diagnosticAnalysis : null,
                diagnosticGraphicText: "Gráficos estadísticos del diagnóstico de multiplicación",
                diagnosticGraphic: null,
                diagnosticGraphicAnalysis: diagnosticAnalysis ? diagnosticAnalysis : null,
            } : null,
            diagnosticLogic: diagnosticAnalysis || tables.table3.length > 0 ? {
                diagnosticText: "Diagnóstico de razonamiento lógico - matemático",
                diagnosticTable: tables.table3.length > 0 ? tables.table3 : null,
                diagnosticTableAnalysis: diagnosticAnalysis ? diagnosticAnalysis : null,
                diagnosticGraphicText: "Gráficos estadísticos del diagnóstico de razonamiento lógico - matemático",
                diagnosticGraphic: null,
                diagnosticGraphicAnalysis: diagnosticAnalysis ? diagnosticAnalysis : null,
            } : null,
            activities: lapseActivities
        }
    });

    return {
        schoolYear: schoolYearName ? schoolYearName.split("lar").pop().trim() : null,
        sponsorName: sponsor && sponsor.name ? sponsor.name : null,
        sponsorLogo: sponsor && sponsor.image ? sponsor.image : null,
        sponsorText: sponsor && sponsor.content ? sponsor.content : null,
        coordinatorName: coordinator && coordinator.name ? coordinator.name : null,
        coordinatorImg: coordinator && coordinator.image ? coordinator.image : null,
        coordinatorText: coordinator && coordinator.content ? coordinator.content : null,
        schoolName: school && school.name ? school.name : null,
        schoolImg: school && school.image ? school.image : null,
        schoolText: school && school.content ? school.content : null,
        schoolCity: schoolData.city,
        historicalReviewName: historicalReview && historicalReview.name ? historicalReview.name : "Reseña Histórica",
        historicalReviewText: historicalReview && historicalReview.content ? historicalReview.content : null,
        historicalReviewImg: historicalReview && historicalReview.image ? historicalReview.image : null,
        schoolSections,
        lapses
    };    
}