export interface PecaStates {
  yearbooks: Yearbooks;
  peca: Peca2;
  web: Web;
  residenceinfo: Residenceinfo;
  stepsinfo: Stepsinfo;
  coordinatorinfo: Coordinatorinfo;
  moduleinfo: Moduleinfo;
}

interface Moduleinfo {
  modulesTotal: number;
  modules: Module[];
}

interface Module {
  id: string;
  name: string;
  title: string;
  description: string;
  secondaryTitle: string;
  secondaryDescription: string;
  objectives: string[];
  slider: Slider[];
  images: ReadingActivity[];
  duration: string;
  quizzes: Quiz[];
  priority: number;
  createdAt: string;
  updatedAt: string;
}

interface Quiz {
  id: string;
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctOption: string;
  createdAt: string;
  updatedAt: string;
}

interface Slider {
  url: string;
  description: string;
  type: string;
}

interface Coordinatorinfo {
  coins: number;
  coordinator_modules: any[];
  name: string;
  email: string;
  gender: string;
  user_id: string;
  image: string;
  user_projects: Project[];
  userType: string;
}

interface Stepsinfo {
  sponsor_id: string;
  school_id: string;
  coordinator_id: string;
  general: string;
  sponsor: string;
  school: string;
  coordinator: string;
  steps: Step[];
  project_id: string;
  has_peca: boolean;
}

interface Step {
  file?: File;
  hasVideo: boolean;
  hasFile: boolean;
  name: string;
  sort: number;
  createdAt: string;
  hasChecklist: boolean;
  approvalType: string;
  updatedAt: string;
  approvalHistory: (
    | ApprovalHistory6
    | ApprovalHistory22
    | ApprovalHistory32
    | ApprovalHistory42
  )[];
  status: string;
  hasUpload: boolean;
  hasText: boolean;
  isStandard: boolean;
  text?: string;
  checklist: any[];
  date?: any;
  hasDate: boolean;
  id: string;
  uploadedFile?: any;
  devName: string;
  video?: File;
  tag: string;
}

interface ApprovalHistory42 {
  createdAt: string;
  user: string;
  comments?: any;
  data: Data4;
  updatedAt: string;
  status: string;
  id: string;
}

interface Data4 {
  slider: any[];
  principalFirstName: string;
  name: string;
  coordinate: Coordinate;
  phase: string;
  instagram?: any;
  role: User;
  nGrades: number;
  schoolType: string;
  updatedAt: string;
  code: string;
  subPrincipalEmail?: any;
  createdAt: string;
  status: string;
  image?: any;
  addressZone: string;
  twitter?: any;
  addressCity: string;
  nStudents: number;
  addressMunicipality: User;
  olympicsSummary: OlympicsSummary;
  nAdministrativeStaff: number;
  activitiesSlider: any[];
  addressZoneType: string;
  principalEmail: string;
  nTeachers: number;
  address: string;
  slug: string;
  subPrincipalPhone?: any;
  facebook?: any;
  nSections: number;
  principalLastName: string;
  phone: string;
  subPrincipalLastName?: any;
  project: Project3;
  principalPhone: string;
  teachersTestimonials: TeachersTestimonials2;
  id: string;
  schoolShift: string;
  addressState: User;
  nLaborStaff: number;
  email: string;
  subPrincipalFirstName?: any;
  userType: string;
}

interface TeachersTestimonials2 {
  testimonials: any[];
  updatedAt: string;
  createdAt: string;
  isInApproval: boolean;
  approvalHistory: any[];
}

interface Project3 {
  coordinator?: any;
  sponsor?: any;
  schoolYears: any[];
  code?: any;
  school?: any;
  id?: any;
}

interface OlympicsSummary {
  classified: number;
  medalsSilver: number;
  medalsGold: number;
  medalsBronze: number;
  inscribed: number;
}

interface Coordinate {
  latitude: number;
  longitude: number;
}

