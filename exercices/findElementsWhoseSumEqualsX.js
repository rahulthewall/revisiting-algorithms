// We will use binary search so array needs to be sorted
// If array is not sorted, use Merge Sort
// Since Merge Sort is O(n lg(n)) and binary search is O(lg(n))
// The resulting solution would be O(n lg(n))

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = 6;

function findBinary(arr, findNum) {
  const middleIndex = Math.floor(arr.length / 2);
  if (findNum === arr[middleIndex]) {
    return 1;
  } else if (findNum < arr[middleIndex]) {
    return findBinary(arr.slice(0, middleIndex), findNum);
  } else if (findNum > arr[middleIndex]) {
    return findBinary(arr.slice(middleIndex + 1, arr.length), findNum);
	}
	return 0;
}

for (i = 0; i < array.length; i++) {
  const el = array[i];
	const findNum = sum - el;
	const arr = array.filter((el, idx) => idx !== i);
  const foundNum = findBinary(arr, findNum);
  console.log({ el, findNum, foundNum });
}
