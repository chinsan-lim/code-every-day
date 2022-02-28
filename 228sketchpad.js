function duplicateCount(text) {
	if (text === '') return 0;
	let str = text.toLowerCase();

	let totalRepeat = 0;
	let repeatStr = {};

	for (let i = 0; i < str.length; i++) {
		if (!repeatStr[str[i]]) {
			repeatStr[[str[i]]] = 1;
		} else if (repeatStr[str[i]]) {
			repeatStr[[str[i]]] += 1;
		}
	}

	for (const x in repeatStr) {
		if (repeatStr[x] > 1) {
			totalRepeat++;
		}
	}

	return totalRepeat;
}

console.log(duplicateCount('aabBcde'));
