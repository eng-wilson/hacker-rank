class Node {
  constructor(value) {
    this.key = value;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(1);

root.left = new Node(2);
root.left.left = new Node(4);
root.left.right= new Node(5);

root.right = new Node(3);

function height(root) {
  if (root == null)
      return 0;
  else {
      /* compute height of each subtree */
      let lheight = height(root.left);
      let rheight = height(root.right);

      /* use the larger one */
      if (lheight > rheight)
          return (lheight + 1);
      else
          return (rheight + 1);
  }
}

console.log(height(root))