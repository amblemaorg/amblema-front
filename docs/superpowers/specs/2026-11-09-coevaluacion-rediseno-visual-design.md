# Rediseño visual de la coevaluación docente (modal PECA y página del docente)

Fecha: 2026-11-09 · Rama: `feat/coevaluacion-docente` (amblema-front) · Tamaño: cambio pequeño, solo front.

## Intención
El modal del PECA y la página `/coevaluacion/:token` funcionan, pero se ven planos: parecen un formulario sin jerarquía visual. El objetivo es que resulten atractivos y fáciles de recorrer sin cambiar su comportamiento.

## Alcance
- `src/app/peca/peca-page/blocks/teacher-coevaluation/teacher-coevaluation-modal.component.{html,scss,ts}` (lo usa el coordinador en escritorio).
- `src/app/web/pages/teacher-coevaluation/teacher-coevaluation.component.{html,scss,ts}` (lo usa el docente, sobre todo en el teléfono).

**No objetivos:** no se cambian el backend, los contratos de la API, las reglas de negocio (guardar una sola vez, reenvío con confirmación, bloqueo por lado), los estados NGXS ni la celda de la tabla de docentes.
**Anti-objetivos:** degradados (el PECA y la web no los usan); rojo en la escala o en los niveles, para que no se lea como castigo; perder la accesibilidad actual (`role="radiogroup"` / `aria-checked`).

## Enfoques considerados
- Página del docente: **A · tarjetas con encabezado y progreso** (elegido), B · paso a paso por dimensión (añade navegación) y C · escala de colores tipo semáforo (el rojo penaliza).
- Modal: **M1 · una columna con línea de estatus** (elegido; deja más espacio para puntuar y es coherente con A) y M2 · panel lateral con el resultado (angosto en pantallas medianas). De M2 se toman el indicador circular y los subtotales, que se muestran solo cuando la coevaluación está completa.

## Lenguaje visual (común)
- Colores planos, sin degradados. Fuente Montserrat.
- Paleta: azul PECA `#00809a` (encabezado, insignia de dimensión, paso activo, enlaces secundarios) · oscuro `#00353a`/`#01474e` (títulos y texto fuerte) · verde AmbLeMa `#81b03e` (botones 0–5, acción principal, barra de avance, borde de ítem puntuado) · verde oscuro `#00722e` (completado, promedio, nivel) · fondo `#f4f7f6` · bordes `#d7e2e4`.
- Encabezado: azul sólido con filete inferior verde de 4 px; antetítulo pequeño en mayúsculas, nombre del docente destacado y datos en etiquetas translúcidas.
- Dimensión: insignia cuadrada azul con la letra, nombre en oscuro y contador "x de n puntuadas" a la derecha.
- Ítem: tarjeta blanca con sombra suave y borde izquierdo verde si ya tiene puntaje (gris si está pendiente).
- Botones 0–5: contorno verde; el seleccionado se rellena de verde.
- Colores por nivel: Excelencia `#00722e`, Compromiso `#81b03e`, En avance ámbar `#a87600`, En inicio gris azulado `#6b7c85`.

## Modal del PECA (M1)
1. Encabezado: "Coevaluación Docente AmbLeMa HQS", nombre del docente y etiquetas (cédula, correo, grado/sección, escuela, año escolar). Se mantiene el botón de cerrar.
2. Línea de estatus horizontal: Enlace enviado (fecha y número de envíos) → Docente (fecha o pendiente) → Coordinador (fecha, "Puntuando" o pendiente), con el botón "Reenviar enlace" o "Enviar enlace" y su confirmación actual. Los avisos de docente inactivo o sin correo se conservan.
3. Bloque de resultado, **solo si está completada**: anillo SVG (total/75), porcentaje, insignia del nivel con su color, fechas y subtotales por dimensión A/B/C (se calculan en el front con los promedios de los ítems).
4. Columnas Docente / Coordinador / Promedio y tarjetas por ítem agrupadas por dimensión. Los puntajes ya registrados se muestran como píldoras; "Pendiente" en gris.
5. Escala 0–5 desplegable con un enlace "Ver escala".
6. Pie fijo (solo si `canEvaluate`): "x de 15 puntuadas", barra de avance y botón verde "Guardar coevaluación", con la confirmación actual.
7. En pantallas angostas (< 768 px), las tarjetas apilan la pregunta encima de los puntajes.

## Página del docente (A)
1. Encabezado azul con filete verde: antetítulo, "Hola, {nombre}", una línea de instrucción y etiquetas (escuela, grado/sección, año escolar).
2. Tarjeta de progreso superpuesta al encabezado: "x de 15" y barra verde. Se mantiene visible al desplazarse (sticky).
3. La escala 0–5 se presenta en una tarjeta compacta y legible.
4. Dimensiones con su insignia y una tarjeta por pregunta; al elegir un puntaje aparece debajo "✓ {etiqueta}: {descripción}" de la escala.
5. Barra de envío con el total y la confirmación actual. Los mensajes de enlace no disponible y de envío exitoso se rediseñan como tarjetas con la misma paleta.

## Queda a criterio del implementador
Espaciados, tamaños exactos, sombras e íconos (SVG en línea o Font Awesome ya disponible), siempre dentro de la paleta y sin degradados.

## Verificación manual
- PECA: Proyectos → proyecto con año escolar 2025-2026 → PECA → Datos de la escuela → tabla de docentes → abrir la coevaluación en cada estado (sin iniciar, pendiente del docente, pendiente del coordinador y completada).
- Docente: abrir `http://localhost:2005/coevaluacion/<token>` en escritorio y con la emulación móvil de DevTools; probar enlace inválido, puntuación completa y envío.
