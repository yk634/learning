function partition(numbers: number[], low: number, high: number): number {
  let i = low - 1;
  const pivot = numbers[high];

  for (let j = low; j < high; j++) {
    if (numbers[j] < pivot) {
      i++;
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
  }

  i++;
  [numbers[i], numbers[high]] = [numbers[high], numbers[i]];

  return i;
}

export function quickSort(numbers: number[]): number[] {
  function _quickSort(numbers: number[], low: number, high: number): void {
    if (low < high) {
      const partitionIndex = partition(numbers, low, high);
      _quickSort(numbers, low, partitionIndex - 1);
      _quickSort(numbers, partitionIndex + 1, high);
    }
  }

  _quickSort(numbers, 0, numbers.length - 1);
  return numbers;
}
