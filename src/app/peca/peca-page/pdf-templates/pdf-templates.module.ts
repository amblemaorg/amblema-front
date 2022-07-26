import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PdfTemplatesRoutingModule } from './pdf-templates-routing.module'
import { YearbookPdfTemplateComponent } from './yearbook-pdf-template/yearbook-pdf-template.component'

@NgModule({
  declarations: [YearbookPdfTemplateComponent],
  imports: [CommonModule, PdfTemplatesRoutingModule],
})
export class PdfTemplatesModule {}
