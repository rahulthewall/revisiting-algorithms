function HashTable() {
  this.list = [];
}

const HASH_TABLE_SIZE = 157;

function hash(key) {
  return key % HASH_TABLE_SIZE;
}

HashTable.prototype.set = function(key, value) {
  const index = hash(key);

  if (!this.list[index]) {
    this.list[index] = [];
  }

  this.list[index].push([key, value]);
};

HashTable.prototype.get = function(key) {
  const index = hash(key);
  const foundPair = this.list[index].find(pair => pair[0] === key);
  return foundPair ? foundPair[1] : false;
};
