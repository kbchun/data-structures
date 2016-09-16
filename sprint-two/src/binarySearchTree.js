var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.prototype);

  tree.value = value;
  tree.left = null;
  tree.right = null;

  return tree;
};

BinarySearchTree.prototype.insert = function(value) {
  var child = BinarySearchTree(value);
  var noChildren = child.left === null && child.right === null;
  var twoChildren = child.left !== null && child.right !== null;

  var numChildren = noChildren ? 0 : twoChildren ? 2 : 1;


  if (this.tree.value < value) {
    this.tree.right = child;  


    // check left or right
    //   attach child to whichever
  } 

};

BinarySearchTree.prototype.contains = function() {


};

BinarySearchTree.prototype.depthFirstLog = function() {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
