export function sectionsAndStudentsDataToSectionsFormMapper(sections) {
    const all_students = {};
    const grades = {};
    
    // { id: "0", name: "Preescolar" },
    // { id: "1", name: "1er Grado" },
    // { id: "2", name: "2do Grado" },
    // { id: "3", name: "3er Grado" },
    // { id: "4", name: "4to Grado" },
    // { id: "5", name: "5to Grado" },
    // { id: "6", name: "6to Grado" },

    const sections_ = sections.map((section) => {
      const {
        id,
        name,
        grade,
        students
      } = section;

      grades[grade] = grade === "0" 
        ? { id: grade, name: "Preescolar" } 
        : grade === "1" || grade === "3"
            ? { id: grade, name: `${grade}er Grado` } 
            : grade === "2" 
                ? { id: grade, name: `${grade}do Grado` } 
                : { id: grade, name: `${grade}to Grado` } ;
 
      all_students[id] = students.map((student) => {
          const student_id = student.id;
          const {
            cardType,
            lastName,
            gender,
            cardId,
            firstName,
            birthdate
          } = student;

          return {
            id: student_id,
            name: firstName,
            lastName,
            documentGroup: {
              prependInput: cardId,
              prependSelect: cardType,
            },
            gender,
            age: birthdate,
            grades: grade,
            section: id,
          };
      });
  
      return {
        id,
        name,
        grade
      };
    });

    return {
        sections: sections_,
        allStudents: all_students,
        grades
    }
}
  