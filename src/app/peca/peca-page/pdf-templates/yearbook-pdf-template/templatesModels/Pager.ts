export class Pager {
  readonly total = 0;

  constructor(private page = 0) {}

  getPage() {
    return this.page;
  }

  increment(factor = 1) {
    this.page += factor;
    return this.page;
  }

  decrement(factor = 1) {
    this.page -= factor;
    return this.page;
  }
}

export interface PagerOptions {
  // lastPagesAdded?: number;
  incrementFactor?: number;
}
