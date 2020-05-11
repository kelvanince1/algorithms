// Given a number s in their binary representation. Return the number of steps to reduce it to 1 under the following rules:

// If the current number is even, you have to divide it by 2.

// If the current number is odd, you have to add 1 to it.

// It's guaranteed that you can always reach to one for all testcases.


function steps(s) {
	let value = 0;
	let counter = 0;
	let multiplier = 1;

	let binary = s.toString()
    binary = binary.split('');

	for (let i = 0; i < binary.length; i++) {
		if (binary[i] == 1) {
            console.log('VALUE BF', value);
			value += multiplier;
            console.log('VALUE AF', value);
		}

		multiplier *= 2;
	}

    console.log('VALUE', value);

	while (value > 1) {
		if (value % 2 === 0) {
			value = value / 2;
		} else {
			value += 1;
		}
		
		counter++;
	}

	return counter;
}