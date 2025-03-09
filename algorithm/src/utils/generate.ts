export function generateRandomArray(
  size: number = 10,
  max: number = 1000
): number[] {
  return Array.from({ length: size }, () => Math.floor(Math.random() * max));
}
