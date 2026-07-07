import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { ToastrModule } from 'ngx-toastr';
import { SvgLoader } from 'angular-svg-icon';
import { Observable, of } from 'rxjs';
import * as fs from 'fs';
import { join } from 'path';

export class SvgServerLoader implements SvgLoader {
  getSvg(url: string): Observable<string> {
    try {
      let cleanUrl = url || '';
      if (cleanUrl.startsWith('http')) {
        const match = cleanUrl.match(/https?:\/\/[^\/]+(\/.*)/);
        if (match) {
          cleanUrl = match[1];
        }
      }
      
      const assetsIndex = cleanUrl.indexOf('assets/');
      if (assetsIndex !== -1) {
        cleanUrl = cleanUrl.substring(assetsIndex);
      } else {
        cleanUrl = cleanUrl.replace(/^(\.+)?\//, '');
      }
      
      const filePath = join(process.cwd(), 'dist/browser', cleanUrl);
      
      if (fs.existsSync(filePath)) {
        const svgData = fs.readFileSync(filePath, 'utf8');
        return of(svgData);
      } else {
        console.warn(`[SvgServerLoader] File not found: ${filePath}`);
        return of('');
      }
    } catch (err) {
      console.error(`[SvgServerLoader] Error reading SVG: ${url}`, err);
      return of('');
    }
  }
}

export function svgServerLoaderFactory(): SvgLoader {
  return new SvgServerLoader();
}

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    NoopAnimationsModule,
    ModuleMapLoaderModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: SvgLoader,
      useFactory: svgServerLoaderFactory,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
