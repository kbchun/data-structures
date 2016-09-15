var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree = _.extend (newTree, treeMethods);
  newTree.children = []; 

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var results = [];
  if (this.value === target) {
    return true;
  } 
  if (this.children.length !== 0) {
    results = _.map(this.children, function(child) {
      return child.contains(target);
    });
    if (_.contains(results, true)) {
      return true;
    } else {
      return false;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
