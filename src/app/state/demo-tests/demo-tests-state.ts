import {Injectable} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Observable, of} from 'rxjs';
import {DemoTestsStateModel} from '../models/demo-tests-state.model';
import {DemoTestInfoModel} from '../../models/demo-test-info.model';
import {SetCurrentTestId} from './demo-tests.action';

export const demoTestsStateModel: DemoTestsStateModel = {
  demoTests: [
    {
      id: 1,
      title: 'Test 1, this is my first test.',
      dateCreated: '01.01.2024',
      dateLastModified: '04.01.2024',
      correctAnswered: 3,
      incorrectAnswered: 7,
      done: false,
      score: 33,
      questionsIdsList: [15, 53, 55, 58, 92, 93, 94, 98, 100, 105, 107, 111, 119, 151, 153, 154, 160, 190, 202, 206, 217, 219, 234, 246, 252, 261, 279],
      currentQuestionIndex: 11
    },
    {
      id: 2,
      title: 'Test 2',
      dateCreated: '06.02.2024',
      dateLastModified: '22.02.2024',
      correctAnswered: 12,
      incorrectAnswered: 5,
      done: false,
      score: 67,
      questionsIdsList: [4, 16, 19, 31, 41, 56, 68, 77, 90, 117, 157, 159, 176, 206, 211, 213, 235, 247, 249, 251, 254, 271, 272, 282, 287, 288, 296],
      currentQuestionIndex: 18
    },
    {
      id: 3,
      title: 'Test 3',
      dateCreated: '11.02.2024',
      dateLastModified: '12.04.2024',
      correctAnswered: 19,
      incorrectAnswered: 14,
      done: true,
      score: 98,
      questionsIdsList: [37, 48, 56, 57, 60, 63, 69, 72, 81, 89, 94, 110, 119, 130, 156, 158, 163, 178, 192, 203, 211, 236, 241, 244, 265, 268, 284],
      currentQuestionIndex: 33
    }
  ],
  currentTestId: -1,
  paginatorData: {pageSize: 27, pageIndex: 0, length: 27}
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
  static getPaginatorData(state: DemoTestsStateModel): PageEvent {
    return state.paginatorData;
  }

  @Action(SetCurrentTestId)
  setCurrentTestId(ctx: StateContext<DemoTestsStateModel>, {payload}: SetCurrentTestId): Observable<DemoTestsStateModel> {
    return of(ctx.patchState({currentTestId: payload}));
  }
}
