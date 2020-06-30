import {
  CoordinatorModule,
  UProject
} from "../../../models/steps/learning-modules.model";
import { Project } from "../../../models/steps/previous-steps.model";

//todo: ---------- ACTION CLASSES --------------------------------- //
/* export class IncreaseCoins {
    static readonly type = '[ELearning] IncreaseCoins';
    constructor(public coinsCount: number) {}
} */
export class UpdateUserInfo {
  static readonly type = "[ELearning] UpdateUserInfo";
  constructor(public user_id: string, public user_type: number) {}
}

export class SetCurrentUser {
  static readonly type = "[Peca] SetCurrentUser";
  constructor(public user_id: string, public user_type: number) {}
}
export class ClearUserInfo {
  static readonly type = "[ELearning] ClearUserInfo";
}
//todo: ---------- END ACTION CLASSES ----------------------------- //

//? ---------- MODEL CLASSES --------------------------------- //
export interface UserStateModel {
  coins: number;
  coordinator_modules: CoordinatorModule[];
  name: string;
  email: string;
  gender: string;
  user_id: string;
  image: string;
  user_projects: UProject[];
  userType: string;
}
//? ---------- END MODEL CLASSES ----------------------------- //
