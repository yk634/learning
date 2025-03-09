function countingSort(numbers: number[], place: number): number[] {
  const counts = Array.from({ length: 10 }, () => 0);

  for (const num of numbers) {
    const index = Math.floor(num / place) % 10;
    counts[index]++;
  }

  for (let i = 1; i < 10; i++) {
    counts[i] += counts[i - 1];
  }

  const answer = Array.from({ length: numbers.length }, () => 0);
  for (let i = numbers.length - 1; i >= 0; i--) {
    const index = Math.floor(numbers[i] / place) % 10;
    answer[counts[index] - 1] = numbers[i];
    counts[index]--;
  }

  return answer;
}

export function radixSort(numbers: number[]): number[] {
  const maxNum = Math.max(...numbers);
  let place = 1;

  while (maxNum > place) {
    numbers = countingSort(numbers, place);
    place *= 10;
  }

  return numbers;
}
