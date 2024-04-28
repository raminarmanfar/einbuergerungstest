import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext, Store} from '@ngxs/store';
import {AppStateModel} from './models/app-state.model';
import {Language} from '../models/enums/language';
import {ResetToInitialState, SetActiveLanguage} from './app.action';
import {Observable, of} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';
import {ReviewStatesQuestionsState} from "./review-states-questions/review-states-questions.state";
import {DemoTestsState} from "./demo-tests/demo-tests.state";
import {ReviewDeutschlandQuestionsState} from "./review-deutschland-questions/review-deutschland-questions.state";
import {ResetDemoTestToInitialState} from './demo-tests/demo-tests.action';
import {
  ResetReviewDeutschlandQuestionsToInitialState
} from './review-deutschland-questions/review-deutschland-questions.action';
import {ResetReviewStatesQuestionsToInitialState} from './review-states-questions/review-states-questions.action';
import {PracticeDeutschlandQuestionsState} from './practice-deutschland-questions/practice-deutschland-questions.state';

export const stateDefaultValues: AppStateModel = {
  activeLanguage: Language.DE
};

@State<AppStateModel>({
  name: 'AppState',
  defaults: stateDefaultValues,
  children: [ReviewDeutschlandQuestionsState, PracticeDeutschlandQuestionsState, ReviewStatesQuestionsState, DemoTestsState]
})
@Injectable()
export class AppState {
  constructor(private translate: TranslateService, private store: Store) {
  }

  @Selector()
  static getActiveLanguage(state: AppStateModel): Language{
    return state.activeLanguage;
  }

  @Action(SetActiveLanguage)
  setActiveLanguage(ctx: StateContext<AppStateModel>, {payload}: SetActiveLanguage): Observable<AppStateModel> {
    this.translate.use(payload);
    return of(ctx.patchState({activeLanguage: payload}));
  }

  @Action(ResetToInitialState)
  resetToInitialState(ctx: StateContext<AppStateModel>): Observable<AppStateModel> {
    this.store.dispatch(new ResetReviewDeutschlandQuestionsToInitialState());
    this.store.dispatch(new ResetReviewStatesQuestionsToInitialState());
    this.store.dispatch(new ResetDemoTestToInitialState());
    return of(ctx.setState(stateDefaultValues));
  }
}
