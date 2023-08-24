import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizResultsComponent } from './quiz-results.component';

const routes: Routes = [{ path: '', component: QuizResultsComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuizResultsRoutingModule {}
