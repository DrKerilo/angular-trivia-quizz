import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../../../../models/category';
import { Difficulties } from '../../../../../models/enums/difficulties.enum';
import { TriviaDataService } from '../../../../../services/trivia-data.service';

@Component({
    selector: 'app-quiz-maker-setup',
    templateUrl: './quiz-maker-setup.component.html',
    styleUrls: ['./quiz-maker-setup.component.scss']
})
export class QuizMakerSetupComponent implements OnInit {
    categories$: Observable<Category[]> = this.triviaDataService.getCategories();
    difficulties = Object.values(Difficulties);

    selectedCategory: Category | undefined;
    selectedDifficulty: Difficulties | undefined;

    constructor(private triviaDataService: TriviaDataService) {}

    ngOnInit(): void {
        this.triviaDataService.getCategories().subscribe((data) => console.log(data));
    }
}