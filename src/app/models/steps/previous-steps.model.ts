export interface Coordinator {
    id: string;
    name: string;
}

export interface Video {
    url: string;
    name: string;
}

export interface Checklist {
    name: string;
    id: string;
    checked: boolean;
}

export interface FileT {
    url: string;
    name: string;
}

export interface Step {
    status: string;
    hasVideo: boolean;
    hasUpload: boolean;
    video: Video;
    uploadedFile?: any;
    id: string;
    approvalHistory: any[];
    hasChecklist: boolean;
    checklist: Checklist[];
    approvalType: string;
    date?: any;
    name: string;
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
    school: string;
    sponsor: string;
    coordinator: Coordinator;
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