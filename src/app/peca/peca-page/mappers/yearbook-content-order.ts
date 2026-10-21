/**
 * Ordena el contenido de un lapso del AmbLeMario (diagnósticos y actividades) según el orden
 * administrado en el backoffice. Los elementos cuya key no está en `contentOrder` van al final
 * y conservan su orden relativo original. Sin `contentOrder` se devuelve el orden original.
 */
export function sortByContentOrder<T>(
  items: T[],
  getKey: (item: T) => string,
  contentOrder?: string[],
): T[] {
  if (!items || !contentOrder || contentOrder.length === 0) return items;

  const positions = contentOrder.reduce((acc, key, idx) => {
    acc[key] = idx;
    return acc;
  }, {} as { [key: string]: number });

  return items
    .map((item, idx) => {
      const key = getKey(item);
      const position = key in positions ? positions[key] : contentOrder.length;
      return { item, idx, position };
    })
    .sort((a, b) => a.position - b.position || a.idx - b.idx)
    .map(({ item }) => item);
}
