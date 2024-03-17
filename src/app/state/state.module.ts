import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxsModule} from '@ngxs/store';
import {NgxsStoragePluginModule, StorageOption} from '@ngxs/storage-plugin';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {AppState} from './app.state';
import {ReviewStatesTestsState} from './review-states-tests/review-states-tests.state';
import {ReviewDeutschlandQuestionsState} from './review-deutschland-questions/review-deutschland-questions.state';
import {DemoTestsState} from './demo-tests/demo-tests-state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot([AppState, ReviewDeutschlandQuestionsState, ReviewStatesTestsState, DemoTestsState]),
    NgxsStoragePluginModule.forRoot({
      key: [AppState],
      storage: StorageOption.LocalStorage
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ]
})
export class StateModule {
}
