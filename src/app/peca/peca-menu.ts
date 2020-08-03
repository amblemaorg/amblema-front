import { NbMenuItem } from '@nebular/theme';

export const PECA_LAPSE_OPTIONS_CONFIG = {
  ambleCoins: {
    title: 'AmbLeMonedas',
    icon: 'amblemoneda',
    link: 'amblemoneda-page',
  },
  olympics: {
    title: 'Olimpíadas de matemáticas',
    icon: 'medal',
    link: 'olimpiadas-matematicas',
  },
  annualPreparation: {
    title: 'Preparación de la convención anual',
    icon: 'users',
    link: 'preparacion-convencion-anual',
  },
  annualConvention: {
    title: 'Convención anual',
    icon: 'convencion',
    link: 'convencion-anual',
  },
  lapsePlanning: {
    title: 'Planificación del lapso',
    icon: 'planificacion',
    link: 'planificacion-lapso',
  },
  initialWorkshop: {
    title: 'Taller inicial',
    icon: 'taller-inicial',
    link: 'taller-inicial',
  },
  specialActivity: {
    title: 'Actividad especial de lapso',
    icon: 'actividades',
    link: 'actividad-especial',
  },
  activity: {
    title: '',
    icon: 'actividades',
    link: 'actividad',
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
      },
      {
        title: 'Diagnóstico',
        icon: 'diagnostico',
        link: 'lapso/1/diagnostico-inicial',
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
      },
    ],
  },
  {
    title: 'Estrategias de seguimiento para actividades extraordinarias',
    icon: 'bar-chart-o',
    link: 'estrategia-seguimiento',
  },
  {
    title: 'Temática ambiental',
    icon: 'leaf',
    link: 'tematica-ambiental',
  },
  {
    title: 'Agenda de actividades',
    icon: 'book',
    link: 'agenda-page',
  },
  {
    title: 'Anuario',
    icon: 'anuario',
    link: 'anuario-page',
  },
  {
    title: 'Testimonio docentes',
    icon: 'icn-docentes',
    link: 'testimonio-docentes',
  },
  {
    title: 'Fotos de las actividades',
    icon: 'photo',
    link: 'imagenes-escuela',
  },
];
