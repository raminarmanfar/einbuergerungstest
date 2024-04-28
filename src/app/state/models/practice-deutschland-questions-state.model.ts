import {PageEvent} from '@angular/material/paginator';
import {TestQuestionModel} from '../../models/test-question.model';

export interface PracticeDeutschlandQuestionsStateModel {
  currentQuestionIndex: number;
  showResults: boolean;
  isAllPanelsExpanded: boolean;
  questions: TestQuestionModel[];
  paginatorData: PageEvent;
}
