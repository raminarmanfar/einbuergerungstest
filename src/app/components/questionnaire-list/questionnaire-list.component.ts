import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatPaginatorIntl, PageEvent} from '@angular/material/paginator';
import {TranslateService} from '@ngx-translate/core';
import {StateInfoModel} from '../../models/state-info.model';
import {TestQuestionModel} from '../../models/test-question.model';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.scss']
})
export class QuestionnaireListComponent implements OnInit {
  @Input() currentQuestionIndex!: number | null;
  @Input() stateInfo!: StateInfoModel;
  @Input() showAnswersKeys = true;
  @Input() trPrefix = '';
  @Input() paginatorData!: PageEvent | null;
  @Input() showArrayIndexAsRow = false;
  @Input() answersClickable = false;
  @Input() showUserResults = false;

  @Output() expansionPanelOpen = new EventEmitter<number>();
  @Output() paginatorDataChange = new EventEmitter<PageEvent>();
  @Output() answerChange = new EventEmitter<TestQuestionModel>();
  radioButtonColors: ThemePalette = 'primary';

  constructor(private translate: TranslateService, private paginator: MatPaginatorIntl) {
    translate.onLangChange.subscribe(currentLang => {
      console.log('>>>>', currentLang);
      translate.get('general.ITEMS_PER_PAGE_LABEL').subscribe(res => paginator.itemsPerPageLabel = res);
    });
  }

  ngOnInit(): void {
    this.radioButtonColors = this.showUserResults ? 'accent' : 'primary';
  }

  private getTestTrPrefix(stateNameLabel: string, questionIndex: number): string {
    return this.trPrefix + stateNameLabel + '.tests.' + (questionIndex + 1);
  }

  getQuestionTrPrefix(stateNameLabel: string, questionIndex: number): string {
    return this.getTestTrPrefix(stateNameLabel, questionIndex) + '.question';
  }

  getAnswerTrPrefix(stateNameLabel: string, questionIndex: number, answerId: number): string {
    return this.getTestTrPrefix(stateNameLabel, questionIndex) + '.answers.' + answerId;
  }

  onAnswerChange(selectedTest: TestQuestionModel, selectedAnswer: number) {
    selectedTest.userAnswer = selectedAnswer;
    this.answerChange.emit(selectedTest);
  }
}
