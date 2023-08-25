import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { FormsModule } from '@angular/forms';
import { QuestionModule } from '../../shared/components/question/question.module';
import { QuizMakerQuestionnaireComponent } from './components/quiz-maker-questionnaire/quiz-maker-questionnaire.component';
import { QuizMakerSetupComponent } from './components/quiz-maker-setup/quiz-maker-setup.component';
import { QuizMakerRoutingModule } from './quiz-maker-routing.module';
import { QuizMakerComponent } from './quiz-maker.component';

@NgModule({
    declarations: [QuizMakerComponent, QuizMakerSetupComponent, QuizMakerQuestionnaireComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatFormFieldModule,
        MatSelectModule,
        QuizMakerRoutingModule,
        QuestionModule,
        FormsModule
    ]
})
export class QuizMakerModule {}
