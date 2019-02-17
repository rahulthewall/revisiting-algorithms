const array = [
  13,
  -3,
  -25,
  20,
  -3,
  -16,
  -23,
  18,
  20,
  -7,
  12,
  -5,
  -22,
  15,
  -4,
  7,
];

function findMaxCrossingSubArray(arr, low, mid, high) {
  let leftSum = -Infinity;
  let sum = 0;
  let maxLeft;
  for (let i = mid; i >= low; i--) {
    sum = sum + arr[i];
    if (sum > leftSum) {
      leftSum = sum;
      maxLeft = i;
    }
  }
  rightSum = -Infinity;
  sum = 0;
  let maxRight;
  for (let j = mid + 1; j <= high; j++) {
    sum = sum + arr[j];
    if (sum > rightSum) {
      rightSum = sum;
      maxRight = j;
    }
  }
  return { low: maxLeft, high: maxRight, sum: leftSum + rightSum };
}

function findMaxSubArray(arr, low, high) {
  if (high === low) {
    return { low, high, sum: arr[low] };
  } else {
    const mid = Math.floor((low + high) / 2);
    const resultLeft = findMaxSubArray(arr, low, mid);
    const resultRight = findMaxSubArray(arr, mid + 1, high);
    const resultCrossing = findMaxCrossingSubArray(arr, low, mid, high);
    if (resultLeft.sum >= resultRight.sum && resultLeft.sum >= resultCrossing.sum) {
      return resultLeft;
    } else if (resultRight.sum >= resultLeft.sum && resultRight.sum >= resultCrossing.sum) {
      return resultRight;
    } else {
      return resultCrossing;
    }
  }
}

console.log(findMaxSubArray(array, 0, array.length - 1));
