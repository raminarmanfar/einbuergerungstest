import {TestQuestionModel} from './test-question.model';

export interface StateQuestionModel extends TestQuestionModel {
  stateId: number;
}
