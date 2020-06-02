import { Component, OnInit, AfterViewInit, ViewContainerRef, Inject, PLATFORM_ID, QueryList, ViewChildren } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PageBlockComponent, StructuralBlockComponent, StructuralItem } from '../page-block.component';
import { PageBlockFactory } from '../page-block-factory';
import * as $ from 'jquery';
import { GlobalService } from 'src/app/services/global.service';
declare var $:any;

@Component({
  selector: 'peca-modal-block',
  template: `
    <div class="container-for-modal-and-content">
        <div class="not-modal" *ngFor="let item of settings.items; index as i">
            <ng-template #notModalContainer></ng-template>
        </div> 
        <div class="modal fade" [id]="settings.modalCode+'-modal'">
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div *ngFor="let item of settings.items; index as i">
                            <ng-template #modalContainer></ng-template>
                        </div>                 
                    </div>    
                </div>
            </div>
        </div>
    </div>    
  `,
  styleUrls: ['./modal-block.component.scss']
})
export class ModalBlockComponent implements StructuralBlockComponent, OnInit, AfterViewInit {
  @ViewChildren('modalContainer', { read: ViewContainerRef }) modalContainer: QueryList<ViewContainerRef>;
  @ViewChildren('notModalContainer', { read: ViewContainerRef }) notModalContainer: QueryList<ViewContainerRef>;
  factory: PageBlockFactory;

  type: 'structural';
  component: string;
  settings: {
    modalCode?: string;
    items: StructuralItem[];
  }

  isBrowser;
  constructor(@Inject(PLATFORM_ID) private platformId, private globals: GlobalService) {
    this.isBrowser = isPlatformBrowser(platformId);

    this.type = 'structural';
    this.component = 'modal';
  }

  ngOnInit() {
    this.globals.hideModalEmitter.subscribe(code => {
      if (this.settings.modalCode == code && this.isBrowser) {
        $(`#${code}-modal`).modal('hide');     
      }
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
        if (this.settings.items)
            this.instantiateChildBlocks();
    })
  }

  public setSettings(settings: any) {
    this.settings = settings.settings;
    this.factory = settings.factory ? settings.factory : {};
  }

  public instantiateChildBlocks() {
    this.settings.items.map((item, i) => {
      const container = this.notModalContainer.toArray()[i];
      item.childBlocks.map(block => {
        const pageBlockComponentFactory = this.factory.createPageBlockFactory(block.component);
        const pageBlockComponent = container.createComponent(pageBlockComponentFactory);
        pageBlockComponent.instance.setSettings(block.settings);
      });
      const containerInsideModal = this.modalContainer.toArray()[i];
      if (item.formBlock) {
        const pageBlockComponentFactory2 = this.factory.createPageBlockFactory(item.formBlock.component);
        const pageBlockComponent2 = containerInsideModal.createComponent(pageBlockComponentFactory2);
        pageBlockComponent2.instance.setSettings(item.formBlock.settings);
      }      
    })
  }
}