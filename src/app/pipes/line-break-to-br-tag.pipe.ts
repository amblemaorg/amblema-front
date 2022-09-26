import { Pipe } from '@angular/core';
/**
 * pipe to convert the \r\n into <br />
 */
@Pipe({ name: 'br' })
export class BreakLinePipe {
  transform(value: string): string {
    if (value == undefined) {
      return value;
    }

    return value
      .replace(new RegExp('\r\n', 'g'), '<br />')
      .replace(new RegExp('\n', 'g'), '<br />');
  }
}
