export class MiniHeap {
  heap = [];
  currentSize = 0;

  constructor() {
    this.heap.push(Number.MAX_VALUE * -1);
  }

  parentIndex(index: number): number {
    return Math.floor(index / 2);
  }

  leftChildIndex(index: number): number {
    return index * 2;
  }

  rightChildIndex(index: number): number {
    return index * 2 + 1;
  }

  minChild(index: number): number {
    if (this.rightChildIndex(index) > this.currentSize) {
      return this.leftChildIndex(index);
    } else {
      if (
        this.heap[this.leftChildIndex(index)] <
        this.heap[this.rightChildIndex(index)]
      ) {
        return this.leftChildIndex(index);
      } else {
        return this.rightChildIndex(index);
      }
    }
  }

  swap(index1: number, index2: number): void {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  heapifyUp(index: number): void {
    while (this.parentIndex(index) > 0) {
      if (this.heap[this.parentIndex(index)] <= this.heap[index]) {
        return;
      }

      this.swap(this.parentIndex(index), index);
      index = this.parentIndex(index);
    }
  }

  heapifyDown(index: number): void {
    while (this.leftChildIndex(index) <= this.currentSize) {
      const minChildIndex = this.minChild(index);
      if (this.heap[minChildIndex] < this.heap[index]) {
        this.swap(minChildIndex, index);
      }

      index = minChildIndex;
    }
  }

  append(number: number): void {
    this.heap.push(number);
    this.currentSize++;
    this.heapifyUp(this.currentSize);
  }

  pop(): number | null {
    if (this.heap.length === 1) return null;

    const root = this.heap[1];
    const data = this.heap.pop();
    this.currentSize--;

    if (this.heap.length === 1) return root;

    this.heap[1] = data;
    this.heapifyDown(1);

    return root;
  }
}
