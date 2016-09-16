var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.prototype);

  tree.value = value;
  tree.left = null;
  tree.right = null;

  return tree;
};

BinarySearchTree.prototype.insert = function(value) {
  var child = BinarySearchTree(value);

  if (value < this.value && this.left === null) { // insert left if head's left is null
    this.left = child;
  } else if (value > this.value && this.right === null) { // insert right if head's right is null
    this.right = child;
  } else if (value < this.value) { // recursive call if head's left is not null
    this.left.insert(value);
  } else if (value > this.value) { // recursive call if head's right is not null
    this.right.insert(value);
  }

};

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (value < this.value && this.left !== null) { // if value less than head's value and head has a left child, then recursive call on this.left
    return this.left.contains(value);
  } else if (value > this.value && this.right !== null) { // if value greater than head's value and head has a right child, then recursive call on this.right
    return this.right.contains(value);
  } else {
    return false;
  }

};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  } else if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }

};


BinarySearchTree.prototype.checkBalance = function() {
  var results = [];
  var checkDepths = function(level) {
    if (this.left === null && this.right === null) { // reached end of branch
      results.push(level);
    } else if (this.left !== null && this.right === null) {
      checkDepths.call(this.left, level + 1);
    } else if (this.right !== null && this.left === null) {
      checkDepths.call(this.right, level + 1);
    } else { // both are not null
      checkDepths.call(this.left, level + 1);
      checkDepths.call(this.right, level + 1);
    }
  };
  checkDepths.call(this, 0);
  results.sort();
  return results[results.length - 1] / results[0] > 2;
};

BinarySearchTree.prototype.balance = function() {

};
/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(n) --if not balanced  O(logn) --if balanced
 * contains: O(n) --if not balanced  O(logn) --if balanced
 * depthFirstLog: O(n) --always
 */
