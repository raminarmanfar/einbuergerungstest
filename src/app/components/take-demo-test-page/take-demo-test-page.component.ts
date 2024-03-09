import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DemoTestsStateService} from '../../state/demo-tests/demo-tests-state.service';
import {DemoTestInfoModel} from '../../models/demo-test-info.model';
import {PageEvent} from '@angular/material/paginator';
import {TestQuestionModel} from "../../models/test-question.model";

@Component({
  selector: 'app-take-demo-test-page',
  templateUrl: './take-demo-test-page.component.html',
  styleUrls: ['./take-demo-test-page.component.scss']
})
export class TakeDemoTestPageComponent implements OnInit {
  testInfo!: DemoTestInfoModel;
  trPrefix = 'demo-test.';
  protected readonly statePaginatorData: PageEvent = {pageSize: 3, pageIndex: 0, length: 3};
  protected readonly deutschlandPaginatorData: PageEvent = {pageSize: 27, pageIndex: 0, length: 27};

  constructor(public demoTestsStateService: DemoTestsStateService, private router: Router) {
  }

  onReturnClick(): void {
    this.router.navigate(['/demo-exams-list']).then();
  }

  ngOnInit(): void {
    this.demoTestsStateService.currentTest$.subscribe(currentTest => {
      console.log('>>>>>>', currentTest);
      this.testInfo = currentTest;
    });
  }

  onCurrentQuestionChange(currentQuestionIndex: number): void {
    console.log('>>>>>>', currentQuestionIndex);
  }

  onStateAnswerChange(selectedQuestion: TestQuestionModel): void {
    this.demoTestsStateService.updateTestQuestion({selectedQuestion, isDeutschlandQuestion: true});
  }
}
