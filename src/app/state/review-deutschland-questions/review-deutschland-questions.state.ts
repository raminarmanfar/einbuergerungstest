import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Observable, of} from 'rxjs';
import {ReviewDeutschlandQuestionsStateModel} from '../models/review-deutschland-questions-state.model';
import {SetCurrentQuestionIndex, SetPaginatorData} from './review-deutschland-questions.action';
import {PageEvent} from '@angular/material/paginator';
import {ConstantValues} from '../../utils/constant-values';


export const stateDefaultValues: ReviewDeutschlandQuestionsStateModel = {
  currentQuestionIndex: -1,
  paginatorData: {
    pageSize: 30,
    pageIndex: 0,
    length: ConstantValues.DEUTSCHLAND_STATES.stateTests.length
  }
};

@State<ReviewDeutschlandQuestionsStateModel>({name: 'ReviewDeutschlandQuestionsState', defaults: stateDefaultValues})
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

  @Action(SetCurrentQuestionIndex)
  setCurrentQuestionIndex(ctx: StateContext<ReviewDeutschlandQuestionsStateModel>, {payload}: SetCurrentQuestionIndex): Observable<ReviewDeutschlandQuestionsStateModel> {
    return of(ctx.patchState({currentQuestionIndex: payload}));
  }

  @Action(SetPaginatorData)
  setPaginatorPageData(ctx: StateContext<ReviewDeutschlandQuestionsStateModel>, {payload}: SetPaginatorData): Observable<ReviewDeutschlandQuestionsStateModel> {
    return of(ctx.patchState({paginatorData: payload}));
  }
}
