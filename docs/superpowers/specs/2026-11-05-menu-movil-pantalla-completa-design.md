# Menú móvil a pantalla completa — diseño corto

Fecha: 2026-11-05 · Repo: `amblema-front` · Tamaño: cambio pequeño (solo front, sin backend ni contratos de API)

## Intención
Mejorar la navegación móvil del portal público. El menú lateral actual (`slideout` 1.0.1) se reinicia al hacer scroll en móvil (el `resize` que dispara la barra de direcciones destruye y recrea Slideout), no marca la página actual, no tiene cierre claro y el acceso a "Sistema PECA" es solo un icono. Además se quiere aprovechar el menú para captar padrinos, coordinadores y escuelas.

## Objetivos
- En móvil vertical, ☰ abre una capa a pantalla completa (fondo `$blue`) con:
  1. Logo + botón ✕.
  2. Los 6 enlaces actuales (`Inicio, Nosotros, Padrinos, Coordinadores, Escuelas, Blog`), grandes, con la página actual resaltada (`routerLinkActive`).
  3. Botón destacado "Sistema PECA →" (`/auth/login`).
  4. Bloque "Súmate a AmbLeMa" con **3 botones apilados** que reutilizan las frases del footer:
     - ¿Te gustaría ser **Padrino** de una escuela? → `sponsorForm`
     - ¿Te gustaría ser **Coordinador** de una escuela? → `coordinatorForm`
     - ¿Te gustaría que **AmbLeMa** esté en tu escuela? → `schoolForm`
- Al tocar una invitación: se cierra el menú y se abre el formulario existente (`web-offcanvas`) mediante `openOffcanvas()` de `web.component.ts`.
- Cierre del menú con ✕, con ESC, al navegar a cualquier enlace y al pasar a horizontal / ≥ `medium`.
- Scroll de la página bloqueado mientras el menú está abierto.
- Accesibilidad: `aria-label` y `aria-expanded` en ☰, `aria-controls`, `role="dialog"`/`aria-modal` en la capa, foco al botón ✕ al abrir y de vuelta a ☰ al cerrar.
- Eliminar `slideout` (dependencia, import dinámico, `HostListener` de resize y su CSS global).

## No objetivos
- Escritorio y móvil horizontal: sin cambios visuales (sigue el `desktop-menu`).
- Encabezado fijo (sticky) en móvil: fuera de alcance; se puede tratar aparte.
- Contactos/redes en el menú: descartado a favor de las invitaciones.
- Cambios en los formularios o en `web-offcanvas`.

## Anti-objetivos
- Que el menú aparezca visible en el HTML del SSR (Universal) antes de hidratar: la capa debe renderizarse cerrada por defecto y oculta por CSS.
- Acceder a `window`/`document.body` sin `isPlatformBrowser` (rompe el prerender).

## Enfoques considerados
1. **Angular + CSS propios (elegido por el Ing. Fidel).** Estado `isMenuOpen` en `HeaderComponent`; la capa vive en `MenuComponent` (variante móvil). Sin dependencias nuevas; ESC, foco y bloqueo de scroll se programan a mano (pocas líneas).
2. Overlay de `@angular/cdk` (ya instalado vía Nebular). Trae ESC y foco, pero introduce el CDK en el portal público y añade complejidad con SSR para 6 enlaces. Descartado.
3. Mantener `slideout` y solo reestilizar. No corrige el reinicio en scroll y depende de una librería sin mantenimiento. Descartado.

## Decisiones tomadas
- Opción visual: pantalla completa (propuesta 2 de la maqueta).
- Invitaciones: botones apilados con las frases del footer.
- Implementación: enfoque 1.

## Decisiones mías (revisar)
- Al cerrar el formulario se vuelve a la página, no al menú (igual que desde el footer).
- Las frases e identificadores de formulario de las invitaciones pasan a una constante compartida (p. ej. `web/layout/join-invitations.ts`) usada por footer y menú, para no duplicarlas. El HTML del footer conserva su marcado actual.
- Comunicación: `MenuComponent` emite `openForm: EventEmitter<'sponsorForm' | 'coordinatorForm' | 'schoolForm'>` → `HeaderComponent` lo reexpone → `web.component.html` lo enlaza a `openOffcanvas($event)`.
- Bloqueo de scroll con una clase en `body` (p. ej. `mobile-menu-open { overflow: hidden }`), añadida con `Renderer2` + `DOCUMENT` solo en navegador.
- Animación: fundido de la capa y enlaces en cascada corta (≤ 300 ms), respetando `prefers-reduced-motion`.

## Lo que queda al implementador
- Estructura exacta del template y nombres de clases SCSS (siguiendo `breakpoint()` de `assets/scss/_responsive.scss` y variables de `_variables.scss`).
- Si el `desktop-menu` y la capa móvil comparten la lista `menuItems` dentro del mismo `MenuComponent` o se separan en dos plantillas condicionales.
- Retirar `slideout` de `package.json`/`package-lock.json` (requiere `npm uninstall slideout` dentro del contenedor del front y rebuild).

## Verificación manual
En `http://localhost:2005`, DevTools en modo móvil vertical (~375×667) y también con red "Slow 3G":
1. Al cargar, el menú no aparece ni parpadea antes de que la página esté lista.
2. ☰ abre la capa; el scroll de fondo queda bloqueado; la página actual está resaltada.
3. Hacer scroll/forzar `resize` con el menú abierto no lo rompe.
4. ✕, ESC y tocar un enlace cierran el menú; el enlace navega.
5. "Sistema PECA →" lleva a `/auth/login`.
6. Cada invitación cierra el menú y abre el formulario correcto; al cerrarlo se vuelve a la página.
7. Girar a horizontal / ancho ≥ medium: la capa se cierra y se ve el menú de escritorio de siempre.
8. Teclado: Tab llega a ☰, Enter abre, el foco va a ✕, ESC cierra y el foco vuelve a ☰.
9. Prerender (`npm run prerender` según el procedimiento habitual) termina sin errores.
