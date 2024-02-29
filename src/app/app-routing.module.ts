import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ReviewAllTestsComponent} from './components/review-all-tests/review-all-tests.component';
import {ReviewStatesTestsComponent} from './components/review-states-tests/review-states-tests.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'review-all-tests', component: ReviewAllTestsComponent},
  {path: 'review-states-tests', component: ReviewStatesTestsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
