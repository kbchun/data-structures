var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {counter: 0,
                  storage: {} 
                };
  _.extend(instance, stackMethods);
  return instance;

};

var stackMethods = {
  push: function(value) {
    this.counter++;
    this.storage[this.counter] = value;
  },
  
  pop: function() {
    var result = this.storage[this.counter];
    if (this.counter > 0) {
      delete this.storage[this.counter];
      this.counter--;
    }
    return result;
  },
  
  size: function() {
    return this.counter;
  }
};


