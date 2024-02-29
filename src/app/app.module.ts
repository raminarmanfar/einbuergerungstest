import {NgModule} from '@angular/core';
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
import {HomeComponent} from './components/home/home.component';
import { ReviewAllTestsComponent } from './components/review-all-tests/review-all-tests.component';
import { ReviewStatesTestsComponent } from './components/review-states-tests/review-states-tests.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ReviewAllTestsComponent,
    ReviewStatesTestsComponent
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
    AppMaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
