import { Pipe } from '@angular/core';

@Pipe({ name: 'strBreakSplit' })
export class StrBreakSplit {
  transform(value: string): string[] {
    if (value == undefined) {
      return [value];
    }

    const texts = value.split(/\r?\n|\r|\n/g);

    return texts.map((text) => text.trim());
  }
}
