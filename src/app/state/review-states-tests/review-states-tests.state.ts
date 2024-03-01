import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Observable, of} from 'rxjs';
import {ReviewStatesTestsStateModel} from '../models/review-states-tests-state.model';
import {SetCurrentQuestionIndex, SetStateIndex} from './review-states-tests.action';

export const stateDefaultValues: ReviewStatesTestsStateModel = {
  currentQuestionIndex: -1,
  selectedStateIndex: -1
};

@State<ReviewStatesTestsStateModel>({name: 'ReviewStatesTestsStateModel', defaults: stateDefaultValues})
@Injectable()
export class ReviewStatesTestsState {

  @Selector()
  static getCurrentQuestionIndex(state: ReviewStatesTestsStateModel): number {
    return state.currentQuestionIndex;
  }

  @Selector()
  static getSelectedStateIndex(state: ReviewStatesTestsStateModel): number {
    return state.selectedStateIndex;
  }

  @Action(SetCurrentQuestionIndex)
  setCurrentQuestionIndex(ctx: StateContext<ReviewStatesTestsStateModel>, {payload}: SetCurrentQuestionIndex): Observable<ReviewStatesTestsStateModel> {
    return of(ctx.patchState({currentQuestionIndex: payload}));
  }

  @Action(SetStateIndex)
  setStateIndex(ctx: StateContext<ReviewStatesTestsStateModel>, {payload}: SetStateIndex): Observable<ReviewStatesTestsStateModel> {
    return of(ctx.patchState({selectedStateIndex: payload}));
  }
}
