import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './../../../../../models/category';
import { Difficulties } from './../../../../../models/enums/difficulties.enum';
import { QuizOptions } from './../../../../../models/quiz-options';
import { TriviaDataService } from './../../../../../services/trivia-data.service';

@Component({
    selector: 'app-quiz-maker-setup',
    templateUrl: './quiz-maker-setup.component.html',
    styleUrls: ['./quiz-maker-setup.component.scss']
})
export class QuizMakerSetupComponent implements OnInit {
    protected categories$: Observable<Category[]> = this.triviaDataService.getCategories();
    protected difficulties: Difficulties[] = Object.values(Difficulties);

    protected selectedCategory: Category | undefined;
    protected selectedDifficulty: Difficulties | undefined;

    constructor(private triviaDataService: TriviaDataService) {}

    ngOnInit(): void {
        this.triviaDataService.getCategories().subscribe((data) => console.log(data));
    }

    createQuiz(quizOptions: QuizOptions): void {
        this.triviaDataService.setQuestionnaire(quizOptions.category, quizOptions.difficulty);
    }

    // resetQuiz(): void {
    //     this.triviaDataService.resetQuestionnaire();
    // }
}
