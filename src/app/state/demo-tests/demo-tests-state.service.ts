import {Injectable} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {DemoTestsState} from './demo-tests-state';
import {DemoTestInfoModel} from '../../models/demo-test-info.model';
import {
  FinishExam,
  SetActiveQuestionsSet,
  SetCurrentQuestionIndex,
  SetSelectedDemoTestId,
  UpdateTestQuestion
} from './demo-tests.action';
import {CurrentQuestionIndexPayloadModel, UpdateQuestionPayloadModel} from '../models/payloads.model';
import {QuestionSetTypeEnum} from '../../models/enums/question-set-type.enum';
import {ExamFinishReasonEnum} from '../../models/enums/exam-finish-reason.enum';

@Injectable({providedIn: 'root'})
export class DemoTestsStateService {

  @Select(DemoTestsState.getAllDemoTests) allDemoTests$!: Observable<DemoTestInfoModel[]>;
  @Select(DemoTestsState.getCurrentTest) currentTest$!: Observable<DemoTestInfoModel>;

  constructor(private store: Store) {
  }

  setActiveQuestionsSet(activeQuestionSet: QuestionSetTypeEnum): void {
    this.store.dispatch(new SetActiveQuestionsSet(activeQuestionSet));
  }

  finishExam(finishReason: ExamFinishReasonEnum): void {
    this.store.dispatch(new FinishExam(finishReason));
  }

  setSelectedDemoTestId(demoTestId: number): void {
    this.store.dispatch(new SetSelectedDemoTestId(demoTestId));
  }

  setCurrentQuestionIndex(currentQuestionIndexPayloadModel: CurrentQuestionIndexPayloadModel): void {
    this.store.dispatch(new SetCurrentQuestionIndex(currentQuestionIndexPayloadModel));
  }

  updateTestQuestion(updateQuestionInfo: UpdateQuestionPayloadModel): void {
    this.store.dispatch(new UpdateTestQuestion(updateQuestionInfo));
  }
}
