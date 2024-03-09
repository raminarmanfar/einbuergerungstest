import {UpdateQuestionPayloadModel} from "../models/update-question-payload.model";

export class SetCurrentTestId {
  public static type = '[DemoTestsState] Set Current Test Id';

  constructor(public payload: number) {
  }
}

export class UpdateTestQuestion {
  public static type = '[DemoTestsState] Update Test Question';

  constructor(public payload: UpdateQuestionPayloadModel) {
  }
}
