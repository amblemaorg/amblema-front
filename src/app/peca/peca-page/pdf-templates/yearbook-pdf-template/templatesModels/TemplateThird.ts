/**
 * Templates about school
 * 1. layout3Template
 * 2. schoolStudentListTemplate
 */

// SchoolSectionsTemplateGroup manager

export class TemplateThird {
  constructor(
    public data: { tagTitle; name; img; text },
    public template = 'layout3Template',
    public show = false,
    public priority = 0,
  ) {}
}
