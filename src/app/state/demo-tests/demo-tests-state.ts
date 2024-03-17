import {Injectable} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {append, patch, removeItem, updateItem} from '@ngxs/store/operators';
import {map, Observable, of} from 'rxjs';
import {DemoTestsStateModel} from '../models/demo-tests-state.model';
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
import {ConstantValues} from '../../utils/constant-values';
import {UtilService} from '../../utils/util.service';
import {TestQuestionModel} from '../../models/test-question.model';
import {StateInfoModel} from '../../models/state-info.model';
import {QuestionSetTypeEnum} from '../../models/enums/question-set-type.enum';
import {ErrorMessages} from '../../utils/error-messages';
import {TimeModel} from '../../models/time.model';

export const demoTestsStateModel: DemoTestsStateModel = {
  currentTestId: -1,
  keepAnswersOnReset: false,
  currentExamPaused: true,
  demoTests: []
};

@State<DemoTestsStateModel>({name: 'DemoTestsState', defaults: demoTestsStateModel})
@Injectable()
export class DemoTestsState {

  constructor(private datePipe: DatePipe) {
  }

  private getDateNow(): string {
    return this.datePipe.transform(new Date(), 'medium') || ''
  }

  @Selector()
  static getAllDemoTests(state: DemoTestsStateModel): DemoTestInfoModel[] {
    return state.demoTests;
  }

  @Selector()
  static getCurrentTest(state: DemoTestsStateModel): DemoTestInfoModel | undefined {
    return state.demoTests.find(test => test.id === state.currentTestId);
  }

  @Selector()
  static getCurrentExamPaused(state: DemoTestsStateModel): boolean {
    return state.currentExamPaused;
  }

  @Selector()
  static getCurrentExamRemainingTime(state: DemoTestsStateModel): TimeModel | undefined {
    const currentTest = state.demoTests.find(test => test.id === state.currentTestId);
    return currentTest ? currentTest.examTime : undefined;
  }

  @Selector()
  static getCurrentExamIsFinished(state: DemoTestsStateModel): boolean | undefined {
    const currentTest = state.demoTests.find(test => test.id === state.currentTestId);
    return currentTest ? currentTest.isExamFinished : undefined;
  }

  @Selector()
  static getKeepAnswersOnReset(state: DemoTestsStateModel): boolean {
    return state.keepAnswersOnReset;
  }

  @Action(SetActiveQuestionsSet)
  setActiveQuestionsSet(ctx: StateContext<DemoTestsStateModel>, {payload}: SetActiveQuestionsSet): Observable<DemoTestsStateModel> {
    return of(ctx.getState()).pipe(
      map(currentState =>
        ctx.setState(
          patch<DemoTestsStateModel>({
            demoTests: updateItem<DemoTestInfoModel>(
              t => t.id === currentState.currentTestId, patch({activeQuestionSet: payload}))
          })
        )
      )
    );
  }

  @Action(SetExamCountdownTimer)
  setExamCountdownTimer(ctx: StateContext<DemoTestsStateModel>, {payload}: SetExamCountdownTimer): Observable<DemoTestsStateModel> {
    return of(ctx.getState()).pipe(
      map(currentState =>
        ctx.setState(
          patch<DemoTestsStateModel>({
            demoTests: updateItem<DemoTestInfoModel>(
              t => t.id === currentState.currentTestId,
              patch({examTime: payload, dateLastModified: this.getDateNow()}))
          })
        )
      )
    );
  }

  @Action(FinishExam)
  finishExam(ctx: StateContext<DemoTestsStateModel>, {payload}: FinishExam): Observable<DemoTestsStateModel> {
    return of(ctx.getState()).pipe(
      map(currentState => {
        return ctx.setState(
          patch<DemoTestsStateModel>({
            demoTests: updateItem<DemoTestInfoModel>(
              t => t.id === currentState.currentTestId,
              patch({
                isExamFinished: true,
                finishReason: payload.finishReason,
                examTime: payload.examTime,
                deutschlandCurrentQuestionIndex: 0,
                selectedStateCurrentQuestionIndex: 0,
                activeQuestionSet: QuestionSetTypeEnum.STATE,
                dateLastModified: this.getDateNow()
              })
            )
          })
        );
      })
    );
  }

  @Action(SetSelectedDemoTestId)
  setSelectedDemoTestId(ctx: StateContext<DemoTestsStateModel>, {payload}: SetSelectedDemoTestId): Observable<DemoTestsStateModel> {
    return of(ctx.patchState({currentTestId: payload}));
  }

  @Action(SetCurrentQuestionIndex)
  setCurrentTestIndex(ctx: StateContext<DemoTestsStateModel>, {payload}: SetCurrentQuestionIndex): Observable<DemoTestsStateModel> {
    return of(ctx.getState()).pipe(
      map(currentState =>
        ctx.setState(
          patch<DemoTestsStateModel>({
            demoTests: updateItem<DemoTestInfoModel>(
              t => t.id === currentState.currentTestId,
              payload.activeQuestionSet === QuestionSetTypeEnum.STATE ?
                patch<DemoTestInfoModel>({selectedStateCurrentQuestionIndex: payload.selectedQuestionIndex}) :
                patch<DemoTestInfoModel>({deutschlandCurrentQuestionIndex: payload.selectedQuestionIndex})
            )
          })
        )
      )
    );
  }

