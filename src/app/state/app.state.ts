import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {AppStateModel} from './models/app-state.model';
import {Language} from '../models/enums/language';
import {SetActiveLanguage} from './app.action';
import {Observable, of} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

export const stateDefaultValues: AppStateModel = {
  activeLanguage: Language.EN
};

@State<AppStateModel>({
  name: 'AppState',
  defaults: stateDefaultValues,
  children: []
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
