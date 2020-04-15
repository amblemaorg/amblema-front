import { Component, OnInit } from '@angular/core';
import { PECA_MENU_ITEMS } from './peca-menu';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'app-peca',
  templateUrl: './peca.component.html',
  styleUrls: ['./peca.component.scss']
})
export class PecaComponent implements OnInit {
  menu = PECA_MENU_ITEMS;

  constructor(private iconLibraries: NbIconLibraries) {
    this.iconLibraries.registerFontPack('amblemaicons', { iconClassPrefix: 'icon' });
    this.iconLibraries.setDefaultPack('amblemaicons');
  }

  ngOnInit() {
  }
}
