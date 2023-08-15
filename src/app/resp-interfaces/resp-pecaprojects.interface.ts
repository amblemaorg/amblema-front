export namespace RespPecaProjects {
  export interface RespRoot {
    lapse2: Lapse2;
    lapse3: Lapse3;
    yearbook: Yearbook;
    schoolYearName: string;
    environmentalProject: EnvironmentalProject;
    schedule: Schedule[];
    createdAt: string;
    id: string;
    lapse1: Lapse17;
    updatedAt: string;
    project: Project;
    school: School2;
    steps: boolean;
    monitoringActivities: MonitoringActivities;
  }

  export interface MonitoringActivities {
    readingActivities: ReadingActivity[];
    mathActivities: ReadingActivity[];
    environmentActivities: ReadingActivity[];
  }

  export interface ReadingActivity {
    description: string;
    image: string;
  }

  export interface School2 {
    name: string;
    code: string;
    phone: string;
    addressState: User;
    addressMunicipality: User;
    address: string;
    addressCity: string;
    principalFirstName: string;
    principalLastName: string;
    principalEmail: string;
    principalPhone: string;
    subPrincipalFirstName?: any;
    subPrincipalLastName?: any;
    subPrincipalEmail?: any;
    subPrincipalPhone?: any;
    nTeachers: number;
    nGrades: number;
    nStudents: number;
    nAdministrativeStaff: number;
    nLaborStaff: number;
    facebook?: any;
    instagram: string;
    twitter?: any;
    sections: Section4[];
    slider: Image[];
    activitiesSlider: ActivitiesSlider;
    isInApproval: boolean;
    approvalHistory: ApprovalHistory4[];
    teachers: Teacher2[];
    teachersTestimonials: TeachersTestimonials;
  }

  export interface TeachersTestimonials {
    testimonials: Testimonial[];
    createdAt: string;
    updatedAt: string;
    isInApproval: boolean;
    approvalHistory: ApprovalHistory5[];
  }

  export interface ApprovalHistory5 {
    user: User;
    comments?: string;
    detail: Detail5;
    createdAt: string;
    id: string;
    status: string;
    updatedAt: string;
  }

  export interface Detail5 {
    testimonials: Testimonial[];
    schoolId: string;
  }

  export interface Testimonial {
    id: string;
    teacherId: string;
    firstName: string;
    lastName: string;
    image: string;
    position: string;
    description: string;
  }

  export interface Teacher2 {
    id: string;
    firstName: string;
    lastName: string;
    cardId: string;
    cardType: string;
    gender: string;
    email: string;
    phone: string;
    addressState: User;
    addressMunicipality: User;
    specialty: User | string;
    workPosition: User | string;
    address: string;
    addressCity: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  }

  export interface ApprovalHistory4 {
    user: User;
    comments?: string;
    detail: Detail4;
    createdAt: string;
    id: string;
    status: string;
    updatedAt: string;
  }

  export interface Detail4 {
    name: string;
    code: string;
    phoneEscuela: string;
    addressState: string;
    addressMunicipality: string;
    address: string;
    addressCity: string;
    principalFirstName: string;
    principalLastName: string;
    principalPhone: string;
    principalEmail: string;
    nTeachers: number;
    nAdministrativeStaff: number;
    nLaborStaff: number;
    nStudents: number;
    nGrades: number;
    instagram: string;
    slider: Image[];
    pecaId: string;
  }

  export interface ActivitiesSlider {
    slider: string[];
    isInApproval: boolean;
    approvalHistory: ApprovalHistory3[];
  }

  export interface ApprovalHistory3 {
    user: User;
    comments?: string;
    detail: Detail3;
    createdAt: string;
    id: string;
    status: string;
    updatedAt: string;
  }

  export interface Detail3 {
    slider: string[];
    pecaId: string;
  }

  export interface Section4 {
    grade: string;
    image?: string;
    teacher: Teacher;
    id: string;
    diagnostics: Diagnostics;
    students: Students5[];
    goals?: Goal;
    name: string;
  }

  export interface Project {
    code: string;
    sponsor: User;
    schoolYears: SchoolYear2[];
    id: string;
    coordinator: User;
    school: School;
  }

  export interface School {
    id: string;
    name: string;
    code: string;
  }

  export interface SchoolYear2 {
    pecaId: string;
    schoolYear: SchoolYear;
    createdAt: string;
  }

  export interface SchoolYear {
    id: string;
    name: string;
    status: string;
  }

  export interface Lapse17 {
    ambleCoins: AmbleCoins;
    olympics?: any;
    annualPreparation?: any;
    annualConvention?: any;
    lapsePlanning?: any;
    initialWorkshop: InitialWorkshop;
    specialActivity?: any;
    activities: Activity[];
  }

  export interface InitialWorkshop {
    name: string;
    isStandard: boolean;
    description?: any;
    images: any[];
    workshopPlace?: any;
    workshopDate?: any;
    isInApproval: boolean;
    approvalHistory: ApprovalHistory2[];
  }

  export interface ApprovalHistory2 {
    user: User;
    comments: string;
    detail: Detail2;
    createdAt: string;
    id: string;
    status: string;
    updatedAt: string;
  }

  export interface Detail2 {
    description: string;
    images: Image[];
    pecaId: string;
    lapse: string;
  }

  export interface Image {
    description: string;
    image: string;
    id: string;
  }

  export interface AmbleCoins {
    teachersMeetingFile?: any;
    teachersMeetingDescription: string;
    piggyBankDescription: string;
    piggyBankSlider: any[];
    meetingDate?: any;
    elaborationDate?: any;
    sections: Section3[];
  }

  export interface Section3 {
    id: string;
    name: string;
    grade: string;
    status: string;
  }

  export interface Schedule {
    Id: string;
    Subject: string;
    StartTime: string;
    EndTime: string;
    Description: string;
  }

  export interface EnvironmentalProject {
    name: string;
    description: string;
    lapse1: Lapse16;
    lapse2: Lapse25;
    lapse3: Lapse25;
    updatedAt: string;
  }

  export interface Lapse25 {
    generalObjective: string;
    topics: any[];
  }

  export interface Lapse16 {
    generalObjective: string;
    topics: Topic[];
  }

  export interface Topic {
    name: string;
    objectives: string[];
    strategies: string[];
    contents: string[];
    levels: any[];
  }

  export interface Yearbook {
    historicalReview: HistoricalReview;
    sponsor: Sponsor;
    school: Sponsor;
    coordinator: Sponsor;
    lapse1: Lapse1;
    lapse2: Lapse22;
    lapse3: Lapse32;
    isInApproval: boolean;
    approvalHistory: ApprovalHistory[];
    updatedAt: string;
  }

  export interface ApprovalHistory {
    user: User;
    comments?: string;
    detail: Detail;
    createdAt: string;
    id: string;
    status: string;
    updatedAt: string;
  }

  export interface Detail {
    sponsor: Sponsor;
    coordinator: Sponsor;
    pecaId: string;
    lapse1: Lapse1;
    sections: Section2[];
    lapse2: Lapse24;
    isInApproval: boolean;
    historicalReview: HistoricalReview;
    lapse3: Lapse32;
    status: number;
    school: Sponsor;
    userId: string;
    comments?: string;
  }

  export interface Lapse24 {
    readingDiagnosticAnalysis: string;
    mathDiagnosticAnalysis: string;
    logicDiagnosticAnalysis: string;
    diagnosticSummary: DiagnosticSummary[];
    activities: Activity3[];
  }

  export interface Section2 {
    grade: string;
    image?: (null | string)[];
    teacher: Teacher;
    id: string;
    diagnostics: Diagnostics;
    students: (
      | Student2
      | Students2
      | Students3
      | Students4
      | Students5
      | Students6
      | Students7
      | Students7
    )[];
    goals?: Goal;
    name: string;
  }

  export interface Goal {
    multiplicationsPerMin: number;
    wordsPerMin: number;
    operationsPerMin: number;
  }

  export interface Students7 {
    lapse2: Lapse23;
    createdAt: string;
    lapse1: Lapse23;
    birthdate: string;
    lastName: string;
    updatedAt: string;
    cardType: string;
    firstName: string;
    gender: string;
    cardId: string;
    lapse3: Lapse23;
    id: string;
  }

  export interface Students6 {
    lapse2: Lapse23;
    createdAt: string;
    lapse1: Lapse15;
    birthdate: string;
    lastName: string;
    updatedAt: string;
    cardType: string;
    firstName: string;
    gender: string;
    cardId: string;
    lapse3: Lapse23;
    id: string;
  }

  export interface Students5 {
    lapse2: Lapse23;
    createdAt: string;
    lapse1: Lapse13;
    birthdate: string;
    lastName: string;
    updatedAt: string;
    cardType?: null | string | string;
    firstName: string;
    gender: string;
    cardId?: null | string | string;
    lapse3: Lapse23;
    id: string;
  }

  export interface Students4 {
    lapse2: Lapse23;
    createdAt: string;
    lapse1: Lapse15;
    birthdate: string;
    lastName: string;
    updatedAt: string;
    cardType?: any;
    firstName: string;
    gender: string;
    cardId?: any;
    lapse3: Lapse23;
    id: string;
  }

  export interface Lapse15 {
    wordsPerMinIndex?: string;
    multiplicationsPerMin?: number;
    readingDate?: string;
    operationsPerMinIndex?: string;
    logicDate?: string;
    mathDate?: string;
    wordsPerMin?: number;
    multiplicationsPerMinIndex?: string;
    operationsPerMin?: number;
  }

  export interface Students3 {
    lapse2: Lapse23;
    createdAt: string;
    lapse1: Lapse14;
    birthdate: string;
    lastName: string;
    updatedAt: string;
    cardType: string;
    firstName: string;
    gender: string;
    cardId: string;
    lapse3: Lapse23;
    id: string;
  }

  export interface Lapse14 {
    wordsPerMinIndex?: string;
    multiplicationsPerMin?: any;
    readingDate?: string;
    operationsPerMinIndex?: any;
    logicDate?: any;
    mathDate?: any;
    wordsPerMin?: number;
    multiplicationsPerMinIndex?: any;
    operationsPerMin?: any;
  }

  export interface Students2 {
    lapse2: Lapse23;
    createdAt: string;
    lapse1: Lapse13;
    birthdate: string;
    lastName: string;
    updatedAt: string;
    cardType?: string;
    firstName: string;
    gender: string;
    cardId?: string;
    lapse3: Lapse23;
    id: string;
  }

  export interface Lapse13 {
    wordsPerMinIndex?: (null | string)[];
    multiplicationsPerMin?: (null | number)[];
    readingDate?: (null | string)[];
    operationsPerMinIndex?: (null | string)[];
    logicDate?: (null | string)[];
    mathDate?: (null | string)[];
    wordsPerMin?: (null | number)[];
    multiplicationsPerMinIndex?: (null | string)[];
    operationsPerMin?: (null | number)[];
  }

  export interface Student2 {
    lapse2: Lapse23;
    createdAt: string;
    lapse1: Lapse23;
    birthdate: string;
    lastName: string;
    updatedAt: string;
    cardType?: any;
    firstName: string;
    gender: string;
    cardId?: any;
    lapse3: Lapse23;
    id: string;
  }

  export interface Lapse23 {
    wordsPerMinIndex?: any;
    multiplicationsPerMin?: any;
    readingDate?: any;
    operationsPerMinIndex?: any;
    logicDate?: any;
    mathDate?: any;
    wordsPerMin?: any;
    multiplicationsPerMinIndex?: any;
    operationsPerMin?: any;
  }

  export interface Diagnostics {
    lapse1: Lapse12;
    lapse3: Lapse12;
    lapse2: Lapse12;
  }

  export interface Lapse12 {
    wordsPerMinIndex: number;
    multiplicationsPerMin: number;
    operationsPerMin: number;
    operationsPerMinIndex: number;
    wordsPerMin: number;
    multiplicationsPerMinIndex: number;
  }

  export interface Teacher {
    firstName: string;
    id: string;
    lastName: string;
  }

  export interface User {
    id: string;
    name: string;
  }

  export interface Lapse32 {
    readingDiagnosticAnalysis: string;
    mathDiagnosticAnalysis: string;
    logicDiagnosticAnalysis: string;
    diagnosticSummary: DiagnosticSummary[];
    activities: any[];
  }

  export interface Lapse22 {
    readingDiagnosticAnalysis: string;
    mathDiagnosticAnalysis: string;
    logicDiagnosticAnalysis: string;
    diagnosticSummary: DiagnosticSummary[];
    activities: Activity3[];
  }

  export interface Activity3 {
    id: string;
    name: string;
    description: string;
    images: string[];
  }

  export interface Lapse1 {
    readingDiagnosticAnalysis: string;
    mathDiagnosticAnalysis: string;
    logicDiagnosticAnalysis: string;
    diagnosticSummary: DiagnosticSummary[];
    activities: Activity2[];
  }

  export interface Activity2 {
    id: string;
    name: string;
    description?: string;
    images: string[];
  }

  export interface DiagnosticSummary {
    grade: string;
    name: string;
    wordsPerMin: number;
    wordsPerMinIndex: number;
    multiplicationsPerMin: number;
    multiplicationsPerMinIndex: number;
    operationsPerMin: number;
    operationsPerMinIndex: number;
  }

  export interface Sponsor {
    name: string;
    image: string;
    content: string;
  }

  export interface HistoricalReview {
    name?: any;
    image: string;
    content: string;
  }

  export interface Lapse3 {
    ambleCoins?: any;
    olympics?: any;
    annualPreparation?: any;
    annualConvention?: any;
    lapsePlanning?: any;
    initialWorkshop?: any;
    specialActivity?: any;
    activities: any[];
  }

  export interface Lapse2 {
    ambleCoins?: any;
    olympics: Olympics;
    annualPreparation?: any;
    annualConvention?: any;
    lapsePlanning?: any;
    initialWorkshop?: any;
    specialActivity?: any;
    activities: Activity[];
  }

  export interface Activity {
    id: string;
    name: string;
    devName: string;
    hasText: boolean;
    hasDate: boolean;
    hasFile: boolean;
    hasVideo: boolean;
    hasChecklist: boolean;
    hasUpload: boolean;
    text: string;
    file?: any;
    video?: any;
    checklist: Checklist[];
    date?: any;
    uploadedFile?: any;
    approvalType: string;
    isStandard: boolean;
    percent: number;
    status: string;
    createdAt: string;
    updatedAt: string;
    approvalHistory: any[];
  }

  export interface Checklist {
    id: string;
    name: string;
    checked: boolean;
  }

  export interface Olympics {
    students: Student[];
    file?: any;
    description: string;
    date: string;
  }

  export interface Student {
    id: string;
    name: string;
    section: Section;
    status: string;
    result?: any;
  }

  export interface Section {
    id: string;
    name: string;
    grade: string;
  }
}
