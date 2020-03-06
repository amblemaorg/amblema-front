// MODULES
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
    name: string;
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

// ANSWER MODULE
export interface Answer {
    quizId: string;
    option: string;
}

export interface AnswerModule {
    coordinator: string;
    answers: Answer[];
}

// USERS COORDINATOR
export interface Role {
    name: string;
    id: string;
}

export interface AddressState {
    name: string;
    id: string;
}

export interface AddressMunicipality {
    name: string;
    id: string;
}

export interface CoordinatorUser {
    id: string;
    email: string;
    name: string;
    userType: string;
    phone: string;
    role: Role;
    addressState: AddressState;
    addressMunicipality: AddressMunicipality;
    address?: any;
    addressCity?: any;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    firstName: string;
    lastName: string;
    cardType: string;
    cardId: string;
    gender?: any;
    birthdate: string;
    projects: any[];
    homePhone: string;
    addressHome: string;
    learning: any[];
    nCoins: number;
}

export interface Answer {
    quizId: string;
    option: string;
}

export interface Attempt {
    status: string;
    createdAt: string;
    answers: Answer[];
}

export interface CoordinatorModule {
    moduleId: string;
    score: string;
    status: string;
    attempts: Attempt[];
}