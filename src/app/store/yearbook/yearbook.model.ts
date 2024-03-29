export interface YearBook {
  makingAction?: boolean;
  wasSaving?: boolean;
  // historicalReview?: HistoricalReview;
  // sponsor?: UserContentReview;
  // school?: UserContentReview;
  // coordinator?: UserContentReview;
  // isInApproval?: boolean;
  // approvalHistory?: any[];
  // sections?: Section[];
  // lapse1?: Lapse;
  // lapse2?: Lapse;
  // lapse3?: Lapse;
}

interface Lapse {
  activities?: Activity[];
  diagnosticSummary?: any[];
  logicDiagnosticAnalysis?: string;
  mathDiagnosticAnalysis?: string;
  readingDiagnosticAnalysis?: string; 
}

interface Activity {
  id?: string;
  name?: string;
  images?: string[];
  description?: string;
}

interface Section {
  id?: string;
  grade?: string;
  name?: string;
  image?: string;
}

interface UserContentReview {
  name?: string;
  image?: string;
  content?: string;
}

interface HistoricalReview {
  image?: string;
  content?: string;
}
