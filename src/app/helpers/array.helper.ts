export class ArrayHelper {
  /**
   * @description Return array of different elements. The use with just array without keyRef doesn't work, repeat 0 elements
   * @author Christopher Dallar
   * @date 03/03/2022
   * @static
   * @param {any[]} elements
   * @param {string} [keyRef]
   * @return
   * @memberof ArrayHelper
   */
  static unique(elements: any[], keyRef?: string) {
    let uniqueItems = [];

    elements.map((element) => {
      const existInUniqueItems = uniqueItems.find((uniqueItem) => {
        return keyRef ? element[keyRef] === uniqueItem : element === uniqueItem;
      });

      if (existInUniqueItems) {
        return true;
      }

      uniqueItems.push(keyRef ? element[keyRef] : element);
    });

    return uniqueItems;
  }
}
