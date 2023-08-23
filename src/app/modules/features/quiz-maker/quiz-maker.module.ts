import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { FormsModule } from '@angular/forms';
import { QuizMakerSetupComponent } from './components/quiz-maker-setup/quiz-maker-setup.component';
import { QuizMakerRoutingModule } from './quiz-maker-routing.module';
import { QuizMakerComponent } from './quiz-maker.component';

@NgModule({
    declarations: [QuizMakerComponent, QuizMakerSetupComponent],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatSelectModule,
        QuizMakerRoutingModule,
        FormsModule
    ]
})
export class QuizMakerModule {}
