import { Component, OnInit } from '@angular/core';
import { PECA_MENU_ITEMS } from './peca-menu';
import { NbIconLibraries,NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-peca',
  templateUrl: './peca.component.html',
  styleUrls: ['./peca.component.scss']
})
export class PecaComponent implements OnInit {
  menu = PECA_MENU_ITEMS;

  constructor(private iconLibraries: NbIconLibraries,private sidebarService: NbSidebarService) {
    this.iconLibraries.registerFontPack('amblemaicons', { iconClassPrefix: 'icon' });
    this.iconLibraries.setDefaultPack('amblemaicons');
  }

  toggle() {
    this.sidebarService.toggle(true, "menu-sidebar");
  }

  image_profile = "../../assets/images/profile-oscar.jpg"

  ngOnInit() {
  }
}
