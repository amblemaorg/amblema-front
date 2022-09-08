import { YearbookConfig } from './../../../../classes/yearbook/yearbook-config';
import { Router } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PdfYearbookService } from './../../../../services/peca/pdf-yearbook.service';
import { PdfYearbookData } from './pdfYearbookData.interface';
import { mockDiagnosticChartData, mocksPdfData } from './mockShoolSectionData';
import {
  ActivityTemplate,
  DiagnosticPageDataGroup,
  DiagnosticTemplate,
  FrontPage,
  GalleryTemplate,
  IndexListItem,
  IndexTemplate,
  Pager,
  RecursiveArrayIndexListItem,
  SchoolGradePageGroup,
  SecondLayoutTemplate,
  TemplateUtils,
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
  listItems: RecursiveArrayIndexListItem = [];

  indexPage: IndexTemplate = null;
  frontpage: FrontPage = null;
  schoolGradePageGroup: SchoolGradePageGroup = null;

  // layout2
  mySchoolPage: SecondLayoutTemplate = null;
  coordinatorPage: SecondLayoutTemplate = null;
  godFatherPage: SecondLayoutTemplate = null;
  schoolPage: SecondLayoutTemplate = null;

  // layout4Template
  lapsePages = [];

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
    this.setLapsePages();

    console.log('listItems', this.listItems);
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
    this.godFatherPage = new SecondLayoutTemplate(
      'padrino',
      sponsorLogo,
      sponsorText,
      sponsorName,
    );
    this.schoolPage = new SecondLayoutTemplate(
      schoolName,
      schoolImg,
      schoolText,
      null,
      false,
    );

    const pages = [
      this.mySchoolPage,
      this.coordinatorPage,
      this.godFatherPage,
      this.schoolPage,
    ];

    const listItems = TemplateUtils.addItemsToIndex(pages, this.pager);

    console.log('listItems', listItems);

    this.listItems.push(...listItems);

    console.log(this.godFatherPage.pgHref);
    console.log(this.godFatherPage.page);
  }

  setSchoolGradePageGroup() {
    const { schoolSections } = this.pdfData;

    this.schoolGradePageGroup = new SchoolGradePageGroup(
      { schoolSections },
      this.pager,
    );

    this.listItems.push(...this.schoolGradePageGroup.indexListItems);
  }

  private getDiagnosticPageDataGroup() {
    const graphics = this.pdfService.getGraphics();

    if (!graphics) {
      return;
    }

    const { lapses, schoolYear } = this.pdfData;
    return new DiagnosticPageDataGroup(
      graphics,
      lapses,
      schoolYear,
      this.diagnosticGraphicData,
      this.diagnosticGoalTableData,
    );
  }

  setLapsePages() {
    const pages = [];
    const indexListItems = [];

    const { lapses } = this.pdfData;

    const diagnosticPageDataGroup = this.getDiagnosticPageDataGroup();

    const activityCharacterLimit = this.yearbookConfig.getFormDescriptionLimit(
      'globalLapsesActivities',
    );
    const diagnosticCharacterLimit = this.yearbookConfig.getFormDescriptionLimit(
      'globalLapsesDiagnostic',
    );

    const getLisItems = (pages) => {
      // const listItems = TemplateUtils.addItemsToIndex(pages, this.pager);
      // console.log('setLapsePages', listItems);

      // console.log(
      //   'TemplateUtils',
      //   TemplateUtils.addItemsToIndex(
      //     pages,
      //     this.pager,
      //     (pageTmp) => (pageTmp.title ? pageTmp.title : pageTmp.name),
      //     null,
      //     (pageTmp) => pageTmp.templateName !== 'galleryTemplate',
      //   ),
      // );

      return TemplateUtils.addItemsToIndex(
        pages,
        this.pager,
        (pageTmp) => (pageTmp.title ? 'title' : 'name'),
        null,
        (pageTmp) => pageTmp.templateName !== 'galleryTemplate',
      );

      // return pages.map((pageTmp) => {
      //   const label = pageTmp.title ? pageTmp.title : pageTmp.name;

      //   pageTmp.setPagerInst(this.pager, label);

      //   return new IndexListItem(
      //     label,
      //     pageTmp.pgHref,
      //     pageTmp.page,
      //     pageTmp.templateName !== 'galleryTemplate',
      //   );
      // });
    };

    lapses.forEach((lapse) => {
      const diagnosticsPage = diagnosticPageDataGroup.getPagesWithDiagnosticTemplate(
        lapse.lapseName,
        diagnosticCharacterLimit,
      );

      const activities = [];

      for (let index = 0; index < lapse.activities.length; index++) {
        const activity = lapse.activities[index];

        const { name, description, images } = activity;

        const isExpandedGallery = true;

        if (!(description && name)) {
          continue;
        }

        activities.push(
          new ActivityTemplate(
            name,
            description,
            images,
            activityCharacterLimit,
          ),
        );

        if (isExpandedGallery) {
          activities.push(new GalleryTemplate(images));
        }
      }

      pages.push(...diagnosticsPage, ...activities);

      indexListItems.push(
        new IndexListItem(lapse.lapseName),
        [new IndexListItem('Diagnósticos'), [...getLisItems(diagnosticsPage)]],
        [new IndexListItem('Actividades'), [...getLisItems(activities)]],
      );
    });

    // console.log({ pages });
    this.lapsePages = pages;
    this.listItems.push(...indexListItems);
    console.log('setLapsePages - indexListItems', indexListItems);
  }

  setIndexPage() {
    this.indexPage = new IndexTemplate(this.listItems);
    console.log(this.indexPage);
  }
}
