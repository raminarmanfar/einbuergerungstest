import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxsModule} from '@ngxs/store';
import {NgxsStoragePluginModule, StorageOption} from '@ngxs/storage-plugin';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {AppState} from './app.state';
import {ReviewStatesTestsState} from './review-states-tests/review-states-tests.state';
import {ReviewAllQuestionsState} from './review-all-questions/review-all-questions.state';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot([AppState, ReviewAllQuestionsState, ReviewStatesTestsState]),
    NgxsStoragePluginModule.forRoot({
      key: [AppState, ReviewAllQuestionsState, ReviewStatesTestsState],
      storage: StorageOption.SessionStorage
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ]
})
export class StateModule {
}
