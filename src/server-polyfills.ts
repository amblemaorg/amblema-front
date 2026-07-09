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
const mockJQueryObj = {
  on: function() { return mockJQueryObj; },
  owlCarousel: function() { return mockJQueryObj; },
  trigger: function() { return mockJQueryObj; },
  removeClass: function() { return mockJQueryObj; },
  addClass: function() { return mockJQueryObj; },
  find: function() { return mockJQueryObj; },
  remove: function() { return mockJQueryObj; },
  css: function() { return mockJQueryObj; },
  hide: function() { return mockJQueryObj; },
  show: function() { return mockJQueryObj; }
};
const mockJQuery = function() { return mockJQueryObj; } as any;
mockJQuery.fn = { owlCarousel: function(){} };
(global as any).$ = (global as any).jQuery = mockJQuery;
if (typeof window !== 'undefined') {
  (window as any).$ = (window as any).jQuery = mockJQuery;
}
(global as any).gtag = function() {};
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
