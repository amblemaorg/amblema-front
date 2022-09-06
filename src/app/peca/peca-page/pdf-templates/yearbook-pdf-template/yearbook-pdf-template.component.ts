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
  Pager,
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

  // pages: any = [];
  pager = new Pager(1);
  listItems = [];

  indexPage: IndexTemplate = null;
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
    this.setIndexPage();
    this.setFrontPage();
    this.setSecondLayoutTemplateGroup();
    this.setSchoolGradePageGroup();
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

    // Setting Pager
    const pages = [
      this.mySchoolPage,
      this.coordinatorPage,
      this.coordinatorPage,
      this.godFatherPage,
      this.schoolPage,
    ];

    const listItems = [];
    pages.forEach((page) => {
      page.setPagerInst(this.pager);
      console.log(page.title);
      console.log(page.getPage());

      this.listItems.push({
        label: page.title,
        href: page.title,
        pageNumber: page.getPage(),
      });
    });

    // const listItems = [
    //   {
    //     label: 'mi escuela',
    //     href: 'mi escuela',
    //     pageNumber: this.pager.increment(),
    //   },
    //   {
    //     label: 'coordinador',
    //     href: 'coordinador',
    //     pageNumber: this.pager.increment(),
    //   },
    //   {
    //     label: 'padrino',
    //     href: 'padrino',
    //     pageNumber: this.pager.increment(),
    //   },
    //   {
    //     label: schoolName,
    //     href: schoolName,
    //     pageNumber: this.pager.increment(),
    //   },
    // ];

    // this.listItems.push(...listItems);
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
    this.indexPage = new IndexTemplate(this.listItems);
    console.log(this.indexPage);

    // this.indexPage.addListItem(this.listItems);

    // const listItems: any[] = [];

    // for (let index = 0; index < 43; index++) {
    //   listItems.push({
    //     label: 'pagina de prueba ' + index,
    //     href: 'pagina de prueba',
    //     pageNumber: index + '',
    //   });
    // }

    // listItems.push([
    //   {
    //     label: 'pagina de prueba ',
    //     href: 'pagina de prueba',
    //     pageNumber: 1,
    //   },
    //   {
    //     label: 'pagina de prueba ',
    //     href: 'pagina de prueba',
    //     pageNumber: 1,
    //   },
    //   [
    //     {
    //       label: 'pagina de prueba ',
    //       href: 'pagina de prueba',
    //       pageNumber: 1,
    //     },
    //     {
    //       label: 'pagina de prueba ',
    //       href: 'pagina de prueba',
    //       pageNumber: 1,
    //     },
    //   ],
    // ]);
  }
}
