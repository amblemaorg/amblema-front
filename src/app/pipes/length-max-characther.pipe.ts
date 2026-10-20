import { Pipe, PipeTransform } from '@angular/core';

const HAS_HTML_TAGS_RE = /<\/?[a-z][a-z0-9]*(?:\s[^>]*)?\/?>/i;
// Etiqueta | entidad HTML | un carácter visible
const HTML_TOKEN_RE = /<(\/?)([a-z][a-z0-9]*)(?:\s[^>]*)?\/?>|&(?:[a-z]+|#\d+|#x[0-9a-f]+);|[\s\S]/gi;
// Bloques que Quill cuenta como un salto de línea en getText()
const LINE_BLOCK_TAGS_RE = /^(?:p|div|li|h[1-6]|blockquote)$/i;
const VOID_TAGS_RE = /^(?:br|img|hr|input|wbr)$/i;
const TRAILING_EMPTY_BLOCKS_RE = /(?:<(p|div)(?:\s[^>]*)?>(?:\s|&nbsp;|<br\s*\/?>)*<\/\1>\s*)+$/i;
const TRAILING_BLOCK_CLOSE_RE = /\s*(<\/(?:p|div|li|h[1-6]|blockquote)>(?:<\/(?:ul|ol)>)?)\s*$/i;

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
      if (long === 0) return value;

      if (HAS_HTML_TAGS_RE.test(value)) return this.truncateHtml(value, long, end);

      if (value.length <= long) return value;

      return value.substr(0, long) + end;
    }

    return value;
  }

  /**
   * Recorta HTML enriquecido (Quill) contando solo el texto visible, con el mismo
   * criterio que quill.getText() en el editor, y cierra las etiquetas que queden abiertas.
   */
  private truncateHtml(value: string, long: number, end: string): string {
    const tokens: { token: string; isClosing: boolean; tag: string }[] = [];
    let visibleLength = 0;
    let match: RegExpExecArray;
    HTML_TOKEN_RE.lastIndex = 0;

    while ((match = HTML_TOKEN_RE.exec(value)) !== null) {
      const [token, closing, tag] = match;
      tokens.push({ token, isClosing: closing === '/', tag: tag || '' });
      visibleLength += this.tokenLength(token, closing === '/', tag);
    }

    // Quill no cuenta el salto de línea final del último bloque
    if (visibleLength - 1 <= long) return value;

    let result = '';
    let count = 0;
    const openTags: string[] = [];

    for (const { token, isClosing, tag } of tokens) {
      const length = this.tokenLength(token, isClosing, tag);
      if (count + length > long) break;
      count += length;
      result += token;

      if (!tag || VOID_TAGS_RE.test(tag) || /\/>$/.test(token)) continue;

      if (isClosing) {
        const openIndex = openTags.lastIndexOf(tag.toLowerCase());
        if (openIndex !== -1) openTags.splice(openIndex);
      } else {
        openTags.push(tag.toLowerCase());
      }
    }

    for (let i = openTags.length - 1; i >= 0; i--) {
      result += `</${openTags[i]}>`;
    }

    // Sin párrafos vacíos al final y con los "..." dentro del último párrafo con texto
    result = result.replace(TRAILING_EMPTY_BLOCKS_RE, '');

    return TRAILING_BLOCK_CLOSE_RE.test(result)
      ? result.replace(TRAILING_BLOCK_CLOSE_RE, `${end}$1`)
      : result.replace(/\s+$/, '') + end;
  }

  private tokenLength(token: string, isClosing: boolean, tag: string): number {
    if (!tag) return 1;
    return isClosing && LINE_BLOCK_TAGS_RE.test(tag) ? 1 : 0;
  }
}
