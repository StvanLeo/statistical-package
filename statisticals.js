function average(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function standardDeviation(arr) {
  const media = average(arr);
  const sumSquares = arr.reduce((acc, val) => acc + (val - media) ** 2, 0);
  return Math.sqrt(sumSquares / arr.length);
}

module.exports = { average, standardDeviation };