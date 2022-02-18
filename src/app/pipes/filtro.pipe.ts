import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  /**
   * @param  items
   * Extraído de un items *ngFor
   * @param text: string
   * Valor con el que se buscan coincidencias
   * @param column: string
   * Atributo o column del items donde se encontrara el valor a coincidir
   * @param alertNotFound: string opcional default = ""
   * Mensaje a mostrar cuando no se encuentran coincidencias
   * @returns arreglo filtrado por el atributo, a partir de un text
   */
  transform(
    items: any[],
    text: string,
    column: string,
    alertNotFound: string = ""
  ): any[] {
    if (text === "" || !text) {
      return items;
    }

    text = text.toLowerCase();

    // Usar el every para que las comparaciones no sean solo con un atributo de la columna
    items = items.filter((items) => {
      // includes = Si el text incluye ese text retorna  el items
      return items[column].toLowerCase().includes(text);
    });

    if (items.length === 0) {
      return [{ title: alertNotFound }];
    } else {
      return items;
    }
  }
}
