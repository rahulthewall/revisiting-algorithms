function SinglyLinkedList() {
  this.head = null;
}

function SingleNode(value) {
  this.value = value;
  this.next = null;
}

SinglyLinkedList.prototype.search = function (value) {
  let el = this.head;
  while (el.next !== null) {
    if (el.value === value) {
      return el;
    }
    el = el.next;
  }
  return el.value === value ? el : null;
}

SinglyLinkedList.prototype.insert = function (value) {
  const node = new SingleNode(value);
  const head = this.head;
  this.head = node;
  this.head.next = head;
}

SinglyLinkedList.prototype.delete = function (value) {
  const elToDelete = this.search(value);
  if (elToDelete === this.head) {
    this.head = this.head.next;
    return true;
  }
  if (elToDelete) {
    const prevOfDelete = this.head;
    while (prevOfDelete.next !== elToDelete) {
      prevOfDelete = prevOfDelete.next;
    }
    prevOfDelete.next = elToDelete.next;
    return true;
  }
  return false;
}

SinglyLinkedList.prototype.reverse = function() {
  let nextNode = this.head.next;

  // Let's make the head of the list, the tail
  this.head.next = null;

  while (nextNode) {
    const curNode = nextNode;
    nextNode = nextNode.next;
    curNode.next = this.head;
    this.head = curNode;
  }
}