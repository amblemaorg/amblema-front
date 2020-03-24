import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'web-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss']
})
export class OffcanvasComponent implements OnInit {
  @Input() status;
  @Output() close = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  onClose() {
    if (this.close) {
      this.close.emit('complete');
    }
  }
}
