import {PageEvent} from '@angular/material/paginator';

export interface ReviewDeutschlandQuestionsStateModel {
  currentQuestionIndex: number;
  showAnswersKeys: boolean;
  isAllPanelsExpanded: boolean;
  paginatorData: PageEvent;
}
