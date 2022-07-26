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

  pdfData: any = null
  pages?: any = []

  frontpage: FrontPage

  ngOnInit(): void {
    this.pdfData = this.pdfService.pdfData
  }

  ngAfterViewInit() {
    console.log('YearbookPdfTemplateComponent', this.pdfData)

    // if (!this.pdfData) {
    //   this.router.navigate(['/peca/anuario-page'])
    // }

    if (this.pdfData) {
      const { schoolName, schoolYear, sponsorName, sponsorLogo } = this.pdfData

      this.frontpage = new FrontPage({
        schoolName,
        schoolYear,
        sponsorName,
        sponsorLogo,
      })
    }

    addEventListener('afterprint', (event) => {
      // this.router.navigate(['/peca/anuario-page'])
    })
  }

  print() {
    window.print()
  }
}

class FrontPage {
  constructor(public data: any, public show = false, public priority = 0) {}
}
