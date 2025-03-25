function memoize(f: (n: number) => number) {
  const cache: Record<number, number> = {};
  return n => {
    if (!(n in cache)) {
      cache[n] = f(n);
    }
    return cache[n];
  };
}

const longFunc = memoize(n => {
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += n * i;
  }
  return result;
});

function execFunc() {
  const startTime = performance.now();
  for (let i = 0; i < 10; i++) {
    console.log(longFunc(i));
  }
  const endTime = performance.now();
  console.log(endTime - startTime);
}

execFunc();
execFunc();
