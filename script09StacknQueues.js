class Stack {
  constructor(value) {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  //   in the peek function we look at the top(the value which was the first in the stack)
  peek() {
    return this.top;
  }
  push(value) {
    let newNode = {
      value: value,
      next: null,
    };
    if (this.top == null) {
      this.top = newNode;
      this.bottom = this.top;
    } else {
      let holdnode = this.top;
      this.top = newNode;
      this.top.next = holdnode;
    }
    this.length++;
    return this.length;
  }
  pop() {
    this.top = this.top.next;
    this.length--;
    return this.length;
  }
}

let plates = new Stack();
plates.peek();
plates.push("google");
plates.push("udemy");
plates.push("gmail");
plates.push("torrent");
plates.push("apple");

console.log(plates);
