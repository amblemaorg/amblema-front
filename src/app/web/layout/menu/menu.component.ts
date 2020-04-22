import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'web-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();

  menuItems = [
    {
      path: "/",
      name: "Inicio"
    },
    {
      path: "/nosotros",
      name: "Nosotros"
    },
    {
      path: "/padrinos",
      name: "Padrinos"
    },
    {
      path: "/coordinadores",
      name: "Coordinadores"
    },
    {
      path: "/escuelas",
      name: "Escuelas"
    },
    {
      path: "/blog",
      name: "Blog"
    }
  ]

  constructor() { }

  ngOnInit() { }
  triggerNavigate() {
    this.navigate.emit('complete');
  }
}
