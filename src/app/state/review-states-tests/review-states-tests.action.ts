export class SetCurrentQuestionIndex {
  public static type = '[ReviewStatesTests] Set Current Test Index';

  constructor(public payload: number) {
  }
}

export class SetStateIndex {
  public static type = '[ReviewStatesTests] Set State Index';

  constructor(public payload: number) {
  }
}

export class SetShowAnswersKeys {
  public static type = '[ReviewStatesTests] Set Show Answers Keys';

  constructor(public payload: boolean) {
  }
}

export class SetCollapseAllQuestionsOnStateChange {
  public static type = '[ReviewStatesTests] Set Collapse All Questions On State Change';

  constructor(public payload: boolean) {
  }
}
