import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {AppStateModel} from './models/app-state.model';
import {Language} from '../models/enums/language';
import {SetActiveLanguage} from './app.action';
import {Observable, of} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';
import {ReviewStatesTestsState} from "./review-states-tests/review-states-tests.state";
import {DemoTestsState} from "./demo-tests/demo-tests-state";
import {ReviewDeutschlandQuestionsState} from "./review-deutschland-questions/review-deutschland-questions.state";

export const stateDefaultValues: AppStateModel = {
  activeLanguage: Language.DE
};

@State<AppStateModel>({
  name: 'AppState',
  defaults: stateDefaultValues,
  children: [ReviewDeutschlandQuestionsState, ReviewStatesTestsState, DemoTestsState]
})
@Injectable()
export class AppState {
  constructor(private translate: TranslateService) {
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
}
