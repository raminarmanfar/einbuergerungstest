import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Observable, of} from 'rxjs';
import {ReviewStatesTestsStateModel} from '../models/review-states-tests-state.model';
import {SetCurrentQuestionNo} from './review-states-tests.action';

export const stateDefaultValues: ReviewStatesTestsStateModel = {
  currentStateIndex: 0,
  currentQuestionIndex: 0
};

@State<ReviewStatesTestsStateModel>({name: 'ReviewStatesTestsStateModel', defaults: stateDefaultValues})
@Injectable()
export class ReviewStatesTestsState {

  @Selector()
  static getCurrentQuestionNo(state: ReviewStatesTestsStateModel): number {
    return state.currentQuestionIndex;
  }

  @Action(SetCurrentQuestionNo)
  setActiveLanguage(ctx: StateContext<ReviewStatesTestsStateModel>, {payload}: SetCurrentQuestionNo): Observable<ReviewStatesTestsStateModel> {
    return of(ctx.patchState({currentQuestionIndex: payload}));
  }
}
