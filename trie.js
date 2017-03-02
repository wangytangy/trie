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

  getChildren(prefix, node = this.root) {
    //returns an array of a children nodes' values
    let charIdx = 1;
    let currentChar = prefix.slice(0, charIdx);
  }

}

let trie = new Trie();

dict.forEach((word) => {
  trie.add(word);
});
trie.add("cardinal");

// console.log(JSON.stringify(trie, null, 4));
console.log(trie.search("cardin"));
