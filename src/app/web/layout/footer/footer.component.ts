import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faInstagram as instagramIcon } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as emailIcon } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt as phoneIcon } from "@fortawesome/free-solid-svg-icons";

// Logo de X (antes Twitter). Trazado oficial de Font Awesome Free "x-twitter"
// (CC BY 4.0). Se define aquí porque @fortawesome/free-brands-svg-icons@6.4.0
// no lo incluye (faXTwitter llega en 6.4.2); al actualizar el paquete, sustituir
// por `faXTwitter` y eliminar esta constante.
const xTwitterIcon: IconDefinition = {
  prefix: "fab",
  iconName: "x-twitter" as IconDefinition["iconName"],
  icon: [
    512,
    512,
    [],
    "e61b",
    "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z",
  ],
};

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
  twitterIcon = xTwitterIcon;

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
