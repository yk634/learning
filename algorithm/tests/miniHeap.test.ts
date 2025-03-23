import { MiniHeap } from 'src/dataStructure/miniHeap';

describe('MiniHeap', () => {
  let heap: MiniHeap;

  beforeEach(() => {
    heap = new MiniHeap();
  });

  test('should initialize an empty heap', () => {
    expect(heap.pop()).toBeNull();
  });

  test('should insert elements and maintain min-heap property', () => {
    heap.append(5);
    heap.append(3);
    heap.append(8);
    heap.append(1);
    heap.append(6);
    expect(heap.pop()).toBe(1);
    expect(heap.pop()).toBe(3);
    expect(heap.pop()).toBe(5);
    expect(heap.pop()).toBe(6);
    expect(heap.pop()).toBe(8);
    expect(heap.pop()).toBeNull();
  });

  test('should return null when popping from an empty heap', () => {
    expect(heap.pop()).toBeNull();
  });

  test('should handle single element correctly', () => {
    heap.append(10);
    expect(heap.pop()).toBe(10);
    expect(heap.pop()).toBeNull();
  });

  test('should maintain heap property after multiple insertions and deletions', () => {
    heap.append(10);
    heap.append(15);
    heap.append(20);
    heap.append(17);
    heap.append(8);
    expect(heap.pop()).toBe(8);
    expect(heap.pop()).toBe(10);
    heap.append(5);
    expect(heap.pop()).toBe(5);
  });
});
