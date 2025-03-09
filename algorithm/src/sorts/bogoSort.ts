import { inOrder } from 'src/utils/inOrder';

function shuffle(numbers: number[]): void {
  for (let i = numbers.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
}

export function bogoSort(numbers: number[]): number[] {
  while (!inOrder(numbers)) {
    shuffle(numbers);
  }

  return numbers;
}
