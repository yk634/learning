function updateRow(
  row: number,
  maxRow: number,
  up: boolean
): [number, boolean] {
  if (up) {
    return row > 0 ? [row - 1, true] : [row + 1, false];
  } else {
    return row < maxRow - 1 ? [row + 1, false] : [row - 1, true];
  }
}

function snakeNumbers(chars: string[], maxRow: number, count: number) {
  const outputList = Array.from({ length: maxRow }, () =>
    Array(count).fill(' ')
  );

  let row = Math.floor((maxRow - 1) / 2);
  let up = true;

  for (let i = 0; i < count; i++) {
    outputList[row][i] = chars[i % chars.length];
    [row, up] = updateRow(row, maxRow, up);
  }

  for (const output of outputList) {
    console.log(output.join(''));
  }
}

const numbers = [...Array(10)].map((_, i) => String(i));

snakeNumbers(numbers, 3, 30);

console.log('------------------');

const alphabets = [...Array(26)].map((a, b) => (10 + b).toString(36));

snakeNumbers(alphabets, 10, 50);
