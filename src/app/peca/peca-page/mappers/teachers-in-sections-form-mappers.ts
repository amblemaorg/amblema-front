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
            docente: teacher.id,
        };
      });

    return {
        teachers: teachers,
        sections: sections,
    }
}
  