  @Action(UpdateTestQuestion)
  updateTestQuestion(ctx: StateContext<DemoTestsStateModel>, {payload}: UpdateTestQuestion): Observable<DemoTestsStateModel> {
    return of(ctx.getState()).pipe(
      map(currentState =>
        ctx.setState(
          patch<DemoTestsStateModel>({
            demoTests: updateItem<DemoTestInfoModel>(
              t => t.id === currentState.currentTestId,
              payload.activeQuestionSet ? patch<DemoTestInfoModel>({
                dateLastModified: this.getDateNow(),
                deutschlandState: patch<StateInfoModel>({
                  stateTestQuestions: updateItem<TestQuestionModel>(
                    q => q.id === payload.selectedQuestion.id,
                    patch<TestQuestionModel>({userAnswer: payload.selectedQuestion.userAnswer})
                  )
                })
              }) : patch<DemoTestInfoModel>({
                selectedState: patch<StateInfoModel>({
                  stateTestQuestions: updateItem<TestQuestionModel>(
                    q => q.id === payload.selectedQuestion.id,
                    patch<TestQuestionModel>({userAnswer: payload.selectedQuestion.userAnswer})
                  )
                })
              })
            )
          })
        )
      )
    );
  }

  @Action(DeleteAnExamFromList)
  deleteAnExamFromList(ctx: StateContext<DemoTestsStateModel>, {payload}: DeleteAnExamFromList): Observable<DemoTestsStateModel> {
    return of(ctx.setState(
      patch<DemoTestsStateModel>({
        demoTests: removeItem<DemoTestInfoModel>(t => t.id === payload)
      })
    ));
  }

  @Action(UpdateExamTitle)
  updateExamTitle(ctx: StateContext<DemoTestsStateModel>, {payload}: UpdateExamTitle): Observable<DemoTestsStateModel> {
    return of(ctx.setState(
        patch<DemoTestsStateModel>({
          demoTests: updateItem<DemoTestInfoModel>(
            t => t.id === payload.examId,
            patch({title: payload.title, dateLastModified: this.getDateNow()}))
        })
      )
    );
  }

  @Action(ResetExam)
  resetExam(ctx: StateContext<DemoTestsStateModel>, {payload}: ResetExam): Observable<DemoTestsStateModel> {
    return of(ctx.getState()).pipe(
      map(currentState => {
        const currentExam = DemoTestsState.getCurrentTest(currentState);
        if (!currentExam) {
          throw new Error(ErrorMessages.DEMO_TEST_NOT_FOUND);
        }

        return ctx.setState(
          patch<DemoTestsStateModel>({
            demoTests: updateItem<DemoTestInfoModel>(
              t => t.id === payload.examId,
              patch({
                title: payload.title ? payload.title : DemoTestsState.getCurrentTest(ctx.getState())?.title,
                isExamFinished: false,
                examTime: {minutes: 60, seconds: 0},
                selectedStateCurrentQuestionIndex: 0,
                deutschlandCurrentQuestionIndex: 0,
                activeQuestionSet: QuestionSetTypeEnum.STATE,
                finishReason: undefined,
                dateLastModified: this.getDateNow(),
                selectedState: patch<StateInfoModel>({
                  stateTestQuestions:
                    currentState.keepAnswersOnReset ?
                      currentExam.selectedState.stateTestQuestions :
                      UtilService.resetUserAnswersFromQuestions(currentExam.selectedState.stateTestQuestions)
                }),
                deutschlandState: patch<StateInfoModel>({
                  stateTestQuestions:
                    currentState.keepAnswersOnReset ?
                      currentExam.deutschlandState.stateTestQuestions :
                      UtilService.resetUserAnswersFromQuestions(currentExam.deutschlandState.stateTestQuestions)
                })
              })
            )
          })
        );
      })
    );
  }

  @Action(CreateNewExam)
  createNewExamTitle(ctx: StateContext<DemoTestsStateModel>, {payload}: CreateNewExam): Observable<DemoTestsStateModel> {
    return of(ctx.getState().demoTests).pipe(
      map(currentStateDemoTests => {
        const maxId = currentStateDemoTests.length > 0 ?
          currentStateDemoTests.reduce((maxObj, e) =>
            e.id > maxObj.id ? e : maxObj, currentStateDemoTests[0]).id : 0;

        return ctx.setState(
          patch<DemoTestsStateModel>({
            demoTests: append<DemoTestInfoModel>([{
              id: maxId + 1,
              title: payload.examTitle,
              isExamFinished: false,
              finishReason: undefined,
              activeQuestionSet: QuestionSetTypeEnum.STATE,
              examTime: {minutes: 60, seconds: 0},
              dateCreated: this.getDateNow(),
              dateLastModified: this.getDateNow(),
              selectedState: {
                ...UtilService.getStateByName(payload.selectedState),
                stateTestQuestions: UtilService.cloneDeep(
                  UtilService.resetUserAnswersFromQuestions(
                    UtilService.getRandomStateQuestions(payload.selectedState)
                  )
                )
              },
              selectedStateCurrentQuestionIndex: 0,
              deutschlandState: {
                ...ConstantValues.DEUTSCHLAND_STATE,
                stateTestQuestions: UtilService.cloneDeep(
                  UtilService.resetUserAnswersFromQuestions(
                    UtilService.getRandomDeutschlandDemoTestQuestions()
                  )
                )
              },
              deutschlandCurrentQuestionIndex: 0
            }])
          })
        );
      })
    );
  }

  @Action(SetKeepAnswersOnReset)
  setKeepAnswersOnReset(ctx: StateContext<DemoTestsStateModel>, {payload}: SetKeepAnswersOnReset): Observable<DemoTestsStateModel> {
    return of(ctx.patchState({keepAnswersOnReset: payload}));
  }

  @Action(SetCurrentExamPause)
  setCurrentExamPause(ctx: StateContext<DemoTestsStateModel>, {payload}: SetCurrentExamPause): Observable<DemoTestsStateModel> {
    return of(ctx.patchState({currentExamPaused: payload}));
  }
}
