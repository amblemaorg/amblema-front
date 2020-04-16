import { CoordinatorModule, UserData } from '../../../models/steps/learning-modules.model';
import { Project, Step } from '../../../models/steps/previous-steps.model';

//todo: ---------- ACTION CLASSES --------------------------------- //
export class UpdateStepsProgress {
  static readonly type = '[Steps] UpdateStepsProgress';
  constructor(public project_id: string) {}
}
export class SetUserInfo {
  static readonly type = '[Steps] SetUserInfo';
  constructor(public user_id: string, public user_type: string) {}
}
//todo: ---------- END ACTION CLASSES ----------------------------- //

//? ---------- MODEL CLASSES --------------------------------- //
export interface StepStateModel {
    sponsorInfo: any;
    coordinatorInfo: any;
    schoolInfo: any;
    general: string;
    sponsor_id: string;
    school_id: string;
    coordinator_id: string;
    sponsor: string;
    school: string;
    coordinator: string;
    steps: Step[];
}
//? ---------- END MODEL CLASSES ----------------------------- //