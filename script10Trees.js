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
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        // if value is smaller then moving left
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        }
        // if value is greater then moving right
        else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  // this function is to check that weather node exist or not
  lookup(value) {
    let currentNode = this.root;
    if (!this.root) {
      return false;
    } else {
      while (currentNode) {
        if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          currentNode = currentNode.right;
        } else if (value === currentNode.value) {
          return currentNode;
        }
      }
      return false;
    }
  }
}

const numList = new BinarySearchTree();

numList.insert(9);
numList.insert(4);
numList.insert(20);
numList.insert(1);
numList.insert(6);
numList.insert(15);
numList.insert(170);
