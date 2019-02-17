const array = [ 6, 5, 4, 2, 1, 3, 8, 7];

for (let i = 1; i < array.length; i++) {
	let keyIndex = i - 1;
	let key = array[keyIndex];
	for (let j = i; j < array.length; j++) {
		if (array[j] < array[keyIndex]) {
			keyIndex = j;
		}
	}
	array[i - 1] = array[keyIndex];
	array[keyIndex] = key;
}
console.log(array);
