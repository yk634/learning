import { SinglyLinkedList } from 'src/dataStructure/singlyLinkedList';
import { DoublyLinkedList } from 'src/dataStructure/doublyLinkedList';

describe('Singly Linked List Functions Tests', () => {
  let linkedList: SinglyLinkedList;

  beforeEach(() => {
    linkedList = new SinglyLinkedList();
  });

  test('Initialized state is null', () => {
    expect(linkedList.head).toBeNull();
  });

  test('Append Function Test', () => {
    linkedList.append(0);

    expect(linkedList.head.data).toBe(0);
    expect(linkedList.head.next).toBeNull();

    linkedList.append(1);

    expect(linkedList.head.data).toBe(0);
    expect(linkedList.head.next.data).toBe(1);
    expect(linkedList.head.next.next).toBeNull();
  });

  test('Insert Function Test', () => {
    linkedList.insert(0);

    expect(linkedList.head.data).toBe(0);
    expect(linkedList.head.next).toBeNull();

    linkedList.insert(1);

    expect(linkedList.head.data).toBe(1);
    expect(linkedList.head.next.data).toBe(0);
    expect(linkedList.head.next.next).toBeNull();
  });

  test('Remove Function Test', () => {
    linkedList.remove(0);

    expect(linkedList.head).toBeNull();

    linkedList.append(1);
    linkedList.remove(0);

    expect(linkedList.head.data).toBe(1);

    linkedList.remove(1);

    expect(linkedList.head).toBeNull();

    linkedList.append(2);
    linkedList.append(3);
    linkedList.remove(2);

    expect(linkedList.head.data).toBe(3);
  });

  test('Print Function Test', () => {
    linkedList.append(0);
    linkedList.append(1);
    linkedList.append(2);

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    linkedList.print();

    expect(consoleSpy).toHaveBeenCalledWith(0);
    expect(consoleSpy).toHaveBeenCalledWith(1);
    expect(consoleSpy).toHaveBeenCalledWith(2);

    consoleSpy.mockRestore();
  });

  test('Reverse Iterative Function Test', () => {
    linkedList.append(0);
    linkedList.append(1);
    linkedList.append(2);

    linkedList.reverseIterative();

    expect(linkedList.head.data).toBe(2);
    expect(linkedList.head.next.data).toBe(1);
    expect(linkedList.head.next.next.data).toBe(0);
  });

  test('Reverse Recursive Function Test', () => {
    linkedList.append(0);
    linkedList.append(1);
    linkedList.append(2);

    linkedList.reverseRecursive();

    expect(linkedList.head.data).toBe(2);
    expect(linkedList.head.next.data).toBe(1);
    expect(linkedList.head.next.next.data).toBe(0);
  });

  test('Reverse Even Function Test', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(6);
    linkedList.append(8);
    linkedList.append(5);

    linkedList.reverseEven();

    expect(linkedList.head.data).toBe(1);
    expect(linkedList.head.next.data).toBe(2);
    expect(linkedList.head.next.next.data).toBe(3);
    expect(linkedList.head.next.next.next.data).toBe(8);
    expect(linkedList.head.next.next.next.next.data).toBe(6);
    expect(linkedList.head.next.next.next.next.next.data).toBe(4);
    expect(linkedList.head.next.next.next.next.next.next.data).toBe(5);
  });
});

