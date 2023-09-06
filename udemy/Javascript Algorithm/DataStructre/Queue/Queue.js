// queue if data structure works on fIFO = first In First out
// use combination of push() and shift() from link list
// or use combinaton of pop() and unshift() from link list
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}
//// work at constant run time [enqueue() and dequeue()]
class list {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  Enqueue(val) {
    //// ----------------------------push() from Linklist
    let NewNode = new Node(val);
    if (this.head === null || this.length === 0) {
      this.head = NewNode;
      this.tail = this.head;
    } else {
      this.tail.next = NewNode;
      this.tail = NewNode;
    }

    this.length++;
    return this;
  }

  Dequeue() {
    ////-------------------------------shift() from llinklist
    let temp;
    if (this.head === null || this.lenght === 0) {
      return null;
    }
    if (this.head == this.tail) {
      return null;
    } else {
      temp = this.head;
      this.head = this.head.next;
    }

    this.length--;
    return temp;
  }
}

/// below queue enqueue() and dequeue() not work at constant runtime

class list2 {
  constructor() {
    this.first = null;
    this.last = null;
    this.lenght = 0;
  }
  ///------------------ unshift() from linklist
  Enqueue(val) {
    let NewNode = new Node(val);

    if (this.head === null || this.lenght === 0) {
      this.first = NewNode;
      this.last = NewNode;
    } else {
      NewNode.next = this.first;
      this.first = NewNode;
    }

    this.lenght++;
    return this;
  }

  Dequeue() {
    /// ----------------------------------pop() from llinklist
    let temp = this.last;
    if (this.first === null) {
      return null;
    }
    if (this.first === this.last) {
      return temp;
    } else {
      let curr = this.first;
      let prv = null;

      while (curr.next) {
        prv = curr;
        curr = curr.next;
      }

      this.last = prv;
      this.last.next = null;
    }

    this.lenght--;
    return temp;
  }
}
