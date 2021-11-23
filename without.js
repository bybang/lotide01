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

const without = (sourceArr, itemsToRemove) => {
  let emptyArr = [];
  for (let nb in sourceArr) {
    if (!itemsToRemove.includes(sourceArr[nb])) {
      emptyArr.push(sourceArr[nb]);
    }
  }
  return emptyArr;
};

//TEST CODE
let t1 = without([1, 2, 3], [1]); // => [2, 3]
let t2 = without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
let t3 = without([1, 2, 3], [1, 2, 3]);
console.log(t1);
console.log(t2);
console.log(t3);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);