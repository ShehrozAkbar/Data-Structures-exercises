// thi sscript is from DATA structures chapter 8 LINKED LIST to onwards

// ------------------08--Linked Lists-----------------

// making my first self made linked list

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  //   add node at the last of the list
  append(value) {
    let newNODE = {
      value: value,
      next: null,
    };
    this.tail.next = newNODE;
    this.tail = newNODE;
    this.length++;
  }
  //   add node at the start of the list
  prepend(value) {
    this.head = {
      value: value,
      next: this.head,
    };
    this.length++;
  }
  //   this function will print out the
  showList() {
    let temp = this.head;
    let arrList = [];
    while (temp != null) {
      arrList.push(temp.value);
      temp = temp.next;
    }
    return arrList;
  }

  //   this function is used to insert a value at any index
  insert(index, value) {
    let newNode = {
      value: value,
      next: null,
    };
    let tempNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      tempNode = tempNode.next;
    }
    newNode.next = tempNode.next;
    tempNode.next = newNode;
    this.length++;
  }

  //   this function is to remove/delete anything in the given index

  remove(index) {
    if (index == 0) {
      this.head = this.head.next;
      this.length--;
    } else {
      let tempNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        tempNode = tempNode.next;
      }
      let delNode = tempNode.next;
      tempNode.next = delNode.next;
      this.length--;
    }
  }
}

// const mylinklist = new LinkedList(23);
// mylinklist.prepend(27);
// mylinklist.prepend(70);
// mylinklist.prepend(97);

// mylinklist.append(11);
// // [97, 70, 27, 23, 11]
// mylinklist.insert(2, 22);

// console.log(mylinklist.showList());

// making my first self made Doubly linked list

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      prev: null,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  // a function which will add the node at the last of the list
  append(value) {
    const newNode = {
      value: value,
      prev: null,
      next: null,
    };
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this.length;
  }
  prepend(value) {
    const newNode = {
      value: value,
      prev: null,
      next: null,
    };
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this.length;
  }
  showList() {
    let arrList = [];
    let tempNode = this.head;

    while (tempNode != null) {
      arrList.push(tempNode.value);
      tempNode = tempNode.next;
    }

    console.log(arrList);
  }

  insert(index, value) {
    const newNode = {
      value: value,
      prev: null,
      next: null,
    };
    if (index < 1) {
      this.prepend(value);
    } else if (index >= this.length) {
      this.append(value);
    } else {
      let leader = this.head;
      for (let i = 0; i < index - 1; i++) {
        leader = leader.next;
      }
      let follower = leader.next;
      newNode.prev = leader;
      newNode.next = follower;
      leader.next = newNode;
      follower.prev = newNode;

      this.length++;
      return this.length;
    }
  }
  // this function is to remove a Node which have the given index
  remove(index) {
    if (index == 0) {
      this.head = this.head.next;
      this.length--;
    } else if (index >= this.length) {
      this.tail = this.tail.prev;
      this.length--;
    } else {
      let leader = this.head;
      for (let i = 0; i < index - 1; i++) {
        leader = leader.next;
      }
      let delNode = leader.next;
      leader.next = delNode.next;
      this.length--;
    }
  }
}

const myDoublyList = new DoublyLinkedList(24);
// myDoublyList.append(44);
// myDoublyList.append(45);
// myDoublyList.append(46);
// myDoublyList.append(99);

myDoublyList.prepend(12);
myDoublyList.prepend(7);

myDoublyList.prepend(5);
// [5,7,12,24,44,99]
myDoublyList.insert(2, 1000);
myDoublyList.insert(0, 2000);
myDoublyList.insert(14, 3000);
// [2000,5,7,1000,12,24,3000]
myDoublyList.remove(5);
console.log(myDoublyList.showList());
