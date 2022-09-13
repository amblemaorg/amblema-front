export interface QueryYearbookPrintOptions {
  sectionsPrint?: SectionsPrint[];
  activitiesPrint?: ActivitiesPrint[];
}

interface ActivitiesPrint {
  name: string;
  print: boolean;
  expandGallery: boolean;
  lapse: string;
}

interface SectionsPrint {
  name: string;
  print: boolean;
}

export interface RespYearbookPrintOptions {
  activitiesPrint?: RespActivitiesPrint;
  disablePages?: string[];
  index?: boolean;
  diagnosticPrint?: boolean;
}

interface RespActivitiesPrint {
  lapse1: Lapse1[];
  lapse2: any[];
  lapse3: any[];
}

interface Lapse1 {
  name: string;
  print: boolean;
  expandGallery: boolean;
}