describe('Doubly Linked List Functions Tests', () => {
  let linkedList: DoublyLinkedList;

  beforeEach(() => {
    linkedList = new DoublyLinkedList();
  });

  test('Initialized state is null', () => {
    expect(linkedList.head).toBeNull();
  });

  test('Append Function Test', () => {
    linkedList.append(0);

    expect(linkedList.head.data).toBe(0);
    expect(linkedList.head.prev).toBeNull();
    expect(linkedList.head.next).toBeNull();

    linkedList.append(1);

    expect(linkedList.head.data).toBe(0);
    expect(linkedList.head.prev).toBeNull();
    expect(linkedList.head.next.data).toBe(1);
    expect(linkedList.head.next.prev.data).toBe(0);
    expect(linkedList.head.next.next).toBeNull();
  });

  test('Insert Function Test', () => {
    linkedList.insert(0);

    expect(linkedList.head.data).toBe(0);
    expect(linkedList.head.prev).toBeNull();
    expect(linkedList.head.next).toBeNull();

    linkedList.insert(1);

    expect(linkedList.head.data).toBe(1);
    expect(linkedList.head.prev).toBeNull();
    expect(linkedList.head.next.data).toBe(0);
    expect(linkedList.head.next.prev.data).toBe(1);
    expect(linkedList.head.next.next).toBeNull();
  });

  test('Remove Function Test', () => {
    linkedList.remove(0);

    expect(linkedList.head).toBeNull();

    linkedList.append(1);
    linkedList.remove(0);

    expect(linkedList.head.data).toBe(1);

    linkedList.remove(1);

    expect(linkedList.head).toBeNull();

    linkedList.append(2);
    linkedList.append(3);
    linkedList.remove(2);

    expect(linkedList.head.data).toBe(3);
  });

  test('Print Function Test', () => {
    linkedList.append(0);
    linkedList.append(1);
    linkedList.append(2);

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    linkedList.print();

    expect(consoleSpy).toHaveBeenCalledWith(0);
    expect(consoleSpy).toHaveBeenCalledWith(1);
    expect(consoleSpy).toHaveBeenCalledWith(2);

    consoleSpy.mockRestore();
  });

  test('Reverse Iterative Function Test', () => {
    linkedList.append(0);
    linkedList.append(1);
    linkedList.append(2);

    linkedList.reverseIterative();

    expect(linkedList.head.data).toBe(2);
    expect(linkedList.head.prev).toBeNull();
    expect(linkedList.head.next.data).toBe(1);
    expect(linkedList.head.next.prev.data).toBe(2);
    expect(linkedList.head.next.next.data).toBe(0);
    expect(linkedList.head.next.next.prev.data).toBe(1);
  });

  test('Reverse Recursive Function Test', () => {
    linkedList.append(0);
    linkedList.append(1);
    linkedList.append(2);

    linkedList.reverseRecursive();

    expect(linkedList.head.data).toBe(2);
    expect(linkedList.head.prev).toBeNull();
    expect(linkedList.head.next.data).toBe(1);
    expect(linkedList.head.next.prev.data).toBe(2);
    expect(linkedList.head.next.next.data).toBe(0);
    expect(linkedList.head.next.next.prev.data).toBe(1);
  });

  test('Sort Function Test', () => {
    linkedList.append(1);
    linkedList.append(9);
    linkedList.append(3);
    linkedList.append(2);
    linkedList.append(5);
    linkedList.append(8);
    linkedList.append(6);
    linkedList.append(7);
    linkedList.append(4);

    linkedList.sort();

    expect(linkedList.head.data).toBe(1);
    expect(linkedList.head.prev).toBeNull();
    expect(linkedList.head.next.data).toBe(2);
    expect(linkedList.head.next.prev.data).toBe(1);
    expect(linkedList.head.next.next.data).toBe(3);
    expect(linkedList.head.next.next.prev.data).toBe(2);
    expect(linkedList.head.next.next.next.data).toBe(4);
    expect(linkedList.head.next.next.next.prev.data).toBe(3);
    expect(linkedList.head.next.next.next.next.data).toBe(5);
    expect(linkedList.head.next.next.next.next.prev.data).toBe(4);
    expect(linkedList.head.next.next.next.next.next.data).toBe(6);
    expect(linkedList.head.next.next.next.next.next.prev.data).toBe(5);
    expect(linkedList.head.next.next.next.next.next.next.data).toBe(7);
    expect(linkedList.head.next.next.next.next.next.next.prev.data).toBe(6);
    expect(linkedList.head.next.next.next.next.next.next.next.data).toBe(8);
    expect(linkedList.head.next.next.next.next.next.next.next.prev.data).toBe(
      7
    );
    expect(linkedList.head.next.next.next.next.next.next.next.next.data).toBe(
      9
    );
    expect(
      linkedList.head.next.next.next.next.next.next.next.next.prev.data
    ).toBe(8);
    expect(
      linkedList.head.next.next.next.next.next.next.next.next.next
    ).toBeNull();
  });
});
