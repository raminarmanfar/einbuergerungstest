import {Component, EventEmitter, Input, Output} from '@angular/core';
import {StateInfoModel} from '../../models/state-info.model';
import {PageEvent} from '@angular/material/paginator';

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


  @Output() expansionPanelOpen = new EventEmitter<number>();
  @Output() paginatorDataChange = new EventEmitter<PageEvent>();

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
