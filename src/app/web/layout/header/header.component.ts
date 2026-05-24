import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SvgIconRegistryService } from 'angular-svg-icon';

@Component({
  selector: 'web-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  slideoutMenu;
  isBrowser: boolean;
  constructor(private iconReg: SvgIconRegistryService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.iconReg.loadSvg('./assets/icons/menu.svg', 'menu-icon');
    this.iconReg.loadSvg('./assets/icons/user.svg', 'user-icon');
  }

  ngOnInit() {
    if (this.isBrowser) {
      if (window.innerWidth < 768 && window.innerWidth < window.innerHeight) this.createMobileMenu();
    }
  }

  @HostListener('window:resize', [''])
  onResize() {
    if (this.isBrowser) {
      this.destroyMobileMenu();
      if (window.innerWidth < 768 && window.innerWidth < window.innerHeight) this.createMobileMenu();
    }
  }

  async createMobileMenu() {
    if (!this.isBrowser) return;
    const Slideout = (await import('slideout')).default;
    this.slideoutMenu = new Slideout({
      panel: document.getElementById('web-main'),
      menu: document.querySelector('web-menu.mobile-menu'),
      padding: 256,
      tolerance: 70,
    });
  }

  destroyMobileMenu() {
    this.slideoutMenu && this.slideoutMenu.destroy();
  }

  onMenuClick() {
    this.slideoutMenu && this.slideoutMenu.toggle();
  }
}
