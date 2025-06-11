const { average, standardDeviation } = require('./statistical');
const { generateGraph } = require('./graphs');

const data = [10, 20, 30, 40, 50];

console.log('Average:', average(data));
console.log('Standard deviation:', standardDeviation(data));

generateGraph('graph.png', ['A', 'B', 'C', 'D', 'E'], data).then(() => {
  console.log('Generated graph.');
});