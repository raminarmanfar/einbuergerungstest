import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatPaginatorIntl, PageEvent} from '@angular/material/paginator';
import {TranslateService} from '@ngx-translate/core';
import {StateInfoModel} from '../../models/state-info.model';

@Component({
  selector: 'app-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.scss']
})
export class QuestionnaireListComponent {
  @Input() currentQuestionIndex!: number | null;
  @Input() stateInfo!: StateInfoModel;
  @Input() showAnswersKeys = true;
  @Input() trPrefix = '';
  @Input() paginatorData!: PageEvent | null;
  @Input() showArrayIndexAsRow = false;


  @Output() expansionPanelOpen = new EventEmitter<number>();
  @Output() paginatorDataChange = new EventEmitter<PageEvent>();

  constructor(private translate: TranslateService,private paginator: MatPaginatorIntl) {
    translate.onLangChange.subscribe(currentLang => {
      console.log('>>>>', currentLang);
      translate.get('general.ITEMS_PER_PAGE_LABEL').subscribe(res => paginator.itemsPerPageLabel = res);
    });
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
}
