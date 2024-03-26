import {Injectable} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Observable, of} from 'rxjs';
import {ReviewDeutschlandQuestionsStateModel} from '../models/review-deutschland-questions-state.model';
import {
  ResetReviewDeutschlandQuestionsToInitialState,
  SetCurrentQuestionIndex,
  SetIsAllPanelExpanded,
  SetPaginatorData,
  SetShowAnswersKeys
} from './review-deutschland-questions.action';
import {ConstantValues} from '../../utils/constant-values';


export const reviewDeutschlandQuestionsInitialState: ReviewDeutschlandQuestionsStateModel = {
  currentQuestionIndex: -1,
  showAnswersKeys: true,
  isAllPanelsExpanded: false,
  paginatorData: {
    pageSize: 30,
    pageIndex: 0,
    length: ConstantValues.DEUTSCHLAND_QUESTIONS.length
  }
};

@State<ReviewDeutschlandQuestionsStateModel>({
  name: 'ReviewDeutschlandQuestionsState',
  defaults: reviewDeutschlandQuestionsInitialState
})
@Injectable()
export class ReviewDeutschlandQuestionsState {

  @Selector()
  static getCurrentQuestionIndex(state: ReviewDeutschlandQuestionsStateModel): number {
    return state.currentQuestionIndex;
  }

  @Selector()
  static getPaginatorData(state: ReviewDeutschlandQuestionsStateModel): PageEvent {
    return state.paginatorData;
  }

  @Selector()
  static getShowAnswersKeys(state: ReviewDeutschlandQuestionsStateModel): boolean {
    return state.showAnswersKeys;
  }

  @Selector()
  static getIsAllPanelsExpanded(state: ReviewDeutschlandQuestionsStateModel): boolean {
    return state.isAllPanelsExpanded;
  }

  @Action(SetCurrentQuestionIndex)
  setCurrentQuestionIndex(ctx: StateContext<ReviewDeutschlandQuestionsStateModel>, {payload}: SetCurrentQuestionIndex): Observable<ReviewDeutschlandQuestionsStateModel> {
    return of(ctx.patchState({currentQuestionIndex: payload}));
  }

  @Action(SetShowAnswersKeys)
  setShowAnswersKeys(ctx: StateContext<ReviewDeutschlandQuestionsStateModel>, {payload}: SetShowAnswersKeys): Observable<ReviewDeutschlandQuestionsStateModel> {
    return of(ctx.patchState({showAnswersKeys: payload}));
  }

  @Action(SetPaginatorData)
  setPaginatorPageData(ctx: StateContext<ReviewDeutschlandQuestionsStateModel>, {payload}: SetPaginatorData): Observable<ReviewDeutschlandQuestionsStateModel> {
    return of(ctx.patchState({paginatorData: payload}));
  }

  @Action(SetIsAllPanelExpanded)
  setIsAllPanelExpanded(ctx: StateContext<ReviewDeutschlandQuestionsStateModel>, {payload}: SetIsAllPanelExpanded): Observable<ReviewDeutschlandQuestionsStateModel> {
    return of(ctx.patchState({isAllPanelsExpanded: payload}));
  }

  @Action(ResetReviewDeutschlandQuestionsToInitialState)
  resetReviewDeutschlandQuestionsToInitialState(ctx: StateContext<ReviewDeutschlandQuestionsStateModel>): Observable<ReviewDeutschlandQuestionsStateModel> {
    return of(ctx.setState(reviewDeutschlandQuestionsInitialState));
  }
}
