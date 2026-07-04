import 'zone.js/dist/zone-node';
import './server-polyfills';
import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
export { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
export { provideModuleMap };

import { renderModuleFactory as _renderModuleFactory } from '@angular/platform-server';

declare const __non_webpack_require__: any;

export function renderModuleFactory(moduleFactory: any, options: any) {
  // The prerender builder calls this function. 
  // We bypass Webpack to require the generated bundle and extract LAZY_MODULE_MAP
  const mainExports = __non_webpack_require__('./main.js');
  const lazyModuleMap = mainExports.LAZY_MODULE_MAP;
  
  options.extraProviders = options.extraProviders || [];
  if (lazyModuleMap) {
    options.extraProviders.push(provideModuleMap(lazyModuleMap));
  }
  
  return _renderModuleFactory(moduleFactory, options);
}
