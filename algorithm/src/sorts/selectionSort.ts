export function selectionSort(numbers: number[]): number[] {
  for (let start = 0; start < numbers.length - 1; start++) {
    let minIndex = start;

    for (let i = start + 1; i < numbers.length; i++) {
      if (numbers[minIndex] > numbers[i]) {
        minIndex = i;
      }
    }

    [numbers[start], numbers[minIndex]] = [numbers[minIndex], numbers[start]];
  }

  return numbers;
}
