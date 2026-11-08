import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  PLATFORM_ID,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { SvgIconRegistryService } from "angular-svg-icon";
import { AulaActivaImage } from "../../../models/web/web-about-us.model";

export type AulaActivaTheme = "green" | "blue";

/**
 * Sección "Aula Activa" (no es un pilar): texto a la izquierda y, a la derecha,
 * la galería de fotos (una por vez) o el icono si no hay fotos.
 * El texto entra desplazándose de izquierda a derecha la primera vez que la
 * sección es visible. En SSR, sin IntersectionObserver o con
 * prefers-reduced-motion, se muestra sin animación.
 */
@Component({
  selector: "web-aula-activa",
  templateUrl: "./aula-activa.component.html",
  styleUrls: ["./aula-activa.component.scss"],
})
export class AulaActivaComponent implements OnChanges, AfterViewInit, OnDestroy {
  @Input() text = "";
  @Input() theme: AulaActivaTheme = "green";
  @Input() images: AulaActivaImage[] | null = [];

  @ViewChild("section", { static: true }) section: ElementRef<HTMLElement>;

  readonly isBrowser: boolean;
  gallery: AulaActivaImage[] = [];
  // Se recalcula solo cuando cambian las fotos: un objeto nuevo en cada ciclo reiniciaría el carrusel
  galleryOptions: any = {};

  private observer: IntersectionObserver | null = null;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private zone: NgZone,
    iconService: SvgIconRegistryService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    iconService.loadSvg("../../../assets/icons/aaa-icon.svg", "aaa-icon");
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.images) {
      this.gallery = (this.images || []).filter((item) => item && !!item.image);
      const several = this.gallery.length > 1;
      this.galleryOptions = {
        autoplay: false,
        loop: several,
        mouseDrag: several,
        touchDrag: several,
        pullDrag: false,
        dots: false,
        nav: several,
        navText: ["", ""],
        navSpeed: 1000,
        responsive: { 0: { items: 1 } },
      };
    }
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId) || !this.shouldAnimate()) {
      return;
    }

    const element = this.section.nativeElement;
    element.classList.add("slide-init");

    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            element.classList.add("slide-in");
            this.disconnect();
          }
        },
        { threshold: 0.25 }
      );
      this.observer.observe(element);
    });
  }

  ngOnDestroy(): void {
    this.disconnect();
  }

  private shouldAnimate(): boolean {
    if (typeof IntersectionObserver === "undefined") {
      return false;
    }
    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return !prefersReducedMotion;
  }

  private disconnect(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}
