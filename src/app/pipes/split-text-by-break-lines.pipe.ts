import { Pipe } from '@angular/core';

// Bloques de primer nivel que genera Quill (ngx-quill) en las descripciones con formato
const BLOCK_TAGS_RE = /<(p|div|h[1-6]|ul|ol|blockquote)(\s[^>]*)?>([\s\S]*?)<\/\1>/gi;
const HAS_BLOCK_TAGS_RE = /<(?:p|div|h[1-6]|ul|ol|blockquote)(?:\s[^>]*)?>/i;
const PARAGRAPH_TAGS_RE = /<\/?(?:p|div)(?:\s[^>]*)?>/gi;
const EMPTY_PARAGRAPH_RE = /^(?:\s|&nbsp;|<br\s*\/?>)*$/i;

@Pipe({ name: 'strBreakSplit' })
export class StrBreakSplit {
  transform(value: string): string[] {
    if (value == undefined) {
      return [value];
    }

    if (HAS_BLOCK_TAGS_RE.test(value)) {
      return this.splitHtmlBlocks(value);
    }

    const texts = value.split(/\r?\n|\r|\n/g);

    return texts.map((text) => text.trim());
  }

  /**
   * Convierte cada <p>/<div> de primer nivel en un párrafo independiente, para que
   * el HTML enriquecido se pinte igual que el texto plano separado por saltos de línea.
   * Listas, encabezados y citas se conservan completos como un único párrafo.
   */
  private splitHtmlBlocks(value: string): string[] {
    const paragraphs: string[] = [];
    const pushText = (text: string) => {
      const clean = text.replace(PARAGRAPH_TAGS_RE, '').trim();
      if (clean) {
        paragraphs.push(clean);
      }
    };

    let lastIndex = 0;
    let match: RegExpExecArray;
    BLOCK_TAGS_RE.lastIndex = 0;

    while ((match = BLOCK_TAGS_RE.exec(value)) !== null) {
      // Texto suelto entre bloques (o restos de un bloque recortado por el pipe excerpt)
      pushText(value.slice(lastIndex, match.index));

      const [fullMatch, tag, , content] = match;
      const isParagraph = /^(p|div)$/i.test(tag);

      if (!isParagraph) {
        paragraphs.push(fullMatch.trim());
      } else {
        paragraphs.push(EMPTY_PARAGRAPH_RE.test(content) ? '' : content.trim());
      }

      lastIndex = match.index + fullMatch.length;
    }

    // Cola sin cierre, p. ej. "<p>¡Felicida..." tras aplicar excerpt
    pushText(value.slice(lastIndex));

    return paragraphs;
  }
}
