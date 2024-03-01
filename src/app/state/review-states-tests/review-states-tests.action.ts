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
