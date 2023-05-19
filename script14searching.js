// this is the tree DS sample

class TreeDS {
  constructor() {
    this.root = null;
  }
  looup(value) {
    if (!this.root) {
      return null;
    }
    let current = this.root;
    while (current) {
      if (current.value > value) {
        current = current.right;
      } else if (current.value < value) {
        current = current.left;
      } else if (current.value == value) {
        return current.value;
      } else {
        return undefined;
      }
    }
    return false;
  }
  insert(value) {
    let newNode = {
      value: value,
      left: null,
      right: null,
    };

    if (!this.root) {
      this.root = newNode;
      return this.root;
    }
    let current = this.root;
    while (true) {
      if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this.root;
        }
        current = current.right;
      }

      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this.root;
        }
        current = current.left;
      }
    }
  }
  //   this BFS is usong the iteration method(Normally this is mostly used)
  breathFirstSearch() {
    let current = this.root;
    let list = [];
    let queue = [];

    queue.push(current);
    while (queue.length > 0) {
      current = queue.shift();
      list.push(current.value);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }

    return list;
  }

  //   this BFS is by recurtion method
  breathFirstSearchR(list, queue) {
    if (queue.length == 0) {
      return list;
    }
    let currentNode = queue.shift();
    list.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    return this.breathFirstSearchR(list, queue);
  }
}

const numList = new TreeDS();

numList.insert(9);
numList.insert(3);
numList.insert(19);
numList.insert(29);
numList.insert(7);

console.log(numList.breathFirstSearch());

console.log(numList.breathFirstSearchR([], [numList.root]));
