var Queue = function() {
  var someInstance = {};
  var counter = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    counter++;
    storage[counter] = value;
  };

  someInstance.dequeue = function() {
    var result = storage[1];
    var newStorage = {};
    var key = 1;

    if (counter > 0) {
      counter--;
      for (var item in storage) {
        if (item !== '1') {
          newStorage[key] = storage[item];
          key++;
        }
      }
      storage = newStorage;
    }
    return result;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
