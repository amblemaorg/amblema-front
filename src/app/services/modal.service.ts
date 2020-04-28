import { Injectable, TemplateRef, ElementRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable({providedIn: 'root'})
export class ModalService {
  defaultOptions = {
    ariaLabelledBy: 'modal-basic-title',
    backdropClass: 'transparent-backdrop',
    centered: true,
    size: 'lg',
    windowClass: 'amblema-theme'
  }

  constructor(private service: NgbModal) { }

  openModal(content: TemplateRef<any>): NgbModalRef {
    return this.service.open(content, this.defaultOptions);
  }

  openStaticModal(modalRef: ElementRef): void {
    console.log(modalRef)
    modalRef.nativeElement.classList.remove('z-hidden');
  }

  closeStaticModal(modalRef: ElementRef): void {
    console.log(modalRef)
    modalRef.nativeElement.classList.add('z-hidden');
  }
}
