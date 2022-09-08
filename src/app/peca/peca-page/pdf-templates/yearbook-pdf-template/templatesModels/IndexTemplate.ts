import { Template, TemplateOptions } from './';

export type RecursiveArrayIndexListItem = Array<
  RecursiveArrayIndexListItem | IndexListItem
>;
export class IndexTemplate extends Template {
  listItems: RecursiveArrayIndexListItem = [];
  maxItemsToWrap = 23;
  utils = new IndexTemplateUtils();
  // maxItemsPerPaged = 48;

  constructor(
    listItems: RecursiveArrayIndexListItem = [],
    templateOptions?: TemplateOptions,
  ) {
    super('indexTemplate', templateOptions);

    this.listItems = listItems;
  }

  getListItemsLength() {
    return this.utils.getNotNestedItems(this.listItems).length;
  }

  haveToWrapList(listItems: any[]) {
    return this.utils.getNotNestedItems(listItems).length > this.maxItemsToWrap;
  }
}

export class IndexTemplateUtils {
  notNestedItems = [];
  levels = 0;

  setNotNestedItems(listItems: RecursiveArrayIndexListItem) {
    for (let index = 0; index < listItems.length; index++) {
      const item = listItems[index];

      if (!Array.isArray(item)) {
        item.arrayLevel = this.levels;
        this.notNestedItems.push(item);
        continue;
      }
      this.levels += 1;
      this.setNotNestedItems(item);
    }
  }

  getNotNestedItems(listItems: RecursiveArrayIndexListItem) {
    this.notNestedItems = [];
    this.levels = 0;
    this.setNotNestedItems(listItems);
    // console.log('this.notNestedItems', this.notNestedItems);
    return this.notNestedItems;
  }

  buildNestListItems(notNestedItems: IndexListItem[]) {
    const nestedListItems = [];

    for (let index = 0; index < notNestedItems.length; index++) {
      const item = notNestedItems[index];
      let nestedItem = [];

      // console.log(item.arrayLevel);

      for (let level = 0; level <= item.arrayLevel; level++) {
        if (index == 0) {
          console.log('buildNestListItems - level', level);
        }

        if (level === item.arrayLevel) {
          if (nestedItem[level]) {
            nestedItem[level].push(item);
          } else {
            nestedItem[level] = item;
          }

          nestedListItems.push(...nestedItem);
          continue;
        }

        if (!nestedItem[level]) {
          nestedItem[level] = [];
        }
      }

      if (index === 0 || index === 5 || index === 10) {
        console.log('buildNestListItems', nestedItem);
      }
    }

    // for (let index = 0; index < nestedListItems.length; index++) {
    //   const listItemToNest = nestedListItems[index];

    //   Array.isArray(listItemToNest)

    // }
    return nestedListItems;
  }
}

export class IndexListItem {
  constructor(
    public label: string,
    public href?: string,
    public pageNumber?: number,
    public show = true,
    public arrayLevel = 0,
  ) {}
}
