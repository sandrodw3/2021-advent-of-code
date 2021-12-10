const fs = require('fs');
const path = require('path');

function getMostCommonBit(binaries, position) {
	let zeros = 0;
	let ones = 0;

	binaries.forEach((binary) => {
		if (binary[position] === '0') {
			zeros++;
		} else {
			ones++;
		}
	});

	return zeros > ones ? '0' : '1';
}

function getLeastCommonBit(binaries, position) {
	let zeros = 0;
	let ones = 0;

	binaries.forEach((binary) => {
		if (binary[position] === '0') {
			zeros++;
		} else {
			ones++;
		}
	});

	return ones < zeros ? '1' : '0';
}

function getOxygenGeneratorRating(binaries, position) {
	const filteredBinaries = binaries.filter(
		(binary) => binary[position] === getMostCommonBit(binaries, position)
	);

	if (filteredBinaries.length === 1) {
		return filteredBinaries.pop();
	}

	return getOxygenGeneratorRating(filteredBinaries, position + 1);
}

function getCO2ScrubberRating(binaries, position) {
	const filteredBinaries = binaries.filter(
		(binary) => binary[position] === getLeastCommonBit(binaries, position)
	);

	if (filteredBinaries.length === 1) {
		return filteredBinaries.pop();
	}

	return getCO2ScrubberRating(filteredBinaries, position + 1);
}

const data = fs
	.readFileSync(path.resolve(__dirname, './puzzle-3-input.txt'), {
		encoding: 'utf8',
		flag: 'r',
	})
	.split('\n');

const oxygenGeneratorRating = getOxygenGeneratorRating(data, 0);
const CO2ScrubberRating = getCO2ScrubberRating(data, 0);

console.log(
	'The life support rating of the submarine is: ',
	parseInt(oxygenGeneratorRating, 2) * parseInt(CO2ScrubberRating, 2)
);
