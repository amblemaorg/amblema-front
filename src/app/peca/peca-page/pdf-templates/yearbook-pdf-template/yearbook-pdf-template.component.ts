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
      this.setFrontPage()
      this.setSummaryAndCoordinatorPage()
      this.setSchoolAndGodfatherPage()

      // setTimeout(() => {
      //   window.print()
      // }, 1500)
    }
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

  print() {
    window.print()
  }
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
