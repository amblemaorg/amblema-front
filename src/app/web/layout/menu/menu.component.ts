import { Component, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { JOIN_INVITATIONS, JoinFormId } from '../join-invitations';

export type MenuVariant = 'desktop' | 'mobile';

@Component({
  selector: 'web-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  /** `desktop`: barra horizontal. `mobile`: capa a pantalla completa controlada por el header. */
  @Input() variant: MenuVariant = 'desktop';
  @Input() isOpen = false;
  @Output() navigate = new EventEmitter<string>();
  @Output() closeMenu = new EventEmitter<void>();
  @Output() openForm = new EventEmitter<JoinFormId>();

  @ViewChild('closeButton') closeButton?: ElementRef<HTMLButtonElement>;

  readonly invitations = JOIN_INVITATIONS;

  menuItems = [
    { path: '/', name: 'Inicio' },
    { path: '/nosotros', name: 'Nosotros' },
    { path: '/padrinos', name: 'Padrinos' },
    { path: '/coordinadores', name: 'Coordinadores' },
    { path: '/escuelas', name: 'Escuelas' },
    { path: '/blog', name: 'Blog' },
  ];

  triggerNavigate() {
    this.navigate.emit('complete');
  }

  focusCloseButton() {
    this.closeButton && this.closeButton.nativeElement.focus();
  }
}
