import {Component, OnInit} from '@angular/core';
import {DemoTestInfoModel} from '../../models/demo-test-info.model';
import {Router} from '@angular/router';
import {DemoTestsStateService} from '../../state/demo-tests/demo-tests-state.service';
import {YesNoEnum} from '../../models/enums/yes-no.enum';
import {ExamFinishReasonEnum} from '../../models/enums/exam-finish-reason.enum';
import {DemoTestDetailsComponent} from '../demo-test-details/demo-test-details.component';
import {UtilService} from '../../utils/util.service';

@Component({
  selector: 'app-demo-exams-list-page',
  templateUrl: './demo-exams-list-page.component.html',
  styleUrls: ['./demo-exams-list-page.component.scss']
})
export class DemoExamsListPageComponent implements OnInit {
  demoTestsList!: DemoTestInfoModel[];
  displayedColumns = ['id', 'title', 'correctAnswered', 'incorrectAnswered', 'score', 'isExamFinished', 'dateCreated', 'dateLastModified', 'edit', 'delete'];
  trPrefixTable = 'demo-exams-list.table.';

  constructor(private demoTestsStateService: DemoTestsStateService, private utilService: UtilService, private router: Router) {
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
    },600, 800, false).subscribe((result: YesNoEnum) => {
      if (result === YesNoEnum.YES) {
        this.demoTestsStateService.finishExam(ExamFinishReasonEnum.USER_FINISHED);
      }
    });
  }
}
