const array = [ 6, 8, 7, 4, 3];

for (let i = 1; i < array.length; i++) {
	key = array[i];
	let j = i - 1;
	while (j >= 0 && array[j] > key) {
		array[j + 1] = array[j];
		j = j - 1;
	}
	array[j + 1] = key;
}

console.log(array);
