import { SortResult } from 'src/types';

export function cocktailSort(numbers: number[]): SortResult {
  const answer = [...numbers];

  let attempt = 0;
  let maxLimit = answer.length - 1;
  let minLimit = 0;
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let i = minLimit; i < maxLimit; i++) {
      if (answer[i] > answer[i + 1]) {
        [answer[i], answer[i + 1]] = [answer[i + 1], answer[i]];
        swapped = true;
      }

      attempt++;
    }

    maxLimit--;

    if (!swapped) break;

    for (let i = maxLimit; i > minLimit; i--) {
      if (answer[i] < answer[i - 1]) {
        [answer[i], answer[i - 1]] = [answer[i - 1], answer[i]];
        swapped = true;
      }

      attempt++;
    }

    minLimit++;
  }

  return { answer, attempt };
}
