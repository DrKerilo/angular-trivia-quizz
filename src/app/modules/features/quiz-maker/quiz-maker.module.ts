import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { FormsModule } from '@angular/forms';
import { DecodeHtmlModule } from '../../../pipes/decode-html/decode-html.module';
import { QuizMakerQuestionnaireQuestionComponent } from './components/quiz-maker-questionnaire/quiz-maker-questionnaire-question/quiz-maker-questionnaire-question.component';
import { QuizMakerQuestionnaireComponent } from './components/quiz-maker-questionnaire/quiz-maker-questionnaire.component';
import { QuizMakerSetupComponent } from './components/quiz-maker-setup/quiz-maker-setup.component';
import { QuizMakerRoutingModule } from './quiz-maker-routing.module';
import { QuizMakerComponent } from './quiz-maker.component';

@NgModule({
    declarations: [
        QuizMakerComponent,
        QuizMakerSetupComponent,
        QuizMakerQuestionnaireComponent,
        QuizMakerQuestionnaireQuestionComponent
    ],
    imports: [
        CommonModule,
        DecodeHtmlModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatFormFieldModule,
        MatSelectModule,
        QuizMakerRoutingModule,
        FormsModule
    ]
})
export class QuizMakerModule {}
