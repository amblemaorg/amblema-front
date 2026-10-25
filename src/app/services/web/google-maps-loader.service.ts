import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { DOCUMENT, isPlatformBrowser } from "@angular/common";
import { environment } from "src/environments/environment";

declare const google: any;

/**
 * Carga el script de Google Maps bajo demanda (solo en las páginas con mapa) en lugar de
 * hacerlo de forma síncrona en el <head> de todas las páginas.
 * En el servidor (SSR/prerender) la promesa nunca se resuelve: no hay mapa que dibujar.
 */
@Injectable({
  providedIn: "root",
})
export class GoogleMapsLoaderService {
  private loading: Promise<void> | null = null;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(DOCUMENT) private document: any
  ) {}

  load(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) {
      return new Promise<void>(() => {});
    }
    if (typeof google !== "undefined" && google.maps) {
      return Promise.resolve();
    }
    if (!this.loading) {
      this.loading = new Promise<void>((resolve, reject) => {
        const script = this.document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsKey}`;
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => {
          // Permite reintentar en la próxima llamada
          this.loading = null;
          script.remove();
          reject(new Error("No se pudo cargar Google Maps"));
        };
        this.document.head.appendChild(script);
      });
    }
    return this.loading;
  }
}
