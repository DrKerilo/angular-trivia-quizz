export interface Questionnaire {
    questions: DisplayedQuestion[];
}

export interface DisplayedQuestion {
    question: string;
    answers: string[];
    correctAnswer: string;
    userAnswer?: string;
}
