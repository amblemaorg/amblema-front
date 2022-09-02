import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FilterPipe } from './filtro.pipe'
import { Excerpt } from './length-max-characther.pipe'
import { Trim } from './trim.pipe'
import { BreakLinePipe } from './line-break-to-br-tag.pipe'

const pipes = [FilterPipe, Excerpt, Trim, BreakLinePipe]

@NgModule({
  declarations: pipes,
  imports: [CommonModule],
  exports: pipes,
})
export class PipesModule {}
