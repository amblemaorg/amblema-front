import { Router } from '@angular/router'
import { Component, OnInit, AfterViewInit } from '@angular/core'
import { PdfYearbookService } from './../../../../services/peca/pdf-yearbook.service'
import { PdfYearbookData, SchoolSection } from './pdfYearbookData.interface'

@Component({
  selector: 'app-yearbook-pdf-template',
  templateUrl: './yearbook-pdf-template.component.html',
  styleUrls: ['./yearbook-pdf-template.component.scss'],
})
export class YearbookPdfTemplateComponent implements OnInit, AfterViewInit {
  constructor(private router: Router, private pdfService: PdfYearbookService) {}

  isProd = false
  pdfData: PdfYearbookData
  pages: any = []

  frontpage: FrontPage
  summaryAndCoordinatorPage: SummaryAndCoordinatorPage
  godfatherPage: TemplateThird
  schoolPage: TemplateThird
  schoolSectionsPage: SchoolSectionsPage

  ngOnInit(): void {
    this.pdfData = this.pdfService.pdfData
  }

  ngAfterViewInit() {
    console.log('YearbookPdfTemplateComponent', this.pdfData)

    if (!this.pdfData) {
      this.router.navigate(['/peca/anuario-page'])
    }
    // addEventListener('afterprint', (event) => {
    //   this.router.navigate(['/peca/anuario-page'])
    // })

    if (this.pdfData) {
      this.pageInit()

      // setTimeout(() => {
      //   window.print()
      // }, 1500)
    }
  }

  print() {
    window.print()
  }

  pageInit() {
    this.setFrontPage()
    this.setSummaryAndCoordinatorPage()
    this.setSchoolAndGodfatherPage()
    this.setSchoolSectionsPage()
  }

  setFrontPage() {
    const { schoolName, schoolYear, sponsorName, sponsorLogo } = this.pdfData
    this.frontpage = new FrontPage({
      schoolName,
      schoolYear,
      sponsorName,
      sponsorLogo,
    })
  }

  setSummaryAndCoordinatorPage() {
    const {
      historicalReviewText,
      historicalReviewImg,
      coordinatorName,
      coordinatorImg,
      coordinatorText,
    } = this.pdfData
    this.summaryAndCoordinatorPage = new SummaryAndCoordinatorPage({
      historicalReviewText,
      historicalReviewImg,
      coordinatorName,
      coordinatorImg,
      coordinatorText,
    })
  }

  setSchoolAndGodfatherPage() {
    const {
      sponsorName,
      sponsorLogo,
      sponsorText,
      schoolName,
      schoolText,
      schoolImg,
    } = this.pdfData
    this.godfatherPage = new TemplateThird({
      tagTitle: 'padrino',
      name: sponsorName,
      img: sponsorLogo,
      text: sponsorText,
    })

    this.schoolPage = new TemplateThird({
      tagTitle: 'escuela',
      name: schoolName,
      img: schoolImg,
      text: schoolText,
    })
  }

  setSchoolSectionsPage() {
    const { schoolSections } = this.pdfData

    this.schoolSectionsPage = new SchoolSectionsPage({ schoolSections })

    this.getSchoolSectionSegmented()
  }

  getSchoolSectionSegmented(
    schoolSections = this.schoolSectionsPage.data.schoolSections,
  ) {
    // let strategySchoolSectionsLength = schoolSections.length
    // let schoolSectionsSegmented = []

    if (schoolSections.length <= 1) {
      return schoolSections
    }

    // const isPairLength = schoolSections.length % 2 === 0
    // strategySchoolSectionsLength = isPairLength
    //   ? schoolSections.length / 2
    //   : schoolSections.length
    // console.log('schoolSections.length', schoolSections.length)

    // if (schoolSections.length % 2 === 0) {
    //   strategySchoolSectionsLength /= 2
    // }
    console.log('schoolSections.length', schoolSections.length)

    for (let index = 0; index < schoolSections.length / 3; index++) {
      console.log(index)

      // if (isPairLength) {
      const section = schoolSections[index]
      const nextSection = schoolSections[index + 1]
      console.log('section and nextSection', { section, nextSection })
      // }

      // if (!isPairLength) {
      //   const section = schoolSections[index]
      //   const nextSection = schoolSections[index + 1]
      //   console.log('section', section)
      //   console.log('nextSection', nextSection)
      // }

      // const section = schoolSections[index]
      // if (section.sectionStudents.length > 29) {
      //   schoolSectionsSegmented.push(section)
      //   return
      // }
      // schoolSectionsSegmented.push(section)
    }

    // schoolSections.forEach( section => {
    //   if (section.sectionStudents.length > 29) {

    //   }
    // })
  }

  // Segment students in 2 parts large with length 29 and small with length 18 or 29 from end large array
  getStudentsSegmented(students: any[], sectionImg) {
    const maxLargeSize = 29
    const maxSmallSize = maxLargeSize + (sectionImg ? 18 : 29)

    // 29 items
    if (students.length <= maxLargeSize) {
      return {
        large: students,
        small: [],
      }
    }

    let maxSmallLength = students.length

    if (students.length > maxSmallSize) {
      maxSmallLength = maxSmallSize
    }

    return {
      large: students.slice(0, maxLargeSize),
      small: students.slice(maxLargeSize, maxSmallLength),
    }
  }
}

class SchoolSectionsPage {
  constructor(
    public data: { schoolSections: SchoolSection[] },
    public template = 'layout--4',
    public show = false,
    public priority = 0,
  ) {}
}

class TemplateThird {
  constructor(
    public data: { tagTitle; name; img; text },
    public template = 'layout1',
    public show = false,
    public priority = 0,
  ) {}
}

class SummaryAndCoordinatorPage {
  constructor(
    public data: {
      historicalReviewText
      historicalReviewImg
      coordinatorName
      coordinatorImg
      coordinatorText
    },
    public template = 'layout1',
    public show = false,
    public priority = 0,
  ) {}
}

class FrontPage {
  constructor(
    public data: { schoolName; schoolYear; sponsorName; sponsorLogo },
    public template = 'layout1',
    public show = false,
    public priority = 0,
  ) {}
}
