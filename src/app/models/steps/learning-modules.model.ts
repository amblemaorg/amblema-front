// MODULES

export interface Coordinator {
    name: string;
    id: string;
}

export interface Sponsor {
    name: string;
    id: string;
}

export interface School {
    name: string;
    id: string;
}

export interface UProject {
    coordinator: Coordinator;
    id: string;
    code: string;
    sponsor: Sponsor;
    school: School;
}

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
export interface Basics {
    name: string;
    id: string;
}

export interface UserData {
    id: string;
    email: string;
    name: string;
    userType: string;    
    role: Basics;
    addressState: Basics;
    addressMunicipality: Basics;
    address: string;
    addressCity: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    //
    addressStreet?: string;
    phone?: string;
    image?: string;
    firstName?: string;
    lastName?: string;
    cardType?: string;
    cardId?: string;
    gender?: any;
    birthdate?: string;
    homePhone?: string;
    addressHome?: string;
    learning?: any[];
    nCoins?: number;
    companyRif?: string;
    companyType?: string;
    companyOtherType?: string;
    companyPhone?: string;
    contactFirstName?: string;
    contactLastName?: string;
    contactPhone?: string;
    webSite?: string;
    phase?: string;
    projects?: UProject[];
    project?: UProject;
    code?: string;
    schoolType?: any;
    principalFirstName?: string;
    principalLastName?: string;
    principalEmail?: string;
    principalPhone?: string;
    subPrincipalFirstName?: any;
    subPrincipalLastName?: any;
    subPrincipalEmail?: any;
    subPrincipalPhone?: any;
    nTeachers?: any;
    nAdministrativeStaff?: any;
    nLaborStaff?: any;
    nStudents?: any;
    nGrades?: any;
    nSections?: any;
    schoolShift?: any;
    profession?: string;
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
    score: number;
    status: string;
    attempts: Attempt[];
}