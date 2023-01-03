export default function getFibonacciNumberFromPosition(position) {
  return getFibonacciPair(position)[0];
}

const getFibonacciPair = (position) => {
  if (position <= 0) return [0, 1];
  const previousPair = getFibonacciPair(position - 1);
  return [previousPair[1], previousPair[0] + previousPair[1]];
};
