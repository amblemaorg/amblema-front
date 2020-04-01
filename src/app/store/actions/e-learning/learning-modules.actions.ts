import { Module } from '../../../models/steps/learning-modules.model';

//todo: ---------- ACTION CLASSES --------------------------------- //
export class UpdateModulesTotal {
    static readonly type = '[ELearning] UpdateModulesTotal';
}
//todo: ---------- END ACTION CLASSES ----------------------------- //

//? ---------- MODEL CLASSES --------------------------------- //
export interface ModuleStateModel {
    modulesTotal: number;
    modules: Module[];
}
//? ---------- END MODEL CLASSES ----------------------------- //