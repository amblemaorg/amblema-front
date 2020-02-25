import { Component, OnInit } from '@angular/core';
import Slideout from 'slideout';
import { SvgIconRegistryService } from 'angular-svg-icon';

@Component({
  selector: 'web-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  slideoutMenu;
  constructor(
    private iconReg: SvgIconRegistryService
  ) {
    this.iconReg.loadSvg('./assets/icons/menu.svg', 'menu-icon');
  }

  ngOnInit() {
    //console.log(document.querySelector('web-menu.mobile-menu'));
    this.slideoutMenu = new Slideout({
      panel: document.getElementById('web-main'),
      menu: document.querySelector('web-menu.mobile-menu'),
      padding: 256,
      tolerance: 70
    });
  }

  onMenuClick() {
    this.slideoutMenu.toggle();
  }

}
