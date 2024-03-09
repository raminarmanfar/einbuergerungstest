import {Injectable} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {DemoTestsState} from './demo-tests-state';
import {DemoTestInfoModel} from '../../models/demo-test-info.model';
import {SetCurrentTestId, UpdateTestQuestion} from './demo-tests.action';
import {UpdateQuestionPayloadModel} from "../models/update-question-payload.model";

@Injectable({providedIn: 'root'})
export class DemoTestsStateService {

  @Select(DemoTestsState.getAllDemoTests) allDemoTests$!: Observable<DemoTestInfoModel[]>;
  @Select(DemoTestsState.getCurrentTest) currentTest$!: Observable<DemoTestInfoModel>;

  constructor(private store: Store) {
  }

  setCurrentTestId(currentTestId: number): void {
    this.store.dispatch(new SetCurrentTestId(currentTestId));
  }

  updateTestQuestion(updateQuestionInfo: UpdateQuestionPayloadModel): void {
    this.store.dispatch(new UpdateTestQuestion(updateQuestionInfo));
  }
}
