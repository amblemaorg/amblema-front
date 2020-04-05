import { CoordinatorModule } from '../../../models/steps/learning-modules.model';
import { Project } from '../../../models/steps/previous-steps.model';

//todo: ---------- ACTION CLASSES --------------------------------- //
/* export class IncreaseCoins {
    static readonly type = '[ELearning] IncreaseCoins';
    constructor(public coinsCount: number) {}
} */
export class UpdateCoins {
  static readonly type = '[ELearning] UpdateCoins';
  constructor(public coor_id: string) {}
}
//todo: ---------- END ACTION CLASSES ----------------------------- //

//? ---------- MODEL CLASSES --------------------------------- //
export interface CoordinatorStateModel {
  coins: number;
  coordinator_modules: CoordinatorModule[];
  name: string;
  gender: string;
  coor_id: string;
  image: string;
  coordinator_projects: Project[];
  userType: string;
}
//? ---------- END MODEL CLASSES ----------------------------- //