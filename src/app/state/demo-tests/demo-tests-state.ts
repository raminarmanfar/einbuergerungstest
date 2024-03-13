import {Injectable} from '@angular/core';
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
  SetActiveQuestionsSet,
  SetCurrentQuestionIndex,
  SetExamCountdownTimer,
  SetExamQuestionsCounts,
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

export const demoTestsStateModel: DemoTestsStateModel = {
  currentTestId: -1,
  demoTests: []
};

@State<DemoTestsStateModel>({name: 'DemoTestsState', defaults: demoTestsStateModel})
@Injectable()
export class DemoTestsState {

  @Selector()
  static getAllDemoTests(state: DemoTestsStateModel): DemoTestInfoModel[] {
    return state.demoTests;
  }

  @Selector()
  static getCurrentTest(state: DemoTestsStateModel): DemoTestInfoModel | undefined {
    return state.demoTests.find(test => test.id === state.currentTestId);
  }

  @Selector()
  static getCurrentTestCorrectAnswersCount(state: DemoTestsStateModel): number {
    const currentTest = state.demoTests.find(test => test.id === state.currentTestId);
    if (currentTest && currentTest.isExamFinished) {
      const correctDeutschlandQuestions = currentTest.deutschlandState.stateTestQuestions.filter(q => q.correctAnswer === q.userAnswer).length;
      const correctStateQuestions = currentTest.selectedState.stateTestQuestions.filter(q => q.correctAnswer === q.userAnswer).length;
      return correctDeutschlandQuestions + correctStateQuestions;
    }
    return 0;
  }

  @Selector()
  static getCurrentTestUnAnswersCount(state: DemoTestsStateModel): number {
    const currentTest = state.demoTests.find(test => test.id === state.currentTestId);
    if (currentTest) {
      const anAnsweredDeutschlandQuestions = currentTest.deutschlandState.stateTestQuestions.filter(q => !q.userAnswer).length;
      const unAnsweredStateQuestions = currentTest.selectedState.stateTestQuestions.filter(q => !q.userAnswer).length;
      return anAnsweredDeutschlandQuestions + unAnsweredStateQuestions;
    }
    return 0;
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
              t => t.id === currentState.currentTestId, patch({examTime: payload}))
          })
        )
      )
    );
  }

  @Action(SetExamQuestionsCounts)
  setExamLastChanges(ctx: StateContext<DemoTestsStateModel>): Observable<DemoTestsStateModel> {
    return of(ctx.getState()).pipe(
      map(currentState => {
        const correctAnswered = DemoTestsState.getCurrentTestCorrectAnswersCount(ctx.getState());
        const unAnswered = DemoTestsState.getCurrentTestUnAnswersCount(ctx.getState());
        return ctx.setState(
          patch<DemoTestsStateModel>({
            demoTests: updateItem<DemoTestInfoModel>(
              t => t.id === currentState.currentTestId,
              patch({
                correctAnswered,
                incorrectAnswered: ConstantValues.TOTAL_EXAM_QUESTIONS - (correctAnswered + unAnswered),
                unAnswered
              })
            )
          })
        );
      })
    );
  }

  @Action(FinishExam)
  finishExam(ctx: StateContext<DemoTestsStateModel>, {payload}: FinishExam): Observable<DemoTestsStateModel> {
    return of(ctx.getState()).pipe(
      map(currentState => {
        const correctAnswered = DemoTestsState.getCurrentTestCorrectAnswersCount(ctx.getState());
        const unAnswered = DemoTestsState.getCurrentTestUnAnswersCount(ctx.getState());
        return ctx.setState(
          patch<DemoTestsStateModel>({
            demoTests: updateItem<DemoTestInfoModel>(
              t => t.id === currentState.currentTestId,
              patch({
                isExamFinished: true,
                finishReason: payload,
                correctAnswered,
                incorrectAnswered: ConstantValues.TOTAL_EXAM_QUESTIONS - (correctAnswered + unAnswered),
                unAnswered,
                deutschlandCurrentQuestionIndex: 0,
                selectedStateCurrentQuestionIndex: 0,
                activeQuestionSet: QuestionSetTypeEnum.STATE
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
            patch({title: payload.title, dateLastModified: 'today'}))
        })
      )
    );
  }

  @Action(ResetExam)
  resetExam(ctx: StateContext<DemoTestsStateModel>, {payload}: ResetExam): Observable<DemoTestsStateModel> {
    return of(ctx.setState(
        patch<DemoTestsStateModel>({
          demoTests: updateItem<DemoTestInfoModel>(
            t => t.id === payload,
            patch({
              isExamFinished: false,
              examTime: {minutes: 60, seconds: 0},
              selectedStateCurrentQuestionIndex: 0,
              deutschlandCurrentQuestionIndex: 0,
              activeQuestionSet: QuestionSetTypeEnum.STATE,
              correctAnswered: 0,
              incorrectAnswered: 0,
              unAnswered: ConstantValues.TOTAL_EXAM_QUESTIONS,
              finishReason: undefined,
              dateLastModified: 'today'
            })
          )
        })
      )
    );
  }

  @Action(CreateNewExam)
  createNewExamTitle(ctx: StateContext<DemoTestsStateModel>, {payload}: CreateNewExam): Observable<DemoTestsStateModel> {
    const selectedState = ConstantValues.GERMAN_STATES.find(s => s.name === payload.selectedState);
    if (!selectedState) {
      throw new Error(ErrorMessages.STATE_NOT_FOUND);
    }

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
              correctAnswered: 0,
              incorrectAnswered: 0,
              unAnswered: ConstantValues.TOTAL_EXAM_QUESTIONS,
              dateCreated: 'today',
              dateLastModified: 'today',
              selectedState: {
                ...selectedState,
                stateTestQuestions: UtilService.getRandomStateQuestions(payload.selectedState)
              },
              selectedStateCurrentQuestionIndex: 0,
              deutschlandState: {
                ...ConstantValues.DEUTSCHLAND_STATE,
                stateTestQuestions: UtilService.getRandomDeutschlandDemoTestQuestions()
              },
              deutschlandCurrentQuestionIndex: 0
            }])
          })
        )
      })
    );
  }
}
