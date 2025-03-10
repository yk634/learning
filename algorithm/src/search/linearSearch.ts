export function linearSearch(target: number, numbers: number[]): number {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) return i;
  }
  return -1;
}
