import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

@Component({
  selector: "web-offcanvas",
  templateUrl: "./offcanvas.component.html",
  styleUrls: ["./offcanvas.component.scss"],
})
export class OffcanvasComponent implements OnInit {
  @ViewChild("ref", { read: ElementRef, static: true }) ref: ElementRef;
  @Output() close = new EventEmitter();
  status: string = "closed";

  constructor() {}

  ngOnInit() {}

  onClose() {
    this.toClose();
    if (this.close) {
      this.close.emit("complete");
    }
  }

  open() {
    this.status = "opened";
    disableBodyScroll(this.ref.nativeElement);
  }

  toClose() {
    this.status = "closed";
    enableBodyScroll(this.ref.nativeElement);
  }
}
