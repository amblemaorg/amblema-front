export interface Basics {
    id: string;
    name: string;
}

export interface Video {
    url: string;
    name: string;
}

export interface Checklist extends Basics {
    checked: boolean;
}

export interface FileT {
    url: string;
    name: string;
}

export interface Step extends Basics {
    status: string;
    hasVideo: boolean;
    hasUpload: boolean;
    video: Video;
    uploadedFile?: any;
    approvalHistory: any[];
    hasChecklist: boolean;
    checklist: Checklist[];
    approvalType: string;
    date?: any;
    devName: string;
    hasDate: boolean;
    isStandard: boolean;
    createdAt: Date;
    file: FileT;
    hasFile: boolean;
    text: string;
    tag: string;
    updatedAt: Date;
    hasText: boolean;
    // extras
    isForm?: boolean;
    type?: number;
    send?: boolean;
    goMods?: boolean;
    fileAttached?: any;
    sending?: boolean;
}

export interface StepsProgress {
    sponsor: string;
    steps: Step[];
    school: string;
    coordinator: string;
    general: string;
}

export interface Project {
    id: string;
    code: string;
    school?: Basics;
    sponsor?: Basics;
    coordinator?: Basics;
    schoolYears: any[];
    stepsProgress: StepsProgress;
    phase: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}

//

export interface StepApprovalRequest {
    stepId: string;
    project: string;
    comments: string;
    status: string;
    checklist: string;
    date: string;
    uploadedFile: File;
 }
 
 export interface ProjectStepApproval {
    id: string;
    status: string;
    checklist: string;
    date: string;
    uploadedFile: File; 
 }


 // RESIDENCE INFO CLASSES
 export interface StateInfo {
    id: string;
    name: string;
    polygon?: any[];
    createdAt?: Date;
    updatedAt?: Date;
}

export interface StateInMuninicipality {
    id: string;
    name: string;
}

export interface MunicipalityInfo {
    id: string;
    name: string;
    state?: StateInMuninicipality;
    polygon?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface StatesRecord {
    records: StateInfo[];
}
export interface MunicipalitiesRecord {
    records: MunicipalityInfo[];
}