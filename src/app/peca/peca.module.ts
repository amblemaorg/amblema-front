// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbThemeModule,
  NbLayoutModule,
  NbMenuModule,
  NbToastrModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbTabsetModule,
  NbCardModule,
  NbAccordionModule,
  NbIconModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { PecaRoutingModule } from './peca-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
// COMPONENTS
import { PecaComponent } from './peca.component';
import { PecaPageComponent } from './peca-page/peca-page.component';
// Page Components
import { InitialDiagnosticPageComponent } from './peca-page/pages/initial-diagnostic-page.component';
import { SchoolDataPageComponent } from './peca-page/pages/school-data-page.component';
import { InitialWorkshopPageComponent } from './peca-page/pages/initial-workshop-page.component';
// Block Components
import { TabsBlockComponent } from './peca-page/blocks/tabs-block/tabs-block.component';
import { TableBlockComponent } from './peca-page/blocks/table-block/table-block.component';
import { AccordionBlockComponent } from './peca-page/blocks/accordion-block/accordion-block.component';

@NgModule({
  declarations: [
    PecaComponent,
    // Page Components
    PecaPageComponent,
    InitialWorkshopPageComponent,
    SchoolDataPageComponent,
    InitialDiagnosticPageComponent,
    // Block Components
    TabsBlockComponent,
    TableBlockComponent,
    AccordionBlockComponent,
  ],
  imports: [
    CommonModule,
    PecaRoutingModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbSidebarModule.forRoot(),
    NbContextMenuModule,
    NbTabsetModule,
    NbCardModule,
    NbAccordionModule,
    NbMenuModule.forRoot(),
    Ng2SmartTableModule,
  ],
  entryComponents: [
    TabsBlockComponent,
    TableBlockComponent,
    AccordionBlockComponent,
  ]
})
export class PecaModule { }
