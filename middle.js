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

// ACTUAL FUNCTION
// const middle = (array) => {
//   let result = [];
//   let midIndex = Math.floor(array.length / 2);
//   switch (result) {
//       case (array.length / 2) <= 2:
//         break;
//       case (array.length / 2) > 3 && (array.length / 2) % 2 !== 0:
//         result.push(array[midIndex]);
//         break;
//       case (array.length / 2) > 3 && (array.length / 2) % 2 === 0:
//         result.push(array[midIndex]);
//         result.push(array[midIndex - 1]);
//         break;
//       default:
//         return result;
//   }
// };

const middle = function(array) {
  let result = [];
  let midIndex = Math.floor(array.length / 2)
  if (array.length % 2 !== 0 && array.length > 2) {
    result.push(array[midIndex]);
  } else if (array.length % 2 === 0 && array.length > 2) {
    result.push(array[midIndex - 1]);
    result.push(array[midIndex]);
  }
  return result;
};

// TEST CODE
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2]),[]);
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);