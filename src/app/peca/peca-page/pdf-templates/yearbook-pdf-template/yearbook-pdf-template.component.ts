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
  pager = new Pager();

  pages: TemplatePages = [];

  // Data
  pdfData: PdfYearbookData;
  yearbookConfig = YearbookConfig;

  diagnosticPageDataGroup = null;
  diagnosticGraphicData = null;
  diagnosticGoalTableData = null;
  printOptions = null;

  //
  listItems: RecursiveArrayIndexListItem = [];

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
      this.diagnosticGraphicData = await this.pdfService.getSchoolByCode(
        this.pdfData.schoolCode,
      );
      // this.diagnosticGraphicData = mockDiagnosticChartData;
      this.diagnosticGoalTableData = await this.pdfService.getGoalSettingsTable();
      this.printOptions = await this.pdfService.getPrintOptions(
        this.pdfData.pecaId,
      );

      console.log('YearbookPdfTemplateComponent', this.printOptions);

      // console.log('diagnosticGoalTableData', this.diagnosticGoalTableData);

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
    this.set2Layout2TemplatePages();
    this.setSchoolGradeTemplatePages();
    this.setLapsePages();
    this.setIndexPage();
  }

  setFrontPage() {
    const { schoolName, schoolYear, sponsorName, sponsorLogo } = this.pdfData;

    const frontPage = new FrontPageTemplate(
      { title: sponsorName, brand: sponsorLogo },
      { title: 'AmbLeMario', subTitle: schoolName, subTitleN2: schoolYear },
    );

    frontPage.setPagerInst(this.pager);
    this.pages.push(frontPage);
  }

  set2Layout2TemplatePages() {
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
      'historical-review-section',
      'mi escuela',
      historicalReviewImg,
      historicalReviewText,
    );

    const coordinatorPage = new SecondLayoutTemplate(
      'coordinator-section',
      'coordinador',
      coordinatorImg,
      coordinatorText,
      coordinatorName,
    );
    const godFatherPage = new SecondLayoutTemplate(
      'sponsor-section',
      'padrino',
      sponsorLogo,
      sponsorText,
      sponsorName,
    );
    const schoolPage = new SecondLayoutTemplate(
      'school-description-section',
      schoolName,
      schoolImg,
      schoolText,
      null,
      false,
    );

    let pages = [mySchoolPage, coordinatorPage, godFatherPage, schoolPage];

    pages = pages.filter((pg) => this.willPrintedSection(pg.storeId));

    this.pages.push(...pages);

    const listItems = TemplateUtils.getItemsToIndex(pages, this.pager);

    this.listItems.push(...listItems);
  }

  setSchoolGradeTemplatePages() {
    const { schoolSections } = this.pdfData;

    let pages = [];

    schoolSections.forEach((section) => {
      const {
        sectionGrade,
        sectionLetter,
        sectionName,
        sectionImg,
        sectionStudents,
        teacher,
      } = section;

      const page = new SchoolGradeTemplate(
        `school-section__grade-${sectionGrade}-section-${sectionLetter}`,
        sectionName,
        sectionImg,
        teacher,
        sectionStudents,
      );
      pages.push(page);
    });

    pages = pages.filter((pg) => this.willPrintedSection(pg.storeId));

    this.pages.push(...pages);

    const indexListItems = TemplateUtils.getItemsToIndex(
      pages,
      this.pager,
      () => 'name',
      new IndexListItem('grados y secciones'),
    );

    this.listItems.push(...indexListItems);
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

      const diagPgIndexListItems = TemplateUtils.getItemsToIndex(
        diagnosticsPages,
        this.pager,
        (pageTmp) => (pageTmp.title ? 'title' : 'name'),
        null,
        (pageTmp) => pageTmp.templateName !== 'galleryTemplate',
      );

      const actPgIndexListItems = TemplateUtils.getItemsToIndex(
        activityPages,
        this.pager,
        (pageTmp) => (pageTmp.title ? 'title' : 'name'),
        null,
        (pageTmp) => pageTmp.templateName !== 'galleryTemplate',
      );

      indexListItems.push(
        new IndexListItem(lapse.lapseName),
        [new IndexListItem('Diagnósticos'), [...diagPgIndexListItems]],
        [new IndexListItem('Actividades'), [...actPgIndexListItems]],
      );
    });

    this.pages.push(...pagesToAdd);

    this.listItems.push(...indexListItems);
  }

  setIndexPage() {
    const indexTmpUtils = new IndexTemplateUtils();
    const notNestedItems = indexTmpUtils.getNotNestedItems(this.listItems);

    const maxItemsPerPage = 40;

    const notNestedItemsPaged = indexTmpUtils.getNotNestedItemsPaged(
      maxItemsPerPage,
    );

    const pages = [];

    // pg = pages
    const countPgToAdd = notNestedItemsPaged.length;

    notNestedItemsPaged.forEach((listItems, idx) => {
      listItems = listItems.map((listItem) => {
        listItem.pageNumber += countPgToAdd;
        return listItem;
      });
      pages.push(new IndexTemplate(listItems));
    });

    this.pages.splice(1, 0, ...pages);

    this.addPagesAtBeginPager(countPgToAdd, this.pages);
  }

  private addPagesAtBeginPager(countToAdd: number, pages: TemplatePages) {
    if (countToAdd < 1) return;

    const idxAvoidPgAdded = countToAdd - 1;

    for (let index = idxAvoidPgAdded; index < pages.length; index++) {
      const page = pages[index];

      page.page += countToAdd;
    }
  }

  private willPrintedSection(store: string) {
    const disabledSection = this.printOptions.disablePages.find(
      (disabledSection) => disabledSection === store,
    );

    if (disabledSection) return false;

    return true;
  }
}
