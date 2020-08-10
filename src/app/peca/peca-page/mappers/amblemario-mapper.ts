export function amblemarioMapper(pecaData) {
    console.log("amblemario mapper data",pecaData);
    const {
        schoolYearName,
        yearbook: {
            sponsor,
            school,
            coordinator,
            historicalReview,
        },
    } = pecaData;

    const schoolData = {
        city: pecaData.school && pecaData.school.addressCity ? pecaData.school.addressCity : null,
    };

    const schoolSections = pecaData.school && pecaData.school.sections && pecaData.school.sections.length > 0 
        ? pecaData.school.sections.map((section) => {
                const {
                    grade,
                    image,
                    name
                } = section;

                const sectionName = grade === "0" 
                    ? `Preescolar, sección: ${name.toUpperCase()}` 
                    : grade === "1" || grade === "3"
                        ? `${grade}er Grado, sección: ${name.toUpperCase()}`
                        : grade === "2" 
                            ? `${grade}do Grado, sección: ${name.toUpperCase()}` 
                            : `${grade}to Grado, sección: ${name.toUpperCase()}`;

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
                    sectionName,
                    sectionImg: image ? image : null,
                    sectionStudents
                }
            }) 
        : null;

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
    };    
}