export function shellSort(numbers: number[]): number[] {
  const lenNumbers = numbers.length;
  let gap = Math.floor(lenNumbers / 2);
  while (gap > 0) {
    for (let i = gap; i < lenNumbers; i++) {
      const temp = numbers[i];
      let j = i;

      while (j >= gap && numbers[j - gap] > temp) {
        numbers[j] = numbers[j - gap];
        j -= gap;
      }

      numbers[j] = temp;
    }

    gap = Math.floor(gap / 2);
  }

  return numbers;
}
