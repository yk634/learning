function minCountRemove(
  x: number[],
  y: number[]
): { x: number[]; y: number[] } {
  function getCount(numberList: number[]): Record<number, number> {
    const count: Record<number, number> = {};
    for (const num of numberList) {
      if (!count[num]) {
        count[num] = 0;
      }
      count[num]++;
    }

    return count;
  }

  const countX = getCount(x);
  const countY = getCount(y);

  x = x.filter(n => countX[n] >= (countY[n] || 0));
  y = y.filter(n => countY[n] >= (countX[n] || 0));

  return { x, y };
}

let x = [1, 2, 3, 4, 4, 5, 5, 8, 10];
let y = [4, 5, 5, 5, 6, 7, 8, 8, 10];

console.log({ x, y });
console.log(minCountRemove(x, y));
