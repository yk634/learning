export function validateFormat(data: string): boolean {
  const lookup = { '{': '}', '[': ']', '(': ')' };
  const stack = new Stack();

  for (const char of data) {
    if (lookup[char]) {
      stack.push(lookup[char]);
    } else if (Object.values(lookup).includes(char)) {
      if (char !== stack.pop()) return false;
    }
  }
  return stack.stack.length === 0;
}

class Stack {
  stack: (string | number)[];

  constructor() {
    this.stack = [];
  }

  push(data: string | number): void {
    this.stack.push(data);
  }

  pop(): string | number | null {
    if (this.stack.length === 0) return null;
    return this.stack.pop();
  }
}
