import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'
import { YearbookPdfTemplateComponent } from './yearbook-pdf-template/yearbook-pdf-template.component'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'yearbook',
        component: YearbookPdfTemplateComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdfTemplatesRoutingModule {}
