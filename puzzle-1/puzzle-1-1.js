const fs = require('fs');
const path = require('path');

function getIncreasingMeasurements(measurements) {
	return measurements.filter(
		(measurement, index) =>
			parseInt(measurement) > parseInt(measurements[index - 1])
	).length;
}

const data = fs
	.readFileSync(path.resolve(__dirname, './puzzle-1-input.txt'), {
		encoding: 'utf8',
		flag: 'r',
	})
	.split('\n');

console.log(
	'Number of increasing measurements: ',
	getIncreasingMeasurements(data)
);
