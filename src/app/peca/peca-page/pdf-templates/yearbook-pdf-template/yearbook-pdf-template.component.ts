import { Router } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PdfYearbookService } from './../../../../services/peca/pdf-yearbook.service';
import { PdfYearbookData } from './pdfYearbookData.interface';
import { mocksPdfData } from './mockShoolSectionData';
import {
  ActivitiesPage,
  DiagnosticTemplate,
  FrontPage,
  SchoolGradePageGroup,
  SecondLayoutTemplate,
} from './templatesModels';

@Component({
  selector: 'app-yearbook-pdf-template',
  templateUrl: './yearbook-pdf-template.component.html',
  styleUrls: ['./yearbook-pdf-template.component.scss'],
})
export class YearbookPdfTemplateComponent implements OnInit, AfterViewInit {
  constructor(private router: Router, private pdfService: PdfYearbookService) {}

  showLoading = false;
  pdfData: PdfYearbookData;
  pages: any = [];

  frontpage: FrontPage = null;
  schoolGradePageGroup: SchoolGradePageGroup = null;
  activitiesPage: ActivitiesPage = null;

  // layout2
  mySchoolPage: SecondLayoutTemplate = null;
  coordinatorPage: SecondLayoutTemplate = null;
  godFatherPage: SecondLayoutTemplate = null;
  schoolPage: SecondLayoutTemplate = null;

  // diagnosticTemplate
  lapsePageGroup = [];

  ngOnInit(): void {
    // this.pdfData = mocksPdfData;
    this.pdfData = this.pdfService.pdfData;
    console.log(this.pdfService.getGraphics());
  }

  ngAfterViewInit() {
    console.log('YearbookPdfTemplateComponent', this.pdfData);

    if (!this.pdfData) {
      this.router.navigate(['/peca/anuario-page']);
    }

    addEventListener('afterprint', (event) => {
      this.router.navigate(['/peca/anuario-page']);
    });

    if (this.pdfData) {
      this.pageInit();

      // setTimeout(() => {
      //   window.print()
      // }, 2000)
    }
  }

  print() {
    // window.print();
    console.log(this.pdfService.getGraphics().lapse1.diagnosticLogic);
  }

  isArray(arg) {
    return Array.isArray(arg);
  }

  pageInit() {
    this.setFrontPage();
    this.setSecondLayoutTemplateGroup(); // refactored
    this.setSchoolGradePageGroup(); // refactored
    this.setActivitiesPage();
    this.setDiagnosticTemplateGroup();
  }

  setFrontPage() {
    const { schoolName, schoolYear, sponsorName, sponsorLogo } = this.pdfData;
    this.frontpage = new FrontPage({
      schoolName,
      schoolYear,
      sponsorName,
      sponsorLogo,
    });
  }

  setSecondLayoutTemplateGroup() {
    const {
      historicalReviewText,
      historicalReviewImg,
      coordinatorName,
      coordinatorImg,
      coordinatorText,
      schoolName,
      schoolText,
      schoolImg,
      sponsorName,
      sponsorLogo,
      sponsorText,
    } = this.pdfData;

    this.mySchoolPage = new SecondLayoutTemplate('mi escuela', historicalReviewImg, historicalReviewText);
    this.coordinatorPage = new SecondLayoutTemplate('coordinador', coordinatorImg, coordinatorText, coordinatorName);
    this.godFatherPage = new SecondLayoutTemplate('padrino', sponsorLogo, sponsorText, sponsorName);
    this.schoolPage = new SecondLayoutTemplate(schoolName, schoolImg, schoolText, null, false);
  }

  setSchoolGradePageGroup() {
    const { schoolSections } = this.pdfData;

    this.schoolGradePageGroup = new SchoolGradePageGroup({ schoolSections });
  }

  setActivitiesPage() {
    const { lapses } = this.pdfData;

    this.activitiesPage = new ActivitiesPage({ lapses });
  }

  async setDiagnosticTemplateGroup() {
    const graphics = await this.pdfService.getGraphics().lapse1.diagnosticLogic;
    console.log(graphics);

    this.pdfData.lapses.map((lapse) => {
      const { lapseName, diagnosticLogic, diagnosticMath, diagnosticReading } = lapse;

      const pages = [
        new DiagnosticTemplate(diagnosticLogic.diagnosticText, diagnosticLogic.diagnosticAnalysis, graphics, lapseName),
        new DiagnosticTemplate(diagnosticMath.diagnosticText, diagnosticMath.diagnosticAnalysis, graphics),
        new DiagnosticTemplate(diagnosticReading.diagnosticText, diagnosticReading.diagnosticAnalysis, graphics),
      ];

      this.lapsePageGroup.push(...pages);
    });
  }
}
