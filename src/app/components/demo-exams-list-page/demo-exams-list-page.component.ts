import {Component, OnInit} from '@angular/core';
import {UtilService} from '../../utils/util.service';
import {DemoTestInfoModel} from '../../models/demo-test-info.model';
import {ConstantValues} from '../../utils/constant-values';
import {Router} from '@angular/router';
import {DemoTestsStateService} from '../../state/demo-tests/demo-tests-state.service';

@Component({
  selector: 'app-demo-exams-list-page',
  templateUrl: './demo-exams-list-page.component.html',
  styleUrls: ['./demo-exams-list-page.component.scss']
})
export class DemoExamsListPageComponent implements OnInit {
  demoTestsList!: DemoTestInfoModel[];
  displayedColumns = ['id', 'title', 'correctAnswered', 'incorrectAnswered', 'score', 'done', 'dateCreated', 'dateLastModified', 'edit', 'delete'];
  trPrefixTable = 'demo-exams-list.table.';

  constructor(private demoTestsStateService: DemoTestsStateService, private utilService: UtilService, private router: Router) {
  }

  ngOnInit(): void {
    this.demoTestsStateService.allDemoTests$.subscribe(allDemoTests => {
      console.log('>>>>', allDemoTests);
      this.demoTestsList = allDemoTests;
    });
  }

  onCreateNewTest(): void {
    const randomDeutschlandQuestionsIds = this.utilService.generateRandomQuestionsIds(27, ConstantValues.DEUTSCHLAND_QUESTIONS.length);
    console.log('>>>>', randomDeutschlandQuestionsIds);
  }

  onSelectedTestClick(selectedTest: DemoTestInfoModel): void {
    this.demoTestsStateService.setCurrentTestId(selectedTest.id);
    this.router.navigate(['/demo-exam']).then();
  }
}
