// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = (someArray) => {
  return (someArray.slice(1));
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
// console.log(tail(words));
// Test cases
// const empty = [];
// const oneElem = ["Lighthouse"];
// console.log(tail(empty));
// console.log(tail(oneElem));
assertEqual(words.length, 3); // original array should still have 3 elements!