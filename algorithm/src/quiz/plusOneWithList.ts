function popZeroWithHead(numbers: number[]): number[] {
  const firstNonZeroIndex = numbers.findIndex(n => n !== 0);
  return firstNonZeroIndex === -1 ? [0] : numbers.slice(firstNonZeroIndex);
}

function listToNumber(numbers: number[]): number {
  let answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    answer += numbers[numbers.length - i - 1] * 10 ** i;
  }
  return answer;
}

function plusOneWithList(numbers: number[]): number {
  const resultList = popZeroWithHead(numbers);
  resultList[resultList.length - 1]++;

  let i = resultList.length - 1;
  while (i >= 0 && resultList[i] === 10) {
    resultList[i] = 0;
    if (i === 0) {
      resultList.unshift(1);
    } else {
      resultList[i - 1]++;
    }
    i--;
  }

  console.log(numbers, '=>', resultList);

  return listToNumber(resultList);
}

console.log(plusOneWithList([1])); // 2
console.log(plusOneWithList([2, 3])); // 24
console.log(plusOneWithList([8, 9])); // 90
console.log(plusOneWithList([9, 9])); // 100
console.log(plusOneWithList([1, 2, 3])); // 124
console.log(plusOneWithList([7, 9, 0])); // 791
console.log(plusOneWithList([9, 9, 9])); // 1000
console.log(plusOneWithList([9, 0, 9, 9])); // 9100
console.log(plusOneWithList([0, 0, 0, 9, 9, 9, 9])); // 10000
