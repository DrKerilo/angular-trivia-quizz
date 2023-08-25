import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'decodeHtml' })
export class DecodeHtmlPipe implements PipeTransform {
    transform(value: string) {
        const textArea = document.createElement('textarea');
        textArea.innerHTML = value;
        return textArea.value;
    }
}
