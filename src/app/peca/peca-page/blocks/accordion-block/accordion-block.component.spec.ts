import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionBlockComponent } from './accordion-block.component';
import { NbAccordionModule } from '@nebular/theme';
import { RouterTestingModule } from '@angular/router/testing';
import { PageBlockFactory } from '../page-block-factory';
import { ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { PageBlockComponent } from '../page-block.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('AccordionBlockComponent', () => {
  let component: AccordionBlockComponent;
  let fixture: ComponentFixture<AccordionBlockComponent>;

  let factoryResolver: ComponentFactoryResolver;
  let pageBlockFactory: ComponentFactory<PageBlockComponent>;
  //factoryResolver.resolveComponentFactory.and.returnValue(pageBlockFactory)

  let factory: PageBlockFactory = new PageBlockFactory(factoryResolver);
  let accordionSettings = {
    component: 'accordion',
    settings: {
      items: [
        { title: 'Carta convenio',   childBlocks: [] },
        { title: 'Reunión para Planificación del taller inicial',    childBlocks: [] },
        { title: 'Preparación del taller inicial', childBlocks: [] },
        { title: 'Registro del taller inicial',   childBlocks: [] },
      ],
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AccordionBlockComponent,
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        NbAccordionModule
      ]
    })

    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [AccordionBlockComponent]
      }
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionBlockComponent);
    component = fixture.componentInstance;
    factoryResolver = fixture.debugElement.injector.get(ComponentFactoryResolver);
    component.setSettings(accordionSettings);
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should have three (4) accordion items', () => {
    const accordion_items = fixture.nativeElement.querySelectorAll('nb-accordion-item');
    expect(component).toBeTruthy();
    expect(accordion_items.length).toBe(3);
  });

  it('should create accordion items in order', () => {
    const accordion_items = fixture.nativeElement.querySelectorAll('nb-accordion-item');
    accordion_items.forEach((accordion_item, i) => {
      const accordionItemHeader = accordion_item.querySelector('nb-accordion-item-header');
      expect(accordionItemHeader.textContent).toContain(accordionSettings.settings.items[i].title);
    })
  });
});
