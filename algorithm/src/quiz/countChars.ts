export function countChars(sentense: string): {
  char: string;
  count: number;
} {
  sentense = sentense.toLowerCase();
  const countMap = new Map<string, number>();

  let maxChar = '';
  let maxCount = 0;

  for (const char of sentense) {
    if (char === ' ') continue;

    const newCount = (countMap.get(char) ?? 0) + 1;
    countMap.set(char, newCount);

    if (maxCount < newCount) {
      maxChar = char;
      maxCount = newCount;
    }
  }

  return { char: maxChar, count: maxCount };
}

const arg = 'This is a pen. This is an apple. Applepen';

console.log(countChars(arg));
