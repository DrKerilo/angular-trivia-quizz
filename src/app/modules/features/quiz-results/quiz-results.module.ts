import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { DecodeHtmlModule } from '../../../pipes/decode-html/decode-html.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { QuizResultQuestionComponent } from './components/quiz-result-question/quiz-result-question.component';
import { QuizResultsRoutingModule } from './quiz-results-routing.module';
import { QuizResultsComponent } from './quiz-results.component';

@NgModule({
    declarations: [QuizResultsComponent, QuizResultQuestionComponent],
    imports: [
        CommonModule,
        DecodeHtmlModule,
        MatButtonModule,
        QuizResultsRoutingModule,
        DirectivesModule
    ]
})
export class QuizResultsModule {}
