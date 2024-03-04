import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {
  ReviewDeutschlandQuestionsPageComponent
} from './components/review-deutschland-questions-page/review-deutschland-questions-page.component';
import {ReviewStatesQuestionsPageComponent} from './components/review-states-questions-page/review-states-questions-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'review-deutschland-tests', component: ReviewDeutschlandQuestionsPageComponent},
  {path: 'review-states-tests', component: ReviewStatesQuestionsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
