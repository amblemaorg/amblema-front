export namespace RespPecaProjectsOlympics {
  export interface RootResp {
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
