import { PecaProjectModel } from "../../states/peca/peca.model";

export class SetUser {
  static readonly type = "[peca] set PecaUser";
  constructor(public payload: any) {}
}

export class SetSelectedProject {
  static readonly type = "[peca] set SelectedProject";
  constructor(public payload: PecaProjectModel) {}
}

export class SetUserPermissions {
  static readonly type = "[peca] set UserPermissions";
  constructor(public payload: any) {}
}
export class FetchPecaContent {
  static readonly type = "[peca] get PecaContent";
  constructor(public payload: string) {}
}

export class FetchProject {
  static readonly type = "[peca] get Project";
  constructor(public payload: any) {}
}

export class ClearPecaState {
  static readonly type = "[peca] clear PecaState";
  constructor() {}
}

export class SetLapsePlanningRequestData {
  static readonly type = "[peca] Set LapsePlanning Data To Send Request";
  constructor(public payload: { file?: string; date?: string; status?: string }) {}
}

export class UpdateLapsePlanningFile {
  static readonly type = "[peca] Update Lapse PLanning File";
  constructor(
    public payload: {
      file?: any;
      lapseNumber: string;
    }
  ) {}
}

export class CancelLapsePlanningFile {
  static readonly type = "[peca] Cancel Lapse Planning File ";
  constructor(
    public payload: {
      lapseNumber: string;
    }
  ) {}
}

export class UpdateLapsePlanningDateAndStatus {
  static readonly type = "[peca] Update Lapse PLannig Date and Status";
  constructor(
    public payload: {
      lapseNumber: string;
    }
  ) {}
}

export class UpdateInitialWorkshop {
  static readonly type = "[peca] Update Initial Workshop";
  constructor(public payload: any) {}
}

export class UpdateInitialWorkshopImages {
  static readonly type = "[peca] Update Initial Workshop Images";
  constructor(public payload: any) {}
}

export class CancelInitialWorkshopImages {
  static readonly type = "[peca] Cancel Initial Workshop Images";
  constructor(
    public payload: {
      lapseNumber: string;
    }
  ) {}
}

export class SetInitialWorkshopRequestData {
  static readonly type = "[peca] Set Initial Workshop Request Data";
  constructor(public payload: any) {}
}

export class AddImageToInitialWorkshopRequestData {
  static readonly type = "[peca] Add Image To Initial Workshop Request Data";
  constructor(public payload: { id: string; description: string; image: string }) {}
}

export class RemoveImageFromInitialWorkshopRequestData {
  static readonly type = "[peca] Remove Image From Initial Workshop Request Data";
  constructor(public payload: { imageSource: string }) {}
}

export class ClearInitialWorkshopRequestData {
  static readonly type = "[peca] Clear Initial Workshop Request Data";
  constructor(public payload: any) {}
}

export class AddImageToSchoolActivitiesRequestData {
  static readonly type = "[peca] Add Image To School Activities Request Data";
  constructor(public payload: { description?: string; image: string }) {}
}

export class RemoveImageFromSchoolActivitiesRequestData {
  static readonly type = "[peca] Remove Image From School Activities Request Data";
  constructor(public payload: { imageSource: string }) {}
}

export class ClearSchoolActivitiesRequestData {
  static readonly type = "[peca] Clear School Activities Request Data";
  constructor(public payload: any) {}
}

export class CancelSchoolActivitiesRequest {
  static readonly type = "[peca] Cancel School Activities Request";
  constructor() {}
}

export class UpdateSchoolActivitiesRequest {
  static readonly type = "[peca] Update School Activities Request";
  constructor() {}
}
