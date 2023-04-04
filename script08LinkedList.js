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

const mylinklist = new LinkedList(23);
mylinklist.prepend(27);
mylinklist.prepend(70);
mylinklist.prepend(97);

mylinklist.append(11);
// [97, 70, 27, 23, 11]
mylinklist.insert(2, 22);

console.log(mylinklist.showList());
