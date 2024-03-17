import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {
  ReviewDeutschlandQuestionsPageComponent
} from './components/review-deutschland-questions-page/review-deutschland-questions-page.component';
import {
  ReviewStatesQuestionsPageComponent
} from './components/review-states-questions-page/review-states-questions-page.component';
import {DemoExamsListPageComponent} from './components/demo-exam-components/demo-exams-list-page/demo-exams-list-page.component';
import {TakeDemoExamPageComponent} from './components/demo-exam-components/take-demo-exam-page/take-demo-exam-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'review-deutschland-tests', component: ReviewDeutschlandQuestionsPageComponent},
  {path: 'review-states-tests', component: ReviewStatesQuestionsPageComponent},
  {path: 'demo-exams-list', component: DemoExamsListPageComponent},
  {path: 'take-demo-exam', component: TakeDemoExamPageComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
