import { SortResult } from 'src/types';

export function gnomeSort(numbers: number[]): SortResult {
  const answer = [...numbers];

  let attempt = 0;
  let i = 0;

  while (i < answer.length) {
    attempt++;

    if (i === 0) {
      i++;
    }
    if (answer[i - 1] <= answer[i]) {
      i++;
    } else {
      [answer[i], answer[i - 1]] = [answer[i - 1], answer[i]];
      i--;
    }
  }

  return { answer, attempt };
}
