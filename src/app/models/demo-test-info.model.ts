import {StateInfoModel} from './state-info.model';
import {QuestionSetTypeEnum} from './enums/question-set-type.enum';
import {ExamFinishReasonEnum} from './enums/exam-finish-reason.enum';
import {TimeModel} from "./time.model";

export interface DemoTestInfoModel {
  id: number;
  title: string;
  dateCreated: string;
  dateLastModified: string;
  correctAnswered: number;
  incorrectAnswered: number;
  score: number;
  activeQuestionSet: QuestionSetTypeEnum;
  deutschlandState: StateInfoModel;
  deutschlandCurrentQuestionIndex: number;
  selectedState: StateInfoModel;
  selectedStateCurrentQuestionIndex: number;
  isExamFinished: boolean;
  finishReason?: ExamFinishReasonEnum;
  examTime: TimeModel;
}
