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

    return {
        schoolYear: schoolYearName ? schoolYearName.split("lar").pop().trim() : null,
        sponsorName: sponsor && sponsor.name ? sponsor.name : null,
        sponsorLogo: sponsor && sponsor.image ? sponsor.image : null,
        sponsorText: sponsor && sponsor.content ? sponsor.content : null,
        coordinatorName: coordinator && coordinator.name ? coordinator.name : null,
        coordinatorImg: coordinator && coordinator.image ? coordinator.image : null,
        coordinatorText: coordinator && coordinator.content ? coordinator.content : null,
        schoolName: school && school.name ? school.name : null,
        schoolCity: schoolData.city,
        historicalReviewName: historicalReview && historicalReview.name ? historicalReview.name : "Reseña Histórica",
        historicalReviewText: historicalReview && historicalReview.content ? historicalReview.content : null,
        historicalReviewImg: historicalReview && historicalReview.image ? historicalReview.image : null,
    };    
}