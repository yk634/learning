import { inOrder } from 'src/utils/inOrder';
import { generateRandomArray } from 'src/utils/generate';

import { bubbleSort } from 'src/sorts/bubbleSort';
import { cocktailSort } from 'src/sorts/cocktailSort';
import { combSort } from 'src/sorts/combSort';
import { selectionSort } from 'src/sorts/selectionSort';
import { gnomeSort } from 'src/sorts/gnomeSort';
import { insertionSort } from 'src/sorts/insertionSort';
import { bucketSort } from 'src/sorts/bucketSort';
import { shellSort } from 'src/sorts/shellSort';
import { countingSort } from 'src/sorts/countingSort';
import { radixSort } from 'src/sorts/radixSort';
import { quickSort } from 'src/sorts/quickSort';
import { mergeSort } from 'src/sorts/mergeSort';

describe('Sorting Algorithm', () => {
  const sortFunctions = [
    { func: bubbleSort, name: 'Bubble Sort' },
    { func: cocktailSort, name: 'Cocktail Sort' },
    { func: combSort, name: 'Comb Sort' },
    { func: selectionSort, name: 'Selection Sort' },
    { func: gnomeSort, name: 'Gnome Sort' },
    { func: insertionSort, name: 'Insertion Sort' },
    { func: bucketSort, name: 'Bucket Sort' },
    { func: shellSort, name: 'Shell Sort' },
    { func: countingSort, name: 'Counting Sort' },
    { func: radixSort, name: 'Radix Sort' },
    { func: quickSort, name: 'Quick Sort' },
    { func: mergeSort, name: 'Merge Sort' },
  ];

  const testSizes = [10, 100];

  const performanceReports: {
    name: string;
    size: number;
    time: number;
  }[] = [];

  for (const size of testSizes) {
    const testData = generateRandomArray(size);

    describe(`Array Size: ${size}`, () => {
      for (const { func, name } of sortFunctions) {
        test(`${name} sorts correctly`, () => {
          const startTime = performance.now();
          const result = func([...testData]);
          const endTime = performance.now();
          const timeTaken = endTime - startTime;

          performanceReports.push({
            name,
            size,
            time: timeTaken,
          });

          expect(inOrder(result)).toBe(true);
        });
      }
    });
  }

  afterAll(() => {
    console.table(performanceReports);
  });
});
