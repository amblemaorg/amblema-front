import { Router } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PdfYearbookService } from './../../../../services/peca/pdf-yearbook.service';
import { PdfYearbookData } from './pdfYearbookData.interface';
import { mockDiagnosticChartData, mocksPdfData } from './mockShoolSectionData';
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

  showLoading = true;
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
    window.print();
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
    const graphics = this.pdfService.getGraphics();

    // console.log('setDiagnosticTemplateGroup - graphics', { graphics });

    if (!graphics) {
      return;
    }

    const { schoolCode, schoolYear } = this.pdfData;
    // const { diagnostics } = await this.pdfService.getSchoolByCode(schoolCode);
    const diagnostics = mockDiagnosticChartData;

    const formatFilterDiagnosticValueByYear = (diagValues: any[]) => {
      diagValues = diagValues.filter((diagValue) => diagValue.label == schoolYear);

      if (!diagValues) {
        return {
          labels: [],
          values: [],
        };
      }

      return {
        labels: diagValues.map((diagValue) => diagValue.serie),
        values: diagValues.map((diagValue) => diagValue.value),
      };
    };

    this.pdfData.lapses.forEach(async (lapse, idx) => {
      const { lapseId, lapseName, diagnosticLogic, diagnosticMath, diagnosticReading } = lapse;

      this.showLoading = false;
      // console.log('setDiagnosticTemplateGroup - diagnostics', { diagnostics });

      const lapseGraphic = graphics[lapseId];

      if (idx === 2) {
        const { operationsPerMinIndex, multiplicationsPerMinIndex, wordsPerMinIndex } = diagnostics;
        lapseGraphic.diagnosticReading = formatFilterDiagnosticValueByYear(wordsPerMinIndex);
        lapseGraphic.diagnosticMath = formatFilterDiagnosticValueByYear(multiplicationsPerMinIndex);
        lapseGraphic.diagnosticLogic = formatFilterDiagnosticValueByYear(operationsPerMinIndex);
      }

      const pages = [
        new DiagnosticTemplate(
          diagnosticReading.diagnosticText,
          diagnosticReading.diagnosticAnalysis,
          lapseGraphic.diagnosticReading,
          `${idx}-${lapseName}-${diagnosticReading.diagnosticText}-graphic`,
          lapseName,
        ),
        new DiagnosticTemplate(
          diagnosticMath.diagnosticText,
          diagnosticMath.diagnosticAnalysis,
          lapseGraphic.diagnosticMath,
          `${idx}-${lapseName}-${diagnosticMath.diagnosticText}-graphic`,
        ),
        new DiagnosticTemplate(
          diagnosticLogic.diagnosticText,
          diagnosticLogic.diagnosticAnalysis,
          lapseGraphic.diagnosticLogic,
          `${idx}-${lapseName}-${diagnosticLogic.diagnosticText}-graphic`,
        ),
      ];

      this.lapsePageGroup.push(...pages);
    });
  }
}
