import {StateInfoModel} from './state-info.model';

export interface DemoTestInfoModel {
  id: number;
  title: string;
  dateCreated: string;
  dateLastModified: string;
  correctAnswered: number;
  incorrectAnswered: number;
  score: number;
  done: boolean;
  deutschlandState: StateInfoModel;
  deutschlandCurrentQuestionIndex: number;
  selectedState: StateInfoModel;
  selectedStateCurrentQuestionIndex: number;
}
