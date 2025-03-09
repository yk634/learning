import { inOrder } from 'src/utils/inOrder';

function shuffle(numbers: number[]): void {
  for (let i = numbers.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
}

export function bogoSort(numbers: number[]): {
  answer: number[];
  attempt: number;
} {
  const answer = [...numbers];
  let attempt = 0;

  while (!inOrder(answer)) {
    shuffle(answer);
    attempt++;
  }

  return { answer, attempt };
}
