export function countingSort(numbers: number[]): number[] {
  const maxNum = Math.max(...numbers);
  const countingArray = Array.from({ length: maxNum + 1 }, () => 0);

  for (const num of numbers) {
    countingArray[num]++;
  }

  for (let i = 1; i < countingArray.length; i++) {
    countingArray[i] += countingArray[i - 1];
  }

  const answer = Array.from({ length: numbers.length }, () => 0);
  for (let i = numbers.length - 1; i >= 0; i--) {
    const index = countingArray[numbers[i]] - 1;
    answer[index] = numbers[i];
    countingArray[numbers[i]]--;
  }

  return answer;
}
