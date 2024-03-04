import {NgModule} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';

import {StateModule} from './state/state.module';
import {AppRoutingModule} from './app-routing.module';
import {AppMaterialsModule} from './app-materials.module';

import {AppComponent} from './components/app/app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import { ReviewDeutschlandQuestionsPageComponent } from './components/review-deutschland-questions-page/review-deutschland-questions-page.component';
import { ReviewStatesQuestionsPageComponent } from './components/review-states-questions-page/review-states-questions-page.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ReviewDeutschlandQuestionsPageComponent,
    ReviewStatesQuestionsPageComponent,
    ReviewDeutschlandQuestionsPageComponent
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
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
