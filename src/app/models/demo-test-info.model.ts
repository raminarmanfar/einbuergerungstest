export interface DemoTestInfoModel {
  id: number;
  title: string;
  dateCreated: string;
  dateLastModified: string;
  correctAnswered: number;
  incorrectAnswered: number;
  score: number;
  finished: boolean;
}
