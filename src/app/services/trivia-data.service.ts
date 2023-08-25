import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { OpenTriviaService } from '../api/open-trivia.service';
import { Category } from '../models/category';
import { AppPaths } from '../models/enums/app-paths.enum';
import { Difficulties } from '../models/enums/difficulties.enum';
import { DisplayedQuestion, Questionnaire } from '../models/questionnaire';
import { UserAnswers } from '../models/user-answers';
import { shuffle } from '../utils/shuffle';

@Injectable({
    providedIn: 'root'
})
export class TriviaDataService {
    readonly questionnaire$: Subject<Questionnaire | undefined> = new ReplaySubject(1);

    constructor(
        private openTriviaService: OpenTriviaService,
        private router: Router
    ) {}

    /**
     * Retrieve all categories
     *
     * @returns
     */
    getCategories(): Observable<Category[]> {
        return this.openTriviaService.getCategories();
    }

    /**
     * Create questionnaire based on user selection
     *
     * @param category
     * @param difficulty
     * @returns
     */
    setQuestionnaire(category: number, difficulty: Difficulties): void {
        this.openTriviaService.getQuestions(category, difficulty).subscribe((questions) => {
            const newQuestionnaire: Questionnaire = {
                questions: questions.map(
                    (question) =>
                        ({
                            question: question.question,
                            answers: shuffle([
                                question.correct_answer,
                                ...question.incorrect_answers
                            ]),
                            correctAnswer: question.correct_answer
                        }) as DisplayedQuestion
                )
            };
            this.questionnaire$.next(newQuestionnaire);
        });
    }

    setUserAnswers(questionnaire: Questionnaire, userAnswers: UserAnswers) {
        const currentQuestionnaire: Questionnaire = JSON.parse(JSON.stringify(questionnaire));
        // Init of user's score
        let userScore = 0;

        Object.values(userAnswers).forEach((userAnswer, index) => {
            currentQuestionnaire.questions[index].userAnswer = userAnswer;

            if (userAnswer === currentQuestionnaire.questions[index].correctAnswer) {
                userScore++;
            }
        });

        currentQuestionnaire.userScore = userScore;

        this.router.navigate(['/' + AppPaths.QUIZ_RESULTS]).then(() => {
            this.questionnaire$.next(currentQuestionnaire);
        });
    }

    resetQuestionnaire(): void {
        this.questionnaire$.next(undefined);
    }
}
