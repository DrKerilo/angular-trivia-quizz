import { Component } from '@angular/core';
import { UserAnswers } from 'src/app/models/user-answers';
import { TriviaDataService } from 'src/app/services/trivia-data.service';

@Component({
    selector: 'app-quiz-maker-questionnaire',
    templateUrl: './quiz-maker-questionnaire.component.html',
    styleUrls: ['./quiz-maker-questionnaire.component.scss']
})
export class QuizMakerQuestionnaireComponent {
    protected readonly questionnaire$ = this.triviaDataService.questionnaire$.asObservable();

    constructor(private triviaDataService: TriviaDataService) {}

    submitAnswers(answers: UserAnswers): void {
        console.log('submitted answers: ', answers);
    }
}
