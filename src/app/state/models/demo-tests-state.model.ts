import {DemoTestInfoModel} from '../../models/demo-test-info.model';

export interface DemoTestsStateModel {
  currentTestId: number;
  keepAnswersOnReset: boolean;
  currentExamPaused: boolean;
  demoTests: DemoTestInfoModel[];
}
