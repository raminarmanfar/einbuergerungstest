import {Injectable} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {ReviewStatesTestsState} from './review-states-tests.state';
import {SetCurrentQuestionIndex, SetStateIndex} from './review-states-tests.action';

@Injectable({
  providedIn: 'root'
})
export class ReviewStatesTestsStateService {

  @Select(ReviewStatesTestsState.getCurrentQuestionIndex) currentQuestionIndex$!: Observable<number>;
  @Select(ReviewStatesTestsState.getSelectedStateIndex) selectedStateIndex$!: Observable<number>;

  constructor(private store: Store) {
  }

  setCurrentQuestionIndex(currentQuestionIndex: number): void {
    this.store.dispatch(new SetCurrentQuestionIndex(currentQuestionIndex));
  }

  setStateIndex(selectedStateIndex: number): void {
    this.store.dispatch(new SetStateIndex(selectedStateIndex));
  }
}
