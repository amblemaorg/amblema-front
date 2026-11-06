# Menú móvil a pantalla completa Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Sustituir el menú lateral `slideout` por una capa a pantalla completa en móvil vertical con enlaces, botón PECA e invitaciones que abren los formularios existentes.

**Architecture:** `HeaderComponent` guarda `isMenuOpen` y lo pasa a `MenuComponent` (variante móvil), que pinta la capa y emite `closeMenu` / `openForm`. `openForm` sube por `HeaderComponent` hasta `web.component.html`, que llama al `openOffcanvas()` existente. Las invitaciones salen de una constante compartida con el footer.

**Tech Stack:** Angular 11 + Universal (SSR), SCSS con `breakpoint()` de `assets/scss/_responsive.scss`, `body-scroll-lock` (ya usado en `web.component.ts`).

**Spec:** `docs/superpowers/specs/2026-11-05-menu-movil-pantalla-completa-design.md`

## Global Constraints
- Sin tests automatizados en el front (CLAUDE.md); la verificación es compilación + pasos manuales del spec.
- Sin dependencias nuevas; se elimina `slideout`.
- Todo acceso a `window`/`document`/`body-scroll-lock` detrás de `isPlatformBrowser`.
- Escritorio y móvil horizontal (`breakpoint(small, landscape)` y `breakpoint(medium)`) sin cambios visuales.
- Textos de invitación exactos del footer actual.
- Animaciones ≤ 300 ms y desactivadas con `prefers-reduced-motion: reduce`.
- Ejecución de npm solo dentro de contenedores Docker.

## Review Focus
- HTML del SSR/prerender: la capa debe salir cerrada (sin clase `open`) y no visible antes de hidratar.
- Girar el teléfono o redimensionar a ≥ 768px con el menú abierto: se cierra y se libera el scroll.
- Navegar con el menú abierto (enlace, botón atrás del navegador): se cierra y se libera el scroll.
- Abrir formulario desde el menú: no debe quedar el scroll bloqueado dos veces ni liberado antes de tiempo (el offcanvas usa su propia clase `active-form-wizard`).
- Foco: al abrir va a ✕; al cerrar vuelve a ☰.

---

### Task 1: Constante compartida de invitaciones + footer

**Files:**
- Create: `src/app/web/layout/join-invitations.ts`
- Modify: `src/app/web/layout/footer/footer.component.ts`, `footer.component.html`

**Interfaces:**
- Produces: `export type JoinFormId = 'schoolForm' | 'sponsorForm' | 'coordinatorForm';` y `export interface JoinInvitation { form: JoinFormId; prefix: string; highlight: string; suffix: string; }` y `export const JOIN_INVITATIONS: ReadonlyArray<JoinInvitation>` con, en este orden:
  - `schoolForm`: "¿Te gustaría que " / "AmbLeMa" / " esté en tu escuela?"
  - `sponsorForm`: "¿Te gustaría ser " / "Padrino" / " de una escuela?"
  - `coordinatorForm`: "¿Te gustaría ser " / "Coordinador" / " de una escuela?"

- [ ] Step 1: crear la constante.
- [ ] Step 2: footer renderiza los 3 botones con `*ngFor` sobre `JOIN_INVITATIONS` (`{{prefix}}<strong>{{highlight}}</strong>{{suffix}}`) y `openModal.emit(item.form)`; se eliminan `triggerSchoolForm/Sponsor/Coordinator`. Clases `footer-btn lg` intactas.
- [ ] Step 3: verificar compilación en `docker logs angular_amblema` (sin errores) y que el footer se ve igual en `http://localhost:2005`.

### Task 2: Capa móvil en `MenuComponent`

**Files:**
- Modify: `src/app/web/layout/menu/menu.component.ts`, `.html`, `.scss`

