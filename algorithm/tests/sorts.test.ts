import { inOrder } from 'src/utils/inOrder';
import { generateRandomArray } from 'src/utils/generate';

import { bubbleSort } from 'src/sorts/bubbleSort';
import { cocktailSort } from 'src/sorts/cocktailSort';
import { combSort } from 'src/sorts/combSort';
import { selectionSort } from 'src/sorts/selectionSort';
import { gnomeSort } from 'src/sorts/gnomeSort';

describe('Sorting Algorithm Tests', () => {
  const sortFunctions = [
    { func: bubbleSort, name: 'Bubble Sort' },
    { func: cocktailSort, name: 'Cocktail Sort' },
    { func: combSort, name: 'Comb Sort' },
    { func: selectionSort, name: 'Selection Sort' },
    { func: gnomeSort, name: 'Gnome Sort' },
  ];

  const testSizes = [10, 100];
  // const testSizes = [10];

  // パフォーマンス結果を格納する配列
  const performanceReports: {
    name: string;
    size: number;
    time: number;
    attempts: number;
  }[] = [];

  for (const size of testSizes) {
    describe(`Array Size: ${size}`, () => {
      for (const { func, name } of sortFunctions) {
        test(`${name} sorts correctly`, () => {
          const numbers = generateRandomArray(size);
          const result = func([...numbers]);

          expect(inOrder(result.answer)).toBe(true);
        });

        test(`${name} performance report`, () => {
          const numbers = generateRandomArray(size);
          const startTime = performance.now();
          const result = func([...numbers]);
          const endTime = performance.now();

          const timeTaken = endTime - startTime;

          // パフォーマンスレポートにデータを追加
          performanceReports.push({
            name,
            size,
            time: timeTaken,
            attempts: result.attempt,
          });
        });
      }
    });
  }

  // 最後にテスト全体が終わった後で表形式で出力
  afterAll(() => {
    console.table(performanceReports);
  });
});
