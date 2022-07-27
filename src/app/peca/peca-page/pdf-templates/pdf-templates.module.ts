import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PdfTemplatesRoutingModule } from './pdf-templates-routing.module'
import { YearbookPdfTemplateComponent } from './yearbook-pdf-template/yearbook-pdf-template.component'
import { PipesModule } from 'src/app/pipes/pipes.module'
import { BrowserModule } from '@angular/platform-browser'

@NgModule({
  declarations: [YearbookPdfTemplateComponent],
  imports: [CommonModule, PdfTemplatesRoutingModule, PipesModule],
})
export class PdfTemplatesModule {}