interface ApprovalHistory32 {
  createdAt: string;
  user: string;
  comments?: any;
  data: Data3;
  updatedAt: string;
  status: string;
  id: string;
}

interface Data3 {
  role: User;
  name: string;
  address: string;
  contactLastName: string;
  phase: string;
  companyPhone: string;
  contactFirstName: string;
  contactEmail: string;
  addressCity: string;
  webSite: string;
  updatedAt: string;
  companyOtherType: string;
  userType: string;
  createdAt: string;
  status: string;
  id: string;
  image?: any;
  addressState: User;
  email: string;
  companyType: string;
  projects: any[];
  companyRif: string;
  addressMunicipality: User;
  contactPhone: string;
}

interface ApprovalHistory22 {
  createdAt: string;
  user: User;
  comments: string;
  data: Data2;
  updatedAt: string;
  status: string;
  id: string;
}

interface Data2 {
  stepId: string;
  project: string;
  user: string;
  stepUploadedFile: File;
  stepName: string;
  stepDevName: string;
  stepTag: string;
  stepIsStandard: boolean;
  stepHasText: boolean;
  stepHasDate: boolean;
  stepHasFile: boolean;
  stepHasVideo: boolean;
  stepHasChecklist: boolean;
  stepHasUpload: boolean;
  stepText: string;
  stepFile?: any;
  stepVideo?: any;
  stepChecklist?: any;
}

interface ApprovalHistory6 {
  createdAt: string;
  user: string;
  comments?: any;
  data: Data;
  updatedAt: string;
  status: string;
  id: string;
}

interface Data {
  referredName?: any;
  role: User;
  addressHome: string;
  phone: string;
  name: string;
  instructed: boolean;
  address: string;
  cardId: string;
  gender: string;
  birthdate: string;
  learning: any[];
  image?: any;
  nCoins: number;
  email: string;
  cardType: string;
  profession: string;
  firstName: string;
  lastName: string;
  homePhone: string;
  userType: string;
  createdAt: string;
  status: string;
  id: string;
  phase: string;
  addressState: User;
  addressCity: string;
  isReferred: boolean;
  updatedAt: string;
  projects: Project2[];
  addressMunicipality: User;
}

interface Project2 {
  coordinator: User;
  sponsor: User;
  schoolYears: any[];
  code: string;
  school: School;
  id: string;
}

interface File {
  name: string;
  url: string;
}

interface Residenceinfo {
  municipalities: any[];
  states: any[];
}

interface Web {
  isLoadingPage: boolean;
  schoolMarkersLoading: boolean;
}

interface Peca2 {
  content: Content;
  selectedProject: SelectedProject;
  user: User2;
  userPermissions: string[];
  pecaContentRequesting: boolean;
  lapsePlanningRequest: LapsePlanningRequest;
  initialWorkshopImagesRequest: InitialWorkshopImagesRequest;
  schoolActivitiesImagesRequest: SchoolActivitiesImagesRequest;
  specialActivityRequest: SpecialActivityRequest;
}

interface SpecialActivityRequest {
  activityDate: string;
  total: number;
  itemsActivities: any[];
}

interface SchoolActivitiesImagesRequest {
  images: any[];
}

interface InitialWorkshopImagesRequest {
  description: string;
  images: any[];
}

interface LapsePlanningRequest {
  attachedFile: string;
  meetingDate: string;
  status: string;
}

interface User2 {
  id: string;
  email: string;
  name: string;
  userType: string;
  role: User;
  addressState: User;
  addressMunicipality: User;
  address: string;
  addressCity: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  cardType: string;
  cardId: string;
  phone: string;
  gender: string;
  birthdate: string;
  projects: SelectedProject[];
  homePhone: string;
  addressHome: string;
  profession: string;
  isReferred: boolean;
  referredName?: any;
  image: string;
  learning: any[];
  nCoins: number;
  instructed: boolean;
  phase: string;
  activeSchoolYear: User;
  permissions: string[];
}

