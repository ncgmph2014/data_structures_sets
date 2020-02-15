/*Sets */
//sets are kind of like an array but there are no duplicates
//sets are used to search for an item

function mySet() {
  //the var collection will hold the sest
  var collection = [];
  //this method will check for the presence of an element and return true or false
  this.has = function(element) {
    return collection.indexOf(element) !== -1;
  };
}

//this method wil return all the values in a set
this.values = function() {
  return collection;
};

//this method will add an element to the set
this.add = function(element) {
  if (!this.has(element)) {
    collection.push(element);
    return true;
  }
  return false;
};
//this method will remove an element from a set
//in es6 remove is delet
this.remove = function(element) {
  if (this.has(element)) {
    index = collection.indexOf(element);
    collection.splice(index, 1);
    return true;
  }
  return false;
};

//this method will reutrn the size of the collection
//size is not a method in es6, it's a property
this.size = function() {
  return collection.length;
};

// this method will return the union of the two sets
this.union = function(otherSet) {
  var unionSet = new Set();
  var firstSet = this.values();
  var secondSet = otherSet.values();
  firstSet.forEach(function(e) {
    unionSet.add(e);
  });
  secondSet.forEach(function(e) {
    unionSet.add(e);
  });
  return unionSet;
};
