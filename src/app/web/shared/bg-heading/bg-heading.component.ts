import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  ViewChild,
  NgZone,
} from "@angular/core";
import { fromEvent, Observable, Subscription } from "rxjs";

@Component({
  selector: "web-bg-heading",
  templateUrl: "./bg-heading.component.html",
  styleUrls: ["./bg-heading.component.scss"],
})
export class BgHeadingComponent implements OnInit {
  @ViewChild("bgHeading", { static: true }) bgHeading: ElementRef;
  @ViewChild("blueLine", { static: true }) blueLine: ElementRef;
  @ViewChild("greenLine", { static: true }) greenLine: ElementRef;
  scrollSubscription: Subscription;

  constructor(private zone: NgZone) {}

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.scrollSubscription = fromEvent(window, "scroll").subscribe(
        (event) => {
          this.onScroll(event);
        }
      );
    });
  }

  onScroll($event) {
    let scrollPosition = $event.srcElement.children[0].scrollTop;
    let headingElementPosition = this.bgHeading.nativeElement.offsetTop;

    if (headingElementPosition / scrollPosition <= 2) {
      if (this.scrollSubscription) {
        this.scrollSubscription.unsubscribe();
      }
      this.blueLine.nativeElement.classList.add("animation-finish");
      this.blueLine.nativeElement.classList.remove("animation-init");
      this.greenLine.nativeElement.classList.add("animation-finish");
      this.greenLine.nativeElement.classList.remove("animation-init");
    }
  }
}
