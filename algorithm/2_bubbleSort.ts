import { arg } from './data';

function bubbleSort(numbers: number[]): { numbers: number[], attempt: number }  {
    let attempt = 0
    let limit = numbers.length - 1;

    while (0 < limit) {
        let swapped: boolean = false;

        for (let i = 0; i < limit; i++) {
            if (numbers[i] > numbers[i + 1]) {
                [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
                swapped = true;
            };

            attempt++;
        }

        if (!swapped) break;
        limit--;
    }

    return { numbers, attempt };
}

console.log(arg);

console.log(bubbleSort(arg));
