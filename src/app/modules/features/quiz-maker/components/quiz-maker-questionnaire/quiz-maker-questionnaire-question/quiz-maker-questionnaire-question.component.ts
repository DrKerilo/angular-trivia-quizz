import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DisplayedQuestion } from 'src/app/models/questionnaire';

@Component({
    selector: 'app-quiz-maker-questionnaire-question',
    templateUrl: './quiz-maker-questionnaire-question.component.html',
    styleUrls: ['./quiz-maker-questionnaire-question.component.scss'],
    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class QuizMakerQuestionnaireQuestionComponent {
    @Input() question!: DisplayedQuestion;
    @Input() idQuestion!: string;

    selectedAnswer: string = '';
}
