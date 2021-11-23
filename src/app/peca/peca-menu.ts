import { NbMenuItem } from "@nebular/theme";

export const PECA_LAPSE_OPTIONS_CONFIG = {
  initialWorkshop: {
    title: "Taller Inicial",
    icon: "taller-inicial",
    link: "taller-inicial",
    data: "initial_workshop_view",
  },
  ambleCoins: {
    title: "AmbLeMonedas",
    icon: "amblemonedas",
    link: "amblemoneda-page",
    data: "amblecoins_peca_view",
  },
  lapsePlanning: {
    title: "Planificación de Lapso",
    icon: "planificacion",
    link: "planificacion-lapso",
    data: "lapse_planning_peca_view",
  },
  annualConvention: {
    title: "Convención Anual",
    icon: "convencion",
    link: "convencion-anual",
    data: "annual_convention_peca_view",
  },
  annualPreparation: {
    title: "Preparación Anual",
    icon: "users",
    link: "preparacion-convencion-anual",
    data: "annual_preparation_peca_view",
  },
  olympics: {
    title: "Olimpíada de Matemática",
    icon: "medal",
    link: "olimpiadas-matematicas",
    data: "olympics_peca_view",
  },
  specialActivity: {
    title: "Actividad Especial de Lapso",
    icon: "actividades",
    link: "actividad-especial",
    data: "special_activity_view",
  },
  activities: {
    title: "",
    icon: "actividades",
    link: "actividad",
    data: "activity_peca_view",
  },
};

export const PECA_MENU_DEFAULT_CONFIG: NbMenuItem[] = [
  {
    title: "Primer Lapso",
    icon: "one",
    children: [
      {
        title: "Datos de la Escuela",
        icon: "folder-open",
        link: "datos-escuela",
        data: "school_peca_view",
      },
      {
        title: "Matrícula de año escolar anterior",
        icon: "group",
        link: "matricula-escolar-anterior",
        data: "school_peca_view", // this is for permissions, edit when this Page has its own
      },
      {
        title: "Diagnóstico",
        icon: "diagnostico",
        link: "lapso/1/diagnostico-inicial",
        data: "diagnostics_peca_view",
      },
    ],
  },
  {
    title: "Segundo Lapso",
    icon: "two",
    children: [
      {
        title: "Diagnóstico",
        icon: "diagnostico",
        link: "lapso/2/diagnostico-inicial",
        data: "diagnostics_peca_view",
      },
    ],
  },
  {
    title: "Tercer Lapso",
    icon: "three",
    children: [
      {
        title: "Diagnóstico",
        icon: "diagnostico",
        link: "lapso/3/diagnostico-inicial",
        data: "diagnostics_peca_view",
      },
    ],
  },
  {
    title: "Formato para registro de estudiantes",
    link: "formato-registro-estudiantes",
    icon: "file-text",
    data: "monitoring_activity_peca_view",
  },
  {
    title: "Estrategias de seguimiento para actividades extraordinarias",
    icon: "bar-chart-o",
    link: "estrategia-seguimiento",
    data: "monitoring_activity_peca_view",
  },
  {
    title: "Temática ambiental",
    icon: "leaf",
    link: "tematica-ambiental",
    data: "environmental_project_peca_view",
  },
  {
    title: "Agenda de actividades",
    icon: "book",
    link: "agenda-page",
    data: "schedule_peca_view",
  },
  {
    title: "AmbLeMario",
    icon: "anuario",
    link: "anuario-page",
    data: "yearbook_view",
  },
  {
    title: "Testimonio docentes",
    icon: "icn-docentes",
    link: "testimonio-docentes",
    data: "teacher_testimonial_view",
  },
  {
    title: "Fotos de las actividades",
    icon: "photo",
    link: "imagenes-escuela",
    data: "activities_slider_view",
  },
];
