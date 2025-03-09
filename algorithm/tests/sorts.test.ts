import { inOrder } from 'src/utils/inOrder';
import { generateRandomArray } from 'src/utils/generate';

import { bubbleSort } from 'src/sorts/bubbleSort';
import { cocktailSort } from 'src/sorts/cocktailSort';
import { combSort } from 'src/sorts/combSort';
import { selectionSort } from 'src/sorts/selectionSort';
import { gnomeSort } from 'src/sorts/gnomeSort';
import { insertionSort } from 'src/sorts/insertionSort';
import { bucketSort } from 'src/sorts/bucketSort';

describe('Sorting Algorithm Tests', () => {
  const sortFunctions = [
    { func: bubbleSort, name: 'Bubble Sort' },
    { func: cocktailSort, name: 'Cocktail Sort' },
    { func: combSort, name: 'Comb Sort' },
    { func: selectionSort, name: 'Selection Sort' },
    { func: gnomeSort, name: 'Gnome Sort' },
    { func: insertionSort, name: 'Insertion Sort' },
    { func: bucketSort, name: 'Bucket Sort' },
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
