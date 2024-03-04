import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Observable, of} from 'rxjs';
import {ReviewDeutschlandQuestionsStateModel} from '../models/review-deutschland-questions-state.model';
import {SetCurrentQuestionNo} from './review-deutschland-questions.action';


export const stateDefaultValues: ReviewDeutschlandQuestionsStateModel = {
  currentQuestionNo: 0
};

@State<ReviewDeutschlandQuestionsStateModel>({name: 'ReviewDeutschlandQuestionsState', defaults: stateDefaultValues})
@Injectable()
export class ReviewDeutschlandQuestionsState {

  @Selector()
  static getCurrentQuestionNo(state: ReviewDeutschlandQuestionsStateModel): number {
    return state.currentQuestionNo;
  }

  @Action(SetCurrentQuestionNo)
  setActiveLanguage(ctx: StateContext<ReviewDeutschlandQuestionsStateModel>, {payload}: SetCurrentQuestionNo): Observable<ReviewDeutschlandQuestionsStateModel> {
    return of(ctx.patchState({currentQuestionNo: payload}));
  }
}
