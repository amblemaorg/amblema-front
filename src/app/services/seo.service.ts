import { Inject, Injectable } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Meta, Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

// Dominio canónico: también en staging/local, para que solo se indexe producción
export const SITE_URL = "https://amblema.org";
export const SITE_NAME = "AmbLeMa";
export const DEFAULT_SHARE_IMAGE = `${SITE_URL}/assets/images/og-amblema.jpg`;

const DESCRIPTION_MAX = 160;

export interface SeoPage {
  title: string;
  description: string;
  // Ruta canónica (p. ej. "/nosotros"); por defecto la URL actual sin query ni hash
  path?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  noindex?: boolean;
}

/**
 * Metadatos por página: title, description, canonical, Open Graph, Twitter Card y robots.
 * Funciona en SSR/prerender (manipula el DOCUMENT del servidor) y en navegación cliente.
 */
@Injectable({ providedIn: "root" })
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  setPage(page: SeoPage): void {
    const description = SeoService.toDescription(page.description);
    const url = this.absoluteUrl(page.path);
    const image = this.absoluteUrl(page.image || DEFAULT_SHARE_IMAGE);

    this.title.setTitle(page.title);
    this.setName("description", description);
    this.setName("robots", page.noindex ? "noindex, follow" : "index, follow");
    this.setCanonical(page.noindex ? null : url);

    this.setProperty("og:type", page.type || "website");
    this.setProperty("og:site_name", SITE_NAME);
    this.setProperty("og:locale", "es_VE");
    this.setProperty("og:title", page.title);
    this.setProperty("og:description", description);
    this.setProperty("og:url", url);
    this.setProperty("og:image", image);
    this.setProperty("og:image:alt", page.imageAlt || page.title);

    this.setName("twitter:card", "summary_large_image");
    this.setName("twitter:title", page.title);
    this.setName("twitter:description", description);
    this.setName("twitter:image", image);
    this.setName("twitter:image:alt", page.imageAlt || page.title);
  }

  /** Texto plano para meta description: sin HTML ni entidades, espacios colapsados y recortado por palabra. */
  static toDescription(text: string, max = DESCRIPTION_MAX): string {
    const plain = (text || "")
      .replace(/<[^>]*>/g, " ")
      .replace(/&nbsp;/gi, " ")
      .replace(/&amp;/gi, "&")
      .replace(/&quot;/gi, '"')
      .replace(/&#39;|&apos;/gi, "'")
      .replace(/&lt;/gi, "<")
      .replace(/&gt;/gi, ">")
      .replace(/&[a-z0-9#]+;/gi, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (plain.length <= max) {
      return plain;
    }
    const cut = plain.slice(0, max - 1);
    const lastSpace = cut.lastIndexOf(" ");
    return `${(lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[\s,;:.]+$/, "")}…`;
  }

  private absoluteUrl(pathOrUrl?: string): string {
    if (pathOrUrl && /^https?:\/\//i.test(pathOrUrl)) {
      return pathOrUrl;
    }
    const raw = pathOrUrl || this.router.url || "/";
    const path = raw.split(/[?#]/)[0] || "/";
    // Codifica acentos/ñ sin volver a codificar lo que ya viene codificado
    const encoded = encodeURI(decodeURISafe(path));
    return `${SITE_URL}${encoded.startsWith("/") ? "" : "/"}${encoded}`;
  }

  private setName(name: string, content: string): void {
    this.meta.updateTag({ name, content }, `name="${name}"`);
  }

  private setProperty(property: string, content: string): void {
    this.meta.updateTag({ property, content }, `property="${property}"`);
  }

  private setCanonical(url: string | null): void {
    const head = this.document.head;
    let link = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!url) {
      if (link) {
        head.removeChild(link);
      }
      return;
    }
    if (!link) {
      link = this.document.createElement("link");
      link.setAttribute("rel", "canonical");
      head.appendChild(link);
    }
    link.setAttribute("href", url);
  }
}

function decodeURISafe(value: string): string {
  try {
    return decodeURI(value);
  } catch (e) {
    return value;
  }
}
