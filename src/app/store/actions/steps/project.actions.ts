import { Step } from '../../../models/steps/previous-steps.model';

//todo: ---------- ACTION CLASSES --------------------------------- //
export class UpdateStepsProgress {
  static readonly type = '[Steps] UpdateStepsProgress';
  constructor(public project_id: string) {}
}
export class ClearStepsProgress {
  static readonly type = '[Steps] ClearStepsProgress';
}
//todo: ---------- END ACTION CLASSES ----------------------------- //

//? ---------- MODEL CLASSES --------------------------------- //
export interface StepStateModel {
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