import {ExamFinishReasonEnum} from './enums/exam-finish-reason.enum';
import {TimeModel} from "./time.model";
import {TestQuestionModel} from "./test-question.model";
import {GermanStatesEnum} from "./enums/german-states.enum";

export interface DemoTestInfoModel {
  id: number;
  title: string;
  dateCreated: string;
  dateLastModified: string;
  selectedState: GermanStatesEnum;
  examQuestions: TestQuestionModel[];
  currentQuestionIndex: number;
  examTime: TimeModel;
  isExamFinished: boolean;
  finishReason?: ExamFinishReasonEnum;
}
