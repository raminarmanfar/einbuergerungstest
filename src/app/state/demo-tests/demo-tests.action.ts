import {CurrentQuestionIndexPayloadModel, UpdateQuestionPayloadModel} from '../models/payloads.model';
import {QuestionSetTypeEnum} from '../../models/enums/question-set-type.enum';
import {ExamFinishReasonEnum} from '../../models/enums/exam-finish-reason.enum';

export class SetActiveQuestionsSet {
  public static type = '[DemoTestsState] Set Active Questions Set';

  constructor(public payload: QuestionSetTypeEnum) {
  }
}

export class FinishExam {
  public static type = '[DemoTestsState] Finish The Exam';

  constructor(public payload: ExamFinishReasonEnum) {
  }
}

export class SetSelectedDemoTestId {
  public static type = '[DemoTestsState] Set Selected Demo Test Id';

  constructor(public payload: number) {
  }
}

export class SetCurrentQuestionIndex {
  public static type = '[DemoTestsState] Set Current Question Index';

  constructor(public payload: CurrentQuestionIndexPayloadModel) {
  }
}

export class UpdateTestQuestion {
  public static type = '[DemoTestsState] Update Test Question';

  constructor(public payload: UpdateQuestionPayloadModel) {
  }
}
