const print = (val) => {
  console.log(val);
};
class head_list {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class list {
  constructor() {
    this.head = null;
    this.tail = null;
    this.lenght = 0;
  }
  push(val) {
    let c = new head_list(val);
    if (this.lenght === 0 || this.head == null) {
      this.head = c;
      this.tail = this.head;
    } else {
      this.tail.next = c;
      this.tail = c;
    }

    this.lenght += 1;
    return this;
  }
  pop() {
    if (this.head == null || this.length === 0) {
      return undefined;
    }
    let curr = this.head;
    let prv = null;
    while (curr.next) {
      prv = curr;
      curr = curr.next;
    }
    this.tail = prv;
    this.tail.next = null;
    this.lenght -= 1;
    return curr;
  }
  shift() {
    if (this.head == null || this.length === 0) {
      return undefined;
    }
    let curr = this.head;
    this.head = curr.next;
    this.lenght -= 1;
    return curr;
  }
  unshift(val) {
    let c = new head_list(val);
    if (this.head == null || this.length === 0) {
      this.head = c;
      this.tail = this.head;
    } else {
      c.next = this.head;
      this.head = c;
    }
    this.lenght += 1;
    return this;
  }
  get(index) {
    if (this.head == null || this.length === 0) {
      return undefined;
    }

    let i = 0;
    let curr = this.head;
    while (i !== index) {
      curr = curr.next;
      i++;
    }
    return curr;
  }

  set(val, index) {
    let t = this.get(index);
    if (t) {
      t.data = val;
      return true;
    } else {
      return false;
    }
  }
  insert(val, index) {
    let t = new head_list(val);
    if (this.head == null || this.length === 0) {
      return false;
    }
    if (index === this.length) {
      this.push(val);
      return true;
    }
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    var prv = this.get(index - 1);
    var temp = prv.next;
    prv.next = t;
    t.next = temp;
    this.lenght++;
    return true;
  }
  remove(index) {
    if (this.lenght < 0 || this.lenght == null) {
      return undefined;
    }
    if (index == this.lenght - 1) {
      return this.pop();
    }
    if (index === 0) {
      return this.shift();
    }
    var prv = this.get(index - 1);
    var remove = prv.next;
    prv.next = remove.next;
    this.length--;
    return remove;
  }
  revers() {
    let node = this.head;
    var curr = this.tail;
    this.tail = node;
    var next;
    var prv = null;
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prv;
      prv = node;
      node = next;
    }
    return this;
  }
}

let temp = new list();
temp.push(100);
temp.push(874);
temp.push(56465);
temp.push("sjdfhg");

print(temp);

temp.pop();
print(temp);
temp.pop();
print(temp);

print(temp.insert(54, 1));
print(temp.insert(54, 3));
print(temp);
