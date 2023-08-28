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
    private readonly mockBasePath = '/mocks';
    private readonly mockCategoriesPath = '/categories.json';
    private readonly mockQuestionsPath = '/questions.json';
    private readonly numberOfQuestions = 5;
    private readonly typeMultiple = 'multiple';

    private readonly isMocked = false;

    constructor(private httpClient: HttpClient) {}

    /**
     * Retrieve all categories
     *
     * @returns
     */
    getCategories(): Observable<Category[]> {
        if (this.isMocked) {
            return this.httpClient.get<Category[]>(this.mockBasePath + this.mockCategoriesPath);
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
            return this.httpClient.get<Question[]>(this.mockBasePath + this.mockQuestionsPath);
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
