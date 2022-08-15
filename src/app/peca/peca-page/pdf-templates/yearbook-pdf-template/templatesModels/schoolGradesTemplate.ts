import { SchoolSection } from '../pdfYearbookData.interface'

// class PageGroup {
//   pages: Page[] = []

//   constructor(public data: any) {

//   }

//   setPages() {
//     const { schoolSections } = this.data

//     //Adding school templates (pages)
//     schoolSections.forEach((data) => {
//       const data = {
//         sectionName:, sectionImg, sectionStudents
//       }
//       const { sectionName, sectionImg, sectionStudents } = data
//       this.pages.push(
//         new Page(data, ''),
//       )
//     })
//   }
// }

// class Page {
//   structure: any = null

//   constructor(public data: any, public templateName: string) {

//   }

//   setStructure() {

//   }
// }

// const site = {
//   schoolGradeGroup: new PageGroup()
// }

//
export class SchoolGradePageGroup {
  // group of templates

  pages: SchoolGradePage[] = []

  constructor(public data: { schoolSections: SchoolSection[] }) {
    this.setTemplates()
    console.log(this.pages)
  }

  // from data add new Templates (pages)
  setTemplates() {
    const { schoolSections } = this.data

    //Adding school templates (pages)
    schoolSections.forEach((section) => {
      const { sectionName, sectionImg, sectionStudents, teacher } = section
      this.pages.push(
        new SchoolGradePage(sectionName, sectionImg, teacher, sectionStudents),
      )
    })
  }
}

class SchoolGradePage {
  students: {
    firstColumn: any[]
    secondColumn: any[]
  }
  isFirstColumnEmpty = false

  constructor(
    public name: string,
    public img: string,
    public teacher: any,
    students: string[],
  ) {
    this.students = this.getStudents(students)
    console.log('SchoolGradePage - students', this.students)

    this.isFirstColumnEmpty = this.students.firstColumn.length > 0

    this.teacher = {
      ...this.teacher,
      fullName: `${this.teacher.firstName} ${this.teacher.lastName}`,
    }
    console.log('this.teacher', this.teacher)
  }

  // Segment students in 2 parts large with length 29 and small with length 18 or 29 from end large array
  getStudents(students: string[], sectionImg = this.img) {
    const maxColumnSize = 27
    const maxSmallerColumnSize = 13
    //47 || < 47
    const restMaxLength =
      students.length > maxColumnSize + maxSmallerColumnSize
        ? maxColumnSize
        : students.length

    console.log('students.length', students.length)

    if (sectionImg) {
      if (students.length <= 15) {
        return {
          firstColumn: [],
          secondColumn: students,
        }
      }

      // if (students.length > 15 && students.length <= 29) {
      //   return {
      //     firstColumn: [],
      //     secondColumn: students,
      //   }
      // }

      return {
        firstColumn: students.slice(0, maxSmallerColumnSize),
        secondColumn: students.slice(maxSmallerColumnSize, restMaxLength),
      }
    }
    return {
      firstColumn: students.slice(0, maxColumnSize),
      secondColumn: students.slice(maxColumnSize, restMaxLength),
    }
  }
}
