// FUNCTION IMPLEMENTATION
const letterPositions = function(sentence) {
  const results = {};
  let noSpace = sentence.replace(/\s/g, '');
  for (let i = 0; i < noSpace.length; i++) {
    let letter = noSpace[i];
    if (results[letter]) {
      // if the key exsist(eg) "l", then push index in to that key l: [2, 3]
      results[letter].push(i);
    } else {
      // else if the key doesn't exisit, I have to make the key value pair which should be result[letter] : index(result[letter])
      results[letter] = [i];
    }
  }
  return results;
};

// Checker FUNCTION
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

// Test Code
// console.log(letterPositions("hello"));
// console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 13, 15]);