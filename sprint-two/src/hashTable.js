

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // attempt at Linked Lists

  // var object = {};
  // object[k] = v;
  // object['next'] = null;

  // if (this._storage.get(index) === undefined) {
  //   this._storage.set(index, object);
  // } else {
  //   this._storage.get(index)['next'] = object;
  // }


/* something weird is happening where next is linking back to the 
 *   same object over and over again
 */


  // attempt at nested arrays

  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        this._storage.get(index)[i][1] = v;
      }
    }
    this._storage.get(index).push([k, v]);
  }


};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // attempt at Linked Lists

  // while (curr !== null) {
  //   if (this._storage.get(index).hasOwnProperty(k)) {
  //     return this._storage.get(index)[k];
  //   }
  //   curr = curr['next'];
  // }


  // attempt at nested arrays
  var curr = this._storage.get(index);
  for (var i = 0; i < curr.length; i++) {
    if (curr[i][0] === k) {
      return curr[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      this._storage.get(index).splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(n)
 * retrieve: O(n)
 * remove: O(n)
 */


