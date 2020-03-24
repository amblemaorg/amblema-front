import { Component, OnInit, HostListener } from '@angular/core';
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
    // Slideout only when the device is mobile and portrait
    if (window.innerWidth < 768 && window.innerWidth < window.innerHeight)
      this.createMobileMenu();
  }

  @HostListener('window:resize', [''])
  onResize() {
    this.destroyMobileMenu();
    if (window.innerWidth < 768 && window.innerWidth < window.innerHeight)
      this.createMobileMenu();
  }

  createMobileMenu() {
    this.slideoutMenu = new Slideout({
      panel: document.getElementById('web-main'),
      menu: document.querySelector('web-menu.mobile-menu'),
      padding: 256,
      tolerance: 70
    });
  }

  destroyMobileMenu() {
    this.slideoutMenu && this.slideoutMenu.destroy();
  }

  onMenuClick() {
    this.slideoutMenu && this.slideoutMenu.toggle();
  }

}
