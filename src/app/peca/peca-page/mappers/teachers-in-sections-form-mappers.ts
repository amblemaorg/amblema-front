export function gradesAndSectionsDataToSectionsFormMapper(schoolData) {
    const teachers = schoolData.teachers.map((teacher) => {
      const {
        id,
        firstName,
        lastName,
      } = teacher;
  
      return {
        id,
        name: `${firstName} ${lastName}`,
        lastName: `${lastName}`
      };
    });

    const sections = schoolData.sections.map((section) => {
        const {
          id,
          teacher,
          name,
          grade,
        } = section;
    
        return {  
            id,
            grades: grade,
            section: name,
            docente: teacher ? teacher.id : "",
            // Respaldo para docentes eliminados de la escuela que siguen enlazados en PECAs anteriores
            docenteName: teacher ? `${teacher.firstName} ${teacher.lastName}` : "",
        };
      });

    return {
        teachers: teachers,
        sections: sections,
    }
}
  