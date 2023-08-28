import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppPaths } from '../../../models/enums/app-paths.enum';
import { TriviaDataService } from '../../../services/trivia-data.service';

@Component({
    selector: 'app-quiz-results',
    templateUrl: './quiz-results.component.html',
    styleUrls: ['./quiz-results.component.scss']
})
export class QuizResultsComponent {
    readonly questionnaire$ = this.triviaDataService.questionnaire$.asObservable();

    constructor(
        private router: Router,
        private triviaDataService: TriviaDataService
    ) {}

    /**
     * Reset the questionnaire and go back to quiz creation page
     */
    createNewQuiz(): void {
        this.triviaDataService.resetQuestionnaire();
        this.router.navigate(['/' + AppPaths.QUIZ_MAKER]);
    }
}
