//Trie Data Structure

// stores a dictionary of strings


// INSERTION

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

this.root = {
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
    // console.log(currentNode);

    //search for leaf node to insert characters
    while (node.val === currentChar && charIdx <= word.length) {
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
}

let trie = new Trie();

trie.add("car");
// console.log(JSON.stringify(trie, null, 4));
trie.add("cat");
console.log(JSON.stringify(trie, null, 4));
