export function cocktailSort(numbers: number[]): number[] {
  let maxLimit = numbers.length - 1;
  let minLimit = 0;
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let i = minLimit; i < maxLimit; i++) {
      if (numbers[i] > numbers[i + 1]) {
        [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
        swapped = true;
      }
    }

    maxLimit--;

    if (!swapped) break;

    for (let i = maxLimit; i > minLimit; i--) {
      if (numbers[i] < numbers[i - 1]) {
        [numbers[i], numbers[i - 1]] = [numbers[i - 1], numbers[i]];
        swapped = true;
      }
    }

    minLimit++;
  }

  return numbers;
}
