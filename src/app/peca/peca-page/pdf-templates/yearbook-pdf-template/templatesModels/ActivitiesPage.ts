export class ActivitiesPage {
  constructor(
    public data: any,
    public template = 'layout4Template',
    public show = false,
    public priority = 0,
  ) {
    this.data.lapses = this.getActivities()
    // console.log('ActivitiesPage', this.data)
  }

  getActivities() {
    // console.log('ActivitiesPage 222', this.data.lapses)

    return this.data.lapses.map((lap) => {
      lap.activities = lap.activities.filter(
        (activity) => activity.description && activity.name,
      )
      lap.activities = lap.activities.map((activity) => ({
        ...activity,
        isExpandedGallery: activity.isExpandedGallery
          ? activity.isExpandedGallery
          : false,
      }))

      return lap
    })
  }
}
