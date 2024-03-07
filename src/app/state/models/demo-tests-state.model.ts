import {DemoTestInfoModel} from '../../models/demo-test-info.model';

export interface DemoTestsStateModel {
  demoTests: DemoTestInfoModel[];
  currentTestId: number;
}
