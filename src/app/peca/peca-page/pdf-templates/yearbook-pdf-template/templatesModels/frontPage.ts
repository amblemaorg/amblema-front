export class FrontPage {
  constructor(
    public data: { schoolName; schoolYear; sponsorName; sponsorLogo },
    public template = 'frontpageTemplate',
    public show = false,
    public priority = 0,
  ) {}
}
