import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GalleryComponent } from './gallery/gallery.component'

const components = [GalleryComponent]

@NgModule({
  declarations: components,
  imports: [CommonModule],
  exports: components,
})
export class ComponentsModule {}
