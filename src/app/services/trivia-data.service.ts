import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OpenTriviaService } from '../api/open-trivia.service';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class TriviaDataService {
  constructor(private openTriviaService: OpenTriviaService) {}

  getCategories(): Observable<Category[]> {
    return this.openTriviaService.getCategories();
  }
}
