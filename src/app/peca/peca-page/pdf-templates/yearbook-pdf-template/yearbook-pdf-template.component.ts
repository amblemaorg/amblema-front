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
  SmallSchoolSectionsTemplate,
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
  constructor(private router: Router, private pdfService: PdfYearbookService) { }

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
    this.setGroupPhotoPage();
    this.setSchoolGradeTemplatePages();
    this.setLapsePages();
    this.setIndexPage();
    // console.log(this.pages);
  }

  setGroupPhotoPage() {
    if (this.pdfData.groupPhoto) {
      const groupPhoto = this.pdfData.groupPhoto;
      const { schoolSections } = this.pdfData;

      let groupTitle = 'Foto Grupal';
      let gradeText = '';

      if (schoolSections && schoolSections.length > 0) {
        // Enforce all sections in the school to be used for the group photo PDF
        const groupedSections = [...schoolSections];

        if (groupedSections.length > 0) {
          const uniqueGrades = [...new Set(groupedSections.map(s => s.sectionGrade))].sort((a, b) => parseInt(a, 10) - parseInt(b, 10));

          const shortGradeFormat = {
            '0': 'Preescolar',
            '1': '1er',
            '2': '2do',
            '3': '3er',
            '4': '4to',
            '5': '5to',
            '6': '6to',
          };

          if (uniqueGrades.length === 1) {
            const grade = uniqueGrades[0];
            let uniqueLetters = [...new Set(groupedSections.map(s => s.sectionLetter).filter(l => l))].sort((a, b) => a.localeCompare(b));

            let sectionsStr = '';
            if (uniqueLetters.length > 1) {
              sectionsStr = uniqueLetters.slice(0, -1).join(', ') + ' y ' + uniqueLetters[uniqueLetters.length - 1];
            } else if (uniqueLetters.length === 1) {
              sectionsStr = uniqueLetters[0];
            }

            gradeText = 'Grado:';
            groupTitle = `<span>${sectionsStr ? `${shortGradeFormat[grade]} ${sectionsStr}` : shortGradeFormat[grade]}</span>`;
          } else if (uniqueGrades.length > 1) {
            const lowerGrade = uniqueGrades[0];
            const upperGrade = uniqueGrades[uniqueGrades.length - 1];
            gradeText = 'Grados:';
            groupTitle = `<span>${shortGradeFormat[lowerGrade]} - ${shortGradeFormat[upperGrade]}</span>`;
          }
        }
      }

      // Helper to sort sections by grade
      const sortSections = (sections) => {
        return sections.sort((a, b) => {
          if (a.sectionGrade < b.sectionGrade) return -1;
          if (a.sectionGrade > b.sectionGrade) return 1;
          return 0;
        });
      };

      const titleCaseWord = (word: string) => {
        if (!word) return word;
        return word[0].toUpperCase() + word.substr(1).toLowerCase();
      };

      const titleCaseName = (name: string) => {
        return name.split(' ').map(titleCaseWord).join(' ');
      };

      // Find teachers
      const teachers = [];
      if (schoolSections) {
        const sortedGroupedSections = sortSections([...schoolSections]);

        sortedGroupedSections.forEach((section) => {
          if (section.teacher) {
            teachers.push(
              titleCaseName(TemplateUtils.getShortTeacherName(section.teacher.firstName, section.teacher.lastName))
            );
          }
        });
      }
      const uniqueTeachers = [...new Set(teachers)];
      const teacherObj = {
        firstName: '',
        lastName: '',
        fullName: uniqueTeachers.join('<br>'),
      };

      // Find students
      const students = [];
      if (schoolSections) {
        const sortedGroupedSections = sortSections([...schoolSections]);

        sortedGroupedSections.forEach((section) => {
          if (
            section.sectionStudents
          ) {
            students.push(...section.sectionStudents);
          }
        });
      }

      const page = new SchoolGradeTemplate(
        `group-photo-section`,
        groupTitle,
        groupPhoto.image,
        teacherObj,
        students,
        true, // isGroupPhoto
        gradeText
      );

      if (this.willPrintedSection(page.storeId)) {
        this.pages.push(page);

        page['indexName'] = 'Foto grupal';
        const listItems = TemplateUtils.getItemsToIndex([page], this.pager, () => 'indexName');
        this.listItems.push(...listItems);
      }
    }
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
    let pages = [];
    const { pdfData } = this;
    const { schoolSections, groupPhoto } = pdfData;

    if (!schoolSections) return;

    // Ensure mutual groupedWith relationships and identify the principal section (the one grouped from)
    schoolSections.forEach(s => {
      if (s.groupedWith && s.isPrincipalGroup === undefined) {
        const groupIds = [s.sectionId, ...s.groupedWith.split(',')];
        s.isPrincipalGroup = true;
        groupIds.forEach(id => {
          if (id !== s.sectionId) {
            const member = schoolSections.find(p => p.sectionId === id);
            if (member) {
              member.groupedWith = groupIds.filter(x => x !== id).join(',');
              if (member.isPrincipalGroup === undefined) {
                member.isPrincipalGroup = false;
              }
            }
          }
        });
      }
    });

    const gradeFormat = {
      '0': 'Preescolar',
      '1': '1er Grado',
      '2': '2do Grado',
      '3': '3er Grado',
      '4': '4to Grado',
      '5': '5to Grado',
      '6': '6to Grado',
    };

    const processedSectionIds = new Set();

    for (let index = 0; index < schoolSections.length; index++) {
      const section = schoolSections[index];

      if (!section || processedSectionIds.has(section.sectionId)) continue;

      // Group Photo Filter
      if (groupPhoto && groupPhoto.groupedSections && groupPhoto.groupedSections.includes(section.sectionId)) {
        continue;
      }

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

      processedSectionIds.add(section.sectionId);

      if (section.groupedWith) {
        const pairedIds = section.groupedWith.split(',');
        const groupSections = [section];
        let hasInvalidMember = false;

        for (const pId of pairedIds) {
          const pairedSection = schoolSections.find(s => s.sectionId === pId);
          if (
            !pairedSection ||
            processedSectionIds.has(pairedSection.sectionId) ||
            (groupPhoto && groupPhoto.groupedSections && groupPhoto.groupedSections.includes(pairedSection.sectionId)) ||
            !pairedSection.sectionGrade ||
            !pairedSection.sectionLetter ||
            !pairedSection.sectionName ||
            !pairedSection.sectionStudents ||
            !pairedSection.teacher
          ) {
            hasInvalidMember = true;
            break;
          } else {
            groupSections.push(pairedSection);
          }
        }

        if (!hasInvalidMember && groupSections.length === 2) {
          const pairedSection = groupSections[1];
          processedSectionIds.add(pairedSection.sectionId);
          const chunk = groupSections;
          const mappedData = chunk.map(s => ({
            name: `${gradeFormat[s.sectionGrade]} ${s.sectionLetter}`,
            img: s.sectionImg || null,
            teacher: s.teacher,
            students: s.sectionStudents || []
          }));

          const storeId = `school-section__grouped-${section.sectionId}-${pairedSection.sectionId}`;
          const page = new SmallSchoolSectionsTemplate(storeId, mappedData);
          page['isGroupedGrade'] = true;

          if (section.sectionGrade === pairedSection.sectionGrade) {
            page['name'] = `${gradeFormat[section.sectionGrade]} ${section.sectionLetter} y ${pairedSection.sectionLetter}`;
          } else {
            page['name'] = `${gradeFormat[section.sectionGrade]} ${section.sectionLetter} y ${gradeFormat[pairedSection.sectionGrade]} ${pairedSection.sectionLetter}`;
          }
          page['gradeId'] = section.sectionGrade;
          page['sectionId'] = section.sectionLetter;

          pages.push(page);
          continue;
        } else if (!hasInvalidMember && groupSections.length > 2) {
          if (section.isPrincipalGroup) {
            groupSections.forEach(s => processedSectionIds.add(s.sectionId));

            const teachersArr = Array.from(new Set(groupSections.map(s => TemplateUtils.getShortTeacherName(s.teacher.firstName, s.teacher.lastName))));
            const teacherObj = { firstName: '', lastName: '', fullName: teachersArr.join('<br>') };

            let allStudents = [];
            groupSections.forEach(s => {
              if (s.sectionStudents) allStudents.push(...s.sectionStudents);
            });

            const gradeGroups = {};
            groupSections.forEach(s => {
              if (!gradeGroups[s.sectionGrade]) {
                gradeGroups[s.sectionGrade] = [];
              }
              gradeGroups[s.sectionGrade].push(s.sectionLetter.toUpperCase());
            });

            const nameParts = [];
            Object.keys(gradeGroups).sort((a, b) => +a - +b).forEach(grade => {
              const letters = gradeGroups[grade].sort();
              let lettersStr = '';
              if (letters.length > 1) {
                lettersStr = letters.slice(0, -1).join(', ') + ' y ' + letters[letters.length - 1];
              } else {
                lettersStr = letters[0];
              }
              nameParts.push(`${gradeFormat[grade]} ${lettersStr}`);
            });
            const nameSection = nameParts.join('<br />');
            const indexNameSection = nameParts.join(' - ');

            const storeId = `school-section__grouped-multi-${section.sectionId}`;
            const page = new SchoolGradeTemplate(
              storeId,
              nameSection,
              section.sectionImg,
              teacherObj,
              allStudents,
              true,
              'Grados',
              null,
              true // isMultiGroup
            );

            page['indexName'] = indexNameSection;
            page['gradeId'] = section.sectionGrade;
            page['sectionId'] = section.sectionLetter;

            pages.push(page);
            continue;
          } else {
            continue;
          }
        }
      }

      let nameSection = gradeFormat[section.sectionGrade] + " " + section.sectionLetter
      const page = new SchoolGradeTemplate(
        `school-section__grade-${sectionGrade}-section-${sectionLetter}`,
        nameSection,
        sectionImg,
        teacher,
        sectionStudents,
      );
      page['gradeId'] = sectionGrade;
      page['sectionId'] = sectionLetter;

      pages.push(page);
    }

    pages = pages.filter((pg) => this.willPrintedSection(pg.storeId));

    pages.sort((a, b) => {
      const getGrade = (page: any) => {
        if (page.gradeId !== undefined) return parseInt(page.gradeId, 10);
        const match = page.storeId.match(/grade-(\d)/);
        return match ? parseInt(match[1], 10) : 99;
      };

      const getSection = (page: any) => {
        if (page.sectionId !== undefined) return page.sectionId.toUpperCase();
        const match = page.storeId.match(/section-([A-Za-z])/);
        return match ? match[1].toUpperCase() : '';
      };

      const gradeA = getGrade(a);
      const gradeB = getGrade(b);

      if (gradeA !== gradeB) {
        return gradeA - gradeB;
      }

      const sectionA = getSection(a);
      const sectionB = getSection(b);
      return sectionA.localeCompare(sectionB);
    });

    this.pages.push(...pages);

    let indexListItems = [];

    if (pages.length > 0) {
      indexListItems = TemplateUtils.getItemsToIndex(
        pages,
        this.pager,
        (page) => page.indexName ? 'indexName' : 'name',
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
