import {TestQuestionModel} from "../../models/test-question.model";

export interface UpdateQuestionPayloadModel {
  selectedQuestion: TestQuestionModel;
  isDeutschlandQuestion: boolean;
}
