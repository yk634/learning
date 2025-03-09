export function insertionSort(numbers: number[]): number[] {
  for (let i = 1; i < numbers.length; i++) {
    const tempNum = numbers[i];

    let j = i - 1;
    while (j >= 0 && numbers[j] > tempNum) {
      numbers[j + 1] = numbers[j];
      j--;
    }

    numbers[j + 1] = tempNum;
  }

  return numbers;
}
