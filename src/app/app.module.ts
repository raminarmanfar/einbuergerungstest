import {NgModule} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';

import {StateModule} from './state/state.module';
import {AppRoutingModule} from './app-routing.module';
import {AppMaterialsModule} from './app-materials.module';
import {FlexLayoutModule} from "@angular/flex-layout";

import {PersianNumberPipe} from './utils/persian-number.pipe';

import {AppComponent} from './components/app/app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {
  ReviewDeutschlandQuestionsPageComponent
} from './components/review-deutschland-questions-page/review-deutschland-questions-page.component';
import {
  ReviewStatesQuestionsPageComponent
} from './components/review-states-questions-page/review-states-questions-page.component';
import {QuestionnaireListComponent} from './components/questionnaire-list/questionnaire-list.component';
import { TakeDemoExamPageComponent } from './components/take-demo-exam-page/take-demo-exam-page.component';
import { DemoExamsListPageComponent } from './components/demo-exams-list-page/demo-exams-list-page.component';
import { DialogYesNoComponent } from './components/dialog-yes-no/dialog-yes-no.component';
import { DemoExamDetailsComponent } from './components/demo-exam-details/demo-exam-details.component';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    PersianNumberPipe,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ReviewDeutschlandQuestionsPageComponent,
    ReviewStatesQuestionsPageComponent,
    ReviewDeutschlandQuestionsPageComponent,
    QuestionnaireListComponent,
    TakeDemoExamPageComponent,
    DemoExamsListPageComponent,
    DialogYesNoComponent,
    DemoExamDetailsComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        StateModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,
        AppMaterialsModule,
        NgOptimizedImage,
        FlexLayoutModule,
        FormsModule
    ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
    // {
    //   provide: MatPaginatorIntl, deps: [TranslateService],
    //   useFactory: (translateService: TranslateService) => new PaginatorI18n(translateService).getPaginatorIntl()
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
