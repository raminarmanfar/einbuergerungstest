import { Component } from '@angular/core';
import {UtilService} from "../../util.service";
import {DemoTestInfoModel} from "../../models/demo-test-info.model";

@Component({
  selector: 'app-demo-exams-list-page',
  templateUrl: './demo-exams-list-page.component.html',
  styleUrls: ['./demo-exams-list-page.component.scss']
})
export class DemoExamsListPageComponent {
  demoTestsList: DemoTestInfoModel[] = [
    {id: 1, title: 'Test 1', dateCreated: '01.01.2024', dateLastModified: '04.01.2024', correctAnswered: 3, incorrectAnswered: 7, finished: false, score: 33, questionsList:[], currentQuestion: 0},
    {id: 2, title: 'Test 2', dateCreated: '06.02.2024', dateLastModified: '22.02.2024', correctAnswered: 12, incorrectAnswered: 5, finished: false, score: 67, questionsList:[], currentQuestion: 0},
    {id: 3, title: 'Test 3', dateCreated: '11.02.2024', dateLastModified: '12.04.2024', correctAnswered: 19, incorrectAnswered: 14, finished: true, score: 98, questionsList:[], currentQuestion: 0}
  ];
  displayedColumns = ['id', 'title', 'dateCreated', 'dateCreated', 'dateLastModified', 'correctAnswered', 'incorrectAnswered', 'finished', 'edit', 'delete'];
  constructor(private utilService: UtilService) {
  }
  onNewDemoTestCreateClick(): void {
    this.utilService.getRandomDeutschlandDemoTestQuestions();
  }
}
