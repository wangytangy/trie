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
  constructor(key, value, children) {
    this.key = key;
    this.value = undefined;
    this.children = [];
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  add(word) {

  }


}
