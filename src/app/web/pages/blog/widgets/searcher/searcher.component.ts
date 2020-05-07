import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FormControl } from "@angular/forms";

@Component({
  selector: "searcher",
  template: `
    <div class="searcher">
      <input
        class="searcher-input"
        [formControl]="searchInput"
        placeholder="Buscar"
        type="text"
        (keyup.enter)="emitSearch()"
      />
      <button class="searcher-icon searcher-button" (click)="emitSearch()">
        <fa-icon [icon]="searchIcon"></fa-icon>
      </button>
    </div>
  `,
  styleUrls: ["./searcher.component.scss"],
})
export class SearcherComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  searchInput = new FormControl("");
  searchIcon = faSearch;

  constructor() {}

  ngOnInit() {}

  emitSearch() {
    const searchTerm = this.searchInput.value;
    if (searchTerm /* && searchTerm.length > 4 */) {
      this.search.emit(searchTerm);
    }
  }
}
