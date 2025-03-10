export function binarySearchRecursive(
  target: number,
  numbers: number[]
): number {
  function _binarySearch(
    target: number,
    numbers: number[],
    left: number,
    right: number
  ): number {
    const mid = Math.floor((left + right) / 2);

    if (numbers[mid] === target) {
      return mid;
    } else if (numbers[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    return _binarySearch(target, numbers, left, right);
  }

  let left = 0;
  let right = numbers.length - 1;

  return _binarySearch(target, numbers, left, right);
}

export function binarySearch(target: number, numbers: number[]): number {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (numbers[mid] === target) {
      return mid;
    } else if (numbers[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
