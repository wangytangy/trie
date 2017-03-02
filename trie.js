/**
  TRIE DATA STRUCTURE

  O(n) time for search and add functions
**/

const dict = [
  "car",
  "card",
  "cards",
  "cot",
  "cots",
  "try",
  "tr",
  "tri",
  "trie",
  "tried",
  "tween"
];

/**
root = {
  "c": {
    "ca": {
      "car": {
        "card": {
          "cardi": {
            "cardin": {
              ...
            }
          }
        }
      },
      "cat": {
        ...
      }
    }
  },
  "t": {
    "tr": {
      "try": {
        ...
      }
    }
  }
}
**/

class Node {
  constructor(val = null, children = {}) {
    this.val = val;
    this.children = children;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  add(word, node = this.root) {
    let charIdx = 1
    let currentChar = word.slice(0, charIdx);

    //search for leaf node to insert characters
    while (node.children[currentChar] && charIdx <= word.length) {
      node = node.children[currentChar];
      currentChar = word.slice(0, charIdx += 1);
    }

    //add new node to current node's children with remaining characters
    //as key
    while (charIdx <= word.length) {
      node.children[currentChar] = new Node(currentChar);
      node = node.children[currentChar];
      currentChar = word.slice(0, charIdx += 1);
    }
  }

  search(word, node = this.root) {
    let charIdx = 1;
    let currentChar = word.slice(0, charIdx);
    while (node.children[currentChar] && charIdx <= word.length) {
      node = node.children[currentChar];
      currentChar = word.slice(0, charIdx += 1);
    }

    //returns null if word doesn't exist
    //returns node, if val === word
    if (node.val === word) {
      return node;
    } else {
      return null;
    }
  }

  //returns an array of a children nodes' values
  getChildrenOf(prefix, node = this.root) {
    //get to the prefix node
    let prefixNode = this.search(prefix, node);
    if (prefixNode === null) return [];

    //get all children for every node starting from prefix node
    let childValues = [];
    let queue = [prefixNode];
    while (queue.length !== 0) {
      let childkeys = Object.keys(queue[0].children);
      childkeys.forEach((key) => {
        childValues.push(queue[0].children[key].val);
        queue.push(queue[0].children[key]);
      });
      queue.shift();
    }
    return childValues;
  }
}
