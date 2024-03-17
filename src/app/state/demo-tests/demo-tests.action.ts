import {CurrentQuestionIndexPayloadModel, UpdateQuestionPayloadModel} from '../models/payloads.model';
import {QuestionSetTypeEnum} from '../../models/enums/question-set-type.enum';
import {ExamFinishReasonEnum} from '../../models/enums/exam-finish-reason.enum';
import {TimeModel} from '../../models/time.model';
import {GermanStatesEnum} from '../../models/enums/german-states.enum';

export class SetActiveQuestionsSet {
  public static type = '[DemoTestsState] Set Active Questions Set';

  constructor(public payload: QuestionSetTypeEnum) {
  }
}

export class SetExamCountdownTimer {
  public static type = '[DemoTestsState] Set Exam Countdown Timer';

  constructor(public payload: TimeModel) {
  }
}

export class FinishExam {
  public static type = '[DemoTestsState] Finish The Exam';

  constructor(public payload: {finishReason: ExamFinishReasonEnum, examTime: TimeModel}) {
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

export class DeleteAnExamFromList {
  public static type = '[DemoTestsState] Delete An Exam From List';

  constructor(public payload: number) {
  }
}

export class UpdateExamTitle {
  public static type = '[DemoTestsState] Update Exam Title';

  constructor(public payload: {examId: number, title: string}) {
  }
}

export class ResetExam {
  public static type = '[DemoTestsState] Reset Exam';

  constructor(public payload: {examId: number, title?: string}) {
  }
}

export class CreateNewExam {
  public static type = '[DemoTestsState] Create New Exam';

  constructor(public payload: {examTitle: string, selectedState: GermanStatesEnum}) {
  }
}

export class SetKeepAnswersOnReset {
  public static type = '[DemoTestsState] Set Keep Answers On Reset';

  constructor(public payload: boolean) {
  }
}

export class SetCurrentExamPause {
  public static type = '[DemoTestsState] Set Current Exam Pause';

  constructor(public payload: boolean) {
  }
}
