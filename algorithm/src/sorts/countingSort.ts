export function countingSort(numbers: number[]): number[] {
  const maxNum = Math.max(...numbers);
  const counts = Array.from({ length: maxNum + 1 }, () => 0);

  for (const num of numbers) {
    counts[num]++;
  }

  for (let i = 1; i < counts.length; i++) {
    counts[i] += counts[i - 1];
  }

  const answer = Array.from({ length: numbers.length }, () => 0);
  for (let i = numbers.length - 1; i >= 0; i--) {
    const index = counts[numbers[i]] - 1;
    answer[index] = numbers[i];
    counts[numbers[i]]--;
  }

  return answer;
}
