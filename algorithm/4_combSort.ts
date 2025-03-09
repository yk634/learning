import { arg } from './data';

function combSort(numbers: number[]): { answer: number[], attempt: number }  {
    const answer = [...numbers];

    let attempt = 0;
    let gap = Math.floor(numbers.length / 1.3);
    // let swapped = true;

    while (gap >= 1) {
        for (let i = 0; i + gap < numbers.length; i++) {
            if (answer[i] > answer[i + gap]) {
                [answer[i], answer[i + gap]] = [answer[i + gap], answer[i]];
            }

            attempt++;
        }

        gap = Math.floor(gap / 1.3);
    }

    return { answer, attempt };
}

console.log(arg);

console.log(combSort(arg));
