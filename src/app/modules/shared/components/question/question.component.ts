import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DisplayedQuestion } from 'src/app/models/questionnaire';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss'],
    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class QuestionComponent {
    @Input() question!: DisplayedQuestion;
    @Input() idQuestion!: string;

    selectedAnswer: string = '';
}
