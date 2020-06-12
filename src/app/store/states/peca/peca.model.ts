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

export interface PecaStateModel {
  user?: PecaUserModel;
  content: any;
  selectedProject: PecaProjectModel | null;
}
