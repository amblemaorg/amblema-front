export interface PecaObjectModel {
  name?: string;
  id: string;
}

export interface PecaProjectModel {
  code?: string;
  coordinator?: PecaObjectModel;
  id: string;
  peca?: any[];
  phase?: string;
  school?: PecaObjectModel;
  sponsor?: PecaObjectModel;
}

export interface PecaUserModel {
  activeSchoolYear: PecaObjectModel;
  email?: string;
  id: string;
  name?: string;
  permissions: string[];
  projects?: PecaProjectModel[];
  userType?: string;
}

export interface PecaModel {
  createdAt?: string;
  id: string;
  lapse1?: Object;
  lapse2?: Object;
  lapse3?: Object;
  project?: PecaProjectModel;
  schedule?: any[];
  school?: Object;
  schoolYearName?: string;
  updatedAt?: string;
}

// Data models for request to backend
export interface PecaLapsePlanningRequest {
  attachedFile?: string;
  meetingDate?: string;
  status?: string;
}

export interface PecaInitialWorkshopRequest {
  description: string;
  images?: { id: string; description: string; image: string }[];
}

export interface PecaSchoolActivitiesImagesRequest {
  images?: { description?: string; image?: string }[];
}

export interface PecaSpecialActivityRequest {
  activityDate?: string;
  total?: number;
  itemsActivities?: any[];
}

export interface PecaStateModel {
  user?: PecaUserModel;
  content?: PecaModel | null;
  selectedProject?: PecaProjectModel | null;
  userPermissions?: string[];
  pecaContentRequesting?: boolean;
  lapsePlanningRequest?: PecaLapsePlanningRequest;
  initialWorkshopImagesRequest?: PecaInitialWorkshopRequest;
  schoolActivitiesImagesRequest?: PecaSchoolActivitiesImagesRequest;
  specialActivityRequest?: PecaSpecialActivityRequest;
}
