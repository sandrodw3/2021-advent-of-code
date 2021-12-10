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

function getGammaRate(binaries) {
	const length = binaries[0].length;
	const gammaRate = [];

	for (let i = 0; i < length; i++) {
		gammaRate.push(getMostCommonBit(binaries, i));
	}

	return gammaRate.join('');
}

function getEpsilonRate(gammaRate) {
	return [...gammaRate].map((bit) => (bit === '1' ? '0' : '1')).join('');
}

const data = fs
	.readFileSync(path.resolve(__dirname, './puzzle-3-input.txt'), {
		encoding: 'utf8',
		flag: 'r',
	})
	.split('\n');

const gammaRate = getGammaRate(data);
const epsilonRate = getEpsilonRate(gammaRate);

console.log(
	'The power consumption of the submarine is: ',
	parseInt(gammaRate, 2) * parseInt(epsilonRate, 2)
);
