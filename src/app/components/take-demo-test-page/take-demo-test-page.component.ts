import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DemoTestsStateService} from '../../state/demo-tests/demo-tests-state.service';
import {DemoTestInfoModel} from '../../models/demo-test-info.model';
import {ConstantValues} from '../../utils/constant-values';
import {StateInfoModel} from '../../models/state-info.model';
import {UtilService} from '../../utils/util.service';

@Component({
  selector: 'app-take-demo-test-page',
  templateUrl: './take-demo-test-page.component.html',
  styleUrls: ['./take-demo-test-page.component.scss']
})
export class TakeDemoTestPageComponent implements OnInit {
  testInfo!: DemoTestInfoModel;
  trPrefix = 'demo-test.';
  protected readonly selectedStateInfo: StateInfoModel = {
    ...ConstantValues.DEUTSCHLAND_STATES,
    stateTests: []
  };

  constructor(public demoTestsStateService: DemoTestsStateService, private utilService: UtilService, private router: Router) {
  }

  onReturnClick(): void {
    this.router.navigate(['/demo-exams-list']).then();
  }

  ngOnInit(): void {
    this.demoTestsStateService.currentTest$.subscribe(currentTest => {
      this.testInfo = currentTest;
      this.selectedStateInfo.stateTests = this.utilService.getFilteredQuestionsListByIds(currentTest.questionsIdsList, ConstantValues.DEUTSCHLAND_QUESTIONS);
    });
  }

  onCurrentQuestionChange(currentQuestionIndex: number): void {
    console.log('>>>>>>', currentQuestionIndex);
  }
}
