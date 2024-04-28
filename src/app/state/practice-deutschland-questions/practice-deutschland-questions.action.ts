import {PageEvent} from '@angular/material/paginator';
import {TestQuestionModel} from '../../models/test-question.model';

export class SetCurrentQuestionIndex {
  public static type = '[PracticeDeutschlandQuestionsState] Set Current Question Index';

  constructor(public payload: number) {
  }
}

export class SetPaginatorData {
  public static type = '[PracticeDeutschlandQuestionsState] Set Paginator Data';

  constructor(public payload: PageEvent) {
  }
}

export class SwitchShowHideResults {
  public static type = '[PracticeDeutschlandQuestionsState] Switch Show / Hide Results';
}


export class SetIsAllPanelExpanded {
  public static type = '[PracticeDeutschlandQuestionsState] Set Is All Panel Expanded';

  constructor(public payload: boolean) {
  }
}

export class ResetReviewDeutschlandQuestionsToInitialState {
  public static type = '[PracticeDeutschlandQuestionsState] Reset Review Deutschland Questions To Initial State';
}

export class SetUserAnswer {
  public static type = '[PracticeDeutschlandQuestionsState] Set User Answer';

  constructor(public payload: TestQuestionModel) {
  }
}

export class ResetPractice {
  public static type = '[PracticeDeutschlandQuestionsState] Reset Practice';
}
