import { Component, OnInit } from "@angular/core";
import { faTwitter, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "social-sharing",
  template: `
    <div class="social-sharing">
      <span>Compartir</span>
      <span class="social-buttons">
        <fa-icon mat-fab shareButton="facebook" [title] [icon]="facebookIcon"></fa-icon>
        <fa-icon mat-fab shareButton="twitter" [icon]="twitterIcon"></fa-icon>
      </span>
    </div>
  `,
  styleUrls: ["./social-sharing.component.scss"],
})
export class SocialSharingComponent implements OnInit {
  facebookIcon = faFacebookSquare;
  twitterIcon = faTwitter;

  constructor() {}

  ngOnInit() {}
}
