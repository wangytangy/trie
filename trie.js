//Trie Data Structure

// stores a dictionary of strings


// INSERTION

const dict = {
  "car",
  "card",
  "cards",
  "cot",
  "cots",
  "try",
  "tr",
  "tri",
  "trie",
  "tried"
}

class Node {
  constructor(children = {}, isComplete = false) {
    this.children = children;
    this.isComplete = isComplete;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word, node = this.root) {
    // iterate through string
    for (let i = 0; i < word.length; i++) {
      // if root is empty, store letter in root's children

    }

  }


}
