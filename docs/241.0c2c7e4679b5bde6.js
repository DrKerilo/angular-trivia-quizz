"use strict";(self.webpackChunkangular_trivia_quizz=self.webpackChunkangular_trivia_quizz||[]).push([[241],{8241:(Z,a,i)=>{i.r(a),i.d(a,{QuizResultsModule:()=>y});var r=i(6895),c=i(4859),p=i(9047),e=i(1571);let f=(()=>{var t;class s{}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[r.ez]}),s})();var l=i(6239),d=i(9661),m=i(9281);let g=(()=>{var t;class s{constructor(n){this.el=n}ngOnInit(){if(void 0===this.userScore)throw Error("Please specify the user score");if(this.userScore<0||this.userScore>5)throw Error("User's score should be between 0 and 5");this.userScore<2?(this.el.nativeElement.style.backgroundColor="#d32f2f",this.el.nativeElement.style.color="white"):this.el.nativeElement.style.backgroundColor=this.userScore<4?"#ffd740":"#4caf50"}}return(t=s).\u0275fac=function(n){return new(n||t)(e.Y36(e.SBq))},t.\u0275dir=e.lG2({type:t,selectors:[["","colorScore",""]],inputs:{userScore:["colorScore","userScore"]}}),s})();var Q=i(8943);function h(t,s){if(1&t&&(e.TgZ(0,"button",4),e._uU(1),e.ALo(2,"decodeHtml"),e.qZA()),2&t){const o=s.$implicit,n=e.oxw(2);e.Q6J("color",n.getColor(o)),e.xp6(1),e.hij(" ",e.lcZ(2,2,o)," ")}}function v(t,s){if(1&t&&(e.TgZ(0,"article",1)(1,"h3"),e._uU(2),e.ALo(3,"decodeHtml"),e.qZA(),e.TgZ(4,"div",2),e.YNc(5,h,3,4,"button",3),e.qZA()()),2&t){const o=e.oxw();e.xp6(2),e.Oqu(e.lcZ(3,2,o.question.question)),e.xp6(3),e.Q6J("ngForOf",o.question.answers)}}let z=(()=>{var t;class s{getColor(n){return n===this.question.correctAnswer?"accent":n===this.question.userAnswer&&n!==this.question.correctAnswer?"warn":""}}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-quiz-result-question"]],inputs:{question:"question"},decls:1,vars:1,consts:[["class","mb-3 py-2 px-3 result-question-container",4,"ngIf"],[1,"mb-3","py-2","px-3","result-question-container"],[1,"d-flex","flex-row","flex-wrap","gap-3"],["mat-raised-button","","class","pe-none","tabindex","-1","aria-disabled","true",3,"color",4,"ngFor","ngForOf"],["mat-raised-button","","tabindex","-1","aria-disabled","true",1,"pe-none",3,"color"]],template:function(n,u){1&n&&e.YNc(0,v,6,4,"article",0),2&n&&e.Q6J("ngIf",u.question)},dependencies:[r.sg,r.O5,c.lW,Q.Z],styles:[".result-question-container[_ngcontent-%COMP%]{border:1px solid #f5f5f5;border-radius:8px;border-left:8px solid #f5f5f5;border-right:8px solid #f5f5f5}"]}),s})();function x(t,s){1&t&&e._UZ(0,"app-quiz-result-question",9),2&t&&e.Q6J("question",s.$implicit)}function q(t,s){1&t&&(e.TgZ(0,"span"),e._uU(1,"Ouch ! Try again !"),e.qZA())}function _(t,s){1&t&&(e.TgZ(0,"span"),e._uU(1,"Perfect !"),e.qZA())}function C(t,s){if(1&t){const o=e.EpF();e.TgZ(0,"section",1)(1,"h1",2),e._uU(2,"RESULTS"),e.qZA(),e.TgZ(3,"article",3),e.YNc(4,x,1,1,"app-quiz-result-question",4),e.TgZ(5,"div",5),e._uU(6),e.ynx(7,6),e.YNc(8,q,2,0,"span",7),e.YNc(9,_,2,0,"span",7),e.BQk(),e.qZA(),e.TgZ(10,"button",8),e.NdJ("click",function(){e.CHM(o);const u=e.oxw();return e.KtG(u.createNewQuiz())}),e._uU(11," Create a new quiz "),e.qZA()()()}if(2&t){const o=s.ngIf;e.xp6(4),e.Q6J("ngForOf",o.questions),e.xp6(1),e.Q6J("colorScore",o.userScore),e.xp6(1),e.hij(" You scored ",o.userScore," out of 5 ! "),e.xp6(1),e.Q6J("ngSwitch",o.userScore),e.xp6(1),e.Q6J("ngSwitchCase",0),e.xp6(1),e.Q6J("ngSwitchCase",5)}}const S=[{path:"",component:(()=>{var t;class s{constructor(n,u){this.router=n,this.triviaDataService=u,this.questionnaire$=this.triviaDataService.questionnaire$.asObservable()}createNewQuiz(){this.triviaDataService.resetQuestionnaire(),this.router.navigate(["/"+d.n.QUIZ_MAKER])}}return(t=s).\u0275fac=function(n){return new(n||t)(e.Y36(l.F0),e.Y36(m.o))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-quiz-results"]],decls:2,vars:3,consts:[["class","d-flex flex-column align-items-center p-3",4,"ngIf"],[1,"d-flex","flex-column","align-items-center","p-3"],[1,"fw-bold"],[1,"d-flex","flex-column"],[3,"question",4,"ngFor","ngForOf"],[1,"my-3","mx-5","p-2","fw-bold","rounded-1","text-center",3,"colorScore"],[3,"ngSwitch"],[4,"ngSwitchCase"],["mat-raised-button","","color","primary",1,"mt-3",3,"click"],[3,"question"]],template:function(n,u){1&n&&(e.YNc(0,C,12,6,"section",0),e.ALo(1,"async")),2&n&&e.Q6J("ngIf",e.lcZ(1,1,u.questionnaire$))},dependencies:[r.sg,r.O5,r.RF,r.n9,c.lW,g,z,r.Ov]}),s})()}];let R=(()=>{var t;class s{}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.Bz.forChild(S),l.Bz]}),s})(),y=(()=>{var t;class s{}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[r.ez,p.G,c.ot,R,f]}),s})()}}]);