interface SelectedProject {
  id: string;
  code: string;
  school: User;
  coordinator: User;
  sponsor: User;
  phase: string;
  pecas: Peca[];
}

interface Peca {
  id: string;
  schoolYear: User;
}

interface Content {
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

interface MonitoringActivities {
  readingActivities: ReadingActivity[];
  mathActivities: ReadingActivity[];
  environmentActivities: ReadingActivity[];
}

interface ReadingActivity {
  description: string;
  image: string;
}

interface School2 {
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

interface TeachersTestimonials {
  testimonials: Testimonial[];
  createdAt: string;
  updatedAt: string;
  isInApproval: boolean;
  approvalHistory: ApprovalHistory5[];
}

interface ApprovalHistory5 {
  user: User;
  comments?: string;
  detail: Detail5;
  createdAt: string;
  id: string;
  status: string;
  updatedAt: string;
}

interface Detail5 {
  testimonials: Testimonial[];
  schoolId: string;
}

interface Testimonial {
  id: string;
  teacherId: string;
  firstName: string;
  lastName: string;
  image: string;
  position: string;
  description: string;
}

interface Teacher2 {
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
  address: string;
  addressCity: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

interface ApprovalHistory4 {
  user: User;
  comments?: string;
  detail: Detail4;
  createdAt: string;
  id: string;
  status: string;
  updatedAt: string;
}

interface Detail4 {
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

interface ActivitiesSlider {
  slider: string[];
  isInApproval: boolean;
  approvalHistory: ApprovalHistory3[];
}

interface ApprovalHistory3 {
  user: User;
  comments?: string;
  detail: Detail3;
  createdAt: string;
  id: string;
  status: string;
  updatedAt: string;
}

interface Detail3 {
  slider: string[];
  pecaId: string;
}

interface Section4 {
  grade: string;
  image?: string;
  teacher: Teacher;
  id: string;
  diagnostics: Diagnostics;
  students: Students5[];
  goals?: Goal;
  name: string;
}

interface Project {
  code: string;
  sponsor: User;
  schoolYears: SchoolYear2[];
  id: string;
  coordinator: User;
  school: School;
}

interface School {
  id: string;
  name: string;
  code: string;
}

interface SchoolYear2 {
  pecaId: string;
  schoolYear: SchoolYear;
  createdAt: string;
}

interface SchoolYear {
  id: string;
  name: string;
  status: string;
}

interface Lapse17 {
  ambleCoins: AmbleCoins;
  olympics?: any;
  annualPreparation?: any;
  annualConvention?: any;
  lapsePlanning?: any;
  initialWorkshop: InitialWorkshop;
  specialActivity?: any;
  activities: Activity[];
}

interface InitialWorkshop {
  name: string;
  isStandard: boolean;
  description?: any;
  images: any[];
  workshopPlace?: any;
  workshopDate?: any;
  isInApproval: boolean;
  approvalHistory: ApprovalHistory2[];
}

interface ApprovalHistory2 {
  user: User;
  comments: string;
  detail: Detail2;
  createdAt: string;
  id: string;
  status: string;
  updatedAt: string;
}

interface Detail2 {
  description: string;
  images: Image[];
  pecaId: string;
  lapse: string;
}

interface Image {
  description: string;
  image: string;
  id: string;
}

interface AmbleCoins {
  teachersMeetingFile?: any;
  teachersMeetingDescription: string;
  piggyBankDescription: string;
  piggyBankSlider: any[];
  meetingDate?: any;
  elaborationDate?: any;
  sections: Section3[];
}

interface Section3 {
  id: string;
  name: string;
  grade: string;
  status: string;
}

interface Schedule {
  Id: string;
  Subject: string;
  StartTime: string;
  EndTime: string;
  Description: string;
}

interface EnvironmentalProject {
  name: string;
  description: string;
  lapse1: Lapse16;
  lapse2: Lapse25;
  lapse3: Lapse25;
  updatedAt: string;
}

interface Lapse25 {
  generalObjective: string;
  topics: any[];
}

interface Lapse16 {
  generalObjective: string;
  topics: Topic[];
}

interface Topic {
  name: string;
  objectives: string[];
  strategies: string[];
  contents: string[];
  levels: any[];
}

interface Yearbook {
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

interface ApprovalHistory {
  user: User;
  comments?: string;
  detail: Detail;
  createdAt: string;
  id: string;
  status: string;
  updatedAt: string;
}

interface Detail {
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

interface Lapse24 {
  readingDiagnosticAnalysis: string;
  mathDiagnosticAnalysis: string;
  logicDiagnosticAnalysis: string;
  diagnosticSummary: DiagnosticSummary[];
  activities: Activity3[];
}

interface Section2 {
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

interface Goal {
  multiplicationsPerMin: number;
  wordsPerMin: number;
  operationsPerMin: number;
}

interface Students7 {
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

interface Students6 {
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

interface Students5 {
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

interface Students4 {
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

interface Lapse15 {
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

interface Students3 {
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

interface Lapse14 {
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

interface Students2 {
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

interface Lapse13 {
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

interface Student2 {
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

interface Lapse23 {
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

interface Diagnostics {
  lapse1: Lapse12;
  lapse3: Lapse12;
  lapse2: Lapse12;
}

interface Lapse12 {
  wordsPerMinIndex: number;
  multiplicationsPerMin: number;
  operationsPerMin: number;
  operationsPerMinIndex: number;
  wordsPerMin: number;
  multiplicationsPerMinIndex: number;
}

interface Teacher {
  firstName: string;
  id: string;
  lastName: string;
}

interface User {
  id: string;
  name: string;
}

interface Lapse32 {
  readingDiagnosticAnalysis: string;
  mathDiagnosticAnalysis: string;
  logicDiagnosticAnalysis: string;
  diagnosticSummary: DiagnosticSummary[];
  activities: any[];
}

interface Lapse22 {
  readingDiagnosticAnalysis: string;
  mathDiagnosticAnalysis: string;
  logicDiagnosticAnalysis: string;
  diagnosticSummary: DiagnosticSummary[];
  activities: Activity3[];
}

interface Activity3 {
  id: string;
  name: string;
  description: string;
  images: string[];
}

interface Lapse1 {
  readingDiagnosticAnalysis: string;
  mathDiagnosticAnalysis: string;
  logicDiagnosticAnalysis: string;
  diagnosticSummary: DiagnosticSummary[];
  activities: Activity2[];
}

interface Activity2 {
  id: string;
  name: string;
  description?: string;
  images: string[];
}

interface DiagnosticSummary {
  grade: string;
  name: string;
  wordsPerMin: number;
  wordsPerMinIndex: number;
  multiplicationsPerMin: number;
  multiplicationsPerMinIndex: number;
  operationsPerMin: number;
  operationsPerMinIndex: number;
}

interface Sponsor {
  name: string;
  image: string;
  content: string;
}

interface HistoricalReview {
  name?: any;
  image: string;
  content: string;
}

interface Lapse3 {
  ambleCoins?: any;
  olympics?: any;
  annualPreparation?: any;
  annualConvention?: any;
  lapsePlanning?: any;
  initialWorkshop?: any;
  specialActivity?: any;
  activities: any[];
}

interface Lapse2 {
  ambleCoins?: any;
  olympics: Olympics;
  annualPreparation?: any;
  annualConvention?: any;
  lapsePlanning?: any;
  initialWorkshop?: any;
  specialActivity?: any;
  activities: Activity[];
}

interface Activity {
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

interface Checklist {
  id: string;
  name: string;
  checked: boolean;
}

interface Olympics {
  students: Student[];
  file?: any;
  description: string;
  date: string;
}

interface Student {
  id: string;
  name: string;
  section: Section;
  status: string;
  result?: any;
}

interface Section {
  id: string;
  name: string;
  grade: string;
}

interface Yearbooks {
  makingAction: boolean;
  wasSaving: boolean;
}
