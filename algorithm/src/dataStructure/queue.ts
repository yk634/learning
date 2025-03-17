export class Queue<T> {
  queue: T[];

  constructor() {
    this.queue = [];
  }

  enqueue(data: T) {
    this.queue.push(data);
  }

  dequeue(): T | null {
    return this.queue.length > 0 ? this.queue.shift()! : null;
  }

  reverse(): void {
    const newQueue = [];
    for (const data of this.queue) {
      newQueue.unshift(data);
    }

    this.queue = newQueue;
  }
}
