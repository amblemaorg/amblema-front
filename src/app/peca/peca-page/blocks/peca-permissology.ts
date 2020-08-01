export interface genericActivityPermissionsI {
    activity_peca_view: boolean;
    activity_peca_edit: boolean;
}
export const genericActivityPermissions = {
    name: "ActivityPeca",
    actions: [
        "activity_peca_view",
        "activity_peca_edit",
    ]
}

export interface sliderActivitiesPermissionsI {
    activities_slider_view: boolean;
    // activities_slider_create: boolean;
    // activities_slider_edit: boolean;
    // activities_slider_delete: boolean;
}
export const sliderActivitiesPermissions = {
    name: "ActivitiesSlider",
    actions: [
        "activities_slider_view",
        // "activities_slider_create",
        // "activities_slider_edit",
        // "activities_slider_delete"
    ]
}

export interface amblecoinsPermissionsI {
    amblecoins_peca_view: boolean;
    amblecoins_peca_edit: boolean;
}
export const amblecoinsPermissions = {
    name: "AmblecoinsPeca",
    actions: [
        "amblecoins_peca_view",
        "amblecoins_peca_edit"
    ]
}

export interface annualConventionPermissionsI {
    annual_convention_peca_view: boolean;
    annual_convention_peca_edit: boolean;
}
export const annualConventionPermissions = {
    name: "AnnualConventionPeca",
    actions: [
        "annual_convention_peca_view",
        "annual_convention_peca_edit"
    ]
}

export interface annualPreparationPermissionsI {
    annual_preparation_peca_view: boolean;
    annual_preparation_peca_edit: boolean;
}
export const annualPreparationPermissions = {
    name: "AnnualPreparationPeca",
    actions: [
        "annual_preparation_peca_view",
        "annual_preparation_peca_edit"
    ]
}

export interface initialWorkshopPermissionsI {
    initial_workshop_peca_view: boolean;
    initial_workshop_peca_edit: boolean;
}
export const initialWorkshopPermissions = {
    name: "InitialWorkshopPeca",
    actions: [
        "initial_workshop_peca_view",
        "initial_workshop_peca_edit"
    ]
}

export interface lapsePlanningPermissionsI {
    lapse_planning_peca_view: boolean;
    lapse_planning_peca_edit: boolean;
}
export const lapsePlanningPermissions = {
    name: "LapsePlanningPeca",
    actions: [
        "lapse_planning_peca_view",
        "lapse_planning_peca_edit"
    ]
}

export interface olympicsPermissionsI {
    olympics_peca_view: boolean;
    olympics_peca_edit: boolean;
}
export const olympicsPermissions = {
    name: "OlympicsPeca",
    actions: [
        "olympics_peca_view",
        "olympics_peca_edit"
    ]
}

export interface schoolPermissionsI {
    school_peca_view: boolean;
    school_peca_edit: boolean;
}
export const schoolPermissions = {
    name: "SchoolPeca",
    actions: [
        "school_peca_view",
        "school_peca_edit"
    ]
}

export interface teacherPermissionsI {
    teacher_view: boolean;
    teacher_create: boolean;
    teacher_edit: boolean;
    teacher_delete: boolean;
}
export const teacherPermissions = {
    name: "Teacher",
    actions: [
        "teacher_view",
        "teacher_create",
        "teacher_edit",
        "teacher_delete"
    ]
}

export interface teacherTestimonialPermissionsI {
    teacher_testimonial_view: boolean;
    teacher_testimonial_create: boolean;
    teacher_testimonial_edit: boolean;
    teacher_testimonial_delete: boolean;
}
export const teacherTestimonialPermissions = {
    name: "TeacherTestimonial",
    actions: [
        "teacher_testimonial_view",
        "teacher_testimonial_create",
        "teacher_testimonial_edit",
        "teacher_testimonial_delete"
    ]
}

export interface sectionPermissionsI {
    section_view: boolean;
    section_create: boolean;
    section_edit: boolean;
    section_delete: boolean;
}
export const sectionPermissions = {
    name: "Section",
    actions: [
        "section_view",
        "section_create",
        "section_edit",
        "section_delete"
    ]
}

export interface studentPermissionsI {
    student_view: boolean;
    student_create: boolean;
    student_edit: boolean;
    student_delete: boolean;
}
export const studentPermissions = {
    name: "Student",
    actions: [
        "student_view",
        "student_create",
        "student_edit",
        "student_delete"
    ]
}

export interface yearbookPermissionsI {
    yearbook_view: boolean;
    yearbook_edit: boolean;
}
export const yearbookPermissions = {
    name: "Yearbook",
    actions: [
        "yearbook_view",
        "yearbook_edit"
    ]
}

export interface specialActivityPermissionsI {
    special_activity_view: boolean;
    special_activity_edit: boolean;
}
export const specialActivityPermissions = {
    name: "SpecialActivity",
    actions: [
        "special_activity_view",
        "special_activity_edit"
    ]
}

export interface adminUserPermissionsI {
    admin_view: boolean;
    admin_edit: boolean;
}
export const adminUserPermissions = {
    name: "AdminUser",
    actions: [
        "admin_view",
        "admin_edit",
    ]
}

export interface coordinatorUserPermissionsI {
    coordinator_user_view: boolean;
    coordinator_user_edit: boolean;
}
export const coordinatorUserPermissions = {
    name: "CoordinatorUser",
    actions: [
        "coordinator_user_view",
        "coordinator_user_edit",
    ]
}

export interface schoolUserPermissionsI {
    school_user_view: boolean;
    school_user_edit: boolean;
}
export const schoolUserPermissions = {
    name: "SchoolUser",
    actions: [
        "school_user_view",
        "school_user_edit",
    ]
}

export interface sponsorUserPermissionsI {
    sponsor_user_view: boolean;
    sponsor_user_edit: boolean;
}
export const sponsorUserPermissions = {
    name: "SponsorUser",
    actions: [
        "sponsor_user_view",
        "sponsor_user_edit",
    ]
}

export interface environmentalProjectPermissionsI {
    environmental_project_view: boolean;
    environmental_project_edit: boolean;
}
export const environmentalProjectPermissions = {
    name: "EnvironmentalProject",
    actions: [
        "environmental_project_view",
        "environmental_project_edit"
    ]
}

export interface monitoringActivityPermissionsI {
    monitoring_activity_view: boolean;
    monitoring_activity_edit: boolean;
}
export const monitoringActivityPermissions = {
    name: "MonitoringActivity",
    actions: [
        "monitoring_activity_view",
        "monitoring_activity_edit"
    ]
}