// Polyfills for browser environment during SSR/Prerendering
declare const __non_webpack_require__: any;
try {
  const domino = __non_webpack_require__('domino');
  const win = domino.createWindow('<html lang="es"><head></head><body><app-root></app-root></body></html>');
  (global as any).window = win;
  (global as any).document = win.document;
  (global as any).navigator = win.navigator;
  (global as any).Event = win.Event;
  (global as any).KeyboardEvent = win.Event;
  (global as any).MouseEvent = win.Event;
  (global as any).localStorage = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
  (global as any).sessionStorage = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
  (global as any).getComputedStyle = win.getComputedStyle;
} catch (e) {
  console.warn('Could not load domino polyfills', e);
}
