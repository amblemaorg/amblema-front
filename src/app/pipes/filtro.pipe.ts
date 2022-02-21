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
   * @param notFound: string opcional default = ""
   * Mensaje a mostrar cuando no se encuentran coincidencias
   * @returns arreglo filtrado por el atributo, a partir de un text
   */
  transform(
    items: any[],
    text: string,
    columns: string | string[],
    method: "some" | "every" = "some",
    notFound?: any
  ): any[] {
    if (text === "" || !text) {
      return items;
    }

    text = text.toLowerCase();
    let keyWords;
    keyWords = text.split(/[ ]|[,]|[_]|[-]|[/]/gi).join("|");
    keyWords = new RegExp(keyWords, "gi");

    items = items.filter((items) => {
      if (!Array.isArray(columns)) {
        // includes = Si el text coincida ese text retorna  el items
        return items[columns].match(keyWords);
      }

      // if (method === "every") {
      //   return columns.every((column) => {
      //     return items[column].match(keyWords);
      //   });
      // }

      return columns.some((column) => {
        return items[column].match(keyWords);
      });
    });

    if (items.length === 0 && notFound) {
      return [notFound];
    }

    return items;
  }
}
