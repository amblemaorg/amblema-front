export class Pager {
  constructor(private pages = 0) {}

  getPages() {
    return this.pages;
  }

  increment(factor = 1) {
    this.pages += factor;

    return this.pages;
  }

  decrement(factor = 1) {
    this.pages -= factor;
    return this.pages;
  }
}
