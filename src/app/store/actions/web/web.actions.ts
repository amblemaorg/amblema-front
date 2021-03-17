export class SetIsLoadingPage {
  static readonly type = "[web] set isLoadingPage";
  constructor(public payload: boolean | string) {}
}
