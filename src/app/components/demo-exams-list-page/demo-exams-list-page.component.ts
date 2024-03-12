import {Component, OnInit} from '@angular/core';
import {DemoTestInfoModel} from '../../models/demo-test-info.model';
import {Router} from '@angular/router';
import {DemoTestsStateService} from '../../state/demo-tests/demo-tests-state.service';
import {DemoTestDetailsComponent} from '../demo-test-details/demo-test-details.component';
import {UtilService} from '../../utils/util.service';
import {CountdownService} from '../../utils/countdown.service';
import {ConstantValues} from '../../utils/constant-values';

@Component({
  selector: 'app-demo-exams-list-page',
  templateUrl: './demo-exams-list-page.component.html',
  styleUrls: ['./demo-exams-list-page.component.scss']
})
export class DemoExamsListPageComponent implements OnInit {
  demoTestsList!: DemoTestInfoModel[];
  displayedColumns = ['id', 'title', 'examTime', 'isExamFinished', 'correctAnswered', 'incorrectAnswered', 'score', 'dateCreated', 'dateLastModified', 'edit', 'delete'];
  trPrefixTable = 'demo-exams-list.table.';

  constructor(private demoTestsStateService: DemoTestsStateService, public countdownService: CountdownService,
              private utilService: UtilService, private router: Router) {
  }

  ngOnInit(): void {
    this.demoTestsStateService.allDemoTests$.subscribe(allDemoTests => this.demoTestsList = allDemoTests);
  }

  onCreateNewTest(): void {
  }

  onSelectedTestClick(selectedTest: DemoTestInfoModel): void {
    this.demoTestsStateService.setSelectedDemoTestId(selectedTest.id);
    this.router.navigate(['/demo-exam']).then();
  }

  onDemoTestDialogClick(element: DemoTestInfoModel): void {
    console.log('>>>>>>>', element);
    this.utilService.openDialog(DemoTestDetailsComponent, 400, 400, {
      trPrefix: 'demo-test-exam.finish-exam-dialog.'
    }, 600, 800, false);
  }

  getScore(correctAnswered: number): number {
    return correctAnswered * 100 / ConstantValues.TOTAL_EXAM_QUESTIONS;
  }
}
