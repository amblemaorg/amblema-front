export function resultStudentTableMapper(resultData) {
    return resultData.map( students => {
        const {
            id,
            name,
            result,
            section,
            grade,
        } = students;
    
        return {
            id,
            name,
            confirmation: status,
            grade,    
        };
    });    
}
