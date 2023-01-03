import getFibonacciNumberFromPosition from "./index";

test.each`
  number | result
  ${0}   | ${0}
  ${1}   | ${1}
  ${2}   | ${1}
  ${3}   | ${2}
  ${4}   | ${3}
  ${10}  | ${55}
  ${15}  | ${610}
  ${20}  | ${6765}
  ${25}  | ${75025}
  ${40}  | ${102334155}
`("Returns the correct value for $number", ({ number, result }) => {
  expect(getFibonacciNumberFromPosition(number)).toBe(result);
});
