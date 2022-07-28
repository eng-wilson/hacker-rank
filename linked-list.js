class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }
}

const printList = (head) => {
  let node = head

  while (node !== null) {
    console.log(node.data)
    node = node.next;
  }
  console.log('')
}

const insertNode = (node, nodeBefore) => {
  const auxiliarNode = nodeBefore.next;

  nodeBefore.next = node;

  node.next = auxiliarNode
}

const reverseList = (head) => {
  let node = head;
  let nextNode = head.next;
  let nodeBefore = null;

  while (node !== null) {
    nextNode = node.next

    node.next = nodeBefore

    nodeBefore = node;

    node = nextNode;
  }

  list.head = nodeBefore
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

const list = new LinkedList(node1);

node1.next = node2;
node2.next = node3;

printList(list.head);

insertNode(node4, node3);

printList(list.head)

reverseList(list.head)

printList(list.head)