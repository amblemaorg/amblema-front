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
        const pageBlockComponentFactory = this.factory.createPageBlockFactory(block.component);
        const pageBlockComponent = container.createComponent(pageBlockComponentFactory);
        pageBlockComponent.instance.setSettings(block.settings);
      })
    })
  }

}