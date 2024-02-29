import {Injectable} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {ReviewAllQuestionsState} from './review-all-questions.state';
import {SetCurrentQuestionNo} from './review-all-questions.action';

@Injectable({
  providedIn: 'root'
})
export class ReviewAllQuestionsStateService {

  @Select(ReviewAllQuestionsState.getCurrentQuestionNo) getCurrentQuestionNo$!: Observable<number>;

  constructor(private store: Store) {
  }

  setCurrentQuestionNo(currentQuestionNo: number): void {
    this.store.dispatch(new SetCurrentQuestionNo(currentQuestionNo));
  }
}
