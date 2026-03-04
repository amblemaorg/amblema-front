export interface PdfYearbookData {
  pecaId: number;
  schoolYear: string;
  sponsorName: string;
  sponsorLogo: string;
  sponsorText: string;
  coordinatorName: string;
  coordinatorImg: string;
  coordinatorText: string;
  schoolName: string;
  schoolImg: string;
  schoolCode: string;
  schoolText: string;
  schoolCity: string;
  historicalReviewName: string;
  historicalReviewText: string;
  historicalReviewImg: string;
  schoolSections: SchoolSection[];
  lapses: Lapse[];
  breakForLapses: boolean;
  groupPhoto?: GroupPhotoData;
}

export interface GroupPhotoData {
  image: string;
  content: string;
  groupedSections: string[];
  groupedSectionsContent: string[];
}

interface Lapse {
  lapseId: string;
  lapseName: string;
  diagnosticReading: DiagnosticReading;
  diagnosticMath: DiagnosticReading;
  diagnosticLogic: DiagnosticReading;
  activities: Activity[];
}

interface Activity {
  id: string;
  name: string;
  description?: string | string;
  images: (string[] | null | string)[];
}

interface DiagnosticReading {
  diagnosticText: string;
  diagnosticTable: string[][];
  diagnosticAnalysis?: any;
  diagnosticGraphicText: string;
  diagnosticGraphic?: any;
}

export interface SchoolSection {
  sectionId: string;
  sectionLetter: string;
  sectionName: string;
  groupedWith?: string;
  isPrincipalGroup?: boolean;
  sectionImg?: any;
  sectionStudents: string[];
  sectionGrade: string;
  teacher: SchoolSectionTeacher;
}

export interface SchoolSectionTeacher {
  firstName: string;
  id: string;
  lastName: string;
}
