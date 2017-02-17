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

  add(word) {

  }


}
