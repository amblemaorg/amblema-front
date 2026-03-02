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
    public isGroupPhoto: boolean = false,
    public gradeText: string = '',
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

  getStudents(students: string[], sectionImg = this.img, isGroupPhoto = this.isGroupPhoto) {
    if (isGroupPhoto) {
      const half = Math.ceil(students.length / 2);
      return {
        firstColumn: students.slice(0, half),
        secondColumn: students.slice(half)
      }
    }

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

export class SmallSchoolSectionsTemplate extends Template {
  constructor(
    public storeId: string,
    public data: any[],
    templateOptions?: TemplateOptions,
  ) {
    super('smallSchoolSections', templateOptions);

    this.data = this.data.map(sectionData => ({
      ...sectionData,
      teacher: {
        ...sectionData.teacher,
        fullName: `${sectionData.teacher.firstName} ${sectionData.teacher.lastName}`
      }
    }));
  }
}
