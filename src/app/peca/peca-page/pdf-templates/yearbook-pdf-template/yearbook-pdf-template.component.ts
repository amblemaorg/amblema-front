import { YearbookConfig } from './../../../../classes/yearbook/yearbook-config';
import { Router } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PdfYearbookService } from './../../../../services/peca/pdf-yearbook.service';
import { PdfYearbookData } from './pdfYearbookData.interface';
import { mockDiagnosticChartData, mocksPdfData } from './mockShoolSectionData';
import {
  // FrontPage,
  ActivityTemplate,
  DiagnosticPageDataGroup,
  DiagnosticTemplate,
  FrontPageTemplate,
  GalleryTemplate,
  IndexListItem,
  IndexTemplate,
  IndexTemplateUtils,
  Pager,
  RecursiveArrayIndexListItem,
  SchoolGradeTemplate,
  SecondLayoutTemplate,
  TemplateUtils,
} from './templatesModels';

type TemplatePages = Array<
  | IndexTemplate
  | FrontPageTemplate
  | SecondLayoutTemplate
  | SchoolGradeTemplate
  | DiagnosticTemplate
  | ActivityTemplate
>;

@Component({
  selector: 'app-yearbook-pdf-template',
  templateUrl: './yearbook-pdf-template.component.html',
  styleUrls: ['./yearbook-pdf-template.component.scss'],
})
export class YearbookPdfTemplateComponent implements OnInit, AfterViewInit {
  constructor(private router: Router, private pdfService: PdfYearbookService) {}

  showLoading = true;

  pages: TemplatePages = [];
  pager = new Pager(1);

  // Data
  pdfData: PdfYearbookData;
  yearbookConfig = YearbookConfig;

  diagnosticPageDataGroup = null;
  diagnosticGraphicData = null;
  diagnosticGoalTableData = null;

  //
  listItems: RecursiveArrayIndexListItem = [];

  // indexPage: IndexTemplate = null;
  indexPages: IndexTemplate[] = [];

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
    this.setFrontPage();
    this.setSecondLayoutTemplateGroup();
    this.setSchoolGradePageGroup();
    this.setLapsePages();
    this.setIndexPage();

    console.log('listItems', this.listItems);
  }

  setFrontPage() {
    const { schoolName, schoolYear, sponsorName, sponsorLogo } = this.pdfData;

    const frontPage = new FrontPageTemplate(
      { title: sponsorName, brand: sponsorLogo },
      { title: 'AmbLeMario', subTitle: schoolName, subTitleN2: schoolYear },
    );

    this.pages.push(frontPage);
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

    const mySchoolPage = new SecondLayoutTemplate(
      'mi escuela',
      historicalReviewImg,
      historicalReviewText,
    );

    const coordinatorPage = new SecondLayoutTemplate(
      'coordinador',
      coordinatorImg,
      coordinatorText,
      coordinatorName,
    );
    const godFatherPage = new SecondLayoutTemplate(
      'padrino',
      sponsorLogo,
      sponsorText,
      sponsorName,
    );
    const schoolPage = new SecondLayoutTemplate(
      schoolName,
      schoolImg,
      schoolText,
      null,
      false,
    );

    this.pages.push(mySchoolPage, coordinatorPage, godFatherPage, schoolPage);

    // const pages = [
    //   mySchoolPage,
    //   coordinatorPage,
    //   godFatherPage,
    //   schoolPage,
    // ];

    // const listItems = TemplateUtils.addItemsToIndex(pages, this.pager);

    // this.listItems.push(...listItems);
  }

  setSchoolGradePageGroup() {
    const { schoolSections } = this.pdfData;

    // this.schoolGradePageGroup = new SchoolGradePageGroup(
    //   { schoolSections },
    //   this.pager,
    // );

    //Adding school templates (pages)

    const pages = [];
    schoolSections.forEach((section) => {
      const { sectionName, sectionImg, sectionStudents, teacher } = section;

      const page = new SchoolGradeTemplate(
        sectionName,
        sectionImg,
        teacher,
        sectionStudents,
      );
      pages.push(page);
    });

    // const indexListItems = TemplateUtils.addItemsToIndex(
    //   this.pages,
    //   pagerInst,
    //   () => 'name',
    //   new IndexListItem('grados y secciones'),
    // )

    this.pages.push(...pages);

    // this.listItems.push(...indexListItems);
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
    const indexListItems = [];

    const { lapses } = this.pdfData;

    const diagnosticPageDataGroup = this.getDiagnosticPageDataGroup();

    const activityCharacterLimit = this.yearbookConfig.getFormDescriptionLimit(
      'globalLapsesActivities',
    );
    const diagnosticCharacterLimit = this.yearbookConfig.getFormDescriptionLimit(
      'globalLapsesDiagnostic',
    );

    const pagesToAdd = [];

    lapses.forEach((lapse) => {
      const diagnosticsPages = diagnosticPageDataGroup.getPagesWithDiagnosticTemplate(
        lapse.lapseName,
        diagnosticCharacterLimit,
      );

      const activityPages = [];

      for (let index = 0; index < lapse.activities.length; index++) {
        const activity = lapse.activities[index];

        const { name, description, images } = activity;

        const isExpandedGallery = true;

        if (!(description && name)) {
          continue;
        }

        activityPages.push(
          new ActivityTemplate(
            name,
            description,
            images,
            activityCharacterLimit,
          ),
        );

        if (isExpandedGallery) {
          activityPages.push(new GalleryTemplate(images));
        }
      }

      pagesToAdd.push(...diagnosticsPages, ...activityPages);

      // const diagPgIndexListItems = TemplateUtils.addItemsToIndex(
      //   diagnosticsPages,
      //   this.pager,
      //   (pageTmp) => (pageTmp.title ? 'title' : 'name'),
      //   null,
      //   (pageTmp) => pageTmp.templateName !== 'galleryTemplate',
      // );

      // const actPgIndexListItems = TemplateUtils.addItemsToIndex(
      //   activityPages,
      //   this.pager,
      //   (pageTmp) => (pageTmp.title ? 'title' : 'name'),
      //   null,
      //   (pageTmp) => pageTmp.templateName !== 'galleryTemplate',
      // );

      // indexListItems.push(
      //   new IndexListItem(lapse.lapseName),
      //   [new IndexListItem('Diagnósticos'), [...diagPgIndexListItems]],
      //   [new IndexListItem('Actividades'), [...actPgIndexListItems]],
      // );
    });

    this.pages.push(...pagesToAdd);

    // this.listItems.push(...indexListItems);
  }

  setIndexPage() {
    const indexTmpUtils = new IndexTemplateUtils();
    const notNestedItems = indexTmpUtils.getNotNestedItems(this.listItems);
    console.log('notNestedItems', notNestedItems);

    const maxItemsPerPage = 40;

    const notNestedItemsPaged = indexTmpUtils.getNotNestedItemsPaged(
      maxItemsPerPage,
    );

    notNestedItemsPaged.forEach((listItems) => {
      this.indexPages.push(new IndexTemplate(listItems));
    });
  }
}
