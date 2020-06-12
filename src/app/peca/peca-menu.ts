import { NbMenuItem } from "@nebular/theme";

export const PECA_LAPSE_OPTIONS_CONFIG = {
  ambleCoins: {
    title: "AmbLeMonedas",
    icon: "amblemoneda",
    link: "amblemoneda-page",
  },
  olympics: {
    title: "Olimpiadas de matemáticas",
    icon: "diagnostico",
    link: "olimpiadas-matematicas",
  },
  annualPreparation: {
    title: "Preparación de la convención anual",
    icon: "convencion",
    link: "preparacion-convencion-anual",
  },
  annualConvention: {
    title: "Convención anual",
    icon: "convencion",
    link: "convencion-anual",
  },
  lapsePlanning: {
    title: "Planificación del lapso",
    icon: "planificacion",
    link: "planificacion-lapso",
  },
  initialWorkshop: {
    title: "Taller inicial",
    icon: "taller-inicial",
    link: "taller-inicial",
  },
  activity: {
    title: "",
    icon: "actividades",
    link: "actividad-especial",
  },
};

export const PECA_MENU_DEFAULT_CONFIG: NbMenuItem[] = [
  {
    title: "Primer Lapso",
    icon: "one",
    children: [
      {
        title: "Datos de la escuela",
        icon: "folder-open",
        link: "datos-escuela",
      },
      {
        title: "Diagnóstico inicial",
        icon: "diagnostico",
        link: "diagnostico-inicial",
      },
    ],
  },
  {
    title: "Segundo Lapso",
    icon: "two",
    children: [
      {
        title: "Diagnóstico inicial",
        icon: "diagnostico",
        link: "diagnostico-inicial",
      },
    ],
  },
  {
    title: "Tercer Lapso",
    icon: "three",
    children: [
      {
        title: "Diagnóstico inicial",
        icon: "diagnostico",
        link: "diagnostico-inicial",
      },
    ],
  },
  {
    title: "Estrategia de seguimiento para actividades extraordinarias",
    icon: "actividades",
    link: "estrategia-seguimiento",
  },
  {
    title: "Proyecto ambiental",
    icon: "venezuela",
    link: "proyecto-ambiental",
  },
  {
    title: "Agenda de actividades",
    icon: "calendar",
    link: "agenda-page",
  },
  {
    title: "Anuario",
    icon: "anuario",
    link: "/pages/permissions",
  },
  {
    title: "Testimonio docentes",
    icon: "taller-inicial",
    link: "testimonio-docentes",
  },
  {
    title: "Fotos de la escuela y actividades",
    icon: "email-outline",
  },
  {
    title: "Salir",
    icon: "",
    link: "/auth/logout",
  },
];
