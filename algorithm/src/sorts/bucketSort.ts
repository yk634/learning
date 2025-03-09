import { insertionSort } from './insertionSort';

export function bucketSort(numbers: number[]): number[] {
  const maxNum = Math.max(...numbers);
  const size = Math.floor(maxNum / numbers.length);

  const buckets: number[][] = Array.from({ length: size }, () => []);
  for (const num of numbers) {
    const bucketNum = Math.floor(num / numbers.length);

    if (bucketNum >= size) {
      buckets[bucketNum - 1].push(num);
    } else {
      buckets[bucketNum].push(num);
    }
  }

  const answer = [];
  for (const bucket of buckets) {
    answer.push(...insertionSort(bucket));
  }

  return answer;
}