**Interfaces:**
- Consumes: `JOIN_INVITATIONS`, `JoinFormId` (Task 1).
- Produces: `@Input() isOpen = false`, `@Input() variant: 'desktop' | 'mobile' = 'desktop'`, `@Output() closeMenu = new EventEmitter<void>()`, `@Output() openForm = new EventEmitter<JoinFormId>()`; se mantiene `@Output() navigate` (lo emite al tocar un enlace).

- [ ] Step 1: `variant === 'desktop'` conserva el marcado actual (`nav.web-menu > ul > li > a`).
- [ ] Step 2: `variant === 'mobile'` pinta `div.mobile-overlay#mobile-menu[role=dialog][aria-modal=true][aria-label="Menú principal"]` con clase `open` según `isOpen`: cabecera (logo `assets/images/amblema-logo.png` + botón ✕ `aria-label="Cerrar menú"`), lista con `routerLinkActive="active"` (`[routerLinkActiveOptions]="{exact: true}"` para `/`), enlace "Sistema PECA →" a `/auth/login`, título "Súmate a AmbLeMa" y los 3 botones de invitación.
- [ ] Step 3: SCSS: capa `position: fixed; inset: 0; z-index` por encima del header (≥ 100) y por debajo del offcanvas; fondo `$blue`, texto `$white`, cerrada con `visibility: hidden; opacity: 0`; `.open` la muestra; enlaces en cascada; oculta en `breakpoint(small, landscape)` y `breakpoint(medium)`; `overflow-y: auto` para pantallas bajas.
- [ ] Step 4: compilación limpia en `docker logs angular_amblema`.

### Task 3: Estado en `HeaderComponent`, retirar Slideout y conectar formularios

**Files:**
- Modify: `src/app/web/layout/header/header.component.ts`, `.html`, `.scss`
- Modify: `src/app/web/web.component.html`
- Modify: `src/styles.scss` (borrar bloque "Slideout menu styles")

**Interfaces:**
- Consumes: entradas/salidas de Task 2.
- Produces: `HeaderComponent`: `isMenuOpen: boolean`, `openMenu(): void`, `closeMenu(restoreFocus = true): void`, `toggleMenu(): void`, `onOpenForm(form: JoinFormId): void`, `@Output() openForm = new EventEmitter<JoinFormId>()`.

- [ ] Step 1: quitar import de `slideout`, `slideoutMenu`, `createMobileMenu`, `destroyMobileMenu`, `onMenuClick`.
- [ ] Step 2: botón ☰ con `aria-label="Abrir menú"`, `aria-controls="mobile-menu"`, `[attr.aria-expanded]`; `<web-menu variant="mobile" ...>` fuera de `#web-main`.
- [ ] Step 3: abrir → `disableBodyScroll` sobre la capa y foco a ✕; cerrar → `enableBodyScroll` y foco a ☰. Cierre en: ✕, `document:keydown.escape`, `NavigationStart` del router, `window:resize` cuando `innerWidth >= 768 || innerWidth > innerHeight`. `ngOnDestroy` libera scroll y suscripción.
- [ ] Step 4: `onOpenForm(form)` → `closeMenu(false)` + `openForm.emit(form)`; en `web.component.html`: `<web-header ... (openForm)="openOffcanvas($event)">`.
- [ ] Step 5: compilación limpia; verificación manual de los pasos 2–8 del spec en `http://localhost:2005`.

### Task 4: Eliminar la dependencia `slideout` y validar prerender

**Files:**
- Modify: `package.json`, `package-lock.json`

- [ ] Step 1: `grep -rn slideout src` → sin resultados.
- [ ] Step 2: dentro del contenedor de desarrollo: `docker exec -u 1000:1000 -e HOME=/tmp angular_amblema sh -c 'cd /home/amblema && npm uninstall slideout'` (ajustar ruta si difiere).
- [ ] Step 3: prerender según el procedimiento de producción (`amblema_front_LOCAL`, `npm run prerender`) termina sin errores y el HTML de `/` no contiene la capa con clase `open`.
- [ ] Step 4: commit y push en `feat/menu-movil-pantalla-completa`.
