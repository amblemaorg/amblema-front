import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filtro.pipe';
import { Excerpt } from './length-max-characther.pipe';
import { Trim } from './trim.pipe';
import { BreakLinePipe } from './line-break-to-br-tag.pipe';
import { StrBreakSplit } from './split-text-by-break-lines.pipe';

const pipes = [FilterPipe, Excerpt, Trim, BreakLinePipe, StrBreakSplit];

@NgModule({
  declarations: pipes,
  imports: [CommonModule],
  exports: pipes,
})
export class PipesModule {}
