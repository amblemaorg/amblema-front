import { YearbookConfig } from './../../../../classes/yearbook/yearbook-config';
import { Router } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PdfYearbookService } from './../../../../services/peca/pdf-yearbook.service';
import { PdfYearbookData } from './pdfYearbookData.interface';
// import { TemplateUtils } from './templatesModels/templateUtils';
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
  addGrayScale = false;
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
      // this.router.navigate(['/peca/anuario-page']);
      this.backPage();
    }

    this.setInitialData();
  }

  async setInitialData() {
    if (this.pdfData) {
      this.diagnosticGraphicData = await this.pdfService.getSchoolByCode(
        this.pdfData.schoolCode,
      );
      
      // this.diagnosticGraphicData = mockDiagnosticChartData;
      this.diagnosticGoalTableData = await this.pdfService.getGoalSettingsTable();
      this.printOptions = await this.pdfService.getPrintOptions(
        this.pdfData.pecaId,
      );

      // console.log('YearbookPdfTemplateComponent', this.printOptions);

      // console.log('this.diagnosticGraphicData', this.diagnosticGraphicData);

      this.pageInit();
      this.showLoading = false;
    }
  }

  backPage() {
    this.router.navigate(['/peca/anuario-page']);
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
    // console.log(this.pages);
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

    const characterLimit = this.yearbookConfig.getFormDescriptionLimit(
      'historical-review-form',
    );

    const mySchoolPage = new SecondLayoutTemplate(
      'historical-review-section',
      characterLimit,
      'Mi escuela',
      historicalReviewImg,
      historicalReviewText,
    );

    const coordinatorPage = new SecondLayoutTemplate(
      'coordinator-section',
      characterLimit,
      'Coordinador',
      coordinatorImg,
      coordinatorText,
      coordinatorName,
    );
    const godFatherPage = new SecondLayoutTemplate(
      'sponsor-section',
      characterLimit,
      'Padrino',
      sponsorLogo,
      sponsorText,
      sponsorName,
    );
    const schoolPage = new SecondLayoutTemplate(
      'school-description-section',
      characterLimit,
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
    const gradeFormat = {
      '1': '1er Grado',
      '2': '2do Grado',
      '3': '3er Grado',
      '4': '4to Grado',
      '5': '5to Grado',
      '6': '6to Grado',
    };

    for (let index = 0; index < schoolSections.length; index++) {
      const section = schoolSections[index];
      console.log("SECCION", schoolSections[index])

      if (!section) continue;

      const {
        sectionGrade,
        sectionLetter,
        sectionName,
        sectionImg,
        sectionStudents,
        teacher,
      } = section;

      if (
        !(
          sectionGrade &&
          sectionLetter &&
          sectionName &&
          // sectionImg &&
          sectionStudents &&
          teacher
        )
      ) {
        continue;
      }
      
      let nameSection = gradeFormat[section.sectionGrade] + "<br/>"+ "Sección "+ section.sectionLetter
      const page = new SchoolGradeTemplate(
        `school-section__grade-${sectionGrade}-section-${sectionLetter}`,
        nameSection,
        sectionImg,
        teacher,
        sectionStudents,
      );

      pages.push(page);
    }

    pages = pages.filter((pg) => this.willPrintedSection(pg.storeId));

    this.pages.push(...pages);

    let indexListItems = [];

    if (pages.length > 0) {
      indexListItems = TemplateUtils.getItemsToIndex(
        pages,
        this.pager,
        () => 'name',
        new IndexListItem('grados y secciones'),
      );
    }

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

  private getActivitiesPages(lapse, activityCharacterLimit, isNotThereDiagPgs) {
    let activityPages = [];

    if (!lapse) return activityPages;
    if (!lapse.activities) return activityPages;

    for (let index = 0; index < lapse.activities.length; index++) {
      const activity = lapse.activities[index];

      let { name, description, images, id } = activity;

      const {
        print: willPrintActivity,
        expandGallery,
      } = this.getLapsePrintOption(
        `${lapse.lapseId}__${name}-${id}-section`,
        lapse.lapseId,
      );

      if (!(description && name && willPrintActivity)) {
        continue;
      }

      if (!images) {
        images = [];
      }

      let activityPage = new ActivityTemplate(
        `${lapse.lapseId}__${name}-${id}-section`,
        name,
        description,
        null,
        images,
        activityCharacterLimit,
      );

      activityPages.push(activityPage);

      if (expandGallery) {
        const offset = 3;

        if (images.length > offset) {
          activityPages.push(
            new GalleryTemplate(images, {
              limit: 12,
              offset,
            }),
          );
        }
      }
    }

    if (activityPages.length > 0 && isNotThereDiagPgs) {
      activityPages[0].subtitle = lapse.lapseName;
    }

    return activityPages;
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
    // console.log({ lapses });

    lapses.forEach((lapse) => {
      let diagnosticsPages = diagnosticPageDataGroup.getPagesWithDiagnosticTemplate(
        lapse.lapseName,
        diagnosticCharacterLimit,
      );

      diagnosticsPages = diagnosticsPages.filter((diagPg) =>
        this.willPrintedSection(diagPg.storeId),
      );

      // console.log({ diagnosticsPages });

      if (diagnosticsPages.length > 0) {
        diagnosticsPages[0].subtitle = lapse.lapseName;
      }

      const activityPages = this.getActivitiesPages(
        lapse,
        activityCharacterLimit,
        diagnosticsPages.length === 0,
      );

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

      let indexListItemsToPush = [];

      if (diagPgIndexListItems.length > 0 || actPgIndexListItems.length > 0) {
        indexListItemsToPush.push(new IndexListItem(lapse.lapseName));
      }

      if (diagPgIndexListItems.length > 0) {
        indexListItemsToPush.push([
          new IndexListItem('Diagnósticos'),
          [...diagPgIndexListItems],
        ]);
      }

      if (actPgIndexListItems.length > 0) {
        indexListItemsToPush.push([
          new IndexListItem('Actividades'),
          [...actPgIndexListItems],
        ]);
      }

      indexListItems.push(indexListItemsToPush);
    });

    // console.log({ pagesToAdd });

    this.pages.push(...pagesToAdd);

    this.listItems.push(...indexListItems);
  }

  setIndexPage() {
    if (!this.getIndexPrintOption()) return;

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

  private getLapsePrintOption(store: string, lapseKey) {
    const activityPrint = this.printOptions.activitiesPrint[lapseKey].find(
      (activityPrint) => activityPrint.name === store,
    );

    if (!activityPrint) {
      return {
        expandGallery: true,
        print: true,
      };
    }

    return {
      expandGallery: activityPrint.expandGallery,
      print: activityPrint.print,
    };
  }

  private getIndexPrintOption() {
    return this.printOptions.index;
  }
}
