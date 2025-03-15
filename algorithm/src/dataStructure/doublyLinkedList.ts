class NodeObject {
  data: any;
  prev: NodeObject | null;
  next: NodeObject | null;

  constructor(
    data: any,
    prev: NodeObject | null = null,
    next: NodeObject | null = null
  ) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

export class DoublyLinkedList {
  head: NodeObject | null;

  constructor(head: NodeObject = null) {
    this.head = head;
  }

  print(): void {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  append(data: any): void {
    const newNode = new NodeObject(data);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
    newNode.prev = currentNode;
  }

  insert(data: any): void {
    const newNode = new NodeObject(data);
    if (this.head !== null) {
      this.head.prev = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
  }

  remove(data: any): void {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === data) {
        if (currentNode.prev) {
          currentNode.prev.next = currentNode.next;
        } else {
          this.head = currentNode.next;
        }

        if (currentNode.next) {
          currentNode.next.prev = currentNode.prev;
        }

        return;
      }
      currentNode = currentNode.next;
    }
  }

  reverseIterative(): void {
    let currentNode = this.head;
    let previousNode: NodeObject | null = null;

    while (currentNode) {
      const nextNode = currentNode.next;

      currentNode.next = previousNode;
      currentNode.prev = nextNode;

      previousNode = currentNode;
      currentNode = nextNode;
    }

    if (previousNode) this.head = previousNode;
  }

  reverseRecursive(): void {
    function _reverseRecursive(
      currentNode: NodeObject | null,
      previousNode: NodeObject | null
    ) {
      if (!currentNode) return previousNode;

      const nextNode = currentNode.next;

      currentNode.next = previousNode;
      currentNode.prev = nextNode;

      previousNode = currentNode;
      currentNode = nextNode;

      return _reverseRecursive(currentNode, previousNode);
    }

    let currentNode = this.head;
    let previousNode: NodeObject | null = null;

    previousNode = _reverseRecursive(currentNode, previousNode);

    if (previousNode) this.head = previousNode;
  }

  sort(): void {
    let currentNode = this.head;
    while (currentNode) {
      let comparisonNode = currentNode.next;

      while (comparisonNode) {
        if (currentNode.data > comparisonNode.data) {
          [currentNode.data, comparisonNode.data] = [
            comparisonNode.data,
            currentNode.data,
          ];
        }
        comparisonNode = comparisonNode.next;
      }
      currentNode = currentNode.next;
    }
  }
}
