import { Component, OnInit, ViewChildren, ViewContainerRef, QueryList, Inject, PLATFORM_ID } from '@angular/core';
import { PageBlockComponent, StructuralItem, StructuralBlockComponent } from '../page-block.component';
import { PageBlockFactory } from '../page-block-factory';
import { isPlatformBrowser } from '@angular/common';
import * as $ from 'jquery';
import { GlobalService } from '../../../../services/global.service';
declare var $:any;

@Component({
  selector: 'modal-block',
  template: `
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
  `,
  styleUrls: ['./modal-block.component.scss']
})
export class ModalBlockComponent implements StructuralBlockComponent, OnInit {
  @ViewChildren('modalContainer', { read: ViewContainerRef }) modalContainer: QueryList<ViewContainerRef>;
  factory: PageBlockFactory;

  type: 'structural';
  component: string;
  settings: {
    isFromImgContainer?: boolean; // indicates if data in table is from an image container
    modalCode?: string;
    items: StructuralItem[];
  };

  isBrowser;
  constructor(@Inject(PLATFORM_ID) private platformId, private globals: GlobalService) {
    this.isBrowser = isPlatformBrowser(platformId);

    this.type = 'structural';
    this.component = 'modal2';
  }

  ngOnInit() {
    this.globals.showModalEmitter.subscribe(data => {
      
      if (this.settings.modalCode == data.code && this.isBrowser) {

        let data_from_table = data.action=="add"? null :
                data.action=="delete"? data.data.oldData : 
                this.settings.isFromImgContainer? 
                  {
                    imageGroup: {
                      imageDescription: data.data.oldData.description,
                      imageStatus: data.data.oldData.state? data.data.oldData.state:null,
                      imageSrc: data.data.oldData.source? data.data.oldData.source:null,
                      imageSelected: data.data.dataCopyData.imageSelected? data.data.dataCopyData.imageSelected:null,
                    }
                  } 
                  : data.data.oldData;      

        this.instantiateChildBlocks( data.component, [data_from_table, data] );
        $(`#${data.code}-modal`).modal('show');

      }
    });

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

  public instantiateChildBlocks(componentType: string = "none", data: any = null) {    
    this.settings.items.map((item, i) => {
      const container = this.modalContainer.toArray()[i];
      if (container.length > 0) container.clear();
      item.childBlocks.map(block => {    
        if (block.component === componentType) {
          if (block.component === "form")
            block.settings['data'] = data[0];     
          block.settings['dataFromRow'] = data[1];
          const pageBlockComponentFactory = this.factory.createPageBlockFactory(block.component);
          const pageBlockComponent = container.createComponent(pageBlockComponentFactory);
          pageBlockComponent.instance.setSettings(block.settings);
        }             
      });   
    })
  }

}
