import {
  Component,
  HostListener,
  Inject,
  PLATFORM_ID,
  ViewChild,
  ElementRef,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { NavigationStart, Router } from '@angular/router';
import { SvgIconRegistryService } from 'angular-svg-icon';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { JoinFormId } from '../join-invitations';
import { MenuComponent } from '../menu/menu.component';

/** Mismo corte que `breakpoint(medium)` en assets/scss/_responsive.scss. */
const MOBILE_MAX_WIDTH = 768;

@Component({
  selector: 'web-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  @Output() openForm = new EventEmitter<JoinFormId>();
  @ViewChild('menuToggle') menuToggle?: ElementRef<HTMLButtonElement>;
  @ViewChild('mobileMenu') mobileMenu?: MenuComponent;

  isMenuOpen = false;
  private readonly isBrowser: boolean;
  private readonly routerSub: Subscription;

  constructor(
    private iconReg: SvgIconRegistryService,
    private router: Router,
    @Inject(PLATFORM_ID) platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.iconReg.loadSvg('./assets/icons/menu.svg', 'menu-icon');
    this.iconReg.loadSvg('./assets/icons/user.svg', 'user-icon');
    this.routerSub = this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe(() => this.closeMenu(false));
  }

  ngOnDestroy() {
    this.routerSub.unsubscribe();
    this.setScrollLock(false);
  }

  toggleMenu() {
    this.isMenuOpen ? this.closeMenu() : this.openMenu();
  }

  openMenu() {
    if (this.isMenuOpen) return;
    this.isMenuOpen = true;
    this.setScrollLock(true);
    // Esperar a que la capa sea visible para poder enfocarla.
    if (this.isBrowser) setTimeout(() => this.mobileMenu && this.mobileMenu.focusCloseButton());
  }

  closeMenu(restoreFocus = true) {
    if (!this.isMenuOpen) return;
    this.isMenuOpen = false;
    this.setScrollLock(false);
    if (restoreFocus && this.menuToggle) this.menuToggle.nativeElement.focus();
  }

  onOpenForm(form: JoinFormId) {
    this.closeMenu(false);
    this.openForm.emit(form);
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.closeMenu();
  }

  @HostListener('window:resize')
  onResize() {
    if (!this.isBrowser || !this.isMenuOpen) return;
    const { innerWidth, innerHeight } = window;
    if (innerWidth >= MOBILE_MAX_WIDTH || innerWidth > innerHeight) this.closeMenu(false);
  }

  private setScrollLock(locked: boolean) {
    if (!this.isBrowser) return;
    const overlay = this.document.getElementById('mobile-menu');
    // `body` tiene `overflow-y: visible !important` (styles.scss), así que el overflow inline de
    // body-scroll-lock no basta: se bloquea el scroll del viewport con una clase en <html>.
    // body-scroll-lock se mantiene por iOS (bloqueo de touchmove fuera de la capa).
    this.document.documentElement.classList.toggle('mobile-menu-open', locked);
    if (!overlay) return;
    locked ? disableBodyScroll(overlay) : enableBodyScroll(overlay);
  }
}
