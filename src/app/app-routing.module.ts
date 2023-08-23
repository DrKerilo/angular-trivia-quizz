import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPaths } from './models/enums/app-paths.enum';

const routes: Routes = [
  {
    path: '',
    redirectTo: AppPaths.QUIZ_MAKER,
    pathMatch: 'full',
  },
  {
    path: AppPaths.QUIZ_MAKER,
    loadChildren: () =>
      import('./modules/features/quiz-maker/quiz-maker.module').then(
        (m) => m.QuizMakerModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
