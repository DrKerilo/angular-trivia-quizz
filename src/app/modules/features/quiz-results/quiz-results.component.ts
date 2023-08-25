import { Component } from '@angular/core';
import { TriviaDataService } from '../../../services/trivia-data.service';

@Component({
    selector: 'app-quiz-results',
    templateUrl: './quiz-results.component.html',
    styleUrls: ['./quiz-results.component.scss']
})
export class QuizResultsComponent {
    readonly questionnaire$ = this.triviaDataService.questionnaire$.asObservable();

    constructor(private triviaDataService: TriviaDataService) {}
}
