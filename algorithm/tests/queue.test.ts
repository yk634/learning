import { Queue } from 'src/dataStructure/queue';

describe('Queue', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  test('should enqueue elements correctly', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.queue).toEqual([1, 2, 3]);
  });

  test('should dequeue elements in FIFO order', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBeNull();
  });

  test('should return null when dequeuing from an empty queue', () => {
    expect(queue.dequeue()).toBeNull();
  });

  test('should reverse the queue correctly', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    queue.reverse();

    expect(queue.queue).toEqual([3, 2, 1]);
  });

  test('should handle reversing an empty queue without errors', () => {
    queue.reverse();
    expect(queue.queue).toEqual([]);
  });

  test('should handle reversing a queue with one element', () => {
    queue.enqueue(42);
    queue.reverse();
    expect(queue.queue).toEqual([42]);
  });
});
