import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfTemplatesRoutingModule } from './pdf-templates-routing.module';
import { YearbookPdfTemplateComponent } from './yearbook-pdf-template/yearbook-pdf-template.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { ChartsSwitcherModule } from 'src/app/web/shared/charts-switcher/charts-switcher.module';

@NgModule({
  declarations: [YearbookPdfTemplateComponent],
  imports: [CommonModule, PdfTemplatesRoutingModule, PipesModule, ComponentsModule, ChartsSwitcherModule],
})
export class PdfTemplatesModule {}
