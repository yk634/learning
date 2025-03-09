export function gnomeSort(numbers: number[]): number[] {
  let i = 0;

  while (i < numbers.length) {
    if (i === 0) {
      i++;
    }
    if (numbers[i - 1] <= numbers[i]) {
      i++;
    } else {
      [numbers[i], numbers[i - 1]] = [numbers[i - 1], numbers[i]];
      i--;
    }
  }

  return numbers;
}
