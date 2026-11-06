/** Formularios del panel lateral (`web-offcanvas`) que abren las invitaciones. */
export type JoinFormId = 'schoolForm' | 'sponsorForm' | 'coordinatorForm';

export interface JoinInvitation {
  form: JoinFormId;
  prefix: string;
  highlight: string;
  suffix: string;
}

/** Invitaciones "Súmate a AmbLeMa", compartidas por el footer y el menú móvil. */
export const JOIN_INVITATIONS: ReadonlyArray<JoinInvitation> = [
  { form: 'schoolForm', prefix: '¿Te gustaría que ', highlight: 'AmbLeMa', suffix: ' esté en tu escuela?' },
  { form: 'sponsorForm', prefix: '¿Te gustaría ser ', highlight: 'Padrino', suffix: ' de una escuela?' },
  { form: 'coordinatorForm', prefix: '¿Te gustaría ser ', highlight: 'Coordinador', suffix: ' de una escuela?' },
];
