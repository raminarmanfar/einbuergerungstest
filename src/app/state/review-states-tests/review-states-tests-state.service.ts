import {Injectable} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {ReviewStatesTestsState} from './review-states-tests.state';
import {SetCurrentQuestionNo} from './review-states-tests.action';

@Injectable({
  providedIn: 'root'
})
export class ReviewStatesTestsStateService {

  @Select(ReviewStatesTestsState.getCurrentQuestionNo) getCurrentQuestionIndex$!: Observable<number>;

  constructor(private store: Store) {
  }

  setCurrentQuestionIndex(currentQuestionNo: number): void {
    this.store.dispatch(new SetCurrentQuestionNo(currentQuestionNo));
  }
}
