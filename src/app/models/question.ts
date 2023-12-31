import { Difficulties } from './enums/difficulties.enum';

export interface RawQuestionsResponse {
    response_code: number;
    results: Question[];
}

export interface Question {
    category: string;
    type: string;
    difficulty: Difficulties;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}
