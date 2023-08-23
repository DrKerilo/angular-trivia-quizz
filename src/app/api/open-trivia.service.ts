import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { Category, RawCategoriesResponse } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class OpenTriviaService {
  private readonly baseUrl = 'https://opentdb.com';
  private readonly categoryPath = '/api_category.php';
  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.httpClient
      .get<RawCategoriesResponse>(this.baseUrl + this.categoryPath)
      .pipe(
        switchMap((result: RawCategoriesResponse) =>
          of(result.trivia_categories),
        ),
      );
  }
}
