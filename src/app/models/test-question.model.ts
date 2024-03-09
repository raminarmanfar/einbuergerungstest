export interface TestQuestionModel {
  id: number;
  correctAnswer: number;
  userAnswer?: number;
  hasImage?: boolean;
}
