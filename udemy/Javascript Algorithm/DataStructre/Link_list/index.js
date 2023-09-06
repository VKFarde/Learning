
const print = (val) => console.log(val);

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class list {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //at a last position
  push(val) {
    let NewNode = new Node(val);

    if (this.head === null || this.length === 0) {
      this.head = NewNode;
      this.tail = NewNode;
    } else {
      this.tail.next = NewNode;
      this.tail = NewNode;
    }
    this.length++;

    return this;
  }

  //from the lst position
  pop() {
    if (this.head === null || this.length === 0) {
      print(`The list is empty`);
    }
    let current = this.head;
    let previos = null;

    while (current.next) {
      previos = current;
      current = current.next;
    }
    this.tail = previos;
    this.tail.next = null;
    this.length--;
    return current;
  }

  //remove starting first elemrnt
  shift() {
    if (this.length === 0 || this.head === null) {
      print(`the list is empty`);
    }

    let currenthead = this.head;
    this.head = currenthead.next;

    this.length--;
    return currenthead;
  }

  //add new element at starting of list

  unshift(val) {
    let newhead = new Node(val);
    if (this.head === null || this.length === 0) {
      this.head = newhead;
      this.tail = this.head;
    } else {
      newhead.next = this.head;
      this.head = newhead;
    }

    this.length++;
    return this;
  }

  //get element on index of element
  get(index) {
    if (this.head == null || this.length === 0) {
      return undefined;
    }

    let i = 0;
    let curr = this.head;
    while (i < index) {
      curr = curr.next;
      i++;
    }
    return curr;
  }

  // insert element at specific index
  insert(val, index) {
    if (this.head === null || this.length === 0) {
      return false;
    }
    if (index === 0) {
      this.unshift(val);
      return this;
    }
    if (index === this.length) {
      this.push(val);
      return this;
    }

    let NewNode = new Node(val);
    let current = this.get(index - 1);
    let temp = current.next;

    current.next = NewNode;
    NewNode.next = temp;

    this.length++;
    return this;
  }

  //remove element at specific index

  remove(index) {
    if (index === this.length) {
      this.pop();
    }
    if (index === 0) {
      this.shift();
    }

    let previous = this.get(index - 1);
    let temp = previous.next;
    previous.next = temp.next;

    this.length--;
    return temp;
  }

  revers() {
    let start = this.head;
    let end = this.tail;
    this.tail = start;

    let nextt;
    let prv = null;

    for (let i = 0; i < this.length; i++) {
      // tricky logic but computable
      nextt = start.next;
      start.next = prv;
      prv = start;
      start = nextt;
    }

    return this;
  }
}

let t = new list();
t.push(4);
t.push(48);
t.push(8);
t.push(484);
t.push(448);
t.push(484);
t.push(8);
print(t);

print(t.pop());
print(t.shift());

print(t.revers());
print(t.get(4));

print(t.insert(54, 1));
print(t.insert(54, 3));

print(t);
