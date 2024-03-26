import {Language} from '../models/enums/language';

export class SetActiveLanguage {
  public static type = '[AppState] Set Active Language';
  constructor(public payload: Language) {
  }
}

export class ResetToInitialState {
  public static type = '[AppState] Reset To Initial State';
}
