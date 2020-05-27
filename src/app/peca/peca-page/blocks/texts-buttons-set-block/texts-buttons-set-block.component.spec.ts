import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TextsButtonsSetBlockComponent } from './texts-buttons-set-block.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PageBlockFactory } from '../page-block-factory';
import { ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { PageBlockComponent } from '../page-block.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { NgSelectModule } from '@ng-select/ng-select';

describe('TextsButtonsSetBlockComponent', () => {
  let component: TextsButtonsSetBlockComponent;
  let fixture: ComponentFixture<TextsButtonsSetBlockComponent>;

  let factoryResolver: ComponentFactoryResolver;
  let pageBlockFactory: ComponentFactory<PageBlockComponent>;
  //factoryResolver.resolveComponentFactory.and.returnValue(pageBlockFactory)

  let factory: PageBlockFactory = new PageBlockFactory(factoryResolver);
  let textsAndButtonsSettings = {
    component: 'buttons',
    settings: {
          dateOrtext: {
            text: 'texto fecha',
            date: '12/12/12',
          },
          status: 'pendiente',
          // texts: {
            title: {
              aligning: 'center', // 'center' for center aligning, 'left' otherwise
              text: 'texto alineado',
            },
            subtitles: [{
              title: 'subtitulo', // subtitle
              text: 'parrafo', // paragraph
            },],
          // }[];    
          action: [{
              type: 1, // 1 send, 2 save
              name: 'Enviar', // text in the button
          }],
          // upload: any;
        //   download: any;
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TextsButtonsSetBlockComponent,
      ],
      imports: [
        NgSelectModule,
        RouterTestingModule.withRoutes([]),
      ]
    })

    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [TextsButtonsSetBlockComponent]
      }
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextsButtonsSetBlockComponent);
    component = fixture.componentInstance;
    factoryResolver = fixture.debugElement.injector.get(ComponentFactoryResolver);
    component.setSettings(textsAndButtonsSettings.settings);
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });  
});
