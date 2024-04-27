import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginatorIntl, PageEvent} from '@angular/material/paginator';
import {TranslateService} from '@ngx-translate/core';
import {TestQuestionModel} from '../../models/test-question.model';
import {ThemePalette} from '@angular/material/core';
import {GermanStatesEnum} from '../../models/enums/german-states.enum';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.scss']
})
export class QuestionnaireListComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  @Input() currentQuestionIndex!: number | null;
  @Input() selectedStateName!: GermanStatesEnum;
  @Input() questions!: TestQuestionModel[];
  @Input() showAnswersKeys = true;
  @Input() trPrefix = '';
  @Input() paginatorData!: PageEvent | null;
  @Input() showArrayIndexAsRow = false;
  @Input() answersClickable = false;
  @Input() showUserResults = false;
  @Input() isDemoExam = false;
  @Input() isAllPanelsExpanded = false;

  @Output() expansionPanelOpen = new EventEmitter<number>();
  @Output() paginatorDataChange = new EventEmitter<PageEvent>();
  @Output() answerChange = new EventEmitter<TestQuestionModel>();
  @Output() allPanelsExpanded = new EventEmitter<boolean>();
  radioButtonColors: ThemePalette = 'primary';

  constructor(public translate: TranslateService, paginator: MatPaginatorIntl) {
    translate.onLangChange.subscribe(() =>
      translate.get('general.ITEMS_PER_PAGE_LABEL').subscribe(res => paginator.itemsPerPageLabel = res)
    );
  }

  ngOnInit(): void {
    this.radioButtonColors = this.showUserResults ? 'accent' : 'primary';
  }

  private getTestTrPrefix(stateName: GermanStatesEnum, questionIndex: number, questionId: number): string {
    return this.getTrStateName(stateName, questionIndex) + '.tests.' + (questionId);
  }

  getTrStateName(stateName: GermanStatesEnum, questionIndex: number): string {
    return this.isDemoExam && questionIndex > 2 ? 'review-deutschland-questions.' + GermanStatesEnum.DEUTSCHLAND : this.trPrefix + stateName;
  }

  getImageUrl(stateName: GermanStatesEnum, questionIndex: number): string {
    return this.isDemoExam && questionIndex > 2 ? GermanStatesEnum.DEUTSCHLAND : stateName;
  }

  getQuestionTrPrefix(stateNameLabel: GermanStatesEnum, questionIndex: number, questionId: number): string {
    return this.getTestTrPrefix(stateNameLabel, questionIndex, questionId) + '.question';
  }

  getAnswerTrPrefix(stateNameLabel: GermanStatesEnum, questionIndex: number, questionId: number, answerId: number): string {
    return this.getTestTrPrefix(stateNameLabel, questionIndex, questionId) + '.answers.' + answerId;
  }

  onAnswerChange(selectedTest: TestQuestionModel, selectedAnswer: number): void {
    selectedTest.userAnswer = selectedAnswer;
    this.answerChange.emit(selectedTest);
  }

  accordionOpenCloseAll(): void {
    this.isAllPanelsExpanded = !this.isAllPanelsExpanded;
    this.allPanelsExpanded.emit(this.isAllPanelsExpanded);
    if (this.isAllPanelsExpanded) {
      this.accordion.openAll();
    } else {
      this.accordion.closeAll();
    }
  }
}
