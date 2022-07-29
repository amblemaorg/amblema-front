import { Pipe, PipeTransform } from '@angular/core'

/**
 * @description Recorta caracteres del string y concatena por defecto ...
 * @author Chistopher Dallar On GitLab: christopherdal, @Gmail: christopherdallar1234
 * @date 2020-03-10
 * @export
 * @param value
 * @param long
 * @param end
 * @returns String
 * @class Excerpt
 * @implements {PipeTransform}
 */
@Pipe({
  name: 'excerpt',
})
export class Excerpt implements PipeTransform {
  transform(value: string, long: number, end: string = '...'): string {
    if (value) {
      console.log(value.replace(/(?:\r\n|\r|\n)/g, '<br />'))

      if (value.length <= long) {
        return value
      }
      return value.substr(0, long) + end
    }

    return value
  }
}
