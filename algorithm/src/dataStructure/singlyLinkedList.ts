class NodeObject {
  data: any;
  next: NodeObject | null;

  constructor(data: any, next: NodeObject = null) {
    this.data = data;
    this.next = next;
  }
}

export class SinglyLinkedList {
  head: NodeObject;

  constructor(head: NodeObject = null) {
    this.head = head;
  }

  print(): void {
    if (!this.head) return;

    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  append(data: any): void {
    const newNode = new NodeObject(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  }

  insert(data: any): void {
    const newNode = new NodeObject(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  remove(data: any): void {
    let currentNode = this.head;
    if (currentNode && currentNode.data === data) {
      this.head = currentNode.next;
      return;
    }

    let previousNode: NodeObject | null = null;
    while (currentNode && currentNode.data !== data) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (!currentNode) return;

    previousNode.next = currentNode.next;
  }

  reverseIterative(): void {
    let previousNode = null;
    let currentNode = this.head;

    let i = 0;
    while (currentNode) {
      const nextNode = currentNode.next;
      currentNode.next = previousNode;

      previousNode = currentNode;
      currentNode = nextNode;
    }

    this.head = previousNode;
  }

  reverseRecursive(): void {
    function _reverseRecur(previousNode: NodeObject, currentNode: NodeObject) {
      if (!currentNode) return previousNode;

      const nextNode = currentNode.next;
      currentNode.next = previousNode;

      previousNode = currentNode;
      currentNode = nextNode;

      return _reverseRecur(previousNode, currentNode);
    }

    let previousNode = null;
    let currentNode = this.head;

    this.head = _reverseRecur(previousNode, currentNode);
  }

  reverseEven(): void {
    function _reverseEven(head: NodeObject, previousNode: NodeObject) {
      if (!head) return null;

      let currentNode = head;
      while (currentNode && currentNode.data % 2 === 0) {
        const nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
      }

      if (currentNode !== head) {
        head.next = currentNode;
        _reverseEven(currentNode, null);
        return previousNode;
      } else {
        head.next = _reverseEven(head.next, null);
        return head;
      }
    }

    this.head = _reverseEven(this.head, null);
  }
}

const obj = new SinglyLinkedList();
