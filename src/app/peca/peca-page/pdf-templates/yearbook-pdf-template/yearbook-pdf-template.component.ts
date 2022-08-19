import { Router } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PdfYearbookService } from './../../../../services/peca/pdf-yearbook.service';
import { PdfYearbookData } from './pdfYearbookData.interface';
import { mocksPdfData } from './mockShoolSectionData';
import {
  ActivitiesPage,
  FrontPage,
  SchoolGradePageGroup,
  SecondLayoutTemplate,
  SummaryAndCoordinatorPage,
  TemplateThird,
} from './templatesModels';

@Component({
  selector: 'app-yearbook-pdf-template',
  templateUrl: './yearbook-pdf-template.component.html',
  styleUrls: ['./yearbook-pdf-template.component.scss'],
})
export class YearbookPdfTemplateComponent implements OnInit, AfterViewInit {
  constructor(private router: Router, private pdfService: PdfYearbookService) {}

  showLoading = false;
  pdfData: PdfYearbookData;
  pages: any = [];

  frontpage: FrontPage;
  summaryAndCoordinatorPage: SummaryAndCoordinatorPage;
  godfatherPage: TemplateThird;
  schoolPage: TemplateThird;
  schoolGradePageGroup: SchoolGradePageGroup;
  activitiesPage: ActivitiesPage;

  //
  mySchoolPage: SecondLayoutTemplate = null;

  ngOnInit(): void {
    this.pdfData = mocksPdfData;
    // this.pdfData = this.pdfService.pdfData
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
    this.setSummaryAndCoordinatorPage();
    this.setSchoolAndGodfatherPage();
    this.setSchoolGradePageGroup(); // refactored
    this.setActivitiesPage();
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

  setSummaryAndCoordinatorPage() {
    const {
      historicalReviewText,
      historicalReviewImg,
      coordinatorName,
      coordinatorImg,
      coordinatorText,
    } = this.pdfData;
    this.summaryAndCoordinatorPage = new SummaryAndCoordinatorPage({
      historicalReviewText,
      historicalReviewImg,
      coordinatorName,
      coordinatorImg,
      coordinatorText,
    });

    const description = `Elisa Rojas es Licenciada en Comunicación Social mención Desarrollo Social, egresada de la Universidad Católica Cecilio Acosta (UNICA). Oriunda de Maracay estado Aragua,  llega a la familia AmbLeMa en septiembre de 2018 por invitación del profesor Tomás Linares.
    En AmbLeMa, somos testigo del crecimiento de los docentes como profesionales y como personas. Los coordinadores de AmbLeMa no somos los mismos que cuando llegamos, eso se debe a que estamos en constante entrenamiento, estamos conscientes de la importancia de crecer diariamente para poder ofrecer a los docentes novedosas herramientas de trabajo. Hoy por hoy, ha sido maravilloso ver cómo directivo, docentes y representantes, responden a las actividades propuestas con gran entusiasmo, desde cada Hogar AmbLeMa o desde el aula de clases.
     En su debut como coordinadora, inicia con dos escuelas, U.E.E. Los Próceres y U.E.E. 24 de Octubre, ambas, ubicadas en Santa Rita,  específicamente en el municipio Linares Alcántara, estado Aragua. Para el siguiente año, se le presenta  un nuevo reto, coordinar la U.E.E. Santa Inés y U.E.E. Armida Morillo, las cuales se encuentran  en La Morita II, del mencionado municipio Aragüeño.`;

    this.mySchoolPage = new SecondLayoutTemplate('title', 'img', description);
  }

  setSchoolAndGodfatherPage() {
    const { sponsorName, sponsorLogo, sponsorText, schoolName, schoolText, schoolImg } = this.pdfData;
    this.godfatherPage = new TemplateThird({
      tagTitle: 'padrino',
      name: sponsorName,
      img: sponsorLogo,
      text: sponsorText,
    });

    this.schoolPage = new TemplateThird({
      tagTitle: 'escuela',
      name: schoolName,
      img: schoolImg,
      text: schoolText,
    });
  }

  setSchoolGradePageGroup() {
    const { schoolSections } = this.pdfData;

    this.schoolGradePageGroup = new SchoolGradePageGroup({ schoolSections });
  }

  setActivitiesPage() {
    const { lapses } = this.pdfData;

    this.activitiesPage = new ActivitiesPage({ lapses });
  }
}
