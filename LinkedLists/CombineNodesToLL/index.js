const Node1 = {
  data: 7,
  next: null,
}
const Node2 = {
  data: 1,
  next: null,
}
const Node3 = {
  data: 6,
  next: null,
}
const Node4 = {
  data: 5,
  next: null,
}
const Node5 = {
  data: 9,
  next: null,
}
const Node6 = {
  data: 2,
  next: null,
}

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    this.head = new Node(data, this.head);
  }
}

const list = new LinkedList();

function combine() {
  let level1 = '';
  let level2 = '';

  level1 += Node3.data.toString();
  level1 += Node2.data.toString();
  level1 += Node1.data.toString();

  level2 += Node6.data.toString();
  level2 += Node5.data.toString();
  level2 += Node4.data.toString();

  const result = parseInt(level1) + parseInt(level2);


  for (let ele of result.toString()) {
    list.add(parseInt(ele));
  }
}
