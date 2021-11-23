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

const flatten = (nestedArr) => {
  let emptyArr = [];
  for (const item of nestedArr) {
    if (Array.isArray(item)) {
      for (const nb of item) {
        emptyArr.push(nb);
      }
    } else {
      emptyArr.push(item);
    }
  }
  return emptyArr;
};

// TEST CODE
let t1 = flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
// console.log(t1);

assertArraysEqual(t1, [1, 2, 3, 4, 5, 6]);
assertArraysEqual(t1, [1, 2, "3", 4]);

// console.log(Array.isArray(1))
// console.log(Array.isArray([]))
// console.log(Array.isArray([1, 2, 3]))