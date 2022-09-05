import { YearbookConfig } from './../../../../classes/yearbook/yearbook-config';
import { Router } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PdfYearbookService } from './../../../../services/peca/pdf-yearbook.service';
import { PdfYearbookData } from './pdfYearbookData.interface';
import { mockDiagnosticChartData, mocksPdfData } from './mockShoolSectionData';
import {
  ActivitiesPage,
  DiagnosticPageDataGroup,
  FrontPage,
  IndexTemplate,
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
  yearbookConfig = YearbookConfig;

  diagnosticPageDataGroup = null;
  diagnosticGraphicData = null;
  diagnosticGoalTableData = null;

  pages: any = [];

  IndexPage: IndexTemplate = null;
  frontpage: FrontPage = null;
  schoolGradePageGroup: SchoolGradePageGroup = null;
  activitiesPage: ActivitiesPage = null;

  // layout2
  mySchoolPage: SecondLayoutTemplate = null;
  coordinatorPage: SecondLayoutTemplate = null;
  godFatherPage: SecondLayoutTemplate = null;
  schoolPage: SecondLayoutTemplate = null;

  // diagnosticTemplate
  lapsesDiagnosticTmpGroup = [];

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
      // this.diagnosticGraphicData = await this.pdfService.getSchoolByCode(this.pdfData.schoolCode);
      this.diagnosticGraphicData = mockDiagnosticChartData;
      this.diagnosticGoalTableData = await this.pdfService.getGoalSettingsTable();

      console.log('diagnosticGoalTableData', this.diagnosticGoalTableData);

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
    this.setSecondLayoutTemplateGroup();
    this.setSchoolGradePageGroup();
    this.setActivitiesPage();
    this.setDiagnosticTemplateGroup();
    this.setIndexPage();
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

    const { lapses, schoolYear } = this.pdfData;
    this.diagnosticPageDataGroup = new DiagnosticPageDataGroup(
      graphics,
      lapses,
      schoolYear,
      this.diagnosticGraphicData,
      this.diagnosticGoalTableData,
    );

    lapses.forEach((lapse) => {
      this.lapsesDiagnosticTmpGroup.push(
        this.diagnosticPageDataGroup.getPagesWithDiagnosticTemplate(lapse.lapseName),
      );
    });

    console.log('this.lapsesDiagnosticTmpGroup', this.lapsesDiagnosticTmpGroup);
  }

  setIndexPage() {
    const listItems = [
      {
        label: 'pagina de prueba 1',
        href: 'pagina de prueba',
        pageNumber: '1',
      },
      {
        label: 'pagina de prueba 2',
        href: 'pagina de prueba',
        pageNumber: '2',
      },
      {
        label: 'pagina de prueba 3',
        href: 'pagina de prueba',
        pageNumber: '4',
      },
      {
        label: 'pagina de prueba 5',
        href: 'pagina de prueba',
        pageNumber: '5',
      },
      {
        label: 'pagina de prueba 6',
        href: 'pagina de prueba',
        pageNumber: '6',
      },
      {
        label: 'pagina de prueba 7',
        href: 'pagina de prueba',
        pageNumber: '7',
      },
      {
        label: 'pagina de prueba 8',
        href: 'pagina de prueba',
        pageNumber: '8',
      },
      {
        label: 'pagina de prueba 9',
        href: 'pagina de prueba',
        pageNumber: '9',
      },
      [
        {
          label: 'pagina de prueba 9-1',
          href: 'pagina de prueba',
          pageNumber: '10',
        },
        [
          {
            label: 'pagina de prueba 3-1',
            href: 'pagina de prueba',
            pageNumber: '11',
          },
        ],
      ],
    ];

    this.IndexPage = new IndexTemplate(listItems);
  }
}
