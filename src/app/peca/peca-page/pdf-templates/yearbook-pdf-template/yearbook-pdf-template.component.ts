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
  diagnosticGraphicData: any;
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

  ngOnInit() {
    this.pdfData = this.pdfService.pdfData;
    // this.pdfData = mocksPdfData;
  }

  async ngAfterViewInit() {
    // console.log('YearbookPdfTemplateComponent', this.pdfData);

    if (!this.pdfData) {
      this.router.navigate(['/peca/anuario-page']);
    }

    addEventListener('afterprint', (event) => {
      this.router.navigate(['/peca/anuario-page']);
    });

    if (this.pdfData) {
      this.diagnosticGraphicData = await this.pdfService.getSchoolByCode(this.pdfData.schoolCode);

      // this.diagnosticGraphicData = {
      //   diagnostics: mockDiagnosticChartData,
      // };

      this.pageInit();
      this.showLoading = false;

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

    this.mySchoolPage = new SecondLayoutTemplate(
      'mi escuela',
      historicalReviewImg,
      historicalReviewText,
    );
    this.coordinatorPage = new SecondLayoutTemplate(
      'coordinador',
      coordinatorImg,
      coordinatorText,
      coordinatorName,
    );
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

    if (!graphics) {
      return;
    }

    const formatFilterDiagnosticValueByYear = (diagValues: any[]) => {
      diagValues = diagValues.filter((diagValue) => diagValue.label == this.pdfData.schoolYear);

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

    const chartDefault = (
      chartId: string,
      labels: string[],
      data: number[],
      legend = '',
      withBgColorArray = false,
    ) => {
      const chart: any = {
        chartId,
        title: legend,
        labels: labels,
        datasets: [
          {
            backgroundColor: '#81B03E',
            data: data,
          },
        ],
      };

      if (withBgColorArray) {
        chart.datasets[0].backgroundColor = ['#4472c4', '#ed7d31', '#a5a5a5'];
      }

      return chart;
    };

    const { diagnostics } = this.diagnosticGraphicData;

    this.pdfData.lapses.forEach(async (lapse, idx) => {
      const { lapseId, lapseName } = lapse;
      const lapseGraphic = graphics[lapseId];

      if (idx === 2) {
        const { operationsPerMinIndex, multiplicationsPerMinIndex, wordsPerMinIndex } = diagnostics;
        lapseGraphic.diagnosticReading = formatFilterDiagnosticValueByYear(wordsPerMinIndex);
        lapseGraphic.diagnosticMath = formatFilterDiagnosticValueByYear(multiplicationsPerMinIndex);
        lapseGraphic.diagnosticLogic = formatFilterDiagnosticValueByYear(operationsPerMinIndex);
      }

      const diagnosticKeys = ['diagnosticReading', 'diagnosticMath', 'diagnosticLogic'];

      const pages = diagnosticKeys.map((key, diagIdx) => {
        const currentDiag = lapse[key];

        let chart = chartDefault(
          `${diagIdx}-${lapseName}-${currentDiag.diagnosticText}-graphic`,
          lapseGraphic[key].labels,
          lapseGraphic[key].values,
          // currentDiag.diagnosticText,
        );

        if (idx === 2) {
          let chartTitles = [
            'Indice promedio de lectura general',
            'Indice promedio de multiplicación general',
            'Indice promedio de lógica matemática general',
          ];

          const labels = ['D. Inicial (PPM)', 'D. Revisión (PPM)', 'D. Final (PPM)'];

          chart = chartDefault(
            `${diagIdx}-${lapseName}-${currentDiag.diagnosticText}-graphic`,
            labels,
            lapseGraphic[key].values,
            chartTitles[diagIdx],
            true,
          );
        }

        if (diagIdx > 0) {
          return new DiagnosticTemplate(
            currentDiag.diagnosticText,
            currentDiag.diagnosticAnalysis,
            chart,
          );
        }

        return new DiagnosticTemplate(
          currentDiag.diagnosticText,
          currentDiag.diagnosticAnalysis,
          chart,
          lapseName,
        );
      });

      this.lapsePageGroup.push(...pages);
    });
  }
}
