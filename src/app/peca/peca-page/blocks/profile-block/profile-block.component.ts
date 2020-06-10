import { Component, OnInit, AfterViewInit, ViewContainerRef, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { PageBlockComponent, StructuralBlockComponent, StructuralItem } from '../page-block.component';
import { PageBlockFactory } from '../page-block-factory';

@Component({
  selector: 'peca-profile-block',
  templateUrl: './profile-block.component.html',
  styleUrls: ['./profile-block.component.scss']
})
export class ProfileBlockComponent implements StructuralBlockComponent, OnInit, AfterViewInit {
  @ViewChildren('profileContainer', { read: ViewContainerRef }) profileContainer: QueryList<ViewContainerRef>;
  factory: PageBlockFactory;

  type: 'structural';
  component: string;
  settings: {
    items: StructuralItem[];
  }

  url="";
  uploadImageCaller(imgBtnContainer) {
    imgBtnContainer.querySelectorAll('input[type="file"]')[0].click();
  }
  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();

        reader.onload = (event:any) => {
            this.url = event.target.result;
        }

        reader.readAsDataURL(event.target.files[0]);
    }
}


  constructor() {
    this.type = 'structural';
    this.component = 'profiles';
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.instantiateChildBlocks();
    })
  }

  public setSettings(settings: any) {
    this.settings = settings.settings;
    this.factory = settings.factory ? settings.factory : {};
  }

  public instantiateChildBlocks() {
    this.settings.items.map((item, i) => {
      const container = this.profileContainer.toArray()[i];
      item.childBlocks.map(block => {
        let settings = block.settings;
        if (block.component=="modal") settings = { settings: block.settings, factory: this.factory };
        const pageBlockComponentFactory = this.factory.createPageBlockFactory(block.component);
        const pageBlockComponent = container.createComponent(pageBlockComponentFactory);
        pageBlockComponent.instance.setSettings(settings);
      })
    })
  }

}
