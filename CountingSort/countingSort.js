// Initial array
const A = [2, 5, 3, 0, 2, 3, 0, 3];
const B = []; // This will store the final sorted array
const C = []; // Counting Array

const largestValue = Math.max(...A);

// initialise the counting array with 0s
for (let i = 0; i <= largestValue; i++) {
  C.push(0);
}

// Count each element
for (let j = 0; j < A.length; j++) {
  C[A[j]] = C[A[j]] + 1;
}
// C[j] now contains elements equal to j

// Maintain a running sum
for (let i = 1; i <= largestValue; i++) {
  C[i] = C[i] + C[i - 1];
}
// C[i] now contains number of elements equal to or less than i

for (let j = A.length - 1; j >= 0; j--) {
  B[C[A[j]] - 1] = A[j];
  C[A[j]] = C[A[j]] - 1;
}

console.log(B);
