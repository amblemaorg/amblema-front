import { Module } from '../../../models/steps/learning-modules.model';

//todo: ---------- ACTION CLASSES --------------------------------- //
export class UpdateModulesTotal {
    static readonly type = '[ELearning] UpdateModulesTotal';
}
export class ClearModulesTotal {
    static readonly type = '[ELearning] ClearModulesTotal';
}
//todo: ---------- END ACTION CLASSES ----------------------------- //

//? ---------- MODEL CLASSES --------------------------------- //
export interface ModuleStateModel {
    modulesTotal: number;
    modules: Module[];
}
//? ---------- END MODEL CLASSES ----------------------------- //