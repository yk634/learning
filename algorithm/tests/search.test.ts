import { generateSortedArray } from 'src/utils/generate';
import { binarySearch, binarySearchRecursive } from 'src/search/binarySearch';
import { linearSearch } from 'src/search/linearSearch';

describe('Searching Algorithm Tests', () => {
  const searchFunctions = [
    { func: linearSearch, name: 'Linear Search' },
    { func: binarySearch, name: 'Binary Search' },
    { func: binarySearchRecursive, name: 'Binary Search Recursive' },
  ];

  const testSizes = [10, 1000];

  const performanceReports: {
    name: string;
    size: number;
    time: number;
  }[] = [];

  for (const size of testSizes) {
    const testData = generateSortedArray(size);
    const targetIndex = Math.floor(Math.random() * (testData.length - 1));
    const targetNumber = testData[targetIndex];

    describe(`Array Size: ${size}`, () => {
      for (const { func, name } of searchFunctions) {
        test(`${name} correctly`, () => {
          const startTime = performance.now();
          const result = func(targetNumber, [...testData]);
          const endTime = performance.now();
          const timeTaken = endTime - startTime;

          performanceReports.push({
            name,
            size,
            time: timeTaken,
          });

          expect(result === targetIndex);
        });
      }
    });
  }

  afterAll(() => {
    console.table(performanceReports);
  });
});
