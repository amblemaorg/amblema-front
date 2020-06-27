import {
  Component,
  OnInit,
  ViewChildren,
  ViewContainerRef,
  QueryList,
  Inject,
  PLATFORM_ID,
  OnDestroy,
} from '@angular/core';
import {
  PageBlockComponent,
  StructuralItem,
  StructuralBlockComponent,
} from '../page-block.component';
import { PageBlockFactory } from '../page-block-factory';
import { isPlatformBrowser } from '@angular/common';
import * as $ from 'jquery';
import { GlobalService } from '../../../../services/global.service';
import { Subscription } from 'rxjs';
declare var $: any;

@Component({
  selector: 'modal-block',
  template: `
    <div class="modal fade" [id]="settings.modalCode + '-modal'">
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
  styleUrls: ['./modal-block.component.scss'],
})
export class ModalBlockComponent implements StructuralBlockComponent, OnInit, OnDestroy {
  @ViewChildren('modalContainer', { read: ViewContainerRef }) modalContainer: QueryList<
    ViewContainerRef
  >;
  factory: PageBlockFactory;


  type: 'structural';
  component: string;
  settings: {
    isNotTableEditing?: boolean;
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
        if (this.settings.modalCode == data.code && this.isBrowser) {
          if (!this.settings.isNotTableEditing) {
            const image_group =
              this.settings.isFromImgContainer && data.action != "add" && data.action != "delete"
                ? {
                  imageSrc: data.data.newData.source
                    ? data.data.newData.source
                    : null,
                  imageSelected: data.data.dataCopyData.imageSelected
                    ? data.data.dataCopyData.imageSelected
                    : null,
                }
                : {};

            let data_from_table =
              data.action == "add"
                ? null
                : data.action == "delete"
                  ? data.data.oldData
                  : this.settings.isFromImgContainer
                    ? {
                      imageGroup: data.data.oldData.state
                        ? {
                          ...image_group,
                          imageDescription: data.data.newData.description,
                          imageStatus: data.data.newData.state,
                        }
                        : data.data.oldData.description
                          ? {
                            ...image_group,
                            imageDescription: data.data.newData.description,
                          }
                          : {
                            ...image_group
                          }
                    }
                    : this.settings.isFromImgPlusContainer
                      ? (data.action == "view"
                        ? {
                          name: data.data.oldData.name,
                          lastName: data.data.oldData.lastName,
                          cargo: data.data.oldData.cargo,
                          description: data.data.oldData.description,
                          addressState: data.data.oldData.addressState,
                          // status: data.data.oldData.status,
                        }
                        : {
                          imageGroup: {
                            imageCargo: data.data.newData.cargo,
                            imageDescription: data.data.newData.description,
                            // imageStatus: data.data.newData.status
                            //   ? data.data.newData.status
                            //   : null,
                            imageSrc: data.data.newData.source
                              ? data.data.newData.source
                              : null,
                            imageSelected: data.data.dataCopyData.imageSelected
                              ? data.data.dataCopyData.imageSelected
                              : null,
                          }
                        })
                      : data.data.newData;


            this.instantiateChildBlocks(data, [data_from_table, data]);
            
          }
          else{
            this.instantiateChildBlocksGraphics();
          }
          $(`#${data.code}-modal`).modal('show');
        }

      })
    );

    this.subscription.add(
      this.globals.hideModalEmitter.subscribe((code) => {
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
        if (!this.settings.isNotTableEditing)
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
    let blockInstances = new Map<string, PageBlockComponent>();
    this.settings.items.map((item, i) => {
      const container = this.modalContainer.toArray()[i];
      if (container.length > 0) container.clear();
      if (dataAttrs && dataAttrs.action == 'view') {
        item.childBlocks.map((block, j) => {
          if (
            block.viewMode &&
            block.viewMode != 'edit'
          ) {
            const blockInstance = this.setChildBlock(block, data, container, true);
            blockInstances.set(block.name || `modal${i}block${j}`, blockInstance);
          }
        });
      } else {
        item.childBlocks.map((block, j) => {
          if (
            dataAttrs &&
            block.component === dataAttrs.component &&
            block.viewMode &&
            block.viewMode != 'view'
          ) {
            const blockInstance = this.setChildBlock(block, data, container);
            blockInstances.set(block.name || `modal${i}block${j}`, blockInstance);
          }
          else if (
            dataAttrs &&
            block.component === dataAttrs.component &&
            !block.viewMode
          ) {
            const blockInstance = this.setChildBlock(block, data, container);
            blockInstances.set(block.name || `modal${i}block${j}`, blockInstance);
          }
        });
      }
    });
    this.globals.createdBlockInstances(blockInstances);
  }

  setChildBlock(block, data, container, viewOnly: boolean = false) {
    if (viewOnly) block.settings['isEditable'] = true; // to set readonly all fields
    else if (block.viewMode && block.viewMode == "both")
      block.settings['isEditable'] = false;
      
    if (block.component === "form")
      block.settings['data'] = data[0];
    block.settings['dataFromRow'] = data[1];
    const pageBlockComponentFactory = this.factory.createPageBlockFactory(block.component);
    const pageBlockComponent = container.createComponent(pageBlockComponentFactory);
    pageBlockComponent.instance.setSettings(block.settings);
    return pageBlockComponent.instance;
  }

  public instantiateChildBlocksGraphics() {
    this.settings.items.map((item, i) => {
      const container = this.modalContainer.toArray()[i];
      if (container.length > 0) container.clear();
      item.childBlocks.map(block => {
        // let settings = block.settings;
        // if (block.component == "graphics") settings = { settings: block.settings, factory: this.factory };
        const pageBlockComponentFactory = this.factory.createPageBlockFactory(block.component);
        const pageBlockComponent = container.createComponent(pageBlockComponentFactory);
        pageBlockComponent.instance.setSettings(block.settings);
      })
    })
  }

}
