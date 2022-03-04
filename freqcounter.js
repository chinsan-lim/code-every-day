function validAnagram(str, anastr) {
	if (str.length !== anastr.length) {
		return false;
	}

	for (let char in str) {
		let idx = anastr.indexOf(char);
		if (idx === -1) {
			return false;
		}
		console.log(anastr);
		anastr.splice(idx, 1);
	}
	return true;
}
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
