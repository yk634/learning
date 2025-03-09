import { inOrder } from 'src/utils/inOrder';
import { SortResult } from 'src/types';

function shuffle(numbers: number[]): void {
  for (let i = numbers.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
}

export function bogoSort(numbers: number[]): SortResult {
  const answer = [...numbers];
  let attempt = 0;

  while (!inOrder(answer)) {
    shuffle(answer);
    attempt++;
  }

  return { answer, attempt };
}
