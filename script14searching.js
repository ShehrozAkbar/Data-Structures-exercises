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
}

const numList = new TreeDS();

numList.insert(9);
numList.insert(3);
numList.insert(19);
numList.insert(29);
numList.insert(7);
