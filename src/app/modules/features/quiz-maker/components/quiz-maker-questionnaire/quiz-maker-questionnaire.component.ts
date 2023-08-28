import { Component } from '@angular/core';
import { UserAnswers } from 'src/app/models/user-answers';
import { TriviaDataService } from 'src/app/services/trivia-data.service';
import { Questionnaire } from '../../../../../models/questionnaire';

@Component({
    selector: 'app-quiz-maker-questionnaire',
    templateUrl: './quiz-maker-questionnaire.component.html',
    styleUrls: ['./quiz-maker-questionnaire.component.scss']
})
export class QuizMakerQuestionnaireComponent {
    protected readonly questionnaire$ = this.triviaDataService.questionnaire$.asObservable();

    constructor(private triviaDataService: TriviaDataService) {}

    /**
     * Submit user's answers and go the results
     *
     * @param questionnaire
     * @param userAnswers
     */
    submitAnswers(questionnaire: Questionnaire, userAnswers: UserAnswers): void {
        this.triviaDataService.showResults(questionnaire, userAnswers);
    }
}
