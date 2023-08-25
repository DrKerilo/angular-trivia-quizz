import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { DecodeHtmlPipe } from '../../../../pipes/decode-html.pipe';
import { QuestionComponent } from './question.component';

@NgModule({
    declarations: [QuestionComponent, DecodeHtmlPipe],
    imports: [CommonModule, FormsModule, MatButtonToggleModule],
    exports: [QuestionComponent]
})
export class QuestionModule {}
