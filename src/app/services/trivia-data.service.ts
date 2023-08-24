import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OpenTriviaService, Question } from '../api/open-trivia.service';
import { Category } from '../models/category';
import { Difficulties } from '../models/enums/difficulties.enum';

@Injectable({
    providedIn: 'root'
})
export class TriviaDataService {
    readonly questionnaire$: Subject<Question[] | undefined> = new Subject();

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
            console.log('coucou');
            this.questionnaire$.next(questions);
        });
    }

    // resetQuestionnaire(): void {
    //     this.questionnaire$.next(undefined);
    // }
}
