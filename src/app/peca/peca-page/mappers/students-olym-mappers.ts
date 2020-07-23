export function studentsOlympicMapper(studentData) {
    return studentData.map((students) => {
        const {
            id,
            fisrtName,
            lastName,
            result,
            status,
            section,
            grade, 
        } = students;

        return {
            id,
            name: fisrtName,
            lastName,
            result,
            status,
            gradeAndSection:section,
            
        };
    });
}