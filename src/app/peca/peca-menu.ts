import { NbMenuItem } from '@nebular/theme';

export const PECA_LAPSE_OPTIONS_CONFIG = {
  ambleCoins: {
    title: 'AmbLeMonedas',
    icon: 'amblemoneda',
    link: 'amblemoneda-page',
    data: 'amblecoin',
  },
  olympics: {
    title: 'Olimpíadas de matemáticas',
    icon: 'diagnostico',
    link: 'olimpiadas-matematicas',
    data: 'olympics',
  },
  annualPreparation: {
    title: 'Preparación de la convención anual',
    icon: 'convencion',
    link: 'preparacion-convencion-anual',
    data: 'annual_convention_preparation',
  },
  annualConvention: {
    title: 'Convención anual',
    icon: 'convencion',
    link: 'convencion-anual',
    data: 'annual_convention',
  },
  lapsePlanning: {
    title: 'Planificación del lapso',
    icon: 'planificacion',
    link: 'planificacion-lapso',
    data: 'lapse_planning',
  },
  initialWorkshop: {
    title: 'Taller inicial',
    icon: 'taller-inicial',
    link: 'taller-inicial',
    data: 'initial_workshop',
  },
  specialActivity: {
    title: 'Actividad especial de lapso',
    icon: 'actividades',
    link: 'actividad-especial',
    data: 'special_activity',
  },
  activity: {
    title: '',
    icon: 'actividades',
    link: 'actividad',
    data: 'generic_activity',
  },
};

export const PECA_MENU_DEFAULT_CONFIG: NbMenuItem[] = [
  {
    title: 'Primer Lapso',
    icon: 'one',
    children: [
      {
        title: 'Datos de la escuela',
        icon: 'folder-open',
        link: 'datos-escuela',
        data: 'school_data',
      },
      {
        title: 'Diagnóstico',
        icon: 'diagnostico',
        link: 'lapso/1/diagnostico-inicial',
        data: 'diagnostic',
      },
    ],
  },
  {
    title: 'Segundo Lapso',
    icon: 'two',
    children: [
      {
        title: 'Diagnóstico',
        icon: 'diagnostico',
        link: 'lapso/2/diagnostico-inicial',
        data: 'diagnostic',
      },
    ],
  },
  {
    title: 'Tercer Lapso',
    icon: 'three',
    children: [
      {
        title: 'Diagnóstico',
        icon: 'diagnostico',
        link: 'lapso/3/diagnostico-inicial',
        data: 'diagnostic',
      },
    ],
  },
  {
    title: 'Estrategia de seguimiento para actividades extraordinarias',
    icon: 'actividades',
    link: 'estrategia-seguimiento',
    data: 'activities_monitoring',
  },
  {
    title: 'Temática ambiental',
    icon: 'venezuela',
    link: 'proyecto-ambiental',
    data: 'environmental_project',
  },
  {
    title: 'Agenda de actividades',
    icon: 'calendar',
    link: 'agenda-page',
    data: 'activities_schedule',
  },
  {
    title: 'Anuario',
    icon: 'anuario',
    link: 'anuario-page',
    data: 'yearbook',
  },
  {
    title: 'Testimonio docentes',
    icon: 'taller-inicial',
    link: 'testimonio-docentes',
    data: 'teacher_testimonial',
  },
  {
    title: 'Fotos de las actividades',
    icon: 'anuario',
    link: 'imagenes-escuela',
    data: 'activities_pictures',
  },
  {    
    title: 'Salir',
    icon: 'trash-empty',
    link: '/auth/logout', 
    data: 'log_out',   
  },
];
