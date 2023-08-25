import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[colorScore]'
})
export class ColorScoreDirective implements OnInit {
    @Input('colorScore') userScore: number | undefined;

    constructor(private el: ElementRef) {}

    ngOnInit(): void {
        if (this.userScore === undefined) {
            throw Error('Please specify the user score');
        }

        if (this.userScore < 0 || this.userScore > 5) {
            throw Error("User's score should be between 0 and 5");
        }

        if (this.userScore < 2) {
            this.el.nativeElement.style.backgroundColor = '#d32f2f'; // red
            this.el.nativeElement.style.color = 'white'; // better contrast
        } else if (this.userScore < 4) {
            this.el.nativeElement.style.backgroundColor = '#ffd740'; // yellow
        } else {
            this.el.nativeElement.style.backgroundColor = '#4caf50'; // green
        }
    }
}
