// const array = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];

const array = [4, 1, 3, 2, 16, 9, 10, 14];

/*
For the Max Heapify procedure, the idea is simple. 
We compare the parent with left child and right child, and if either is bigger, we swap it with the parent.
If we've swapped, we now call the max-heapify procedure again on the largest node to ensure that it satisifies the property
*/

function maxHeapify(idx, hSize) {
  let largest;
  const left = (2 * idx) + 1;
  const right = (2 * idx) + 2;
  if (left < hSize && array[left] > array[idx]) {
    largest = left;
  } else {
    largest = idx;
  }
  if (right < hSize && array[right] > array[largest]) {
    largest = right;
  }
  if (largest !== idx) {
    const temp = array[idx];
    array[idx] = array[largest];
    array[largest] = temp;
    maxHeapify(largest, hSize);
  }
}

/*
In an Array of size N, the elements starting from index Math.floor(n/2) will be leaves
Hence we start building the max-heap from Math.floor(n/2) - 1 index (which is a non-leaf node)
*/

function buildMaxHeap() {
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    maxHeapify(i, array.length);
  }
}

/*
For the heap sort procedure, we first build a max heap
The idea then is to move the maximum element to the end of the array. 
The root of the heap will have the largest value - we exchange it with the last element. 
We then call max-heapify again on the remaining heap (we excluse the last element from the heap since we already have it at the desired position)
We then repeat this process till the 2nd element in the array (or the first child of the root heap node)
*/

buildMaxHeap(); // The const array now stores a max heap.

let heapSize = array.length;
for (let i = array.length - 1; i >= 1; i--) {
  // Swap the root node with the last node in the heap
  const root = array[0];
  array[0] = array[i];
  array[i] = root;
  heapSize = heapSize - 1;
  maxHeapify(0, heapSize); // build max heap again with the new element at root
}

console.log(array);