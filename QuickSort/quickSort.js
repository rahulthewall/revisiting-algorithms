/*
We partition the arrays around the pivot r, such that every element in the left array is less than the pivot r
and every element in the right array is greater than the pivot r. 
*/

const array = [2, 8, 7, 1, 3, 5, 6, 4];

function partition(p, r) {
  const x = array[r];
  let i = p - 1;
  for (let j = p; j < r; j++) {
    if (array[j] <= x) {
      i = i + 1;
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  const temp = array[i + 1];
  array[i + 1] = array[r];
  array[r] = temp;
  return i + 1;
}

function quickSort(p, r) {
  if (p < r) {
    q = partition(p, r);
    quickSort(p, q - 1);
    quickSort(q + 1, r);
  }
}

quickSort(0, array.length - 1);

console.log(array);
