const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.data = null;
  }


  root() {
    return this.data;
  }

  add(data) {
    this.data = addNew(this.data, data);
  }
  add(/* data */) {
   
  }

  has(/* data */) {
   
  }

  find(/* data */) {
   
  }

  remove(/* data */) {
   
  }

  min() {
   
  }

  max() {
   
  }

}

module.exports = {
  BinarySearchTree
};