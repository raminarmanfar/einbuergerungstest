import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Observable, of} from 'rxjs';
import {ReviewStatesTestsStateModel} from '../models/review-states-tests-state.model';
import {
  SetCurrentQuestionIndex,
  SetShowAnswersKeys,
  SetStateChangeExpansionPanelBehavior,
  SetStateIndex
} from './review-states-tests.action';
import {StateChangeExpansionPanelBehaviorEnum} from '../../models/enums/state-change-expansion-panel-behavior.enum';

export const stateDefaultValues: ReviewStatesTestsStateModel = {
  currentQuestionIndex: -1,
  selectedStateIndex: -1,
  showAnswersKeys: true,
  stateChangeExpansionPanelBehavior: StateChangeExpansionPanelBehaviorEnum.SHOW_CURRENT_QUESTION
};

@State<ReviewStatesTestsStateModel>({name: 'ReviewStatesTestsState', defaults: stateDefaultValues})
@Injectable()
export class ReviewStatesTestsState {

  @Selector()
  static getAllSubState(state: ReviewStatesTestsStateModel): ReviewStatesTestsStateModel {
    return state;
  }

  @Selector()
  static getCurrentQuestionIndex(state: ReviewStatesTestsStateModel): number {
    return state.currentQuestionIndex;
  }

  @Selector()
  static getSelectedStateIndex(state: ReviewStatesTestsStateModel): number {
    return state.selectedStateIndex;
  }

  @Selector()
  static getShowAnswersKeys(state: ReviewStatesTestsStateModel): boolean {
    return state.showAnswersKeys;
  }

  @Action(SetCurrentQuestionIndex)
  setCurrentQuestionIndex(ctx: StateContext<ReviewStatesTestsStateModel>, {payload}: SetCurrentQuestionIndex): Observable<ReviewStatesTestsStateModel> {
    return of(ctx.patchState({currentQuestionIndex: payload}));
  }

  @Action(SetStateIndex)
  setStateIndex(ctx: StateContext<ReviewStatesTestsStateModel>, {payload}: SetStateIndex): Observable<ReviewStatesTestsStateModel> {
    return of(ctx.patchState({selectedStateIndex: payload}));
  }

  @Action(SetShowAnswersKeys)
  setShowAnswersKeys(ctx: StateContext<ReviewStatesTestsStateModel>, {payload}: SetShowAnswersKeys): Observable<ReviewStatesTestsStateModel> {
    return of(ctx.patchState({showAnswersKeys: payload}));
  }

  @Action(SetStateChangeExpansionPanelBehavior)
  setStateChangeExpansionPanelBehavior(ctx: StateContext<ReviewStatesTestsStateModel>, {payload}: SetStateChangeExpansionPanelBehavior): Observable<ReviewStatesTestsStateModel> {
    return of(ctx.patchState({stateChangeExpansionPanelBehavior: payload}));
  }
}
