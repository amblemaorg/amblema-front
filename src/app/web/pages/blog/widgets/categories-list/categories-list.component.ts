import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { BLOG_CATEGORIES } from "../../categories";

@Component({
  selector: "blog-categories-list",
  template: `
    <div class="categories">
      <p class="categories-title">Categorías</p>
      <ul class="categories-list">
        <li class="categories-list-item">
          <a [routerLink]="['/blog']">
            Todas las entradas
          </a>
        </li>
        <li class="categories-list-item" *ngFor="let category of categories">
          <a [routerLink]="['/blog', { tag: category.id }]">
            {{ category.name }}
          </a>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ["./categories-list.component.scss"],
})
export class CategoriesListComponent implements OnInit {
  @Output() filterByCategory = new EventEmitter<string>();

  categories = BLOG_CATEGORIES;

  constructor() {}

  ngOnInit() {}

  emitFilterByCategory() {
    this.filterByCategory.emit();
  }
}
