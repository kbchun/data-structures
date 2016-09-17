

var HashTable = function(counter) {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.counter = 0;
};

HashTable.prototype.insert = function(k, v, resizing) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  resizing = resizing || false;
  // checking if bucket is empty
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
  } else { // collision!! bucket contains [k, v] pair(s) already
    for (var i = 0; i < this._storage.get(index).length; i++) {
      // if bucket contains same key as the key we're inserting, overwrite!
      if (this._storage.get(index)[i][0] === k) {
        this.remove(k, true);
      }
    }
    this._storage.get(index).push([k, v]);
  }
  if (!resizing) {
    this.counter++;
    if (this.counter / this._limit >= .75) {
      this.expand();
    }
  }
};

HashTable.prototype.resizeChecker = function() {
  if (this.counter / this._limit >= .75) {
    this.expand();
  } else if (this.counter / this._limit < .25) {
    this.downsize();
  }
};

HashTable.prototype.expand = function() {
  var tuples = [];

  for (var i = 0; i < this._limit; i++) {
    if (this._storage.get(i) !== undefined) {
      for (var n = 0; n < this._storage.get(i).length; n++) {
        tuples.push(this._storage.get(i)[n]);
      }   
    }
  }

  this._limit *= 2;
  this._storage = LimitedArray(this._limit);
  this.counter = 0;

  for (var x = 0; x < tuples.length; x++) {
    this.insert(tuples[x][0], tuples[x][1], true);
  }
};

HashTable.prototype.downsize = function() {
  var tuples = [];

  for (var i = 0; i < this._limit; i++) {
    if (this._storage.get(i) !== undefined) {
      for (var n = 0; n < this._storage.get(i).length; n++) {
        tuples.push(this._storage.get(i)[n]);
      }   
    }
  }

  this._limit = Math.max(this._limit / 2, 4);
  this._storage = LimitedArray(this._limit);
  this.counter = tuples.length;

  for (var x = 0; x < tuples.length; x++) {
    this.insert(tuples[x][0], tuples[x][1], true);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var curr = this._storage.get(index);
  if (curr === undefined) { 
    return undefined;
  }
  for (var i = 0; i < curr.length; i++) {
    if (curr[i][0] === k) {
      return curr[i][1];
    }
  }
};

HashTable.prototype.remove = function(k, overwriting) {
  overwriting = overwriting || false;
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      this._storage.get(index).splice(i, 1);
      this.counter--;
      if (!overwriting) {
        if (this.counter / this._limit < .25) {
          this.downsize();
        }
      }
      break;
    }
  }
};

HashTable.prototype.checkCounter = function() {
  return this.counter;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(n)
 * retrieve: O(n)
 * remove: O(n)
 */


