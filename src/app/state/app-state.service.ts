import { Injectable } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {AppState} from './app.state';
import {Observable} from 'rxjs';
import {Language} from '../models/enums/language';
import {SetActiveLanguage} from './app.action';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  constructor(private store: Store) {
  }

  @Select(AppState.getActiveLanguage) activeLanguage$!: Observable<Language>;

  setActiveLanguage(activeLanguage: Language): void {
    this.store.dispatch(new SetActiveLanguage(activeLanguage));
  }
}
