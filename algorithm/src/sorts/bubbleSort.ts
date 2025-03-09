export function bubbleSort(numbers: number[]): {
  answer: number[];
  attempt: number;
} {
  const answer = [...numbers];
  let attempt = 0;
  let limit = answer.length - 1;

  while (0 < limit) {
    let swapped: boolean = false;

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
