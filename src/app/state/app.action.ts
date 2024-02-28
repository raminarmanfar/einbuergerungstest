import {Language} from '../models/enums/language';

export class SetActiveLanguage {
  public static type = '[AppState] Set Active Language';
  constructor(public payload: Language) {
  }
}
