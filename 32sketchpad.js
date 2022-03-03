function solution(roman) {
	// complete the solution by transforming the
	// string roman numeral into an integer

	let dec = 0;

	const values = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let converted = roman.split('');
	converted.map((val) => {
		console.log(values.val);
	});

	return dec;
}

solution('XXI'); // should return 21
