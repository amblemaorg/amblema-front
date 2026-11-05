import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
  ViewChild,
} from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { SvgIconRegistryService } from "angular-svg-icon";

export type AulaActivaTheme = "green" | "blue";

/**
 * Sección "Aula Activa" (no es un pilar): texto a la izquierda, icono a la derecha.
 * El texto entra desplazándose de izquierda a derecha la primera vez que la
 * sección es visible. En SSR, sin IntersectionObserver o con
 * prefers-reduced-motion, se muestra sin animación.
 */
@Component({
  selector: "web-aula-activa",
  templateUrl: "./aula-activa.component.html",
  styleUrls: ["./aula-activa.component.scss"],
})
export class AulaActivaComponent implements AfterViewInit, OnDestroy {
  @Input() text = "";
  @Input() theme: AulaActivaTheme = "green";

  @ViewChild("section", { static: true }) section: ElementRef<HTMLElement>;

  private observer: IntersectionObserver | null = null;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private zone: NgZone,
    iconService: SvgIconRegistryService
  ) {
    iconService.loadSvg("../../../assets/icons/aaa-icon.svg", "aaa-icon");
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
