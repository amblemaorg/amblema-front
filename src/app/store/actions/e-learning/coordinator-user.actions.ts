import { CoordinatorModule } from '../../../services/estructure-classes';

//todo: ---------- ACTION CLASSES --------------------------------- //
export class IncreaseCoins {
    static readonly type = '[ELearning] IncreaseCoins';
    constructor(public coinsCount: number) {}
}
export class UpdateCoins {
  static readonly type = '[ELearning] UpdateCoins';
  constructor(public coor_id: string) {}
}
//todo: ---------- END ACTION CLASSES ----------------------------- //

//? ---------- MODEL CLASSES --------------------------------- //
export interface CoordinatorStateModel {
  coins: number;
  coordinator_modules: CoordinatorModule[];
}
//? ---------- END MODEL CLASSES ----------------------------- //