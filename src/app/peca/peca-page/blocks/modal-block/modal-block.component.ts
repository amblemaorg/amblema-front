import { Component, OnInit, ViewChildren, ViewContainerRef, QueryList, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { PageBlockComponent, StructuralItem, StructuralBlockComponent } from '../page-block.component';
import { PageBlockFactory } from '../page-block-factory';
import { isPlatformBrowser } from '@angular/common';
import * as $ from 'jquery';
import { GlobalService } from '../../../../services/global.service';
import { Subscription } from 'rxjs';
declare var $: any;

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
export class ModalBlockComponent implements StructuralBlockComponent, OnInit, OnDestroy {
  @ViewChildren('modalContainer', { read: ViewContainerRef }) modalContainer: QueryList<ViewContainerRef>;
  factory: PageBlockFactory;


  type: 'structural';
  component: string;
  settings: {
    dataPrueba?: boolean;
    isFromImgContainer?: boolean; // indicates if data in table is from an image container
    isFromImgPlusContainer?: boolean; // indicates if data in table is from an image container +
    modalCode?: string;
    items: StructuralItem[];
  };

  private subscription: Subscription = new Subscription();

  isBrowser;
  constructor(@Inject(PLATFORM_ID) private platformId, private globals: GlobalService) {
    this.isBrowser = isPlatformBrowser(platformId);

    this.type = 'structural';
    this.component = 'modal2';
  }

  ngOnInit() {
    this.subscription.add(
      this.globals.showModalEmitter.subscribe(data => {
        if (!this.settings.dataPrueba) {
          if (this.settings.modalCode == data.code && this.isBrowser) {
            const image_group = this.settings.isFromImgContainer && data.action != "add" && data.action != "delete" ? {
              imageDescription: data.data.oldData.description,
              imageSrc: data.data.oldData.source ? data.data.oldData.source : null,
              imageSelected: data.data.dataCopyData.imageSelected ? data.data.dataCopyData.imageSelected : null,
            } : {};

            let data_from_table = data.action == "add" ? null :
              data.action == "delete" ? data.data.oldData :
                this.settings.isFromImgContainer ?
                  {
                    imageGroup: data.data.oldData.state ? {
                      ...image_group,
                      imageStatus: data.data.oldData.state,
                    } : { ...image_group }
                  } :
                  this.settings.isFromImgPlusContainer ?
                    (data.action == "view" ? {
                      name: data.data.oldData.name,
                      lastName: data.data.oldData.lastName,
                      cargo: data.data.oldData.cargo,
                      description: data.data.oldData.description,
                      addressState: data.data.oldData.addressState,
                      status: data.data.oldData.status,
                    } : {
                        imageGroup: {
                          imageCargo: data.data.oldData.cargo,
                          imageDescription: data.data.oldData.description,
                          imageStatus: data.data.oldData.status ? data.data.oldData.status : null,
                          imageSrc: data.data.oldData.source ? data.data.oldData.source : null,
                          imageSelected: data.data.dataCopyData.imageSelected ? data.data.dataCopyData.imageSelected : null,
                        }
                      }) : data.data.oldData;

            this.instantiateChildBlocks(data, [data_from_table, data]);
            

          }

        }
        else 
          {
            this.instantiateChildBlocksGraphics();
          }
          $(`#${data.code}-modal`).modal('show');
        



      })
    );

    this.subscription.add(
      this.globals.hideModalEmitter.subscribe(code => {
        if (this.settings.modalCode == code && this.isBrowser) {
          $(`#${code}-modal`).modal('hide');
        }
      })
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.settings.items) {
        if (!this.settings.dataPrueba)
          this.instantiateChildBlocks();
        else this.instantiateChildBlocksGraphics();
      }

    })
  }

  public setSettings(settings: any) {
    this.settings = settings.settings;
    this.factory = settings.factory ? settings.factory : {};
  }

  public instantiateChildBlocks(dataAttrs: any = null, data: any = null) {
    console.log(this.settings.items)
    this.settings.items.map((item, i) => {
      const container = this.modalContainer.toArray()[i];
      if (container.length > 0) container.clear();
      if (dataAttrs && dataAttrs.action == "view") {
        item.childBlocks.map(block => {
          if (block.viewMode && block.viewMode != "edit")
            this.setChildBlock(block, data, container);
        });
      } else {
        item.childBlocks.map(block => {
          if (dataAttrs && block.component === dataAttrs.component && block.viewMode && block.viewMode != "view")
            this.setChildBlock(block, data, container);
          else if (dataAttrs && block.component === dataAttrs.component && !block.viewMode)
            this.setChildBlock(block, data, container);
        });
      }
    })
  }

  setChildBlock(block, data, container) {
    if (block.component === "form")
      block.settings['data'] = data[0];
    block.settings['dataFromRow'] = data[1];
    const pageBlockComponentFactory = this.factory.createPageBlockFactory(block.component);
    const pageBlockComponent = container.createComponent(pageBlockComponentFactory);
    pageBlockComponent.instance.setSettings(block.settings);
  }

  public instantiateChildBlocksGraphics() {
    console.log(this.settings.items)
    this.settings.items.map((item, i) => {
      const container = this.modalContainer.toArray()[i];
      if (container.length > 0) container.clear();
      item.childBlocks.map(block => {
        let settings = block.settings;
        if (block.component == "graphics") settings = { settings: block.settings, factory: this.factory };
        console.log(settings)
        const pageBlockComponentFactory = this.factory.createPageBlockFactory(block.component);
        const pageBlockComponent = container.createComponent(pageBlockComponentFactory);
        pageBlockComponent.instance.setSettings(settings);
      })
    })
  }

}
