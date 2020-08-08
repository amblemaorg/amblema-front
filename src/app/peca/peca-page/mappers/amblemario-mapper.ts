export function amblemarioMapper(pecaData) {
    // console.log("amblemario mapper data",pecaData);
    const {
        schoolYearName,
        yearbook: {
            sponsor,
            school,
        },
    } = pecaData;

    const schoolData = {
        city: pecaData.school && pecaData.school.addressCity ? pecaData.school.addressCity : null,
    };

    return {
        schoolYear: schoolYearName ? schoolYearName.split("lar").pop().trim() : null,
        sponsorName: sponsor.name ? sponsor.name : null,
        sponsorLogo: sponsor.image ? sponsor.image : null,
        schoolName: school.name ? school.name : null,
        schoolCity: schoolData.city,
    };    
}