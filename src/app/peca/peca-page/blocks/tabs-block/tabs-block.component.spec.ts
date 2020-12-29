import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TabsBlockComponent } from './tabs-block.component';
import { NbTabsetModule } from '@nebular/theme';
import { RouterTestingModule } from '@angular/router/testing';
import { PageBlockFactory } from '../page-block-factory';
import { ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { PageBlockComponent } from '../page-block.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('TabsBlockComponent', () => {
  let component: TabsBlockComponent;
  let fixture: ComponentFixture<TabsBlockComponent>;

  let factoryResolver: ComponentFactoryResolver;
  let pageBlockFactory: ComponentFactory<PageBlockComponent>;
  //factoryResolver.resolveComponentFactory.and.returnValue(pageBlockFactory)

  let factory: PageBlockFactory = new PageBlockFactory(factoryResolver);
  let tabsSettings = {
    component: 'tabs',
    settings: {
      items: [
        { title: 'Ambiente',   childBlocks: [] },
        { title: 'Lectura',    childBlocks: [] },
        { title: 'Matemática', childBlocks: [] }
      ],
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TabsBlockComponent,
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        NbTabsetModule
      ]
    })

    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [TabsBlockComponent]
      }
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsBlockComponent);
    component = fixture.componentInstance;
    factoryResolver = fixture.debugElement.injector.get(ComponentFactoryResolver);
    component.setSettings(tabsSettings);
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should have three (3) tabs elements', () => {
    const tabs = fixture.nativeElement.querySelectorAll('.tab');
    expect(component).toBeTruthy();
    expect(tabs.length).toBe(3);
  });

  it('should create tabs in order', () => {
    const tabs = fixture.nativeElement.querySelectorAll('.tab');
    tabs.forEach((tab, i) => {
      const tabSpan = tab.querySelector('a.tab-link span.tab-text');
      expect(tabSpan.textContent).toBe(tabsSettings.settings.items[i].title);
    })
  });
});
