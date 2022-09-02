import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'trim',
})
export class Trim implements PipeTransform {
  transform(value: string): string {
    return value.toString().trim()
  }
}
