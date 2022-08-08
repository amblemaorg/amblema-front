import { Pipe } from '@angular/core'
/**
 * pipe to convert the \r\n into <br />
 */
@Pipe({ name: 'br' })
export class BreakLinePipe {
  transform(value: string): string {
    return value == undefined
      ? value
      : value
          .replace(new RegExp('\r\n', 'g'), '<br /><br />')
          .replace(new RegExp('\n', 'g'), '<br /><br />')
  }
}
