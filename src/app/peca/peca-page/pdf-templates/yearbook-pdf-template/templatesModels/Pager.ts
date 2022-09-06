export class Pager {
  private page = 0;
  private pageCount = 0;

  constructor(lastPagesAdded: number, incrementFactor?: number) {
    if (incrementFactor) {
      this.increment(incrementFactor);
    }
    this.setPage(lastPagesAdded);
  }

  setPage(lastPagesAdded = 0) {
    this.page = this.pageCount + lastPagesAdded;
  }

  increment(factor = 1) {
    this.pageCount += factor;
    return this.pageCount;
  }

  decrement(factor = 1) {
    this.pageCount -= factor;
    return this.pageCount;
  }
}

export interface PagerOptions {
  lastPagesAdded;
  incrementFactor?: number;
}
