import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Observable, of} from 'rxjs';
import {DemoTestsStateModel} from '../models/demo-tests-state.model';
import {DemoTestInfoModel} from '../../models/demo-test-info.model';
import {SetCurrentTestId} from './demo-tests.action';
import {ConstantValues} from '../../utils/constant-values';
import {GermanStatesEnum} from '../../models/enums/german-states.enum';
import {UtilService} from '../../utils/util.service';

export const demoTestsStateModel: DemoTestsStateModel = {
  demoTests: [
    {
      id: 1,
      title: 'Bayern test.',
      dateCreated: '01.01.2024',
      dateLastModified: '04.01.2024',
      correctAnswered: 0,
      incorrectAnswered: 0,
      done: false,
      score: 0,
      deutschlandState: {
        ...ConstantValues.DEUTSCHLAND_STATES,
        stateTests: UtilService.getRandomDeutschlandDemoTestQuestions()
      },
      deutschlandCurrentQuestionIndex: 0,
      selectedState: {
        ...ConstantValues.GERMAN_STATES[1],
        stateTests: UtilService.getRandomStateQuestions(GermanStatesEnum.BAVARIA)
      },
      selectedStateCurrentQuestionIndex: 0
    },
    {
      id: 2,
      title: 'Test 2, this is my first test.',
      dateCreated: '01.01.2024',
      dateLastModified: '04.01.2024',
      correctAnswered: 3,
      incorrectAnswered: 7,
      done: false,
      score: 33,
      deutschlandState: {
        ...ConstantValues.DEUTSCHLAND_STATES,
        stateTests: UtilService.getRandomDeutschlandDemoTestQuestions()
      },
      deutschlandCurrentQuestionIndex: 11,
      selectedState: {
        ...ConstantValues.GERMAN_STATES[1],
        stateTests: UtilService.getRandomStateQuestions(GermanStatesEnum.BAVARIA)
      },
      selectedStateCurrentQuestionIndex: -1
    },
    {
      id: 3,
      title: 'Test 2',
      dateCreated: '06.02.2024',
      dateLastModified: '22.02.2024',
      correctAnswered: 12,
      incorrectAnswered: 5,
      done: false,
      score: 67,
      deutschlandState: {
        ...ConstantValues.DEUTSCHLAND_STATES,
        stateTests: UtilService.getRandomDeutschlandDemoTestQuestions()
      },
      deutschlandCurrentQuestionIndex: 18,
      selectedState: {
        ...ConstantValues.GERMAN_STATES[9],
        stateTests: UtilService.getRandomStateQuestions(GermanStatesEnum.NORTH_RHINE_WESTPHALIA)
      },
      selectedStateCurrentQuestionIndex: 1
    },
    {
      id: 4,
      title: 'Test 3',
      dateCreated: '11.02.2024',
      dateLastModified: '12.04.2024',
      correctAnswered: 19,
      incorrectAnswered: 14,
      done: true,
      score: 98,
      deutschlandState: {
        ...ConstantValues.DEUTSCHLAND_STATES,
        stateTests: UtilService.getRandomDeutschlandDemoTestQuestions()
      },
      deutschlandCurrentQuestionIndex: 33,
      selectedState: {
        ...ConstantValues.GERMAN_STATES[8],
        stateTests: UtilService.getRandomStateQuestions(GermanStatesEnum.NIEDERSACHSEN)
      },
      selectedStateCurrentQuestionIndex: 3
    }
  ],
  currentTestId: -1
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

  @Action(SetCurrentTestId)
  setCurrentTestId(ctx: StateContext<DemoTestsStateModel>, {payload}: SetCurrentTestId): Observable<DemoTestsStateModel> {
    return of(ctx.patchState({currentTestId: payload}));
  }
}
