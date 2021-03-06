var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.counter = 0;
  instance.storage = {};
  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    this.counter++;
    this.storage[this.counter] = value;
  },

  dequeue: function() {
    var result = this.storage[1];
    var key = 1;
    var newStorage = {};

    if (this.counter > 0) {
      for (var item in this.storage) {
        if (item !== '1') {
          newStorage[key] = this.storage[item];
          key++;
        }
      }
      this.storage = newStorage;
      this.counter--;
    }
    return result;
  },

  size: function() {
    return this.counter;
  }
};


