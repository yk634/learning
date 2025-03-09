import { arg } from './data';

function inOrder(numbers: Array<number>): boolean {
    return numbers.every((num, i) => i === 0 || numbers[i - 1] <= num);
}

function shuffle(numbers: number[]): void {
    for (let i = numbers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
}

function bogoSort(numbers: Array<number>): Array<number> {
    let count = 0;
    while (!inOrder(numbers)) {
        shuffle(numbers);
        count++;
    }

    console.log(count);

    return numbers
}

console.log(arg);

console.log(bogoSort(arg));
