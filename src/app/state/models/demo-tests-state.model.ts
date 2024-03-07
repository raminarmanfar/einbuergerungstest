import {DemoTestInfoModel} from '../../models/demo-test-info.model';
import {PageEvent} from '@angular/material/paginator';

export interface DemoTestsStateModel {
  demoTests: DemoTestInfoModel[];
  currentTestId: number;
  paginatorData: PageEvent;
}
