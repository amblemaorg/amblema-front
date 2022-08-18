export class SummaryAndCoordinatorPage {
  constructor(
    public data: {
      historicalReviewText
      historicalReviewImg
      coordinatorName
      coordinatorImg
      coordinatorText
    },
    public template = 'layout2Template',
    public show = false,
    public priority = 0,
  ) {}
}
