import {StateChangeExpansionPanelBehaviorEnum} from '../../models/enums/state-change-expansion-panel-behavior.enum';

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

export class SetStateChangeExpansionPanelBehavior {
  public static type = '[ReviewStatesTests] Set State Change Expansion Panel Behavior';

  constructor(public payload: StateChangeExpansionPanelBehaviorEnum) {
  }
}

export class ResetReviewStatesQuestionsToInitialState {
  public static type = '[ReviewDeutschlandQuestionsState] Reset Review States Questions To Initial State';
}
