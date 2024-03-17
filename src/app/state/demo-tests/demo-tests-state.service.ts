import {Injectable} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {DemoTestsState} from './demo-tests-state';
import {DemoTestInfoModel} from '../../models/demo-test-info.model';
import {
  CreateNewExam,
  DeleteAnExamFromList,
  FinishExam,
  ResetExam,
  SetActiveQuestionsSet, SetCurrentExamPause,
  SetCurrentQuestionIndex,
  SetExamCountdownTimer,
  SetKeepAnswersOnReset,
  SetSelectedDemoTestId,
  UpdateExamTitle,
  UpdateTestQuestion
} from './demo-tests.action';
import {CurrentQuestionIndexPayloadModel, UpdateQuestionPayloadModel} from '../models/payloads.model';
import {QuestionSetTypeEnum} from '../../models/enums/question-set-type.enum';
import {ExamFinishReasonEnum} from '../../models/enums/exam-finish-reason.enum';
import {TimeModel} from '../../models/time.model';
import {GermanStatesEnum} from '../../models/enums/german-states.enum';

@Injectable({providedIn: 'root'})
export class DemoTestsStateService {

  @Select(DemoTestsState.getAllDemoTests) allDemoTests$!: Observable<DemoTestInfoModel[]>;
  @Select(DemoTestsState.getCurrentTest) currentTest$!: Observable<DemoTestInfoModel>;
  @Select(DemoTestsState.getCurrentExamPaused) currentExamPaused$!: Observable<boolean>;
  @Select(DemoTestsState.getCurrentExamRemainingTime) currentExamRemainingTime$!: Observable<TimeModel>;
  @Select(DemoTestsState.getCurrentExamIsFinished) currentExamIsFinished$!: Observable<boolean>;
  @Select(DemoTestsState.getKeepAnswersOnReset) keepAnswersOnReset$!: Observable<boolean>;

  constructor(private store: Store) {
  }

  setActiveQuestionsSet(activeQuestionSet: QuestionSetTypeEnum): void {
    this.store.dispatch(new SetActiveQuestionsSet(activeQuestionSet));
  }

  setExamCountdownTimer(countdownTimer: TimeModel): void {
    this.store.dispatch(new SetExamCountdownTimer(countdownTimer));
  }

  finishExam(finishReason: ExamFinishReasonEnum, examTime: TimeModel): void {
    this.store.dispatch(new FinishExam({finishReason, examTime}));
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

  resetExam(examId: number, title?: string): void {
    this.store.dispatch(new ResetExam({examId, title}));
  }

  createNewExam(examTitle: string, selectedState: GermanStatesEnum): void {
    this.store.dispatch(new CreateNewExam({examTitle, selectedState}));
  }

  setKeepAnswersOnReset(keepAnswersOnReset: boolean): void {
    this.store.dispatch(new SetKeepAnswersOnReset(keepAnswersOnReset));
  }

  setCurrentExamPause(isCurrentExamPaused: boolean): void {
    this.store.dispatch(new SetCurrentExamPause(isCurrentExamPaused));
  }
}
