var Stack = function(counter, storage) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
	this.counter++;
  this.storage[this.counter] = value;
};

Stack.prototype.pop = function() {
	var result = this.storage[this.counter];
    if (this.counter > 0) {
      delete this.storage[this.counter];
      this.counter--;
    }
    return result;
};

Stack.prototype.size = function() {
	return this.counter;
};