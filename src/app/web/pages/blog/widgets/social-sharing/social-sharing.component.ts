import { Component, OnInit } from "@angular/core";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLink, faCheck } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const faXTwitter: IconDefinition = {
  prefix: "fab",
  iconName: "x-twitter" as any,
  icon: [
    512,
    512,
    [],
    "e61b",
    "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z",
  ],
};

@Component({
  selector: "social-sharing",
  template: `
    <div class="social-sharing">
      <span>Compartir</span>
      <span class="social-buttons">
        <span
          class="copy-button-container"
          (click)="copyLink()"
          [title]="copied ? '¡Enlace copiado!' : 'Copiar enlace'"
        >
          <fa-icon
            mat-fab
            shareButton="copy"
            [icon]="copied ? checkIcon : copyIcon"
            [class.copied]="copied"
          ></fa-icon>
          <span class="copied-tooltip" *ngIf="copied">¡Copiado!</span>
        </span>
        <fa-icon mat-fab shareButton="facebook" title="Compartir en Facebook" [icon]="facebookIcon"></fa-icon>
        <fa-icon mat-fab shareButton="twitter" title="Compartir en X" [icon]="twitterIcon"></fa-icon>
      </span>
    </div>
  `,
  styleUrls: ["./social-sharing.component.scss"],
})
export class SocialSharingComponent implements OnInit {
  copyIcon = faLink;
  checkIcon = faCheck;
  facebookIcon = faFacebook;
  twitterIcon = faXTwitter;
  copied = false;
  private copyTimeout: any;

  constructor() {}

  ngOnInit() {}

  copyLink() {
    if (typeof window !== "undefined") {
      const url = window.location.href;
      if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).catch(() => {});
      }
    }
    this.copied = true;
    if (this.copyTimeout) {
      clearTimeout(this.copyTimeout);
    }
    this.copyTimeout = setTimeout(() => {
      this.copied = false;
    }, 2500);
  }
}
