class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  getRoot() {
    return this.root;
  }
  insert(value) {
    if (value === undefined) {
      throw new Error("value can't be undefined or null");
    }
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currRoot = this.root;
      while (true) {
        if (currRoot.value === value) return undefined;
        if (currRoot.value > value) {
          if (!currRoot.left) {
            currRoot.left = newNode;
            return this;
          }
          currRoot = currRoot.left;
        } else {
          if (!currRoot.right) {
            currRoot.right = newNode;
            return this;
          }
          currRoot = currRoot.right;
        }
      }
    }
  }
  contains(value) {
    if (value === undefined) {
      throw new Error("value can't be undefined or null");
    }
    if (!this.root) return false;
    let currRoot = this.root;
    while (true) {
      if (currRoot.value === value) return true;
      if (currRoot.value > value) {
        if (!currRoot.left) break;
        currRoot = currRoot.left;
      } else {
        if (!currRoot.right) break;
        currRoot = currRoot.right;
      }
    }
    return false;
  }
  bfs() {
    const queue = [];
    const visited = [];
    let node = this.root;
    if (!node) return null;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      visited.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }
  dfsPreOrder() {
    if (!this.root) return null;
    const visited = [];
    (function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    })(this.root);
    return visited;
  }
  dfsPostOrder() {
    if (!this.root) return null;
    const visited = [];
    (function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    })(this.root);
    return visited;
  }
  dfsInOrder() {
    if (!this.root) return null;
    const visited = [];
    (function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    })(this.root);

    return visited;
  }
  min(root = this.root) {
    if (!this.root) return null;
    if (!root.left) return root.value;
    return this.min(root.left);
  }
  max(root = this.root) {
    if (!this.root) return null;
    if (!root.right) return root.value;
    return this.max(root.right);
  }

  delete(value) {
    if (value === undefined) {
      throw new Error("value can't be undefined");
    }
    if (this.contains(value)) {
      this.root = this._deleteNode(this.root, value);
      return value;
    }
    return null;
  }

  _deleteNode(root, value) {
    if (root === null) return root;
    if (value < root.value) {
      root.left = this._deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this._deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) return null;
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this._deleteNode(root.right, root.value);
    }
    return root;
  }

  height(root) {
    if (!root) return 0;
    const leftHeight = this.height(root.left);
    const rightHeight = this.height(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  printLevel(root, level) {
    if (!root) return null;
    if (level === 1) {
      console.log(`${root.element} `);
    } else if (level > 1) {
      this.printLevel(root.left, level - 1);
      this.printLevel(root.right, level - 1);
    }
  }

  isBST(root, min, max) {
    if (!root) return true;
    if (root.value < min || root.value > max) return false;
    return (
      this.isBST(root.left, min, root.value) &&
      this.isBST(root.right, root.value, max)
    );
  }
}
