import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {patch, updateItem} from '@ngxs/store/operators';
import {map, Observable, of} from 'rxjs';
import {DemoTestsStateModel} from '../models/demo-tests-state.model';
import {DemoTestInfoModel} from '../../models/demo-test-info.model';
import {
  FinishExam,
  SetActiveQuestionsSet,
  SetCurrentQuestionIndex,
  SetSelectedDemoTestId,
  UpdateTestQuestion
} from './demo-tests.action';
import {ConstantValues} from '../../utils/constant-values';
import {GermanStatesEnum} from '../../models/enums/german-states.enum';
import {UtilService} from '../../utils/util.service';
import {TestQuestionModel} from '../../models/test-question.model';
import {StateInfoModel} from '../../models/state-info.model';
import {QuestionSetTypeEnum} from '../../models/enums/question-set-type.enum';
import {ExamFinishReasonEnum} from '../../models/enums/exam-finish-reason.enum';

export const demoTestsStateModel: DemoTestsStateModel = {
  currentTestId: -1,
  demoTests: [
    {
      id: 1,
      title: 'Bayern test.',
      dateCreated: '01.01.2024',
      dateLastModified: '04.01.2024',
      correctAnswered: 0,
      incorrectAnswered: 0,
      score: 0,
      activeQuestionSet: QuestionSetTypeEnum.STATE,
      deutschlandState: {
        ...ConstantValues.DEUTSCHLAND_STATE,
        stateTestQuestions: UtilService.getRandomDeutschlandDemoTestQuestions()
      },
      deutschlandCurrentQuestionIndex: 0,
      selectedState: {
        ...ConstantValues.GERMAN_STATES[1],
        stateTestQuestions: UtilService.getRandomStateQuestions(GermanStatesEnum.BAVARIA)
      },
      selectedStateCurrentQuestionIndex: 0,
      isExamFinished: false,
      examTime: {minutes: 60, seconds: 0}
    },
    {
      id: 2,
      title: 'Test 2, this is my first test.',
      dateCreated: '01.01.2024',
      dateLastModified: '04.01.2024',
      correctAnswered: 3,
      incorrectAnswered: 7,
      score: 33,
      activeQuestionSet: QuestionSetTypeEnum.DEUTSCHLAND,
      deutschlandState: {
        ...ConstantValues.DEUTSCHLAND_STATE,
        stateTestQuestions: UtilService.getRandomDeutschlandDemoTestQuestions()
      },
      deutschlandCurrentQuestionIndex: 11,
      selectedState: {
        ...ConstantValues.GERMAN_STATES[1],
        stateTestQuestions: UtilService.getRandomStateQuestions(GermanStatesEnum.BAVARIA)
      },
      selectedStateCurrentQuestionIndex: -1,
      isExamFinished: false,
      examTime: {minutes: 18, seconds: 28}
    },
    {
      id: 3,
      title: 'Test 2',
      dateCreated: '06.02.2024',
      dateLastModified: '22.02.2024',
      correctAnswered: 12,
      incorrectAnswered: 5,
      score: 67,
      activeQuestionSet: QuestionSetTypeEnum.STATE,
      deutschlandState: {
        ...ConstantValues.DEUTSCHLAND_STATE,
        stateTestQuestions: UtilService.getRandomDeutschlandDemoTestQuestions()
      },
      deutschlandCurrentQuestionIndex: 18,
      selectedState: {
        ...ConstantValues.GERMAN_STATES[9],
        stateTestQuestions: UtilService.getRandomStateQuestions(GermanStatesEnum.NORTH_RHINE_WESTPHALIA)
      },
      selectedStateCurrentQuestionIndex: 1,
      isExamFinished: true,
      finishReason: ExamFinishReasonEnum.TIME_OVER,
      examTime: {minutes: 0, seconds: 0}
    },
    {
      id: 4,
      title: 'Test 3',
      dateCreated: '11.02.2024',
      dateLastModified: '12.04.2024',
      correctAnswered: 19,
      incorrectAnswered: 14,
      score: 98,
      activeQuestionSet: QuestionSetTypeEnum.STATE,
      deutschlandState: {
        ...ConstantValues.DEUTSCHLAND_STATE,
        stateTestQuestions: UtilService.getRandomDeutschlandDemoTestQuestions()
      },
      deutschlandCurrentQuestionIndex: 33,
      selectedState: {
        ...ConstantValues.GERMAN_STATES[8],
        stateTestQuestions: UtilService.getRandomStateQuestions(GermanStatesEnum.NIEDERSACHSEN)
      },
      selectedStateCurrentQuestionIndex: 3,
      isExamFinished: false,
      examTime: {minutes: 2, seconds: 5}
    }
  ]
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

  @Action(FinishExam)
  finishExam(ctx: StateContext<DemoTestsStateModel>, {payload}: FinishExam): Observable<DemoTestsStateModel> {
    return of(ctx.getState()).pipe(
      map(currentState =>
        ctx.setState(
          patch<DemoTestsStateModel>({
            demoTests: updateItem<DemoTestInfoModel>(
              t => t.id === currentState.currentTestId,
              patch({
                isExamFinished: true,
                finishReason: payload,
                deutschlandCurrentQuestionIndex: 0,
                selectedStateCurrentQuestionIndex: 0,
                activeQuestionSet: QuestionSetTypeEnum.STATE
              })
            )
          })
        )
      )
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
}
