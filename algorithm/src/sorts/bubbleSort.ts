export function bubbleSort(numbers: number[]): number[] {
  let limit = numbers.length - 1;

  while (0 < limit) {
    let swapped = false;

    for (let i = 0; i < limit; i++) {
      if (numbers[i] > numbers[i + 1]) {
        [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
        swapped = true;
      }
    }

    if (!swapped) break;
    limit--;
  }

  return numbers;
}
