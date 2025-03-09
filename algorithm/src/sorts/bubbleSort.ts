import { SortResult } from 'src/types';

export function bubbleSort(numbers: number[]): SortResult {
  const answer = [...numbers];
  let attempt = 0;
  let limit = answer.length - 1;

  while (0 < limit) {
    let swapped = false;

    for (let i = 0; i < limit; i++) {
      if (answer[i] > answer[i + 1]) {
        [answer[i], answer[i + 1]] = [answer[i + 1], answer[i]];
        swapped = true;
      }

      attempt++;
    }

    if (!swapped) break;
    limit--;
  }

  return { answer, attempt };
}
