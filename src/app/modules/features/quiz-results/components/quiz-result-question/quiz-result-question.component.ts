import { Component, Input } from '@angular/core';
import { DisplayedQuestion } from '../../../../../models/questionnaire';

@Component({
    selector: 'app-quiz-result-question',
    templateUrl: './quiz-result-question.component.html',
    styleUrls: ['./quiz-result-question.component.scss']
})
export class QuizResultQuestionComponent {
    @Input() question!: DisplayedQuestion;

    /**
     * Get element's background color value based on user's answer
     *
     * @param answer
     * @returns
     */
    getColor(answer: string): 'accent' | 'warn' | '' {
        if (answer === this.question.correctAnswer) {
            return 'accent';
        }

        if (answer === this.question.userAnswer && answer !== this.question.correctAnswer) {
            return 'warn';
        }

        return '';
    }
}
