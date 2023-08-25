import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DecodeHtmlPipe } from './decode-html.pipe';

@NgModule({
    declarations: [DecodeHtmlPipe],
    imports: [CommonModule],
    exports: [DecodeHtmlPipe]
})
export class DecodeHtmlModule {}
