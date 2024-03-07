export interface DemoTestInfoModel {
  id: number;
  title: string;
  dateCreated: string;
  dateLastModified: string;
  correctAnswered: number;
  incorrectAnswered: number;
  score: number;
  done: boolean;
  questionsIdsList: number[],
  currentQuestionIndex: number;
}
