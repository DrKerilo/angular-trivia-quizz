import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizResultsRoutingModule } from './quiz-results-routing.module';
import { QuizResultsComponent } from './quiz-results.component';


@NgModule({
  declarations: [
    QuizResultsComponent
  ],
  imports: [
    CommonModule,
    QuizResultsRoutingModule
  ]
})
export class QuizResultsModule { }
