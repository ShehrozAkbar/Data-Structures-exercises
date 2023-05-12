// class Stack {
//   constructor(value) {
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }

//   //   in the peek function we look at the top(the value which was the first in the stack)
//   peek() {
//     return this.top;
//   }
//   push(value) {
//     let newNode = {
//       value: value,
//       next: null,
//     };
//     if (this.top == null) {
//       this.top = newNode;
//       this.bottom = this.top;
//     } else {
//       let holdnode = this.top;
//       this.top = newNode;
//       this.top.next = holdnode;
//     }
//     this.length++;
//     return this.length;
//   }
//   pop() {
//     this.top = this.top.next;
//     this.length--;
//     return this.length;
//   }
// }

// let plates = new Stack();
// plates.peek();
// plates.push("google");
// plates.push("udemy");
// plates.push("gmail");
// plates.push("torrent");
// plates.push("apple");

// console.log(plates);

// ===================lets practice Stack agian with linked list=======================

// class Stack {
//   constructor() {
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }

//   // peek function is to look what is at the top of the stack
//   peek() {
//     if (!this.top) {
//       return null;
//     } else {
//       return this.top;
//     }
//   }
// push function is to add the node at the top of the stack
// push(value) {
//   const newNode = {
//     value: value,
//     next: null,
//   };
//   if (this.top === null) {
//     this.top = newNode;
//     this.bottom = newNode;
//   } else {
//     let holdNode = this.top;
//     this.top = newNode;
//     this.top.next = holdNode;
//   }
//   this.length++;
//   return this.length;
// }

// pop function is to delete the node at the top of the stack
//   pop() {
//     if (this.top === null) {
//       return "stack is already empty";
//     }
//     if (this.length === 1) {
//       this.bottom = null;
//     }
//     this.top = this.top.next;
//     this.length--;
//     return this.length;
//   }
// }
// let plates = new Stack();

// ===================lets practice Stack agian with arrays=======================

class ArrayStack {
  constructor() {
    this.array = [];
  }

  peeka() {
    return this.array[this.array.length - 1];
  }
  pusha(value) {
    this.array.push(value);
    return this.array.length;
  }
  popa() {
    const removedItem = this.array[this.array.length - 1];
    this.array.pop();
    return removedItem;
  }
}

// const sites = new ArrayStack();

// ===================lets practice queue which we will solve with linked list which is more efficient then array=======================

// class Queue {
//   constructor() {
//     this.start = null;
//     this.end = null;
//     this.length = 0;
//   }

//   peek() {
//     if (!this.start) {
//       return this.start;
//     }
//     return this.start.value;
//   }

//   enqueue(value) {
//     let newNode = {
//       value: value,
//       next: null,
//     };
//     if (this.length == 0) {
//       this.start = newNode;
//       this.end = newNode;
//     } else {
//       this.end.next = newNode;
//       this.end = this.end.next;
//     }
//     this.length++;
//     return this.length;
//   }
//   dequeue() {
//     if (!this.start) {
//       return null;
//     }
//     if (this.length == 1) {
//       this.end = null;
//     }
//     this.start = this.start.next;
//     this.length--;
//     return this.length;
//   }
// }

// const waiting = new Queue();

// ===================lets practice queues using stack(array)=======================

class QueueS {
  constructor() {
    // NOTE: here we can also declare just an array for stack1 and 2
    this.stack1 = new ArrayStack();
    this.stack2 = new ArrayStack();
  }

  peek() {
    if (this.stack1.array.length) {
      return this.stack1[0];
    } else {
      return this.stack2[this.stack2.array.length - 1];
    }
  }
  enqueue(value) {
    this.stack1.pusha(value);
  }
  dequeue() {
    // here we can also perform the array function of shift() to remove from the start of the array.
    while (this.stack1.array.length) {
      this.stack2.pusha(this.stack1.popa());
    }
    const removedVal = this.stack2.popa();
    while (this.stack2.array.length) {
      this.stack1.pusha(this.stack2.popa());
    }
    return removedVal;
  }
}

const waiting = new QueueS();

waiting.enqueue("usman");
waiting.enqueue("vali");
waiting.enqueue("khan");
waiting.enqueue("ramla");
waiting.enqueue("hassan");
waiting.enqueue("nisar");
waiting.enqueue("chand");

console.log(waiting.dequeue());
console.log(waiting.dequeue());
console.log(waiting.dequeue());
console.log(waiting);
