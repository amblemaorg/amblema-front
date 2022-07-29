export interface PdfYearbookData {
  schoolYear: string
  sponsorName: string
  sponsorLogo: string
  sponsorText: string
  coordinatorName: string
  coordinatorImg: string
  coordinatorText: string
  schoolName: string
  schoolImg: string
  schoolText: string
  schoolCity: string
  historicalReviewName: string
  historicalReviewText: string
  historicalReviewImg: string
  schoolSections: SchoolSection[]
  lapses: Lapse[]
  breakForLapses: boolean
}

interface Lapse {
  lapseName: string
  diagnosticReading: DiagnosticReading
  diagnosticMath: DiagnosticReading
  diagnosticLogic: DiagnosticReading
  activities: Activity[]
}

interface Activity {
  name: string
  description?: string | string
  images: (string[] | null | string)[]
}

interface DiagnosticReading {
  diagnosticText: string
  diagnosticTable: string[][]
  diagnosticAnalysis?: any
  diagnosticGraphicText: string
  diagnosticGraphic?: any
}

export interface SchoolSection {
  sectionName: string
  sectionImg?: any
  sectionStudents: string[]
  sectionGrade: string
}
