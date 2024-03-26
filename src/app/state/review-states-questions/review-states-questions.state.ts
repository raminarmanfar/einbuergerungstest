import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Observable, of} from 'rxjs';
import {ReviewStatesQuestionsStateModel} from '../models/review-states-questions-state.model';
import {
  ResetReviewStatesQuestionsToInitialState,
  SetCurrentQuestionIndex,
  SetShowAnswersKeys,
  SetStateChangeExpansionPanelBehavior,
  SetStateIndex
} from './review-states-questions.action';
import {StateChangeExpansionPanelBehaviorEnum} from '../../models/enums/state-change-expansion-panel-behavior.enum';

export const reviewStatesQuestionsInitialState: ReviewStatesQuestionsStateModel = {
  currentQuestionIndex: -1,
  selectedStateIndex: -1,
  showAnswersKeys: true,
  stateChangeExpansionPanelBehavior: StateChangeExpansionPanelBehaviorEnum.SHOW_CURRENT_QUESTION
};

@State<ReviewStatesQuestionsStateModel>({
  name: 'ReviewStatesQuestionsState',
  defaults: reviewStatesQuestionsInitialState
})
@Injectable()
export class ReviewStatesQuestionsState {

  @Selector()
  static getAllSubState(state: ReviewStatesQuestionsStateModel): ReviewStatesQuestionsStateModel {
    return state;
  }

  @Selector()
  static getCurrentQuestionIndex(state: ReviewStatesQuestionsStateModel): number {
    return state.currentQuestionIndex;
  }

  @Selector()
  static getSelectedStateIndex(state: ReviewStatesQuestionsStateModel): number {
    return state.selectedStateIndex;
  }

  @Selector()
  static getShowAnswersKeys(state: ReviewStatesQuestionsStateModel): boolean {
    return state.showAnswersKeys;
  }

  @Action(SetCurrentQuestionIndex)
  setCurrentQuestionIndex(ctx: StateContext<ReviewStatesQuestionsStateModel>, {payload}: SetCurrentQuestionIndex): Observable<ReviewStatesQuestionsStateModel> {
    return of(ctx.patchState({currentQuestionIndex: payload}));
  }

  @Action(SetStateIndex)
  setStateIndex(ctx: StateContext<ReviewStatesQuestionsStateModel>, {payload}: SetStateIndex): Observable<ReviewStatesQuestionsStateModel> {
    return of(ctx.patchState({selectedStateIndex: payload}));
  }

  @Action(SetShowAnswersKeys)
  setShowAnswersKeys(ctx: StateContext<ReviewStatesQuestionsStateModel>, {payload}: SetShowAnswersKeys): Observable<ReviewStatesQuestionsStateModel> {
    return of(ctx.patchState({showAnswersKeys: payload}));
  }

  @Action(SetStateChangeExpansionPanelBehavior)
  setStateChangeExpansionPanelBehavior(ctx: StateContext<ReviewStatesQuestionsStateModel>, {payload}: SetStateChangeExpansionPanelBehavior): Observable<ReviewStatesQuestionsStateModel> {
    return of(ctx.patchState({stateChangeExpansionPanelBehavior: payload}));
  }

  @Action(ResetReviewStatesQuestionsToInitialState)
  resetReviewDeutschlandQuestionsToInitialState(ctx: StateContext<ReviewStatesQuestionsStateModel>): Observable<ReviewStatesQuestionsStateModel> {
    return of(ctx.setState(reviewStatesQuestionsInitialState));
  }
}
