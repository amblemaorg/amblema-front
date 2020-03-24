import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'web-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }
  triggerNavigate() {
    this.navigate.emit('complete');
  }
}
