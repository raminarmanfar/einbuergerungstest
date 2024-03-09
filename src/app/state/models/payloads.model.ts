import {TestQuestionModel} from "../../models/test-question.model";
import {QuestionSetTypeEnum} from '../../models/enums/question-set-type.enum';

export interface UpdateQuestionPayloadModel {
  selectedQuestion: TestQuestionModel;
  activeQuestionSet: QuestionSetTypeEnum;
}

export interface CurrentQuestionIndexPayloadModel {
  selectedQuestionIndex: number;
  activeQuestionSet: QuestionSetTypeEnum;
}
