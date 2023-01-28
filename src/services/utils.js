export const returnsCorrectWord = (number, arr) => {
  const str = String(number);
  const numEnd = Number(str.slice(-2));
  const mod = numEnd % 10;
  const ex = numEnd < 10 || numEnd > 19;

  if (mod === 1 && ex) {
    return arr[0];
  } else if (mod > 1 && mod < 5 && ex) {
    return arr[1];
  } else {
    return arr[2];
  }
};
