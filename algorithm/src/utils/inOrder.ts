export function inOrder(numbers: number[]): boolean {
  return numbers.every((num, i) => i === 0 || numbers[i - 1] <= num);
}
