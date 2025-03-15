import { HashTable } from 'src/dataStructure/hashTable';

describe('HashTable', () => {
  let hashTable: HashTable<string, number>;

  beforeEach(() => {
    hashTable = new HashTable<string, number>();
  });

  test('should add and retrieve an element', () => {
    hashTable.add('apple', 100);
    expect(hashTable.get('apple')).toBe(100);
  });

  test('should overwrite an existing key', () => {
    hashTable.add('banana', 200);
    hashTable.add('banana', 300);
    expect(hashTable.get('banana')).toBe(300);
  });

  test('should remove an element successfully', () => {
    hashTable.add('cherry', 400);
    expect(hashTable.remove('cherry')).toBe(true);
    expect(hashTable.get('cherry')).toBeNull();
  });

  test('should return null when retrieving a non-existent key', () => {
    expect(hashTable.get('nonexistent')).toBeNull();
  });

  test('should return false when removing a non-existent key', () => {
    expect(hashTable.remove('nonexistent')).toBe(false);
  });

  test('should store and retrieve multiple elements correctly', () => {
    hashTable.add('dog', 1);
    hashTable.add('cat', 2);
    hashTable.add('bird', 3);

    expect(hashTable.get('dog')).toBe(1);
    expect(hashTable.get('cat')).toBe(2);
    expect(hashTable.get('bird')).toBe(3);
  });
});
