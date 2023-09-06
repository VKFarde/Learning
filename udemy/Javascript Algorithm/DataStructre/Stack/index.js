// stack works on LILO == Last IN Last OUT
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  ///------------------------------------------------unshift() function from link list
  push(val) {
    let NewNode = new Node(val);
    if (this.first === null || this.size === 0) {
      this.first = NewNode;
      this.last = NewNode;
    } else {
      NewNode.next = this.first;
      this.first = NewNode;
    }
    this.size++;
    return this;
  }

  ///----------------------------------------------------shift() method from linklist
  pop() {
    let tem = this.first;

    if (this.size === 0 || this.first === null) {
      return null;
    } else {
      this.first = tem.next;
    }

    this.size--;
    return tem;
  }
}

// as the pop() method is not constant runtime form linked-list; as we need a find previous node and breack the link between
//previous last node and tail node and reassingn the previous node as tail node.
// so we use shift() and unshift() methos as pop() and push() from linked-list  In stacks respectively;
