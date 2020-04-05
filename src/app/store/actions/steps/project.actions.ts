import { CoordinatorModule } from '../../../models/steps/learning-modules.model';
import { Project, Step } from '../../../models/steps/previous-steps.model';

//todo: ---------- ACTION CLASSES --------------------------------- //
export class UpdateStepsProgress {
  static readonly type = '[Steps] UpdateStepsProgress';
  constructor(public project_id: string) {}
}
//todo: ---------- END ACTION CLASSES ----------------------------- //

//? ---------- MODEL CLASSES --------------------------------- //
export interface StepStateModel {
    general: string;
    sponsor: string;
    school: string;
    coordinator: string;
    steps: Step[];
}
//? ---------- END MODEL CLASSES ----------------------------- //