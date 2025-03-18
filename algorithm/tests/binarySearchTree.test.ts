import { BinarySearchTree } from 'src/dataStructure/binarySearchTree';

describe('BinarySearchTree', () => {
  let bst: BinarySearchTree;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  test('insert and search', () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(2);
    bst.insert(4);
    bst.insert(6);
    bst.insert(8);

    expect(bst.search(5)).toBe(true);
    expect(bst.search(3)).toBe(true);
    expect(bst.search(7)).toBe(true);
    expect(bst.search(2)).toBe(true);
    expect(bst.search(4)).toBe(true);
    expect(bst.search(6)).toBe(true);
    expect(bst.search(8)).toBe(true);

    expect(bst.search(10)).toBe(false);
    expect(bst.search(0)).toBe(false);
  });

  test('inOrder traversal', () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(2);
    bst.insert(4);
    bst.insert(6);
    bst.insert(8);

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    bst.inOrder();

    expect(consoleSpy.mock.calls.map(call => call[0])).toEqual([
      2, 3, 4, 5, 6, 7, 8,
    ]);

    consoleSpy.mockRestore();
  });

  test('remove a leaf node', () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(2);
    bst.insert(4);
    bst.insert(6);
    bst.insert(8);

    bst.remove(2);

    expect(bst.search(2)).toBe(false);
    expect(bst.search(3)).toBe(true);
  });

  test('remove a node with one child', () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(2);
    bst.insert(4);
    bst.insert(6);
    bst.insert(8);

    bst.remove(3);

    expect(bst.search(3)).toBe(false);
    expect(bst.search(2)).toBe(true);
    expect(bst.search(4)).toBe(true);
  });

  test('remove a node with two children', () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(2);
    bst.insert(4);
    bst.insert(6);
    bst.insert(8);

    bst.remove(5);

    expect(bst.search(5)).toBe(false);
    expect(bst.search(3)).toBe(true);
    expect(bst.search(7)).toBe(true);
  });

  test('remove root node', () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);

    bst.remove(5);

    expect(bst.search(5)).toBe(false);
    expect(bst.search(3)).toBe(true);
    expect(bst.search(7)).toBe(true);
  });
});
