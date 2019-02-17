let arr = [5, 7, 4, 3, 1, 8, 6, 2];

const mergeSort = (arr, p, r) => {
	if (p < r) {
		let q = Math.floor((p + r) / 2);
		mergeSort(arr, p, q);
		mergeSort(arr, q + 1, r);
		merge(arr, p, q, r)
	}
}

const merge = (arr, p, q, r) => {
	let n1 = q - p + 1;
	let n2 = r - q;
	const L = [];
	const R = [];
	for (let i = 0; i < n1; i++) {
		L[i] = arr[p + i];
	}
	for (let j = 0; j < n2; j++) {
		R[j] = arr[q + 1 + j];
	}
	L[n1] = Infinity;
	R[n2] = Infinity;
	let i = 0;
	let j = 0;
	for (let k = p; k <= r; k++) {
		if (L[i] <= R[j]) {
			arr[k] = L[i];
			i = i + 1;
		} else {
			arr[k] = R[j];
			j = j + 1;
		}
	}
}

mergeSort(arr, 0, arr.length - 1);

console.log(arr);

