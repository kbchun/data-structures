var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // new node being added
    var end = Node(value);

    if (list.head === null) {
      list.head = end;
    } else { // tail is pointing to something already
      list.tail.next = end;
    }
    // reassigning tail to new node
    list.tail = end;
  };

  list.removeHead = function() {
    var removed = list.head;
    list.head = removed.next;
    return removed.value;
  };

  list.contains = function(target) {
    var checker = false;
    var curr = list.head;
    
    while (curr !== null) {
      if (curr.value === target) {
        checker = true;
        break;
      } else {
        curr = curr.next;
      }
    }

    return checker;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail: O(1)
 * removeHead: O(1)
 * contains: O(n)
 */
