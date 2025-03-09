export function selectionSort(numbers: number[]): {
  answer: number[];
  attempt: number;
} {
  const answer = [...numbers];

  let attempt = 0;

  for (let start = 0; start < answer.length - 1; start++) {
    let minIndex = start;

    for (let i = start + 1; i < answer.length; i++) {
      if (answer[minIndex] > answer[i]) {
        minIndex = i;
      }

      attempt++;
    }

    [answer[start], answer[minIndex]] = [answer[minIndex], answer[start]];
  }

  return { answer, attempt };
}
