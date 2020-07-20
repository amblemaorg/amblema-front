export function parseDate(dateSrc: Date) {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let correctMonth = numbers.includes(dateSrc.getMonth() + 1)
    ? `0${dateSrc.getMonth() + 1}`
    : (dateSrc.getMonth() + 1).toString();
  let correctDate = numbers.includes(dateSrc.getDate())
    ? `0${dateSrc.getDate()}`
    : dateSrc.getDate().toString();
  //return `${dateSrc.getFullYear()}-${correctMonth}-${correctDate}`;
  return `${correctDate}-${correctMonth}-${dateSrc.getFullYear()}`;

}
