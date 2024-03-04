import {Injectable} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {SetCurrentQuestionNo} from './review-deutschland-questions.action';
import {ReviewDeutschlandQuestionsState} from './review-all-questions.state';

@Injectable({
  providedIn: 'root'
})
export class ReviewDeutschlandQuestionsStateService {

  @Select(ReviewDeutschlandQuestionsState.getCurrentQuestionNo) getCurrentQuestionNo$!: Observable<number>;

  constructor(private store: Store) {
  }

  setCurrentQuestionNo(currentQuestionNo: number): void {
    this.store.dispatch(new SetCurrentQuestionNo(currentQuestionNo));
  }
}
