class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(value: number): void {
    function _insert(node: TreeNode, value: number): TreeNode {
      if (!node) return new TreeNode(value);

      if (node.value > value) {
        node.left = _insert(node.left, value);
      } else {
        node.right = _insert(node.right, value);
      }

      return node;
    }

    if (this.root === null) {
      this.root = new TreeNode(value);
    } else {
      _insert(this.root, value);
    }
  }

  inOrder(): void {
    function _inOrder(node: TreeNode): void {
      if (!node) return;

      _inOrder(node.left);
      console.log(node.value);
      _inOrder(node.right);
    }

    return _inOrder(this.root);
  }

  search(number: number): boolean {
    function _search(node: TreeNode, number: number) {
      if (!node) return false;

      if (node.value > number) {
        return _search(node.left, number);
      } else if (node.value < number) {
        return _search(node.right, number);
      } else {
        return true;
      }
    }
    return _search(this.root, number);
  }

  remove(number: number) {
    function minValue(node: TreeNode): TreeNode {
      while (node.left !== null) {
        node = node.left;
      }
      return node;
    }

    function _remove(node: TreeNode | null, number: number) {
      if (!node) return node;

      if (node.value > number) {
        node.left = _remove(node.left, number);
      } else if (node.value < number) {
        node.right = _remove(node.right, number);
      } else {
        if (!node.left) {
          return node.right;
        } else if (!node.right) {
          return node.left;
        }

        const temp = minValue(node.right);
        node.value = temp.value;
        node.right = _remove(node.right, temp.value);
      }

      return node;
    }

    this.root = _remove(this.root, number);
  }
}
