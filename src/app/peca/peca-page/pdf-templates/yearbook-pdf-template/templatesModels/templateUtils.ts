import { Pager } from './Pager';
import { IndexListItem, RecursiveArrayIndexListItem } from './IndexTemplate';

export const showClauseFn = (pageTmp): boolean => {
  return true;
};

export const getPageLabelKeyFn = (pageTmp): string => {
  return 'title';
};

export class TemplateUtils {
  static getItemsToIndex(
    pagesTmp: any[],
    pagerInst: Pager,
    getLabelKey = getPageLabelKeyFn,
    parentItem?: IndexListItem,
    showClause = showClauseFn,
  ): RecursiveArrayIndexListItem {
    const listItems = [];
    const childItems = [];

    if (parentItem) {
      listItems.push(parentItem);
    }

    for (let index = 0; index < pagesTmp.length; index++) {
      const pageTmp = pagesTmp[index];
      const labelKey = getLabelKey(pageTmp);
      pageTmp.setPagerInst(pagerInst);

      if (parentItem) {
        childItems.push(
          new IndexListItem(
            pageTmp[labelKey],
            pageTmp.pgHref,
            pageTmp.page,
            showClause(pageTmp),
          ),
        );

        continue;
      }

      listItems.push(
        new IndexListItem(
          pageTmp[labelKey],
          pageTmp.pgHref,
          pageTmp.page,
          showClause(pageTmp),
        ),
      );
    }

    if (childItems.length > 0) {
      listItems.push(childItems);
    }

    return listItems;
  }
}
