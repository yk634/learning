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
    console.log(currentNode.data);

    while (currentNode.next) {
      console.log(currentNode.next.data);
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
}
