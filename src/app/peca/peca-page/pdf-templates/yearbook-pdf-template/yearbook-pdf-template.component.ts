import { Router } from '@angular/router'
import { Component, OnInit, AfterViewInit } from '@angular/core'
import { PdfYearbookService } from './../../../../services/peca/pdf-yearbook.service'

@Component({
  selector: 'app-yearbook-pdf-template',
  templateUrl: './yearbook-pdf-template.component.html',
  styleUrls: ['./yearbook-pdf-template.component.scss'],
})
export class YearbookPdfTemplateComponent implements OnInit, AfterViewInit {
  constructor(private router: Router, private pdfService: PdfYearbookService) {}

  isProd = false
  pdfData: any = false
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
    public data: any,
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
