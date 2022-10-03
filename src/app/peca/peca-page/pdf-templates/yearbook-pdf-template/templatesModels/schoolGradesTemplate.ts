import { Template, TemplateOptions } from './Template';

export class SchoolGradeTemplate extends Template {
  students: {
    firstColumn: any[];
    secondColumn: any[];
  };
  isFirstColumnEmpty = false;

  constructor(
    public storeId: string,
    public name: string,
    public img: string,
    public teacher: any,
    students: string[],
    templateOptions?: TemplateOptions,
  ) {
    super('schoolGradeTemplate', templateOptions);
    this.students = this.getStudents(students);

    this.isFirstColumnEmpty = this.students.firstColumn.length > 0;

    this.teacher = {
      ...this.teacher,
      fullName: `${this.teacher.firstName} ${this.teacher.lastName}`,
    };
  }

  // Segment students in 2 parts large with length 29 and small with length 18 or 29 from end large array
  getStudents(students: string[], sectionImg = this.img) {
    const maxColumnSize = 27;
    const maxSmallerColumnSize = 13;
    const restMaxLength =
      students.length > maxColumnSize + maxSmallerColumnSize
        ? maxColumnSize
        : students.length;

    if (sectionImg) {
      if (students.length <= 15) {
        return {
          firstColumn: [],
          secondColumn: students,
        };
      }

      return {
        firstColumn: students.slice(0, maxSmallerColumnSize),
        secondColumn: students.slice(maxSmallerColumnSize, restMaxLength),
      };
    }
    return {
      firstColumn: students.slice(0, maxColumnSize),
      secondColumn: students.slice(maxColumnSize, restMaxLength),
    };
  }
}
