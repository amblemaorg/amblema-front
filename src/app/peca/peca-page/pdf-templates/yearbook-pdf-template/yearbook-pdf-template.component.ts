import { Router } from '@angular/router'
import { Component, OnInit, AfterViewInit } from '@angular/core'
import { PdfYearbookService } from './../../../../services/peca/pdf-yearbook.service'
import { PdfYearbookData, SchoolSection } from './pdfYearbookData.interface'
import { mockSchoolSections, mocksPdfData } from './mockShoolSectionData'

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
  schoolSectionsPage: SchoolSectionsPage
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
    this.setSchoolSectionsPage()
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

  setSchoolSectionsPage() {
    const { schoolSections } = this.pdfData

    this.schoolSectionsPage = new SchoolSectionsPage({ schoolSections })
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
    console.log('ActivitiesPage', this.data)
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

class SchoolSectionsPage {
  data: {
    schoolSections: SchoolSection[]
    schoolSectionsSegmented: any[]
    galleryImgs: any[]
  } = { schoolSections: [], schoolSectionsSegmented: [], galleryImgs: [] }

  constructor(
    data: { schoolSections: SchoolSection[] },
    public template = 'largeSchoolSection',
    public show = false,
    public priority = 0,
  ) {
    // console.log('SchoolSectionsPage', data.schoolSections)

    // this.data.schoolSections = mockSchoolSections
    this.data.schoolSections = data.schoolSections
    this.data.schoolSectionsSegmented = this.getSchoolSectionsSegmented()

    this.data.schoolSections.forEach((schoolSection) => {
      if (schoolSection.sectionImg) {
        this.data.galleryImgs.push({
          img: schoolSection.sectionImg,
          title: schoolSection.sectionName,
        })
      }
    })
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

  getSchoolSectionsSegmented(schoolSections = this.data.schoolSections) {
    if (schoolSections.length <= 1) {
      return schoolSections
    }

    let schoolSectionsSegmented = []

    for (let index = 0; index < schoolSections.length; index += 2) {
      const section = schoolSections[index]
      const nextSection = schoolSections[index + 1]
      const maxStudentsNameByColumn = 29

      if (
        section.sectionStudents.length <= maxStudentsNameByColumn &&
        nextSection.sectionStudents.length <= maxStudentsNameByColumn
      ) {
        schoolSectionsSegmented.push([section, nextSection])

        continue
      }

      if (section.sectionStudents.length > maxStudentsNameByColumn) {
        schoolSectionsSegmented.push(section)

        // Do nextSection become to section on next iteration
        if (nextSection.sectionStudents.length < maxStudentsNameByColumn) {
          index -= 1
          continue
        }
      }

      if (nextSection.sectionStudents.length > maxStudentsNameByColumn) {
        schoolSectionsSegmented.push(section) // Single page to section  that is lower than nexSection
        schoolSectionsSegmented.push(nextSection) // Single page to section that is higher than section
      }
    }

    return schoolSectionsSegmented
  }

  getGalleryImgsSegmented(galleryImgs = []) {
    const maxByPage = 9
    let galleryImgsSegmented = []

    if (galleryImgs.length <= maxByPage) {
      return [galleryImgs]
    }

    let currentTotalImgsSegmented = 0
    for (let index = 0; index < galleryImgs.length / maxByPage; index++) {
      const currentStrategyLength =
        index === 0 ? maxByPage : (index + 1) * maxByPage

      if (index === 0) {
        galleryImgsSegmented.push(
          galleryImgs.slice(currentTotalImgsSegmented, currentStrategyLength),
        )
        currentTotalImgsSegmented += galleryImgsSegmented[index].length
        continue
      }

      if (currentStrategyLength < galleryImgs.length) {
        galleryImgsSegmented.push(
          galleryImgs.slice(currentTotalImgsSegmented, currentStrategyLength),
        )
        currentTotalImgsSegmented += galleryImgsSegmented[index].length
        continue
      }
      galleryImgsSegmented.push(
        galleryImgs.slice(currentTotalImgsSegmented, galleryImgs.length),
      )
    }
    return galleryImgsSegmented
  }
}

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
