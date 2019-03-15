function BinaryTree() {
  this.root = null;
}

function Node(key) {
  this.key = key;
  this.left = null;
  this.right = null;
}

BinaryTree.prototype.inOrderWalk = function(startingNode) {
  if (startingNode !== null) {
    this.inOrderWalk(startingNode.left);
    console.log(startingNode.key);
    this.inOrderWalk(startingNode.right);
  }
};

BinaryTree.prototype.searchRecursive = function(key, startingNode) {
  if (startingNode === null || startingNode.key === key) {
    return startingNode;
  } else if (key < startingNode.key) {
    return this.searchRecursive(key, startingNode.left);
  } else {
    return this.searchRecursive(key, startingNode.right);
  }
};

BinaryTree.prototype.minimum = function() {
  let startingNode = this.root;
  while (startingNode.left !== null) {
    startingNode = startingNode.left;
  }
  return startingNode;
};

BinaryTree.prototype.maximum = function() {
  let startingNode = this.root;
  while (startingNode.right !== null) {
    startingNode = startingNode.right;
  }
  return startingNode;
};

BinaryTree.prototype.insert = function(key) {
  const nodeToInsert = new Node(key);
  let startingNode = this.root; // We start from the root of the binary tree
  let parentOfInsertedNode = null;
  while (startingNode !== null) {
    parentOfInsertedNode = startingNode;
    if (nodeToInsert.key < startingNode.key) {
      startingNode = startingNode.left;
    } else {
      startingNode = startingNode.right;
    }
  }
  if (parentOfInsertedNode === null) {
    // Tree was empty
    this.root = nodeToInsert;
  } else if (nodeToInsert.key < parentOfInsertedNode.key) {
    parentOfInsertedNode.left = nodeToInsert;
  } else {
    parentOfInsertedNode.right = nodeToInsert;
  }
};

BinaryTree.prototype.findParent = function(key) {
  let startingNode = this.root;
  if (startingNode.key === key) {
    return null; // Root has no parent
  }
  while (startingNode.left !== null || startingNode.right !== null) {
    if (
      (startingNode.left && startingNode.left.key === key) ||
      (startingNode.right && startingNode.right.key === key)
    ) {
      return startingNode;
    }
    if (key < startingNode.key) {
      startingNode = startingNode.left;
    } else {
      startingNode = startingNode.right;
    }
  }
  return null; // Key doesn't exist
};

BinaryTree.prototype.delete = function(key) {
  const nodeToDelete = this.searchRecursive(key, this.root);
  const parentNodeOfDelete = this.findParent(key);
  // Case 1: Node to delete is a leaf
  if (nodeToDelete.left === null && nodeToDelete.right === null) {
    if (parentNodeOfDelete.left && parentNodeOfDelete.left.key === key) {
      parentNodeOfDelete.left = null;
    } else {
      parentNodeOfDelete.right = null;
    }
  }
  // Case 2: Node to delete has only one child (replace parentNodeOfDelete by nodeToDelete's child)
  else if (nodeToDelete.left === null || nodeToDelete.right === null) {
    const childNodeOfDelete = nodeToDelete.left || nodeToDelete.right;
    if (parentNodeOfDelete.left && parentNodeOfDelete.left.key === key) {
      parentNodeOfDelete.left = childNodeOfDelete;
    } else {
      parentNodeOfDelete.right = childNodeOfDelete;
    }
  }
};
