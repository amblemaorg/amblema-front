import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  faTwitter as twitterIcon,
  faInstagram as instagramIcon,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as emailIcon } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt as phoneIcon } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "web-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  @Output() openModal = new EventEmitter<string>();
  email = "amblemaoficial@gmail.com";
  emailIcon = emailIcon;
  phone = "0414 1000456";
  phoneIcon = phoneIcon;
  instagram = "@amblema.ve";
  instagramIcon = instagramIcon;
  twitter = "@amblemave";
  twitterIcon = twitterIcon;

  constructor() {}

  ngOnInit() {}

  triggerSchoolForm() {
    this.openModal.emit("schoolForm");
  }

  triggerSponsorForm() {
    this.openModal.emit("sponsorForm");
  }

  triggerCoordinatorForm() {
    this.openModal.emit("coordinatorForm");
  }
}
