import { mergeSort } from 'src/sorts/mergeSort';

export function generateRandomArray(
  size: number = 10,
  max: number = 1000
): number[] {
  return Array.from({ length: size }, () => Math.floor(Math.random() * max));
}

export function generateSortedArray(
  size: number = 10,
  max: number = 1000
): number[] {
  const randomArray = generateRandomArray(size, max);
  return mergeSort(randomArray);
}
