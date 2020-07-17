export interface UploadedFile {
    url: string;
    name: string;
}

export interface Detail {
    lapse: string;
    pecaId: string;
    id: string;
    uploadedFile: UploadedFile;
}

export interface User {
    name: string;
    id: string;
}

export interface ApprovalHistory {
    detail: Detail;
    id: string;
    comments?: any;
    createdAt: Date;
    user: User;
    status: string;
    updatedAt: Date;
}

export interface GenericActivity {
    approvalHistory: ApprovalHistory[];
    approvalType: string;
    date?: any;
    uploadedFile?: any;        
    isStandard: boolean;
    status: string;
    video?: any;
    updatedAt: Date;
    text: string;
    file?: any;
    id: string;
    devName: string;
    createdAt: Date;
    checklist: any[];
    name: string;
    hasUpload: boolean;
    hasChecklist: boolean;
    hasDate: boolean;    
    hasVideo: boolean;
    hasText: boolean;
    hasFile: boolean;
}