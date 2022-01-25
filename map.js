// FUNCTION IMPLEMENTATION
const eqArrays = (fristArray, secondArray) => {
  if (fristArray.length !== secondArray.length) {
    return false;
  }
  for (let i = 0; i < fristArray.length; i++) {
    if (fristArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Map function
const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// // Test Code
// const results1 = map(words, (word) => word[0]);
// const results2 = map(words, (word) => word.length > 4);

assertArraysEqual(words, ["ground", "control", "to", "major", "tom"]);
assertArraysEqual(words, ["This", "is", "Array"]);
assertArraysEqual(
  map(words, (word) => word[0]),
  ["g", "c", "t", "m", "t"]
);
