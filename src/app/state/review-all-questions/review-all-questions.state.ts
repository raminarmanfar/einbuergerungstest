import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Observable, of} from 'rxjs';
import {ReviewAllQuestionsStateModel} from '../models/review-all-questions-state.model';
import {SetCurrentQuestionNo} from './review-all-questions.action';

export const stateDefaultValues: ReviewAllQuestionsStateModel = {
  currentQuestionNo: 0
};

@State<ReviewAllQuestionsStateModel>({name: 'ReviewAllQuestionsState', defaults: stateDefaultValues})
@Injectable()
export class ReviewAllQuestionsState {

  @Selector()
  static getCurrentQuestionNo(state: ReviewAllQuestionsStateModel): number {
    return state.currentQuestionNo;
  }

  @Action(SetCurrentQuestionNo)
  setActiveLanguage(ctx: StateContext<ReviewAllQuestionsStateModel>, {payload}: SetCurrentQuestionNo): Observable<ReviewAllQuestionsStateModel> {
    return of(ctx.patchState({currentQuestionNo: payload}));
  }
}
