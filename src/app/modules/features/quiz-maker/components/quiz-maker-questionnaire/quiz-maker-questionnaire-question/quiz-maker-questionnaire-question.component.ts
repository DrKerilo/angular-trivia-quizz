import { Component, Input, OnChanges } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Question } from './../../../../../../api/open-trivia.service';
import { shuffle } from './../../../../../../utils/shuffle';

@Component({
    selector: 'app-quiz-maker-questionnaire-question',
    templateUrl: './quiz-maker-questionnaire-question.component.html',
    styleUrls: ['./quiz-maker-questionnaire-question.component.scss'],
    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class QuizMakerQuestionnaireQuestionComponent implements OnChanges {
    @Input() question!: Question;
    @Input() idQuestion!: string;

    randomizedAnswers: string[] = [];
    selectedAnswer: string = '';

    ngOnChanges(): void {
        this.randomizedAnswers = shuffle([
            this.question.correct_answer,
            ...this.question.incorrect_answers
        ]);
    }
}
