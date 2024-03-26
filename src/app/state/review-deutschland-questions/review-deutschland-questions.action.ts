import {PageEvent} from '@angular/material/paginator';

export class SetCurrentQuestionIndex {
  public static type = '[ReviewDeutschlandQuestionsState] Set Current Question Index';

  constructor(public payload: number) {
  }
}

export class SetPaginatorData {
  public static type = '[ReviewDeutschlandQuestionsState] Set Paginator Data';

  constructor(public payload: PageEvent) {
  }
}

export class SetShowAnswersKeys {
  public static type = '[ReviewDeutschlandQuestionsState] Set Show Answers Keys';

  constructor(public payload: boolean) {
  }
}


export class SetIsAllPanelExpanded {
  public static type = '[ReviewDeutschlandQuestionsState] Set Is All Panel Expanded';

  constructor(public payload: boolean) {
  }
}
