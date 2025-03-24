export function searchSymmteric(pairs: number[][]): number[][] {
  const cache: { [key: number]: number[] } = {};
  const result: number[][] = [];
  for (const [first, second] of pairs) {
    if (cache[second]?.includes(first)) {
      result.push([second, first]);
      result.push([first, second]);
    }

    if (!cache[first]) {
      cache[first] = [];
    }
    cache[first].push(second);
  }

  return result;
}

const arg = [
  [1, 2],
  [3, 5],
  [3, 6],
  [4, 7],
  [5, 3],
  [7, 4],
];

console.log(searchSymmteric(arg));
