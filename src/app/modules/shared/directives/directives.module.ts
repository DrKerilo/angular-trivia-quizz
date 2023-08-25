import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColorScoreDirective } from './color-score.directive';

@NgModule({
    declarations: [ColorScoreDirective],
    imports: [CommonModule],
    exports: [ColorScoreDirective]
})
export class DirectivesModule {}
