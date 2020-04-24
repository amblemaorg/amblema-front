// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
import { TextsButtonsSetBlockComponent } from './peca-page/blocks/texts-buttons-set-block/texts-buttons-set-block.component';
import { FormBlockComponent } from './peca-page/blocks/form-block/form-block.component';

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
    TextsButtonsSetBlockComponent,
    FormBlockComponent,
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
    ReactiveFormsModule,
    FormsModule,
  ],
  entryComponents: [
    TabsBlockComponent,
    TableBlockComponent,
    AccordionBlockComponent,
    TextsButtonsSetBlockComponent,
    FormBlockComponent,
  ]
})
export class PecaModule { }
