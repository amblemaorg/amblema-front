import { Component, OnInit } from "@angular/core";
import {
  faTwitter,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "social-sharing",
  template: `
    <div class="social-sharing">
      <span>Compartir</span>
      <span class="social-buttons">
        <fa-icon [icon]="facebookIcon" (click)="share('facebook')"></fa-icon>
        <fa-icon [icon]="twitterIcon" (click)="share('twitter')"></fa-icon>
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

  share(socialNetwork: string) {
    console.log(socialNetwork);
  }
}
