// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// countLetters Function
const countLetters = (sentence) => {
  let result = {};
  let noSpace = sentence.replace(/\s/g, '');
  for (const letter of noSpace) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

// Test Case
console.log(countLetters("LHL"));
console.log(countLetters("lighthouse in the house"));