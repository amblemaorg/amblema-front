# handoff — amblema-front

## Estado actual
Rama `fix/amblemario-diagnosticos-lapso1` (desde `master`), sin commit. `tsc --noEmit` OK.

## Hecho
- 2026-11-17 — AmbLeMario, diagnósticos lapso 1 (U.E.E. Víctor Lino Gómez 2026-2027):
  - `peca/peca-page/mappers/amblemario-mapper.ts`: lectura, multiplicación y lógica incluyen todas las
    secciones; sin valor => `0.00` (antes lectura/multiplicación omitían secciones con `null`).
  - `DiagnosticTemplate.ts` `getDiagIndexFromGraphicsForProvDataTb`: la tabla provisional ahora agrupa por grado (promedio).

## Pendiente
- Verificar a mano con el PECA real (esa escuela no está en la BD local).
- Commit cuando el Ing. Fidel lo indique.

## Decisiones y notas
- El backend guarda `null` en `section.diagnostics` cuando la sección no tiene datos; el front debe tratarlo como 0.
- Efecto: lapsos sin ningún dato muestran tablas en cero para lectura/multiplicación (lógica ya lo hacía).
