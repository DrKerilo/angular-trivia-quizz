import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { Category, RawCategoriesResponse } from '../models/category';
import { Difficulties } from '../models/enums/difficulties.enum';
import { Question, RawQuestionsResponse } from '../models/question';

@Injectable({
    providedIn: 'root'
})
export class OpenTriviaService {
    private readonly baseUrl = 'https://opentdb.com';
    private readonly categoryPath = '/api_category.php';
    private readonly questionPath = '/api.php';
    private readonly numberOfQuestions = 5;
    private readonly typeMultiple = 'multiple';

    private readonly isMocked = false;
    private readonly mockCategories: Category[] = [
        { id: 1, name: 'Catégorie 1' },
        { id: 2, name: 'Catégorie 2' }
    ];
    private readonly mockQuestions: Question[] = [
        {
            category: 'General Knowledge',
            type: 'multiple',
            difficulty: 'easy',
            question: 'Which of the following card games revolves around numbers and basic math?',
            correct_answer: 'Uno',
            incorrect_answers: ['Go Fish', 'Twister', 'Munchkin']
        },
        {
            category: 'General Knowledge',
            type: 'multiple',
            difficulty: 'easy',
            question: 'What is the Zodiac symbol for Gemini?',
            correct_answer: 'Twins',
            incorrect_answers: ['Fish', 'Scales', 'Maiden']
        },
        {
            category: 'General Knowledge',
            type: 'multiple',
            difficulty: 'easy',
            question:
                'According to the nursery rhyme, what fruit did Little Jack Horner pull out of his Christmas pie?',
            correct_answer: 'Plum',
            incorrect_answers: ['Apple', 'Peach', 'Pear']
        },
        {
            category: 'General Knowledge',
            type: 'multiple',
            difficulty: 'easy',
            question: 'How many furlongs are there in a mile?',
            correct_answer: 'Eight',
            incorrect_answers: ['Two', 'Four', 'Six']
        },
        {
            category: 'General Knowledge',
            type: 'multiple',
            difficulty: 'easy',
            question:
                'The drug cartel run by Pablo Escobar originated in which South American city?',
            correct_answer: 'Medell&iacute;n',
            incorrect_answers: ['Bogot&aacute;', 'Quito', 'Cali']
        }
    ];

    constructor(private httpClient: HttpClient) {}

    /**
     * Retrieve all categories
     *
     * @returns
     */
    getCategories(): Observable<Category[]> {
        if (this.isMocked) {
            return of(this.mockCategories);
        } else {
            return this.httpClient
                .get<RawCategoriesResponse>(this.baseUrl + this.categoryPath)
                .pipe(switchMap((result: RawCategoriesResponse) => of(result.trivia_categories)));
        }
    }

    /**
     * Retrieve 5 questions with multiple responses, according to selected category and difficulty
     *
     * @param category
     * @param difficulty
     * @returns
     */
    getQuestions(category: number, difficulty: Difficulties): Observable<Question[]> {
        if (this.isMocked) {
            return of(this.mockQuestions);
        } else {
            const url =
                this.baseUrl +
                this.questionPath +
                '?amount=' +
                this.numberOfQuestions +
                '&category=' +
                category +
                '&difficulty=' +
                difficulty +
                '&type=' +
                this.typeMultiple;

            return this.httpClient
                .get<RawQuestionsResponse>(url)
                .pipe(switchMap((result: RawQuestionsResponse) => of(result.results)));
        }
    }
}
