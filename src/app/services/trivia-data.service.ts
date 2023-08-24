import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OpenTriviaService } from '../api/open-trivia.service';
import { Category } from '../models/category';
import { Difficulties } from '../models/enums/difficulties.enum';
import { DisplayedQuestion, Questionnaire } from '../models/questionnaire';
import { UserAnswers } from '../models/user-answers';
import { shuffle } from '../utils/shuffle';

@Injectable({
    providedIn: 'root'
})
export class TriviaDataService {
    readonly questionnaire$: Subject<Questionnaire | undefined> = new Subject();

    constructor(private openTriviaService: OpenTriviaService) {}

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

    setUserAnswers(userAnswers: UserAnswers) {
        console.log(userAnswers);
    }

    // resetQuestionnaire(): void {
    //     this.questionnaire$.next(undefined);
    // }
}
