import { Template, TemplateOptions } from './Template';
export class ActivityTemplate extends Template {
  constructor(
    public name: string,
    public description = '',
    public images = [],
    public characterLimit = 0,
    templateOptions?: TemplateOptions,
  ) {
    super('activityTemplate', templateOptions);

    // if (this.isExpandedGallery) {
    //   this.templateOptions.pagerOptions.incrementFactor = 1;
    // }
  }
}

export class ActivitiesPageData {
  constructor(public data: any) {
    this.data.lapses = this.getActivities();
  }

  getActivities() {
    return this.data.lapses.map((lap) => {
      lap.activities = lap.activities.filter((activity) => activity.description && activity.name);
      lap.activities = lap.activities.map((activity) => ({
        ...activity,
        isExpandedGallery: activity.isExpandedGallery ? activity.isExpandedGallery : false,
      }));

      return lap;
    });
  }
}
