const fs = require('fs');

const data = fs
  .readFileSync('./puzzle-2-input.txt', {
    encoding: 'utf8',
    flag: 'r',
  })
  .split('\n');

console.log(
  'Result of multiplying horizontal position by final depth: ',
  getFinalPosition(data)
);

function getFinalPosition(movements) {
  let horizontal = 0;
  let depth = 0;

  movements.forEach((movement) => {
    const [, displacement] = movement.split(' ');

    if (movement.includes('up')) {
      depth -= parseInt(displacement);
    } else if (movement.includes('down')) {
      depth += parseInt(displacement);
    } else if (movement.includes('forward')) {
      horizontal += parseInt(displacement);
    }
  });

  return horizontal * depth;
}
