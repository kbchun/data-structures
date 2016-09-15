

// Instantiate a new graph
var Graph = function(storage, edges) {
  this.storage = [];
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage.push(node);
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return _.contains(this.storage, node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = _.indexOf(this.storage, node);

  var nodeEdges = this.edges[node];
  for (var i = 0; i < nodeEdges.length; i++) {
    this.removeEdge(node, nodeEdges[i]);
  }

  delete this.edges[node];
  this.storage.splice(index, 1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return _.indexOf(this.edges[fromNode], toNode) !== -1;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode].push(toNode);
  this.edges[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // accessing edges of fromNode and then splicing at index of toNode and vice-versa
  this.edges[fromNode].splice(_.indexOf(this.edges[fromNode], toNode), 1);
  this.edges[toNode].splice(_.indexOf(this.edges[toNode], fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.storage.length; i++) {
    cb(this.storage[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode: O(1)
 * contains: O(n)
 * removeNode: O(n^2) because of the for-loop and indexOf nested in the loop
 * hasEdge: O(n)
 * addEdge: O(1)
 * removeEdge: O(n) because of indexOf
 * forEachNode: O(n)
 */


