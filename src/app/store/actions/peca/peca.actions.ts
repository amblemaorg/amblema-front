import { PecaProjectModel } from '../../states/peca/peca.model';

export class SetUser {
  static readonly type = '[peca] set PecaUser';
  constructor(public payload: any) {}
}

export class SetSelectedProject {
  static readonly type = '[peca] set SelectedProject';
  constructor(public payload: PecaProjectModel) {}
}

export class SetUserPermissions {
  static readonly type = '[peca] set UserPermissions';
  constructor(public payload: any) {}
}
export class FetchPecaContent {
  static readonly type = '[peca] get PecaContent';
  constructor(public payload: string) {}
}

export class ClearPecaState {
  static readonly type = '[peca] clear PecaState';
  constructor() {}
}
