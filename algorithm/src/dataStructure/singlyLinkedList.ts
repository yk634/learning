class NodeObject {
  data: any;
  next: NodeObject;

  constructor(data, next: NodeObject = null) {
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

    currentNode.next = new NodeObject(data);
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

    let previousNode = null;
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
    function _reverseRecur(previousNode, currentNode) {
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
}
