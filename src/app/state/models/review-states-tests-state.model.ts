import {StateChangeExpansionPanelBehaviorEnum} from '../../models/enums/state-change-expansion-panel-behavior.enum';

export interface ReviewStatesTestsStateModel {
  selectedStateIndex: number;
  currentQuestionIndex: number;
  showAnswersKeys: boolean;
  stateChangeExpansionPanelBehavior: StateChangeExpansionPanelBehaviorEnum;
}
