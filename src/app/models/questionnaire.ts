export interface Questionnaire {
    questions: DisplayedQuestion[];
    userScore?: number;
}

export interface DisplayedQuestion {
    question: string;
    answers: string[];
    correctAnswer: string;
    userAnswer?: string;
}
