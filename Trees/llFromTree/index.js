// For all nodes in each depth of a Binary Tree, build a Linked List of the nodes at each depth.

import LinkedList from '../../Lectures/LinkedList';

class Tree {
    constructor() {
        this.root = null;
    }

    convertToLL() {
        const data = [this.root];
        let lists = [];
		const result = [];

        while (data.length) {
            const node = data.shift();
            const l = new LinkedList();

            data.push(...node.children);
            for (let ele of data) {
				l.insertFirst(ele.data);
            }
            lists.push(l);
			result.push(lists[0]);
			lists = [];
        }
		return result;
    }
}

class LLNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(node => {
      return node.data !== data;
    });
  }
}
