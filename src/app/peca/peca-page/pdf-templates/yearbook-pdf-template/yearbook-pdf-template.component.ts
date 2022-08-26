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

    const chartDatasetDefault = (chartId: string, legend, labels: string[], data: number[]): Chart => {
      // return {
      //   chartId,
      //   labels,
      //   datasets: [
      //     {
      //       label: legend,
      //       data,
      //       backgroundColor: labels.map((label) => '#81B03E'),
      //       fill: true,
      //     },
      //   ],
      // };
      // return {
      //   chartId,
      //   labels: data.map((la) => la.toString()),
      //   datasets: labels.map((label, idx) => {
      //     return {
      //       label,
      //       data: [0, 0, data[idx]],
      //       backgroundColor: ['#81B03E'],
      //       fill: true,
      //     };
      //   }),
      // };

      return {
        chartId,
        labels: labels,
        datasets: [
          {
            label: '',
            fillColor: '#81B03E',
            strokeColor: '#81B03E',
            backgroundColor: '#81B03E',
            data: data,
          },
        ],
      };
    };

    // const { diagnostics } = await this.pdfService.getSchoolByCode(this.pdfData.schoolCode);
    const diagnostics = mockDiagnosticChartData;
    this.showLoading = false;

    console.log('setDiagnosticTemplateGroup - diagnostics', { diagnostics });

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

      const pages = diagnosticKeys.map((key, idx) => {
        const currentDiag = lapse[key];

        console.log(key, { currentDiag });

        const chart: Chart = chartDatasetDefault(
          `${idx}-${lapseName}-${currentDiag.diagnosticText}-graphic`,
          currentDiag.diagnosticText,
          lapseGraphic[key].labels,
          lapseGraphic[key].values,
        );

        // {
        //   chartId: `${idx}-${lapseName}-${currentDiag.diagnosticText}-graphic`,
        //   labels: lapseGraphic[currentDiag].labels,
        //   datasets: [
        //     {
        //       label: currentDiag.diagnosticText,
        //       data: lapseGraphic[currentDiag].values,
        //       backgroundColor: lapseGraphic[currentDiag].labels.map((label) => '#81B03E'),
        //       fill: true,
        //     },
        //   ],
        // };

        // console.log('chartDatasetDefault');
        // console.log('chartDatasetDefault', chart);

        if (idx > 0) {
          return new DiagnosticTemplate(currentDiag.diagnosticText, currentDiag.diagnosticAnalysis, chart);
        }

        return new DiagnosticTemplate(currentDiag.diagnosticText, currentDiag.diagnosticAnalysis, chart, lapseName);
      });

      this.lapsePageGroup.push(...pages);
    });
  }
}

interface Chart {
  chartId: string;
  labels: string[];
  datasets: any[];
}

interface ChartDataset {
  label: string; // legend name
  data: number[]; // value items
  backgroundColor: string[]; // same count of colors of graphic figure
  fill: boolean; // fill or not graphic figure
}
