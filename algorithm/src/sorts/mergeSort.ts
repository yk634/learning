export function mergeSort(numbers: number[]): number[] {
  if (numbers.length <= 1) {
    return numbers;
  }

  const center = Math.floor(numbers.length / 2);
  const left = numbers.slice(0, center);
  const right = numbers.slice(center);

  mergeSort(left);
  mergeSort(right);

  let i = 0,
    j = 0,
    k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      numbers[k] = left[i];
      i++;
    } else {
      numbers[k] = right[j];
      j++;
    }

    k++;
  }

  while (i < left.length) {
    numbers[k] = left[i];
    i++;
    k++;
  }

  while (j < right.length) {
    numbers[k] = right[j];
    j++;
    k++;
  }

  return numbers;
}
