export interface PecaObjectModel {
  name: string;
  id: string;
}

export interface PecaProjectModel {
  code: string;
  coordinator: PecaObjectModel;
  id: string;
  pecas: any[];
  phase: string;
  school: PecaObjectModel;
  sponsor: PecaObjectModel;
}

export interface PecaUserModel {
  activeSchoolYear: PecaObjectModel;
  email: string;
  id: string;
  name: string;
  permissions: string[];
  projects: PecaProjectModel[];
  userType: string;
}

export interface PecaModel {
  createdAt: string;
  id: string;
  lapse1: Object;
  lapse2: Object;
  lapse3: Object;
  project: PecaProjectModel;
  schedule: any[];
  school: Object;
  schoolYearName: string;
  updatedAt: string;
}

export interface PecaStateModel {
  user?: PecaUserModel;
  content: PecaModel | null;
  selectedProject: PecaProjectModel | null;
}