import { Router } from '@angular/router'
import { Component, OnInit, AfterViewInit } from '@angular/core'
import { PdfYearbookService } from './../../../../services/peca/pdf-yearbook.service'
import { PdfYearbookData, SchoolSection } from './pdfYearbookData.interface'
import { mockSchoolSections, mocksPdfData } from './mockShoolSectionData'
import { SchoolGradePageGroup } from './templatesModels'

@Component({
  selector: 'app-yearbook-pdf-template',
  templateUrl: './yearbook-pdf-template.component.html',
  styleUrls: ['./yearbook-pdf-template.component.scss'],
})
export class YearbookPdfTemplateComponent implements OnInit, AfterViewInit {
  constructor(private router: Router, private pdfService: PdfYearbookService) {}

  showLoading = false
  pdfData: PdfYearbookData
  pages: any = []

  frontpage: FrontPage
  summaryAndCoordinatorPage: SummaryAndCoordinatorPage
  godfatherPage: TemplateThird
  schoolPage: TemplateThird
  schoolGradePageGroup: SchoolGradePageGroup
  activitiesPage: ActivitiesPage

  ngOnInit(): void {
    this.pdfData = mocksPdfData
    // this.pdfData = this.pdfService.pdfData
  }

  ngAfterViewInit() {
    console.log('YearbookPdfTemplateComponent', this.pdfData)

    if (!this.pdfData) {
      this.router.navigate(['/peca/anuario-page'])
    }

    addEventListener('afterprint', (event) => {
      this.router.navigate(['/peca/anuario-page'])
    })

    if (this.pdfData) {
      this.pageInit()

      // setTimeout(() => {
      //   window.print()
      // }, 2000)
    }
  }

  print() {
    window.print()
  }

  isArray(arg) {
    return Array.isArray(arg)
  }

  pageInit() {
    this.setFrontPage()
    this.setSummaryAndCoordinatorPage()
    this.setSchoolAndGodfatherPage()
    this.setSchoolGradePageGroup() // refactored
    this.setActivitiesPage()
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

  setSchoolGradePageGroup() {
    const { schoolSections } = this.pdfData

    this.schoolGradePageGroup = new SchoolGradePageGroup({ schoolSections })
  }

  setActivitiesPage() {
    const { lapses } = this.pdfData

    this.activitiesPage = new ActivitiesPage({ lapses })
  }
}

class ActivitiesPage {
  constructor(
    public data: any,
    public template = 'layout4Template',
    public show = false,
    public priority = 0,
  ) {
    this.data.lapses = this.getActivities()
    // console.log('ActivitiesPage', this.data)
  }

  getActivities() {
    // console.log('ActivitiesPage 222', this.data.lapses)

    return this.data.lapses.map((lap) => {
      lap.activities = lap.activities.filter(
        (activity) => activity.description && activity.name,
      )
      lap.activities = lap.activities.map((activity) => ({
        ...activity,
        isExpandedGallery: activity.isExpandedGallery
          ? activity.isExpandedGallery
          : false,
      }))

      return lap
    })
  }
}

/**
 * Templates about school
 * 1. layout3Template
 * 2. schoolStudentListTemplate
 */

// SchoolSectionsTemplateGroup manager

class TemplateThird {
  constructor(
    public data: { tagTitle; name; img; text },
    public template = 'layout3Template',
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
    public template = 'layout2Template',
    public show = false,
    public priority = 0,
  ) {}
}

class FrontPage {
  constructor(
    public data: { schoolName; schoolYear; sponsorName; sponsorLogo },
    public template = 'frontpageTemplate',
    public show = false,
    public priority = 0,
  ) {}
}
