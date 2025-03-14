import { SinglyLinkedList } from 'src/dataStructure/singlyLinkedList';

describe('Singly Linked List Functions Tests', () => {
  let linkedList: SinglyLinkedList;

  beforeEach(() => {
    linkedList = new SinglyLinkedList();
  });

  test('Append Function Test', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    expect(linkedList.head).toEqual({
      data: 1,
      next: { data: 2, next: { data: 3, next: null } },
    });
  });

  test('Insert Function Test', () => {
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);

    expect(linkedList.head).toEqual({
      data: 3,
      next: { data: 2, next: { data: 1, next: null } },
    });
  });

  test('Remove Function Test', () => {
    linkedList.remove(0);

    expect(linkedList.head).toBeNull();

    linkedList.append(1);
    linkedList.remove(0);

    expect(linkedList.head).toEqual({ data: 1, next: null });

    linkedList.remove(1);

    expect(linkedList.head).toBeNull();

    linkedList.append(2);
    linkedList.append(3);
    linkedList.remove(2);

    expect(linkedList.head).toEqual({
      data: 3,
      next: null,
    });
  });

  test('Print Function Test', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    linkedList.print();

    expect(consoleSpy).toHaveBeenCalledWith(1);
    expect(consoleSpy).toHaveBeenCalledWith(2);
    expect(consoleSpy).toHaveBeenCalledWith(3);

    consoleSpy.mockRestore();
  });

  test('Reverse Iterative Function Test', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    linkedList.reverseIterative();

    expect(linkedList.head).toEqual({
      data: 3,
      next: { data: 2, next: { data: 1, next: null } },
    });
  });

  test('Reverse Recursive Function Test', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    linkedList.reverseRecursive();

    expect(linkedList.head).toEqual({
      data: 3,
      next: { data: 2, next: { data: 1, next: null } },
    });
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

    expect(linkedList.head).toEqual({
      data: 1,
      next: {
        data: 2,
        next: {
          data: 3,
          next: {
            data: 8,
            next: {
              data: 6,
              next: { data: 4, next: { data: 5, next: null } },
            },
          },
        },
      },
    });
  });
});
