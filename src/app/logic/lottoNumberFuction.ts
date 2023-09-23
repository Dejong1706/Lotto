type lotto = number[];

export default function LottoNumberFuction() {
  let lotto: lotto = [];
  let i = 0;
  while (i < 6) {
    let n = Math.floor(Math.random() * 45) + 1;
    if (notSame(n)) {
      lotto.push(n);
      i++;
    }
  }
  function notSame(n: number) {
    return lotto.every((e) => n !== e);
  }
  return lotto;
}
