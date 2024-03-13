import {Injectable} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {DemoTestsState} from './demo-tests-state';
import {DemoTestInfoModel} from '../../models/demo-test-info.model';
import {
  CreateNewExam,
  DeleteAnExamFromList,
  FinishExam, ResetExam,
  SetActiveQuestionsSet,
  SetCurrentQuestionIndex, SetExamCountdownTimer, SetExamQuestionsCounts,
  SetSelectedDemoTestId, UpdateExamTitle,
  UpdateTestQuestion
} from './demo-tests.action';
import {CurrentQuestionIndexPayloadModel, UpdateQuestionPayloadModel} from '../models/payloads.model';
import {QuestionSetTypeEnum} from '../../models/enums/question-set-type.enum';
import {ExamFinishReasonEnum} from '../../models/enums/exam-finish-reason.enum';
import {TimeModel} from "../../models/time.model";
import {GermanStatesEnum} from '../../models/enums/german-states.enum';

@Injectable({providedIn: 'root'})
export class DemoTestsStateService {

  @Select(DemoTestsState.getAllDemoTests) allDemoTests$!: Observable<DemoTestInfoModel[]>;
  @Select(DemoTestsState.getCurrentTest) currentTest$!: Observable<DemoTestInfoModel>;
  @Select(DemoTestsState.getCurrentTestCorrectAnswersCount) currentTestCorrectAnswersCount$!: Observable<number>;

  constructor(private store: Store) {
  }

  setActiveQuestionsSet(activeQuestionSet: QuestionSetTypeEnum): void {
    this.store.dispatch(new SetActiveQuestionsSet(activeQuestionSet));
  }

  setExamCountdownTimer(countdownTimer: TimeModel): void {
    this.store.dispatch(new SetExamCountdownTimer(countdownTimer));
  }

  setExamLastChanges(): void {
    this.store.dispatch(new SetExamQuestionsCounts());
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

  deleteAnExamFromList(examId: number): void {
    this.store.dispatch(new DeleteAnExamFromList(examId));
  }

  updateExamTitle(examId: number, title: string): void {
    this.store.dispatch(new UpdateExamTitle({examId, title}));
  }

  resetExam(examId: number): void {
    this.store.dispatch(new ResetExam(examId));
  }

  createNewExam(examTitle: string, selectedState: GermanStatesEnum): void {
    this.store.dispatch(new CreateNewExam({examTitle, selectedState}));
  }
}
