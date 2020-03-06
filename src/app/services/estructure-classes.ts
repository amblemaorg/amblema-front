export interface ImaVideo {
    url: string;
    description: string;
    type: string;
}
export interface Image {
    image: string;
    description: string;
}
export interface Quizz {
    id: string;
    question: string;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    correctOption: string;
    createdAt: string;
    updatedAt: string;
}

export interface Module {
    id: string;
    title: string;
    description: string;
    secondaryTitle: string;
    secondaryDescription: string;
    objectives: string[];
    slider: ImaVideo[];
    images: Image[];
    duration: string;
    quizzes: Quizz[];
    createdAt: string;
    updatedAt: string;
}