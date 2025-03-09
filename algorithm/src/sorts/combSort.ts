export function combSort(numbers: number[]): {
  answer: number[];
  attempt: number;
} {
  const answer = [...numbers];

  let attempt = 0;
  let gap = Math.floor(numbers.length / 1.3);
  let swapped = true;

  while (gap >= 1) {
    for (let i = 0; i + gap < numbers.length; i++) {
      if (answer[i] > answer[i + gap]) {
        [answer[i], answer[i + gap]] = [answer[i + gap], answer[i]];
      }

      attempt++;
    }

    gap = Math.floor(gap / 1.3);
  }

  while (swapped) {
    swapped = false;

    for (let i = 1; i < answer.length; i++) {
      if (answer[i] < answer[i - 1]) {
        [answer[i], answer[i - 1]] = [answer[i - 1], answer[i]];
        swapped = true;
      }
    }
  }

  return { answer, attempt };
}
