import { validateFormat } from '../src/dataStructure/stack';

describe('validateFormat', () => {
  test('valid parentheses combinations', () => {
    expect(validateFormat('({[()]})')).toBe(true); // Balanced parentheses
    expect(validateFormat('{}[]()')).toBe(true); // Simple balanced parentheses
    expect(validateFormat('((()))')).toBe(true); // Nested parentheses
    expect(validateFormat('[()]{}{[()()]()}')).toBe(true); // Multiple types of parentheses
  });

  test('invalid parentheses combinations', () => {
    expect(validateFormat('({[([)])})')).toBe(false); // Incorrect nesting
    expect(validateFormat('((())')).toBe(false); // Missing closing parentheses
    expect(validateFormat('())')).toBe(false); // Extra closing parentheses
    expect(validateFormat('{{{{{{')).toBe(false); // All opening parentheses
    expect(validateFormat('}}}}}}')).toBe(false); // All closing parentheses
  });

  test('empty string test', () => {
    expect(validateFormat('')).toBe(true);
  });

  test('non-parentheses characters with valid balance', () => {
    expect(validateFormat('function() { return [1, 2, (3 + 4)]; }')).toBe(true); // Code with balanced parentheses
    expect(validateFormat('if (x > 0) { console.log(x); }')).toBe(true); // Balanced parentheses in condition
  });

  test('non-parentheses characters with imbalance', () => {
    expect(validateFormat('function() { return [1, 2, (3 + 4]; }')).toBe(false); // Unbalanced closing bracket
    expect(validateFormat('if (x > 0 { console.log(x); }')).toBe(false); // Missing closing parenthesis
  });
});
