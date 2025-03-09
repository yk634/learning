export function combSort(numbers: number[]): number[] {
  let gap = Math.floor(numbers.length / 1.3);
  let swapped = true;

  while (gap >= 1) {
    for (let i = 0; i + gap < numbers.length; i++) {
      if (numbers[i] > numbers[i + gap]) {
        [numbers[i], numbers[i + gap]] = [numbers[i + gap], numbers[i]];
      }
    }

    gap = Math.floor(gap / 1.3);
  }

  while (swapped) {
    swapped = false;

    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < numbers[i - 1]) {
        [numbers[i], numbers[i - 1]] = [numbers[i - 1], numbers[i]];
        swapped = true;
      }
    }
  }

  return numbers;
}
