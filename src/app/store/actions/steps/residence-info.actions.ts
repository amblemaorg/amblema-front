import { StateInfo, MunicipalityInfo } from '../../../models/steps/previous-steps.model';

//todo: ---------- ACTION CLASSES --------------------------------- //
export class UpdateStates {
    static readonly type = '[Steps] UpdateStates';
}
export class UpdateMunicipalities {
    static readonly type = '[Steps] UpdateMunicipalities';
}
//todo: ---------- END ACTION CLASSES ----------------------------- //

//? ---------- MODEL CLASSES --------------------------------- //
export interface ResidenceInfoStateModel {
    states: StateInfo[];
    municipalities: MunicipalityInfo[];
}
//? ---------- END MODEL CLASSES ----------------------------- //